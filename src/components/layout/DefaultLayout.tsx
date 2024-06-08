import { Outlet } from "@tanstack/react-router";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
