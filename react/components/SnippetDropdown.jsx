import React from 'react';
import Select from 'react-select';
import SnippetSelectOption from './SnippetSelectOption';
import '../css/components/snippet-dropdown.css';

const SnippetDropdown = ({
	snippetOptions,
	selected,
	onSelectChange
}) => {
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
		<Select
			value={ snippetOptions.find( option => option.value === selected ) || null }
			onChange={ onSelectChange }
			options={ snippetOptions }
			placeholder="Select a snippet"
			styles={ selectStyles }
			className="snippet-dropdown"
			isClearable={ false }
			isSearchable={ true }
			components={ { Option: SnippetSelectOption } }
		/>
	);
};

export default SnippetDropdown;
