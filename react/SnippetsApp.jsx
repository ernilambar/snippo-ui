import { useState, useEffect, useCallback, useRef } from 'react';
import SnippetDropdown from './components/SnippetDropdown';
import SnippetSidebar from './components/SnippetSidebar';
import SnippetForm from './components/SnippetForm';
import SnippetOutput from './components/SnippetOutput';
import './css/snippets-app.css';

const SnippetsApp = ( { api, options = {} } ) => {
	const {
		autoCopy = false,
		autoCopyDebounceDelay = 500,
		layout = 'dropdown'
	} = options;

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
			.then( ( snippetsData ) => {
				setSnippets( snippetsData );

				// Auto-select first item in sidebar mode if no item is selected
				if ( layout === 'sidebar' && ! selected && Object.keys( snippetsData ).length > 0 ) {
					const firstSnippetKey = Object.keys( snippetsData )[ 0 ];
					setSelected( firstSnippetKey );
				}
			} )
			.catch( ( err ) => setError( err.message || 'Error fetching snippets' ) );
	}, [ api, layout, selected ] );

	// Function to replace placeholders in the output.
	const replacePlaceholders = useCallback( ( template, formData ) => {
		let result = template;

		// Replace each field placeholder with its value.
		Object.keys( formData ).forEach( ( fieldName ) => {
			const value = formData[ fieldName ] || '';
			// Escape special regex characters in fieldName, but keep curly braces as literals.
			const escapedFieldName = fieldName.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' );
			// Replace all instances of {{fieldName}} pattern.
			const pattern = new RegExp( `\\{\\{${ escapedFieldName }\\}\\}`, 'g' );
			result = result.replace( pattern, value );
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

	const handleFieldChange = ( field, value ) => {
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

	// Determine layout class
	const layoutClass = `snippets-app--${ layout }`;

	// Render content based on layout
	const renderContent = () => (
		<div className="snippets-app-content">
			<SnippetForm
				fields={ fields }
				form={ form }
				onFieldChange={ handleFieldChange }
			/>
			<SnippetOutput
				processedOutput={ processedOutput }
				isRendering={ isRendering }
				onCopy={ handleCopy }
				copied={ copied }
			/>
			{ error && <div className="snippet-error-message">{ error }</div> }
		</div>
	);

	return (
		<div className={ `snippets-app ${ layoutClass }` }>
			{ layout === 'sidebar' ? (
				<>
					<SnippetSidebar
						snippetOptions={ snippetOptions }
						selected={ selected }
						onSelectChange={ handleSelectChange }
					/>
					{ renderContent() }
				</>
			) : (
				<>
					<SnippetDropdown
						snippetOptions={ snippetOptions }
						selected={ selected }
						onSelectChange={ handleSelectChange }
					/>
					{ renderContent() }
				</>
			) }
		</div>
	);
};

export default SnippetsApp;
