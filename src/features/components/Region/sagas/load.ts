import { loadState } from "@/src/features/sharedActions";
import { Region } from "@/src/types";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchLoadRegions() {
  yield takeLatest(loadState.type, loadRegionsSaga);
}

function* loadRegionsSaga() {
  try {
    //TODO: implement async storage

    // Simulate an API call to fetch customers
    const regions: Record<string, Region> = yield call(
      () =>
        // Simulate API call delay
        new Promise((resolve: (value: Record<string, Region>) => void) =>
          setTimeout(
            () =>
              resolve({
                "1": {
                  id: "1",
                  customerIds: ["1"],
                },
                "2": {
                  id: "2",
                  customerIds: ["2", "3"],
                },
                "3": {
                  id: "3",
                  customerIds: [],
                },
                "4": {
                  id: "4",
                  customerIds: [],
                },
                "5": {
                  id: "5",
                  customerIds: [],
                },
              }),
            1000,
          ),
        ),
    );
    yield put(actions.loadRegionsSuccess(regions));
  } catch (error: any) {
    yield put(actions.loadRegionsError(error.message));
  }
}
