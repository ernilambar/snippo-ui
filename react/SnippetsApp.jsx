import React, { useState, useEffect } from 'react';
import './SnippetsApp.css';

const SnippetsApp = ( { api } ) => {
	const [ snippets, setSnippets ] = useState( {} );
	const [ selected, setSelected ] = useState( '' );
	const [ fields, setFields ] = useState( [] );
	const [ form, setForm ] = useState( {} );
	const [ output, setOutput ] = useState( '' );
	const [ error, setError ] = useState( '' );
	const [ copied, setCopied ] = useState( false );

	useEffect( () => {
		api.getSnippets()
			.then( setSnippets )
			.catch( ( err ) => setError( err.message || 'Error fetching snippets' ) );
	}, [ api ] );

	useEffect( () => {
		if ( selected && snippets[ selected ] ) {
			setFields( snippets[ selected ].fields || [] );
			setForm( {} );
			setOutput( '' );
			setError( '' );
			setCopied( false );
			if ( ! snippets[ selected ].fields || snippets[ selected ].fields.length === 0 ) {
				api.renderSnippet( selected, {} )
					.then( ( res ) => setOutput( res.output ) )
					.catch( ( err ) => setError( err.message || 'Error rendering snippet' ) );
			}
		}
	}, [ selected, snippets, api ] );

	const handleChange = ( field, value ) => {
		setForm( { ...form, [ field ]: value } );
	};

	const handleSubmit = ( e ) => {
		e.preventDefault();
		setError( '' );
		setOutput( '' );
		setCopied( false );
		api.renderSnippet( selected, form )
			.then( ( res ) => setOutput( res.output ) )
			.catch( ( err ) => setError( err.message || 'Error rendering snippet' ) );
	};

	const handleCopy = () => {
		if ( output ) {
			navigator.clipboard.writeText( output ).then( () => {
				setCopied( true );
				setTimeout( () => setCopied( false ), 1500 );
			} );
		}
	};

	const allRequiredFilled = fields.every(
		( field ) =>
			! field.required ||
			( form[ field.name ] && form[ field.name ].toString().trim() !== '' )
	);

	const snippetOptions = Object.keys( snippets ).map( ( key ) => ( {
		value: key,
		label:
			snippets[ key ].meta && snippets[ key ].meta.title ? snippets[ key ].meta.title : key,
	} ) );

	return (
		<div>
			<select
				value={ selected }
				onChange={ ( e ) => setSelected( e.target.value ) }
				style={ { maxWidth: 400 } }
			>
				<option value="">Select a snippet</option>
				{ snippetOptions.map( ( option ) => (
					<option key={ option.value } value={ option.value }>
						{ option.label }
					</option>
				) ) }
			</select>
			{ fields.length > 0 && (
				<form onSubmit={ handleSubmit } className="snippetsapp-form">
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
								required={ field.required }
								className="snippetsapp-input regular-text"
							/>
						</div>
					) ) }
					<div className="snippetsapp-form-buttons">
						<button
							type="submit"
							className="button button-primary snippetsapp-submit-button"
							disabled={ ! allRequiredFilled }
						>
							Generate
						</button>
					</div>
				</form>
			) }
			{ output && (
				<div className="snippetsapp-output-container">
					<div className="snippetsapp-output-content">
						<div
							className="snippetsapp-output-text"
							dangerouslySetInnerHTML={ { __html: output } }
						/>
						<button
							type="button"
							onClick={ handleCopy }
							className="snippetsapp-copy-button"
						>
							{ copied ? 'Copied!' : 'Copy' }
						</button>
					</div>
				</div>
			) }
			{ error && <div className="snippetsapp-error-message">{ error }</div> }
		</div>
	);
};

export default SnippetsApp;
