import React from 'react';
import '../css/components/snippet-select-option.css';

const SnippetSelectOption = ( { data, innerProps } ) => {
	return (
		<div { ...innerProps } className="snippet-select-option">
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
							{ typeof category === 'string' ? category : category.title }
						</span>
					) ) }
				</div>
			) }
		</div>
	);
};

export default SnippetSelectOption;
