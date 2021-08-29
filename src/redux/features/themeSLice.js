import { createSlice } from "@reduxjs/toolkit";

function getTheme() {
  if (localStorage.getItem("theme")) return localStorage.getItem("theme");
  else return "dark";
}

const initialState = getTheme();

const themeSLice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSLice.actions;

export default themeSLice.reducer;
