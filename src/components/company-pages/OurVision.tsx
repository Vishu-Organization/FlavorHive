import { createLazyRoute, useLoaderData } from "@tanstack/react-router";
import OurVisionImages from "./OurVisionImages";

const OurVision = () => {
  const ourVision = useLoaderData({ from: "/pages/vision" });

  return (
    <div className="container grid space-y-10 text-center">
      <iframe
        data-testid="youtube"
        width="100%"
        height="550"
        src="https://www.youtube.com/embed/C_Xgn87CF-I"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <p
        data-testid="main-vision"
        className="text-balance font-our-vision text-base leading-8 text-primary lg:text-[20px]"
      >
        {ourVision && ourVision[0].description}
      </p>
      <div className="relative h-screen w-full bg-our-vision bg-cover bg-center text-5xl transition-all duration-200 ease-in hover:scale-[1.01]">
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2">
          <div className="float-none mx-auto w-[55%] font-bold leading-tight text-white">
            We're developing better standards for higher quality ingredients.
          </div>
        </div>
      </div>
      <div
        data-testid="sub-vision"
        className="mx-auto w-5/6 text-base text-primary-black lg:text-lg"
      >
        {ourVision && ourVision[1].description}
      </div>
      <OurVisionImages />
    </div>
  );
};

export default OurVision;

export const Route = createLazyRoute("/pages/vision")({
  component: OurVision,
});
