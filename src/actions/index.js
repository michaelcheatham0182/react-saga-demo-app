import * as Actions from "../constants/actions";

export const setLoading = (status) => ({
	type: Actions.SET_LOADING,
	status
});

export const fetchArtist = (artist) => ({
  type: Actions.FETCH_ARTIST,
  artist
});

export const fetchArtistSuccess = (data) => ({
  type: Actions.FETCH_ARTIST_SUCCESS,
  data
});

export const fetchArtistEvents = (artist) => ({
  type: Actions.FETCH_ARTIST_EVENTS,
  artist
});

export const fetchArtistEventsSuccess = (data) => ({
  type: Actions.FETCH_ARTIST_EVENTS_SUCCESS,
  data
});

export const apiError = (status) => ({
  type: Actions.THROW_API_ERROR,
  status
});
