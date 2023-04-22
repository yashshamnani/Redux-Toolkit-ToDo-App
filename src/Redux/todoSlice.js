import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
     
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        status: false,
      };
      state.push(newTask);
    },
    markDone: (state, action) => {
        const index =  state.findIndex((todo)=>todo.id===action.payload.id)
        state[index].status = action.payload.status;
    },
    deleteTodo: (state, action) => {
       return state.filter((todo)=>todo.id!=action.payload.id)
    },
    clearAll: (state, action) => {
      return [];
    },
  },
});
export const { clearAll, addTodo, markDone, deleteTodo,  } = todoSlice.actions;

export default todoSlice.reducer;
