import { Outlet } from "@tanstack/react-router";
import Footer from "./Footer";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
