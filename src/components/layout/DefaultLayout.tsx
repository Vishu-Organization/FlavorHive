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
      <div className="mt-12 flex min-h-screen w-screen flex-col bg-slate-50 lg:mt-16">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
