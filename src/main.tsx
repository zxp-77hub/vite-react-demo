// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import sotre from '@/store'
import { Provider } from "react-redux";
import './index.scss'
import '@/styles/common.scss'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> // 取消严格模式
  <Provider store={sotre}>
    <App />
  </Provider>
  // </React.StrictMode>,
)
