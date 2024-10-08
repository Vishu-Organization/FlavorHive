import Footer from "./Footer";
import { ReactNode } from "react";
import Header from "./Header";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <div className="mt-16 flex min-h-screen w-screen flex-col bg-slate-50">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
