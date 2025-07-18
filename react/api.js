import apiFetch from '@wordpress/api-fetch';

export const createWordpressApi = ( restUrl, nonce ) => {
	// Derive render URL by appending '/render' to restUrl
	const restUrlRender = restUrl.endsWith( '/' ) ? `${ restUrl }render` : `${ restUrl }/render`;

	return {
		getSnippets: () =>
			apiFetch( {
				path: restUrl,
				headers: { 'X-WP-Nonce': nonce },
			} ),
		renderSnippet: ( key, data ) =>
			apiFetch( {
				path: restUrlRender,
				method: 'POST',
				headers: { 'X-WP-Nonce': nonce },
				data: { key, data },
			} ),
	};
};

export const createChromeApi = ( baseUrl ) => ( {
	getSnippets: () => fetch( baseUrl ).then( ( res ) => res.json() ),
	renderSnippet: ( key, data ) =>
		fetch( baseUrl.endsWith( '/' ) ? `${ baseUrl }render` : `${ baseUrl }/render`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify( { key, data } ),
		} ).then( ( res ) => res.json() ),
} );
