import { createLazyRoute } from "@tanstack/react-router";
import HomeHero from "./HomeHero";

const Home = () => {
  return (
    <>
      <section id="home" className="space-y-10">
        <HomeHero />
        <p>This is text</p>
      </section>
    </>
  );
};

export default Home;

export const Route = createLazyRoute("/pages/vision")({
  component: Home,
});
