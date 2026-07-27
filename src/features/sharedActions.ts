import { createAction } from "@reduxjs/toolkit";

export const loadState = createAction("shared/receiveData");
export const clearState = createAction("shared/clearState");
