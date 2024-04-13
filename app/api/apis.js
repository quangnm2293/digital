const BASE_URL = "https://frontend-exam.digitalfortress.dev/projects";

async function refreshAccessToken() {
  const response = await fetch(`${BASE_URL}/auth/refresh-token`);
  const data = await response.json();
  accessToken = data.access_token;
}

async function handle401Error(response, url) {
  if (response.status === 401) {
    await refreshAccessToken();
    const newResponse = await fetch(url, {
      headers: {
        ...response.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return newResponse;
  }
  return response;
}

async function fetchAPI(endpoint, options = {}) {
  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`, options);
  const handledResponse = await handle401Error(
    response,
    `${BASE_URL}/${endpoint}`
  );

  if (!handledResponse.ok) {
    throw new Error("API request failed");
  }
  return handledResponse.json();
}

export { fetchAPI };
