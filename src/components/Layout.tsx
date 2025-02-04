import React from 'react';
import { Outlet } from 'react-router-dom';


import Header from "./header/Header";
import Footer from "./footer/Footer";


const Layout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;