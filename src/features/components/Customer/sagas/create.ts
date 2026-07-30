import { call, put, select, takeLatest } from "redux-saga/effects";

import { CUSTOMERS_KEY } from "@/src/constants/storageKeys";
import * as actions from "@/src/features/components/Customer/reducers";
import { createCustomer } from "@/src/features/components/Customer/services";
import { Customer, CustomerRequest, CustomerResult } from "@/src/types";
import { set } from "@/src/utilities/asyncStorage";

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.type, createCustomerSaga);
}

function* createCustomerSaga(action: {
  type: string;
  payload: CustomerRequest;
}) {
  try {
    const customers: Record<string, Customer> = yield select(
      (state) => state.customer.list.customers,
    );
    const newCustomer = action.payload.customer;
    const createdCustomer: Customer = yield call(() =>
      createCustomer(newCustomer),
    );
    const updatedCustomers: Record<string, Customer> = {
      ...customers,
      [createdCustomer.id as string]: createdCustomer,
    };
    const result: CustomerResult = {
      customerId: createdCustomer.id as string,
      originalRegion: null,
      customers: updatedCustomers,
    };
    yield set(CUSTOMERS_KEY, updatedCustomers);
    yield put(actions.createCustomerSuccess(result));
  } catch (error) {
    console.error("Error creating customer:", error);
    yield put(actions.createCustomerError("Failed to create customer"));
  }
}
