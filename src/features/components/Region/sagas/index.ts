import { all } from "redux-saga/effects";
import { watchEditRegion } from "./edit";
import { watchLoadRegions } from "./load";

export default function* region() {
  yield all([watchLoadRegions(), watchEditRegion()]);
}
