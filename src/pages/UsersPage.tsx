import { Outlet, createLazyRoute } from "@tanstack/react-router";

const UsersPage = () => {
  return <Outlet />;
};

export default UsersPage;

export const Route = createLazyRoute("/users")({
  component: UsersPage,
});
