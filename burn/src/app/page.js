"use client"
import React, { lazy, Suspense } from 'react';
import { Main } from 'next/document';

// Assuming you have a Loading component
import Loading from './components/Loading';

const Header = lazy(() => import("./Components/Header"));

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Header />
      <h1>home</h1>
    </Suspense>
  );
}
