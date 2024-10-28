import { createLazyRoute } from "@tanstack/react-router";
import HomeHero from "./HomeHero";
import HomeBanner from "./HomeBanner";
import WhatsCooking from "../Discover/WhatsCooking";

const Home = () => {
  return (
    <>
      <section id="home" className="space-y-10">
        <HomeHero />
        <HomeBanner />
      </section>
      <WhatsCooking />
    </>
  );
};

export default Home;

export const Route = createLazyRoute("/pages/vision")({
  component: Home,
});
