import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {routes} from './routes/Routes.jsx'
import './index.css'
import StudentProvider from './components/StudentProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StudentProvider>
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
  </StudentProvider>
);