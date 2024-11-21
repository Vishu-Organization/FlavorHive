import { createLazyRoute } from "@tanstack/react-router";

const OnTheMenu = () => {
  console.log(import.meta.env);
  console.log(import.meta.env);
  return <section className="mt-10">On the Menu</section>;
};

export default OnTheMenu;

export const Route = createLazyRoute("/on-the-menu")({
  component: OnTheMenu,
});
