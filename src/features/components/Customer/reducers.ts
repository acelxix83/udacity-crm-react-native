import { ERROR, IDLE, LOADING } from "@/src/constants/status";
import { Customer, CustomerRequest, CustomerResult } from "@/src/types";
import { createSlice } from "@reduxjs/toolkit";

const name = "customer";

const initialState = {
  list: {
    customers: {} as Record<string, Customer>,
    status: IDLE,
  },
  create: {
    status: IDLE,
  },
  edit: {
    status: IDLE,
  },
  error: null as string | null,
};

const reducers = {
  createCustomer(
    state: typeof initialState,
    { payload }: { payload: CustomerRequest },
  ) {
    state.create.status = LOADING;
  },
  createCustomerSuccess(
    state: typeof initialState,
    { payload }: { payload: CustomerResult },
  ) {
    state.create.status = IDLE;
    state.list.customers = payload.customers;
  },
  createCustomerError(
    state: typeof initialState,
    { payload }: { payload: string },
  ) {
    state.create.status = ERROR;
    state.error = payload;
  },
  editCustomer(
    state: typeof initialState,
    { payload }: { payload: CustomerRequest },
  ) {
    state.edit.status = LOADING;
  },
  editCustomerSuccess(
    state: typeof initialState,
    { payload }: { payload: CustomerResult },
  ) {
    state.edit.status = IDLE;
    state.list.customers = payload.customers;
  },
  editCustomerError(
    state: typeof initialState,
    { payload }: { payload: string },
  ) {
    state.edit.status = ERROR;
    state.error = payload;
  },
  loadCustomers(state: typeof initialState) {
    state.list.status = LOADING;
  },
  loadCustomersSuccess(
    state: typeof initialState,
    { payload }: { payload: Record<string, Customer> },
  ) {
    state.list.status = IDLE;
    state.list.customers = payload;
  },
  loadCustomersError(
    state: typeof initialState,
    { payload }: { payload: string },
  ) {
    state.list.status = ERROR;
    state.error = payload;
    state.list.customers = {};
  },
};

const customerSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer,
  createCustomerSuccess,
  createCustomerError,
  editCustomer,
  editCustomerSuccess,
  editCustomerError,
  loadCustomers,
  loadCustomersSuccess,
  loadCustomersError,
} = customerSlice.actions;

export default customerSlice.reducer;
