/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

import { Home, Products, Product, NotFound } from './pages'

import { Navbar, Footer } from './components'
import { PersistGate } from 'redux-persist/integration/react';

const Layout = () => {
  return (
    <div className="app flex flex-col min-h-screen">
      <Navbar />
      <Outlet className="flex-grow" />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },


      {
        path: "*",
        element: <NotFound />
      }
    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
