import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        description: action.payload,
        id: Date.now(),
        done: false,
      });
    },

    toggleTodo: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          return item;
        }
        return item;
      });
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
    },

    clearTodo: (state) => {
      state.todos = state.todos.filter((item) => !item.done);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
