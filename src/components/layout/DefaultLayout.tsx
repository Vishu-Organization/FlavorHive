import Footer from "./Footer";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
