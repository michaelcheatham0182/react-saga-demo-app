import { fork, all } from "redux-saga/effects";
import { watchFetchArtist, watchFetchArtistEvents } from "./bands";

export default function* rootSaga() {
  yield all([
    fork(watchFetchArtist),
    fork(watchFetchArtistEvents)
  ]);
}
