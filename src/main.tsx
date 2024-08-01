import React from 'react'
import ReactDOM from 'react-dom/client'
import sotre, {persistor} from '@/store'
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import { RouterProvider } from "react-router-dom";
import CommonNav from "@components/CommonNav";
import router from "@/router";
import './index.scss'
import '@/styles/common.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={sotre}>
      <PersistGate loading={null} persistor={persistor}> 
        {/* <App /> */}
        <RouterProvider router={router}/>
        <CommonNav/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
