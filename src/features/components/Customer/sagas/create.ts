import * as actions from "@/src/features/components/Customer/reducers";
import { Customer } from "@/src/types";
import { call, put, select, takeLatest } from "redux-saga/effects";

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.type, createCustomerSaga);
}

function* createCustomerSaga(action: { type: string; payload: Customer }) {
  try {
    const customers: Record<string, Customer> = yield select(
      (state) => state.customer.list.customers,
    );
    const newCustomer = action.payload;
    yield call(
      () =>
        // Simulate API call delay
        new Promise((resolve) => setTimeout(resolve, 1000)),
    );
    const updatedCustomers: Record<string, Customer> = {
      ...customers,
      [newCustomer.id as string]: newCustomer,
    };
    yield put(actions.createCustomerSuccess(updatedCustomers));
  } catch (error) {
    console.log("Error creating customer:", error);
    yield put(actions.createCustomerError("Failed to create customer"));
  }
}
