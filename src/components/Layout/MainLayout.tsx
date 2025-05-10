import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

type Props = {};

function MainLayout({}: Props) {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
