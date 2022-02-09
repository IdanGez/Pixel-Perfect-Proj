import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { HomePage } from './pages/HomePage.jsx';

export function RootCmp() {
  return (
    <section>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  );
}
