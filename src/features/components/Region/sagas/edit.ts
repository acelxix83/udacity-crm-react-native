import * as actions from "@/src/features/components/Region/reducers";
import { Region } from "@/src/types";
import { call, put, select, takeLatest } from "redux-saga/effects";

export function* watchEditRegion() {
  yield takeLatest(actions.editRegion.type, editRegionSaga);
}

function* editRegionSaga(action: { type: string; payload: Region }) {
  try {
    const regions: Record<string, Region> = yield select(
      (state) => state.region.list.regions,
    );
    const newRegion = action.payload;
    yield call(
      () =>
        // Simulate API call delay
        new Promise((resolve) => setTimeout(resolve, 1000)),
    );
    const updatedRegions: Record<string, Region> = {
      ...regions,
      [newRegion.id as string]: newRegion,
    };
    yield put(actions.editRegionSuccess(updatedRegions));
  } catch (error) {
    console.log("Error editing region:", error);
    yield put(actions.editRegionError("Failed to edit region"));
  }
}
