// import React from 'react'
import ReactDOM from 'react-dom/client'
import sotre,{persistor} from '@/store'
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import App from './App.tsx'

import './index.scss'
import '@/styles/common.scss'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> // 取消严格模式
  <Provider store={sotre}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>,
)
