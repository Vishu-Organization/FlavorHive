import { Outlet } from "@tanstack/react-router";
import DefaultLayout from "../components/layout/DefaultLayout";

const DefaultLayoutPage = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default DefaultLayoutPage;
