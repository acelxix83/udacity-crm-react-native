import customer from "@/src/features/components/Customer/sagas";
import region from "@/src/features/components/Region/sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([customer(), region()]);
}
