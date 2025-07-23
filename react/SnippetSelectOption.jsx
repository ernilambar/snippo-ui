import React from 'react';

const SnippetSelectOption = ( { data, isSelected, isFocused, innerProps } ) => (
	<div
		{ ...innerProps }
		style={ {
			padding: '8px 12px',
			backgroundColor: isSelected ? '#007cba' : isFocused ? '#f0f0f0' : 'white',
			color: isSelected ? 'white' : 'black',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
		} }
	>
		<div style={ { fontWeight: '500' } }>{ data.label }</div>
		{ data.categories && data.categories.length > 0 && (
			<div style={ { display: 'flex', flexWrap: 'wrap', gap: '4px' } }>
				{ data.categories.map( ( category, index ) => (
					<span
						key={ index }
						style={ {
							backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.2)' : '#e0e0e0',
							color: isSelected ? 'white' : '#666',
							padding: '2px 6px',
							borderRadius: '12px',
							fontSize: '11px',
							fontWeight: '400',
						} }
					>
						{ category }
					</span>
				) ) }
			</div>
		) }
	</div>
);

export default SnippetSelectOption;
