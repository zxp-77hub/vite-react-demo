import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { ITodoInfoState } from "@/store";

export const todoSlice = createSlice({
  name:'todoInfo',
  initialState:<ITodoInfoState>{
    todoList: [{id:'3131',text:'313123',isDone : false}],
    showAllNoDone: false, // 显现未完成,
    isAllDone: false, //是否所有已完成
  },
  reducers:{
    cheCkAllDone: (state) =>{
        if(state.todoList.find(item => item.isDone ==false)){
          state.isAllDone = false;
        }
    },
    // 向头部添加todo
    addTodoList:(state,action)=>{
      state.todoList.unshift({
        id: nanoid(),
        text: action.payload.text,
        isDone: false,
      })
    },
    // 批量修改所有todo
    allTodoDone:(state)=>{
      state.isAllDone = !state.isAllDone;
      state.todoList=state.todoList.map(item=>{
        item.isDone= state.isAllDone;
        return item
      })
    },
    // 删除某一行
    deleteTodoList:(state,action)=>{
      state.todoList=state.todoList.filter(todoInfo=>todoInfo.id !== action.payload.id)
    },
    // 删除所有已完成
    deleteAllDone:(state)=>{
      state.todoList=state.todoList.filter(todoInfo=>!todoInfo.isDone)
      state.isAllDone=false;
    },
    // todo任务完成/否
    changeInfoState:(state,action)=>{
 
      state.todoList.forEach(item=>{
        if(item.id === action.payload.id){
          item.isDone=!item.isDone
        }
      })
    },
    // 修改显示数据项
    changeShowInfo:(state)=>{
      state.showAllNoDone=!state.showAllNoDone
    }
  }
})
export const {
  addTodoList,
  deleteTodoList,
  deleteAllDone,
  changeInfoState,
  changeShowInfo,
  allTodoDone,
} = todoSlice.actions

export default todoSlice.reducer
