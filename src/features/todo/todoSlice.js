import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      state.list = [
        ...state.list.filter((todo, todoId) => todoId !== action.payload),
      ];
    },
    toggleCheck: (state, action) => {
      const index = action.payload;
      const todos = state.list;
      todos[index] = {
        isDone: !todos[index].isDone,
        text: todos[index].text,
      };

      state.list = todos;
    },
  },
});

export const { add, remove, toggleCheck } = todoSlice.actions;

export default todoSlice.reducer;
