import React, { useState, useEffect, useContext } from 'react';

// mrx : components
import Startpage from '../components/screen/startPage/index';
import LoadingPage from '../components/screen/loadingPage/index';

// mrx : Landing page ↓
export default function Home() {
  // mrx : states ↓
  const [ShowStartingPage, setStartingPage] = useState(true);

  // mrx : ↓ --------------------- functions --------------------- ↓

  // mrx : show loading page
  useEffect(() => {
    const timer = setTimeout(() => setStartingPage(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {
        ShowStartingPage ? (
          <Startpage />
        ) : (
          <LoadingPage />
        )
      }
    </>
  )
}
