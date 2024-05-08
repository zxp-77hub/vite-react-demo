import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

const store = configureStore({
  reducer:{
    todoInfo:todoReducer
  }
  
})
export default  store

export type Store = ReturnType<typeof store.getState>
export * from "./interface"
export  {
  addTodoList,
  changeShowInfo,
  deleteTodoList,
  changeInfoState
}  from "./todoReducer";