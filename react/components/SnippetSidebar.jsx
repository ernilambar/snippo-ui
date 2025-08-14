import React, { useState, useMemo } from 'react';
import '../css/components/snippet-sidebar.css';

const SnippetSidebar = ({
	snippetOptions,
	selected,
	onSelectChange
}) => {
	const [ searchTerm, setSearchTerm ] = useState( '' );

	const handleSnippetClick = ( snippetKey ) => {
		onSelectChange( { value: snippetKey } );
	};

	// Filter snippets based on search term
	const filteredSnippets = useMemo( () => {
		if ( ! searchTerm.trim() ) {
			return snippetOptions;
		}

		const term = searchTerm.toLowerCase();
		return snippetOptions.filter( ( option ) => {
			// Search in title
			if ( option.label.toLowerCase().includes( term ) ) {
				return true;
			}
			// Search in categories
			if ( option.categories && option.categories.some( ( category ) => {
				const categoryText = typeof category === 'string' ? category : category.title;
				return categoryText.toLowerCase().includes( term );
			} ) ) {
				return true;
			}
			return false;
		} );
	}, [ snippetOptions, searchTerm ] );

	return (
		<div className="snippet-sidebar">
			<div className="snippet-sidebar-search">
				<input
					type="text"
					placeholder="Search snippets..."
					value={ searchTerm }
					onChange={ ( e ) => setSearchTerm( e.target.value ) }
					className="snippet-sidebar-search-input"
				/>
			</div>
			<div className="snippet-sidebar-list">
				{ filteredSnippets.length === 0 ? (
					<div className="snippet-sidebar-no-results">
						No snippets found for "{ searchTerm }"
					</div>
				) : (
					filteredSnippets.map( ( option ) => (
						<div
							key={ option.value }
							className={ `snippet-sidebar-item ${ selected === option.value ? 'active' : '' }` }
							onClick={ () => handleSnippetClick( option.value ) }
						>
							<div className="snippet-sidebar-content">
								<div className="snippet-sidebar-title">
									{ option.label }
								</div>
								{ option.categories && option.categories.length > 0 && (
									<div className="snippet-sidebar-categories">
										{ option.categories.map( ( category, index ) => (
											<span
												key={ index }
												className="snippet-sidebar-category"
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
						</div>
					) )
				) }
			</div>
		</div>
	);
};

export default SnippetSidebar;
