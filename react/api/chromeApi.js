export const createChromeApi = (baseUrl) => ({
  getSnippets: () =>
    fetch(baseUrl).then((res) => res.json()),
  renderSnippet: (key, data) =>
    fetch(baseUrl.endsWith('/') ? `${baseUrl}render` : `${baseUrl}/render`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, data }),
    }).then((res) => res.json()),
});
