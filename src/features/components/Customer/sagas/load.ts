import { CUSTOMERS_KEY } from "@/src/constants/storageKeys";
import { loadState } from "@/src/features/shared/actions";
import { Customer } from "@/src/types";
import { get } from "@/src/utilities/asyncStorage";
import { put, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchLoadCustomers() {
  yield takeLatest(loadState.type, loadCustomersSaga);
}

function* loadCustomersSaga() {
  try {
    let customers: Record<string, Customer> = yield get(CUSTOMERS_KEY);
    if (!customers) {
      customers = {};
    }

    yield put(actions.loadCustomersSuccess(customers));
  } catch (error: any) {
    yield put(actions.loadCustomersError(error.message));
  }
}
