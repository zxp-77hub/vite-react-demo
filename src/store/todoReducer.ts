import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { ITodoList } from "@/store";

export const todoSlice = createSlice({
  name:'todoInfo',
  initialState:{
    todoList: <ITodoList>[{id:'3131',text:'313123',isDone : false}],
    showAllDone: false, // 显现已完成
  },
  reducers:{
    addTodoList:(state,action)=>{
      state.todoList.unshift({
        id: nanoid(),
        text: action.payload.text,
        isDone: false,
      })
    },
    deleteTodoList:(state,action)=>{
      state.todoList=state.todoList.filter(todoInfo=>todoInfo.id !== action.payload.id)
    },
    changeInfoState:(state,action)=>{
 
      state.todoList.forEach(item=>{
        if(item.id === action.payload.id){
          item.isDone=!item.isDone
        }
      })
    },
    changeShowInfo:(state)=>{
      state.showAllDone=!state.showAllDone
    }
  }
})
export const {
  addTodoList,
  changeShowInfo,
  deleteTodoList,
  changeInfoState,
} = todoSlice.actions

export default todoSlice.reducer
