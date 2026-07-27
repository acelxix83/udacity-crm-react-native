import * as actions from "@/src/features/components/Customer/reducers";
import { Customer, CustomerRequest, CustomerResult } from "@/src/types";
import { call, put, select, takeLatest } from "redux-saga/effects";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.type, editCustomerSaga);
}

function* editCustomerSaga(action: { type: string; payload: CustomerRequest }) {
  try {
    const customers: Record<string, Customer> = yield select(
      (state) => state.customer.list.customers,
    );
    const editCustomer = action.payload.customer;
    yield call(
      () =>
        // Simulate API call delay
        new Promise((resolve) => setTimeout(resolve, 1000)),
    );
    const updatedCustomers: Record<string, Customer> = {
      ...customers,
      [editCustomer.id as string]: editCustomer,
    };

    const result: CustomerResult = {
      customerId: editCustomer.id as string,
      originalRegion: action.payload.originalRegion,
      customers: updatedCustomers,
    };

    yield put(actions.editCustomerSuccess(result));
  } catch (error) {
    console.error("Error editing customer:", error);
    yield put(actions.editCustomerError("Failed to edit customer"));
  }
}
