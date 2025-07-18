import apiFetch from "@wordpress/api-fetch";

export const createWordpressApi = (restUrl, nonce) => {
  // Derive render URL by appending '/render' to restUrl
  const restUrlRender = restUrl.endsWith('/') ? `${restUrl}render` : `${restUrl}/render`;

  return {
    getSnippets: () =>
      apiFetch({
        path: restUrl,
        headers: { "X-WP-Nonce": nonce },
      }),
    renderSnippet: (key, data) =>
      apiFetch({
        path: restUrlRender,
        method: "POST",
        headers: { "X-WP-Nonce": nonce },
        data: { key, data },
      }),
  };
};
