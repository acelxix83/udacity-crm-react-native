import { CUSTOMERS_KEY } from "@/src/constants/storageKeys";
import * as actions from "@/src/features/components/Customer/reducers";
import { Customer, CustomerRequest, CustomerResult } from "@/src/types";
import { set } from "@/src/utilities/asyncStorage";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { editCustomer } from "../services";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.type, editCustomerSaga);
}

function* editCustomerSaga(action: { type: string; payload: CustomerRequest }) {
  try {
    const customers: Record<string, Customer> = yield select(
      (state) => state.customer.list.customers,
    );
    const editCustomerRequest = action.payload.customer;

    yield call(() => editCustomer(editCustomerRequest));

    const updatedCustomers: Record<string, Customer> = {
      ...customers,
      [editCustomerRequest.id as string]: editCustomerRequest,
    };

    const result: CustomerResult = {
      customerId: editCustomerRequest.id as string,
      originalRegion: action.payload.originalRegion,
      customers: updatedCustomers,
    };
    yield set(CUSTOMERS_KEY, updatedCustomers);
    yield put(actions.editCustomerSuccess(result));
  } catch (error) {
    console.error("Error editing customer:", error);
    yield put(actions.editCustomerError("Failed to edit customer"));
  }
}
