import { ERROR, IDLE, LOADING } from "@/src/constants/status";
import { loadState } from "@/src/features/sharedActions";
import { CustomerResult, Region } from "@/src/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  createCustomerSuccess,
  editCustomerSuccess,
} from "../Customer/reducers";

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

const extraReducers = (builder: any) => {
  builder
    .addCase(
      loadState,
      (state: typeof initialState, action: { payload: any }) => {
        state.list.status = LOADING;
        const regions = action.payload?.regions;
        if (regions) {
          state.list.regions = regions;
        }
      },
    )
    .addCase(
      editCustomerSuccess,
      (state: typeof initialState, action: { payload: CustomerResult }) => {
        const customerId = action.payload.customerId as string;
        const regionId = action.payload.customers[customerId]
          .regionId as string;
        const originalRegionId = action.payload.originalRegion as string;

        if (regionId === originalRegionId) {
          // If the region hasn't changed, no need to update the regions
          return;
        }

        //add customer to new region
        state.list.regions[regionId].customerIds.push(customerId);

        //remove customer from old region
        const index =
          state.list.regions[originalRegionId].customerIds.indexOf(customerId);
        if (index > -1) {
          state.list.regions[originalRegionId].customerIds.splice(index, 1);
        }
      },
    )
    .addCase(
      createCustomerSuccess,
      (state: typeof initialState, action: { payload: CustomerResult }) => {
        const customerId = action.payload.customerId as string;
        const regionId = action.payload.customers[customerId]
          .regionId as string;

        //add customer to new region
        state.list.regions[regionId].customerIds.push(customerId);
      },
    );
};

const regionSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

export const {
  editRegion,
  editRegionSuccess,
  editRegionError,
  loadRegionsSuccess,
  loadRegionsError,
} = regionSlice.actions;

export default regionSlice.reducer;
