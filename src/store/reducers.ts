import customerReducer from "@/src/features/components/Customer/reducers";
import regionReducer from "@/src/features/components/Region/reducers";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  customer: customerReducer,
  region: regionReducer,
});

export default rootReducer;
