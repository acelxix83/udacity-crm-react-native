import { CUSTOMERS_KEY } from "@/src/constants/storageKeys";
import * as actions from "@/src/features/components/Customer/reducers";
import { Customer, CustomerRequest, CustomerResult } from "@/src/types";
import { set } from "@/src/utilities/asyncStorage";
import { call, put, select, takeLatest } from "redux-saga/effects";

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
    yield call(
      () =>
        // Simulate API call delay
        new Promise((resolve) => {
          newCustomer.id = generateUniqueId();
          setTimeout(resolve, 1000);
        }),
    );
    const updatedCustomers: Record<string, Customer> = {
      ...customers,
      [newCustomer.id as string]: newCustomer,
    };
    const result: CustomerResult = {
      customerId: newCustomer.id as string,
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

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}
