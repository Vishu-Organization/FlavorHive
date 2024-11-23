import { createLazyRoute } from "@tanstack/react-router";
import OnTheMenuHeader from "./OnTheMenuHeader";

const OnTheMenu = () => {
  return (
    <section id="on-the-menu">
      {/* <div className="hidden lg:block"> */}
      <OnTheMenuHeader />
      {/* </div> */}

      <div className="h-80"></div>
    </section>
  );
};

export default OnTheMenu;

export const Route = createLazyRoute("/on-the-menu")({
  component: OnTheMenu,
});
