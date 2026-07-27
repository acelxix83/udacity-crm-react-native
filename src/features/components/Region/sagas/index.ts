import { all } from "redux-saga/effects";
import { watchLoadRegions } from "./load";

export default function* region() {
  yield all([watchLoadRegions()]);
}
