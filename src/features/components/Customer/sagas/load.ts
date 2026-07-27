import { loadState } from "@/src/features/sharedActions";
import { Customer } from "@/src/types";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchLoadCustomers() {
  console.log("watchLoadCustomers called", loadState.type);
  yield takeLatest(loadState.type, loadCustomersSaga);
}

function* loadCustomersSaga() {
  try {
    //TODO: implement async storage

    // Simulate an API call to fetch customers
    const customers: Record<string, Customer> = yield call(
      () =>
        // Simulate API call delay
        new Promise((resolve: (value: Record<string, Customer>) => void) =>
          setTimeout(
            () =>
              resolve({
                "1": {
                  id: "cda35231",
                  firstName: "John",
                  lastName: "Doe",
                  isActive: true,
                  regionId: "1",
                },
                "2": {
                  id: "edad789d",
                  firstName: "Jane",
                  lastName: "Doe",
                  isActive: true,
                  regionId: "2",
                },
                "3": {
                  id: "a2bfdad4",
                  firstName: "Sam",
                  lastName: "Smith",
                  isActive: false,
                  regionId: "2",
                },
              }),
            1000,
          ),
        ),
    );
    yield put(actions.loadCustomersSuccess(customers));
  } catch (error: any) {
    yield put(actions.loadCustomersError(error.message));
  }
}
