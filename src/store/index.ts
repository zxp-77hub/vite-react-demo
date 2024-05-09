import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoInfo";

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
  deleteTodoList,
  deleteAllDone,
  changeInfoState,
  changeShowInfo,
  allTodoDone,
}  from "./todoInfo";