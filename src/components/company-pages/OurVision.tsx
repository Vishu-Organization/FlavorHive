import { createLazyRoute, useLoaderData } from "@tanstack/react-router";
import OurVisionImages from "./OurVisionImages";
import { useEffect, useState } from "react";

const OurVision = () => {
  const ourVision = useLoaderData({ from: "/pages/vision" });

  const [iframeHeight, setIframeHeight] = useState(0);

  const adjustIframeHeight = () => {
    const viewportWidth = window.innerWidth;
    setIframeHeight(viewportWidth * 0.56); // 16:9 aspect ratio (56%)
  };

  useEffect(() => {
    adjustIframeHeight();
    window.addEventListener("resize", adjustIframeHeight);
    return () => window.removeEventListener("resize", adjustIframeHeight);
  }, []);

  return (
    <div className="container grid space-y-10 text-center">
      <iframe
        data-testid="youtube"
        style={{
          height: `${iframeHeight < 550 ? iframeHeight : 550}px`,
        }}
        width="100%"
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
      <div className="relative h-96 w-full bg-our-vision bg-cover bg-center bg-no-repeat text-2xl transition-all duration-200 ease-in hover:scale-[1.01] md:h-[500px] md:text-4xl lg:h-screen lg:text-5xl">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative top-1/2 z-10 mx-auto w-3/4 -translate-y-3/4 p-4 font-bold leading-tight text-white">
          We're developing better standards for higher quality ingredients.
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
