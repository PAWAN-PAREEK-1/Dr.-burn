"use client"
import React, { lazy, Suspense } from 'react';
import { Main } from 'next/document';

// Assuming you have a Loading component
import Loading from './components/Loading';


const Navigation = lazy(() => import("./Components/Navigation"));

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Navigation />
      <h1>home</h1>
    </Suspense>
  );
}
