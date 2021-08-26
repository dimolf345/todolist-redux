import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import themeReducer from "./features/themeSLice";
import filterReducer from "./features/filterSlice";

export default configureStore({
  reducer: {
    //counter : counterReduer
    todo: todoReducer,
    theme: themeReducer,
    filter: filterReducer,
  },
});
