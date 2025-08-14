import React from 'react';
import '../css/components/snippet-form.css';

const SnippetForm = ({ fields, form, onFieldChange }) => {
	if ( fields.length === 0 ) {
		return null;
	}

	return (
		<div className="snippet-form">
			{ fields.map( ( field ) => (
				<div key={ field.name } className="snippet-field">
					<label
						htmlFor={ `snippet-field-${ field.name }` }
						className="snippet-label"
					>
						{ field.label || field.name }
					</label>
					<input
						id={ `snippet-field-${ field.name }` }
						type="text"
						value={ form[ field.name ] || '' }
						onChange={ ( e ) => onFieldChange( field.name, e.target.value ) }
						className="snippet-input regular-text"
						placeholder={ field.placeholder || `Enter ${ field.label || field.name }` }
					/>
				</div>
			) ) }
		</div>
	);
};

export default SnippetForm;
