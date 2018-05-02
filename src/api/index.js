const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const BASE_URL = "//rest.bandsintown.com";
const APP_ID = "sample-app-id";

const parseJSON = (response) => response.json();

const fetchAPI = (url) => {
  return fetch(url)
  .then(parseJSON)
  .then(data => (data))
  .catch((e) => {
    throw new Error("API Connection issue");
  });
};

export const fetchArtistApi = (artist) => {
  const options = {
    method: "GET",
    headers: defaultHeaders
  };
  return fetchAPI(`${BASE_URL}/artists/${artist}?app_id=${APP_ID}`, options);
};

export const fetchArtistEventsApi = (artist) => {
  const options = {
    method: "GET",
    headers: defaultHeaders
  };
  return fetchAPI(`${BASE_URL}/artists/${artist}/events?app_id=${APP_ID}`, options);
};