import Header from "../../ui/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
