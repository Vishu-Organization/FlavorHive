import { Link } from "@tanstack/react-router";
import FishIcon from "../../assets/fish.svg";
import PigIcon from "../../assets/pig.svg";
import SproutIcon from "../../assets/sprouting-plant.svg";

const OurVisionImages = () => {
  return (
    <section className="mx-auto space-y-5">
      <div className="grid grid-cols-3 justify-items-center gap-10">
        <FishIcon data-testid="fish" />
        <PigIcon data-testid="pig" />
        <SproutIcon data-testid="sprout" />
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-10 text-sm">
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
    </section>
  );
};

export default OurVisionImages;
