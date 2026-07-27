import * as actions from "@/src/features/sharedActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useLoadState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadState());
  }, [dispatch]);
};
