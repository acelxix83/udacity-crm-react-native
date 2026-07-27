import { ERROR, IDLE, LOADING } from "@/src/constants/status";
import { REGIONS_KEY } from "@/src/constants/storageKeys";
import { clearState, loadState } from "@/src/features/sharedActions";
import { CustomerResult, Region } from "@/src/types";
import { set } from "@/src/utilities/asyncStorage";
import { createSlice } from "@reduxjs/toolkit";
import {
  createCustomerSuccess,
  editCustomerSuccess,
} from "../Customer/reducers";

const name = "region";

export const initialState = {
  list: {
    regions: {
      "1": { id: "1", customerIds: [] },
      "2": { id: "2", customerIds: [] },
      "3": { id: "3", customerIds: [] },
      "4": { id: "4", customerIds: [] },
      "5": { id: "5", customerIds: [] },
    } as Record<string, Region>,
    status: IDLE,
  },
  edit: {
    status: IDLE,
  },
  error: null as string | null,
};

const reducers = {
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
    state.list.regions = initialState.list.regions; // Reset to initial regions on error
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
        } else {
          state.list.regions = initialState.list.regions; // Reset to initial regions if no regions in payload
        }
      },
    )
    .addCase(clearState, (state: typeof initialState) => {
      state.list.status = IDLE;
      state.list.regions = initialState.list.regions; // Reset to initial regions on clear
    })
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

        set(REGIONS_KEY, state.list.regions);
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
        set(REGIONS_KEY, state.list.regions);
      },
    );
};

const regionSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

export const { loadRegionsSuccess, loadRegionsError } = regionSlice.actions;

export default regionSlice.reducer;
