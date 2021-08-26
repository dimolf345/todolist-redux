import { createSlice } from "@reduxjs/toolkit";

const initialState = "dark";

const themeSLice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      console.log(state);
      return state === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = themeSLice.actions;

export default themeSLice.reducer;
