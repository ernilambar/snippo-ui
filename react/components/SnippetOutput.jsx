import React from 'react';
import '../css/components/snippet-output.css';

const SnippetOutput = ({
	processedOutput,
	isRendering,
	onCopy,
	copied
}) => {
	if ( ! processedOutput && ! isRendering ) {
		return null;
	}

	return (
		<div className="snippet-output-container">
			<div className="snippet-output-content">
				{ isRendering && ! processedOutput && (
					<div className="snippet-loading">Generating snippet...</div>
				) }
				{ processedOutput && (
					<>
						<div
							className="snippet-output-text"
							dangerouslySetInnerHTML={ { __html: processedOutput } }
						/>
						<button
							type="button"
							onClick={ onCopy }
							className="snippet-copy-button"
							disabled={ isRendering }
						>
							{ copied ? 'Copied!' : 'Copy' }
						</button>
					</>
				) }
			</div>
		</div>
	);
};

export default SnippetOutput;
