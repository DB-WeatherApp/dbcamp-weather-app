import Header from "../../ui/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
