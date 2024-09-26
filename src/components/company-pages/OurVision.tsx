import { Link, createLazyRoute, useLoaderData } from "@tanstack/react-router";
import sustainableSeaFoodImg from "../../assets/fish-food-5.jpg";
import pig from "../../assets/pig-1.jpg";
import sprout from "../../assets/sprout.jpg";

const OurVision = () => {
  const ourVision = useLoaderData({ from: "/pages/vision" });

  return (
    <div className="container grid space-y-10 text-center">
      <iframe
        className=""
        width="100%"
        height="550"
        src="https://www.youtube.com/embed/C_Xgn87CF-I"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <p className="text-balance font-our-vision text-base leading-8 text-primary lg:text-[20px]">
        {ourVision && ourVision[0].description}
      </p>
      <div className="relative h-screen w-full bg-our-vision bg-cover bg-center text-5xl transition-all duration-200 ease-in hover:scale-[1.01]">
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2">
          <div className="float-none mx-auto w-[55%] font-bold leading-tight text-white">
            We're developing better standards for higher quality ingredients.
          </div>
        </div>
      </div>
      <div className="mx-auto w-5/6 text-base text-primary-black lg:text-lg">
        {ourVision && ourVision[1].description}
      </div>
      <div className="grid w-full grid-cols-3 justify-items-center gap-10">
        <img
          src={sustainableSeaFoodImg}
          className="h-48 w-48 rounded-full"
          alt="sustainable sea-food"
        />
        <img src={pig} className="h-48 w-48 rounded-full" alt="boy with pig" />
        <img
          src={sprout}
          className="h-48 w-48 rounded-full"
          alt="sprouting plant"
        />
      </div>
      <div className="my-4 grid w-full grid-cols-3 justify-items-center gap-10 text-sm">
        <div className="w-1/2 font-bold">
          Sustainable seafood recommended by Seafood Watch®
        </div>
        <div className="w-1/2 font-bold">
          Not fed antibiotics or hormones*
          <Link className="block text-xs underline">Learn More</Link>
        </div>
        <div className="w-1/2 font-bold">
          Our quality standards are responsibly sourced.
          <Link className="block text-xs underline">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default OurVision;

export const Route = createLazyRoute("/pages/vision")({
  component: OurVision,
});