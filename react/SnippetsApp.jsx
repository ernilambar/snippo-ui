import { useState, useEffect, useCallback, useRef } from 'react';
import Select from 'react-select';
import SnippetSelectOption from './SnippetSelectOption';
import './SnippetsApp.css';

const SnippetsApp = ( { api, options = {} } ) => {
	const { autoCopy = false, autoCopyDebounceDelay = 500 } = options;

	const [ snippets, setSnippets ] = useState( {} );
	const [ selected, setSelected ] = useState( '' );
	const [ fields, setFields ] = useState( [] );
	const [ form, setForm ] = useState( {} );
	const [ rawOutput, setRawOutput ] = useState( '' );
	const [ processedOutput, setProcessedOutput ] = useState( '' );
	const [ error, setError ] = useState( '' );
	const [ copied, setCopied ] = useState( false );
	const [ isRendering, setIsRendering ] = useState( false );
	const copyTimeoutRef = useRef( null );

	// Debounced copy function.
	const debouncedCopy = useCallback( ( text ) => {
		if ( copyTimeoutRef.current ) {
			clearTimeout( copyTimeoutRef.current );
		}

		copyTimeoutRef.current = setTimeout( () => {
			if ( text && autoCopy ) {
				navigator.clipboard.writeText( text ).then( () => {
					setCopied( true );
					setTimeout( () => setCopied( false ), 1500 );
				} );
			}
		}, autoCopyDebounceDelay ); // Configurable debounce delay for auto-copy.
	}, [ autoCopy, autoCopyDebounceDelay ] );

	// Cleanup timeout on unmount.
	useEffect( () => {
		return () => {
			if ( copyTimeoutRef.current ) {
				clearTimeout( copyTimeoutRef.current );
			}
		};
	}, [] );

	useEffect( () => {
		api.getSnippets()
			.then( setSnippets )
			.catch( ( err ) => setError( err.message || 'Error fetching snippets' ) );
	}, [ api ] );

	// Function to replace placeholders in the output.
	const replacePlaceholders = useCallback( ( template, formData ) => {
		let result = template;

		// Replace each field placeholder with its value.
		Object.keys( formData ).forEach( ( fieldName ) => {
			const value = formData[ fieldName ] || '';
			// Replace only {{fieldName}} pattern.
			const pattern = `{{${ fieldName }}}`;
			result = result.replace( new RegExp( pattern.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' ), 'g' ), value );
		} );

		return result;
	}, [] );

	// Process output when raw output or form data changes.
	useEffect( () => {
		if ( rawOutput ) {
			const processed = replacePlaceholders( rawOutput, form );
			setProcessedOutput( processed );

			// Auto-copy when enabled and we have processed output.
			if ( autoCopy && processed ) {
				debouncedCopy( processed );
			}
		}
	}, [ rawOutput, form, replacePlaceholders, autoCopy, debouncedCopy ] );

	useEffect( () => {
		if ( selected && snippets[ selected ] ) {
			setFields( snippets[ selected ].fields || [] );
			setForm( {} );
			setRawOutput( '' );
			setProcessedOutput( '' );
			setError( '' );
			setCopied( false );
			setIsRendering( false );

			// Only call API once to get the template.
			if ( ! snippets[ selected ].fields || snippets[ selected ].fields.length === 0 ) {
				setIsRendering( true );
				api.renderSnippet( selected, {} )
					.then( ( res ) => {
						setRawOutput( res.output );
						setIsRendering( false );
					} )
					.catch( ( err ) => {
						setError( err.message || 'Error rendering snippet' );
						setIsRendering( false );
					} );
			} else {
				// For snippets with fields, render once with empty data to get template.
				setIsRendering( true );
				api.renderSnippet( selected, {} )
					.then( ( res ) => {
						setRawOutput( res.output );
						setIsRendering( false );
					} )
					.catch( ( err ) => {
						setError( err.message || 'Error rendering snippet' );
						setIsRendering( false );
					} );
			}
		}
	}, [ selected, snippets, api ] );

	const handleChange = ( field, value ) => {
		setForm( { ...form, [ field ]: value } );
	};

	const handleSelectChange = ( selectedOption ) => {
		setSelected( selectedOption ? selectedOption.value : '' );
	};

	const handleCopy = () => {
		if ( processedOutput ) {
			navigator.clipboard.writeText( processedOutput ).then( () => {
				setCopied( true );
				setTimeout( () => setCopied( false ), 1500 );
			} );
		}
	};

	const snippetOptions = Object.keys( snippets ).map( ( key ) => {
		const snippet = snippets[ key ];
		const title = snippet.meta && snippet.meta.title ? snippet.meta.title : key;
		const categories = snippet.categories && Array.isArray( snippet.categories ) ? snippet.categories : [];

		return {
			value: key,
			label: title,
			categories: categories,
		};
	} );



	// React Select custom styles to match existing design.
	const selectStyles = {
		control: ( provided, state ) => ( {
			...provided,
			maxWidth: 400,
			border: '1px solid #ccc',
			borderRadius: '4px',
			boxShadow: state.isFocused ? '0 0 0 1px #007cba' : 'none',
			'&:hover': {
				borderColor: '#007cba',
			},
		} ),
		option: ( provided, state ) => ( {
			...provided,
			backgroundColor: state.isSelected ? '#007cba' : state.isFocused ? '#f0f0f0' : 'white',
			color: state.isSelected ? 'white' : 'black',
			'&:hover': {
				backgroundColor: state.isSelected ? '#007cba' : '#f0f0f0',
			},
		} ),
		menu: ( provided ) => ( {
			...provided,
			zIndex: 9999,
		} ),
		placeholder: ( provided ) => ( {
			...provided,
			color: '#666',
		} ),
	};

	return (
		<div>
			<Select
				value={ snippetOptions.find( option => option.value === selected ) || null }
				onChange={ handleSelectChange }
				options={ snippetOptions }
				placeholder="Select a snippet"
				styles={ selectStyles }
				className="snippo-select"
				isClearable={ false }
				isSearchable={ true }
				components={ { Option: SnippetSelectOption } }
			/>

			{ fields.length > 0 && (
				<div className="snippetsapp-form">
					{ fields.map( ( field ) => (
						<div key={ field.name } className="snippetsapp-field">
							<label
								htmlFor={ `snippetsapp-field-${ field.name }` }
								className="snippetsapp-label"
							>
								{ field.label || field.name }
							</label>
							<input
								id={ `snippetsapp-field-${ field.name }` }
								type="text"
								value={ form[ field.name ] || '' }
								onChange={ ( e ) => handleChange( field.name, e.target.value ) }
								className="snippetsapp-input regular-text"
								placeholder={ field.placeholder || `Enter ${ field.label || field.name }` }
							/>
						</div>
					) ) }
				</div>
			) }
			{ ( processedOutput || isRendering ) && (
				<div className="snippetsapp-output-container">
					<div className="snippetsapp-output-content">
						{ isRendering && ! processedOutput && (
							<div className="snippetsapp-loading">Generating snippet...</div>
						) }
						{ processedOutput && (
							<>
								<div
									className="snippetsapp-output-text"
									dangerouslySetInnerHTML={ { __html: processedOutput } }
								/>
								<button
									type="button"
									onClick={ handleCopy }
									className="snippetsapp-copy-button"
									disabled={ isRendering }
								>
									{ copied ? 'Copied!' : 'Copy' }
								</button>
							</>
						) }
					</div>
				</div>
			) }
			{ error && <div className="snippetsapp-error-message">{ error }</div> }
		</div>
	);
};

export default SnippetsApp;
