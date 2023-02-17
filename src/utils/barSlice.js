import { createSlice } from "@reduxjs/toolkit";

const barSlice = createSlice({
  name: "bar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = barSlice.actions;
export default barSlice.reducer;
