import { ERROR, IDLE, LOADING } from "@/src/constants/status";
import { Region } from "@/src/types";
import { createSlice } from "@reduxjs/toolkit";

const name = "region";

const initialState = {
  list: {
    regions: {} as Record<string, Region>,
    status: IDLE,
  },
  edit: {
    status: IDLE,
  },
  error: null as string | null,
};

const reducers = {
  editRegion(state: typeof initialState, { payload }: { payload: Region }) {
    state.edit.status = LOADING;
  },
  editRegionSuccess(
    state: typeof initialState,
    { payload }: { payload: Record<string, Region> },
  ) {
    state.edit.status = IDLE;
    state.list.regions = payload;
  },
  editRegionError(
    state: typeof initialState,
    { payload }: { payload: string },
  ) {
    state.edit.status = ERROR;
    state.error = payload;
  },
  loadRegions(state: typeof initialState) {
    state.list.status = LOADING;
  },
  loadRegionsSuccess(
    state: typeof initialState,
    { payload }: { payload: Record<string, Region> },
  ) {
    state.list.status = IDLE;
    state.list.regions = payload;
  },
  loadRegionsError(
    state: typeof initialState,
    { payload }: { payload: string },
  ) {
    state.list.status = ERROR;
    console.error("Error loading regions:", payload);
    state.error = payload;
    state.list.regions = {};
  },
};

const regionSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  editRegion,
  editRegionSuccess,
  editRegionError,
  loadRegions,
  loadRegionsSuccess,
  loadRegionsError,
} = regionSlice.actions;

export default regionSlice.reducer;
