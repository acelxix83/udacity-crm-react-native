import * as actions from "@/src/features/sharedActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING } from "../constants/status";

export const useLoadState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadState());
  }, [dispatch]);

  const customerStatus = useSelector(
    (state: any) => state.customer.list.status,
  );
  const regionStatus = useSelector((state: any) => state.region.list.status);

  const isLoading = customerStatus === LOADING || regionStatus === LOADING;
  return { isLoading };
};
