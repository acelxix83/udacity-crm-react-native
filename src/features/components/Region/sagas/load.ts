import { REGIONS_KEY } from "@/src/constants/storageKeys";
import * as actions from "@/src/features/components/Region/reducers";
import { initialState } from "@/src/features/components/Region/reducers";
import { loadState } from "@/src/features/sharedActions";
import { Region } from "@/src/types";
import { get } from "@/src/utilities/asyncStorage";
import { put, takeLatest } from "redux-saga/effects";

export function* watchLoadRegions() {
  yield takeLatest(loadState.type, loadRegionsSaga);
}

function* loadRegionsSaga() {
  try {
    let regionsData: Record<string, Region> = yield get(REGIONS_KEY);

    if (!regionsData) {
      regionsData = initialState.list.regions;
    }

    yield put(actions.loadRegionsSuccess(regionsData));
  } catch (error: any) {
    yield put(actions.loadRegionsError(error.message));
  }
}
