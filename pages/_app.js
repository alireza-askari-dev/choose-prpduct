import React, { useContext, useEffect, useState } from 'react';

// mrx : context
import ContextProvider from '../context/index';

// mrx : styles
import '../styles/globals.css'

// alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>choose product web application</title>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp

// mrx : you must enter a title in here ( not in documnet
// mrx : ContextProvider is our context ( global states ) 