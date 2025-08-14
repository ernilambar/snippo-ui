import React from 'react';
import '../css/components/snippet-select-option.css';

const SnippetSelectOption = ( { data, isSelected, isFocused, innerProps } ) => {
	const optionClasses = [
		'snippet-select-option',
		isSelected ? 'snippet-select-option--selected' : '',
		isFocused ? 'snippet-select-option--focused' : ''
	].filter(Boolean).join(' ');

	return (
		<div { ...innerProps } className={ optionClasses }>
			<div className="snippet-select-option-title">{ data.label }</div>
			{ data.categories && data.categories.length > 0 && (
				<div className="snippet-select-option-categories">
					{ data.categories.map( ( category, index ) => (
						<span
							key={ index }
							className="snippet-select-option-category"
							style={ {
								backgroundColor: category.color || undefined
							} }
						>
							{ category.title }
						</span>
					) ) }
				</div>
			) }
		</div>
	);
};

export default SnippetSelectOption;
