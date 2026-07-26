import * as actions from "@/src/features/components/Region/reducers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useLoadRegions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadRegions());
  }, [dispatch]);

  return useSelector((state: any) => state.region.list.regions);
};

export const useEditRegion = () => {
  const dispatch = useDispatch();

  const editRegion = {
    handleSubmit: () => {
      dispatch(actions.editRegion());
    },
  };

  return editRegion;
};

export const useEditRegionStatus = () => {
  return useSelector((state: any) => state.region.edit.status);
};
