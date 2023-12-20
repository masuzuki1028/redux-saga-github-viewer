import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  content: undefined
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.show = true;
      state.content = action.payload;
    },
    hide: (state) => {
      state.show = false;
      state.content = undefined;
    },
  },
});

export const { open, hide } = modalSlice.actions;
export default modalSlice.reducer;
