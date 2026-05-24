/** @format */

import { createSlice } from "@reduxjs/toolkit";

const themesSlice = createSlice({
  name: "Themes",
  initialState: { value: true },
  reducers: {
    changeTheme(state) {
      state.value = !state.value;
    },
  },
});

export const { changeTheme } = themesSlice.actions;
export default themesSlice.reducer;
