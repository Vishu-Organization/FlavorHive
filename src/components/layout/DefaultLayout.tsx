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
      <div className="mt-20 flex min-h-screen w-screen flex-col">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
