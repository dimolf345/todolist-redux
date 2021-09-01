import { createSlice } from "@reduxjs/toolkit";

function getTodos() {
  if (localStorage.getItem("todos"))
    return JSON.parse(localStorage.getItem("todos")).todos;
  else return [];
}

const initialState = {
  todos: getTodos(),
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
      localStorage.setItem("todos", JSON.stringify(state));
    },

    toggleTodo: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          return item;
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },

    clearTodo: (state) => {
      state.todos = state.todos.filter((item) => !item.done);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    orderTodo: (state, action) => {
      console.log(action.payload);
      state.todos = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, clearTodo, orderTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
