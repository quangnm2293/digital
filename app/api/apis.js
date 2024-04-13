const BASE_URL = "https://frontend-exam.digitalfortress.dev";
const accessTokenDummy =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3MTMwMDE2ODl9.6S6hp_0uGCIT8u9AWJmMyyTt8GqP0psEm2Kc1zYkVkQ";
async function refreshAccessToken() {
  const response = await fetch(`${BASE_URL}/auth/refresh-token`);
  const data = await response.json();
  accessToken = data.access_token;
}

async function handle401Error(response, url) {
  if (response.status === 401) {
    const data = await refreshAccessToken();
    const newResponse = await fetch(url, {
      headers: {
        ...response.headers,
        Authorization: `Bearer ${data.access_token}`,
      },
    });
    return newResponse;
  }
  return response;
}

async function fetchAPI(endpoint, options = {}) {
  if (accessTokenDummy) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessTokenDummy}`,
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
async function postAPI(endpoint, data) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const handledResponse = await handle401Error(
    response,
    `${BASE_URL}/${endpoint}`
  );

  if (!handledResponse.ok) {
    throw new Error("API request failed");
  }
  return handledResponse.json();
}

export { fetchAPI, postAPI };
