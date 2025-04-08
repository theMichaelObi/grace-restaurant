'use client';

import React from 'react';
import ReserveBtn from './ReserveBtn';
import Navbar from './Navbar';
import './header.css';


export default function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">Grace's</a>
        </h1>
        <Navbar />
        <ReserveBtn name='Reserve' />
      </div>
    </header>
  );
};
