import { takeEvery, call, put } from "redux-saga/effects";
import * as Actions from "../constants/actions";
import * as API from "../api";
import { setLoading, fetchArtistSuccess, fetchArtistEventsSuccess, apiError } from "../actions";

function *fetchArtist({ artist }) {
  try {
    const response = yield call(API.fetchArtistApi, artist);
    yield put(fetchArtistSuccess(response));
  } catch (e) {
    yield put(setLoading(false));
    yield put(apiError(true));
  }
}

function *fetchArtistEvents({ artist }) {
  try {
    const response = yield call(API.fetchArtistEventsApi, artist);
    yield put(fetchArtistEventsSuccess(response));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield put(apiError(true));
  }
}

export function *watchFetchArtist() {
  yield takeEvery(Actions.FETCH_ARTIST, fetchArtist);
}

export function *watchFetchArtistEvents() {
  yield takeEvery(Actions.FETCH_ARTIST_EVENTS, fetchArtistEvents);
}
