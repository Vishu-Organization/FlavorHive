import { Outlet } from "@tanstack/react-router";
import DefaultLayout from "../components/layout/DefaultLayout";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultLayoutPage = () => {
  return (
    <DefaultLayout>
      <Outlet />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </DefaultLayout>
  );
};

export default DefaultLayoutPage;
