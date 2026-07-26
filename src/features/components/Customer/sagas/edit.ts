import * as actions from "@/src/features/components/Customer/reducers";
import { Customer } from "@/src/types";
import { call, put, select, takeLatest } from "redux-saga/effects";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.type, editCustomerSaga);
}

function* editCustomerSaga(action: { type: string; payload: Customer }) {
  try {
    const customers: Record<string, Customer> = yield select(
      (state) => state.customer.list.customers,
    );
    const editCustomer = action.payload;
    yield call(
      () =>
        // Simulate API call delay
        new Promise((resolve) => setTimeout(resolve, 1000)),
    );
    const updatedCustomers: Record<string, Customer> = {
      ...customers,
      [editCustomer.id as string]: editCustomer,
    };
    yield put(actions.editCustomerSuccess(updatedCustomers));
  } catch (error) {
    console.log("Error editing customer:", error);
    yield put(actions.editCustomerError("Failed to edit customer"));
  }
}
