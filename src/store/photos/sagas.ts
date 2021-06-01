import { put, takeLatest, call } from "redux-saga/effects";
import { getPhotos, getPhotosSucces } from "./slices";
import { getPhotosApi } from "./api";

function* photosSaga() {
  yield takeLatest(getPhotos, function* ({ payload: { albumId } }): any {
    try {
      const res = yield call(getPhotosApi, albumId);
      yield put(getPhotosSucces(res));
    } catch (e) {
      console.log(`[getPhotos]:error:${e?.message || e}`);
    }
  });
}

export { photosSaga };
