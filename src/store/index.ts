import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./todoInfo";


const rootReducer = combineReducers({
  todoInfo:todoReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false, //开发中避免不必要警告
    }),
})

export const persistor = persistStore(store)
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