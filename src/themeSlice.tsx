/** @format */

import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  isDarkMode: localStorage.getItem('isDarkMode') !== "false",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", String(state.isDarkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
