import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPhotosStore } from "../../interfaces/photos/IPhotosStore";
import { ERequestStatus } from "../../enums/ERequestStatus";

const initialState: IPhotosStore = {
  current: null,
  status: ERequestStatus.NONE,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    getPhotos(state, { payload }: PayloadAction<{ albumId: number }>) {
      state.status = ERequestStatus.REQUESTED;
    },
    getPhotosSucces(
      state,
      { payload }: PayloadAction<IPhotosStore["current"]>
    ) {
      state.current = payload;
      state.status = ERequestStatus.SUCCESS;
    },
    resetPhotos(state) {
      state = initialState;
    },
  },
});

export const { getPhotos, getPhotosSucces, resetPhotos } = photosSlice.actions;

export default photosSlice.reducer;
