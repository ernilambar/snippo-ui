import React from 'react';
import '../css/components/snippet-sidebar.css';

const SnippetSidebar = ({
	snippetOptions,
	selected,
	onSelectChange
}) => {
	const handleSnippetClick = ( snippetKey ) => {
		onSelectChange( { value: snippetKey } );
	};

	return (
		<div className="snippet-sidebar">
			<div className="snippet-sidebar-header">
				<h3>Snippets</h3>
			</div>
			<div className="snippet-sidebar-list">
				{ snippetOptions.map( ( option ) => (
					<div
						key={ option.value }
						className={ `snippet-sidebar-item ${ selected === option.value ? 'active' : '' }` }
						onClick={ () => handleSnippetClick( option.value ) }
					>
						<div className="snippet-sidebar-title">
							{ option.label }
						</div>
						{ option.categories && option.categories.length > 0 && (
							<div className="snippet-sidebar-categories">
								{ option.categories.map( ( category, index ) => (
									<span key={ index } className="snippet-sidebar-category">
										{ category }
									</span>
								) ) }
							</div>
						) }
					</div>
				) ) }
			</div>
		</div>
	);
};

export default SnippetSidebar;
