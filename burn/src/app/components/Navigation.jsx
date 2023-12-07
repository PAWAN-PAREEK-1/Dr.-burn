import React, { lazy, Suspense } from 'react';
import Loading from './Loading';
import "../globals.css"
const Header = lazy(() => import("./Header"));
const Navbar = lazy(() => import("./Navbar"));

const Navigation = () => {
  return (
    <Suspense
    fallback={
      <div>
        <Loading />
      </div>
    }

  >
<Header/>
<Navbar/>


  </Suspense>
  )
}

export default Navigation