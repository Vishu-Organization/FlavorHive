import Footer from "./Footer";
import { ReactNode, useEffect } from "react";
import Header from "./Header";
import { useNavigate, useRouter } from "@tanstack/react-router";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const router = useRouter();
  const navigate = useNavigate();

  useEffect(() => {
    if (router.latestLocation.pathname === "/") {
      navigate({ to: "/home" });
    }
  }, []);

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
