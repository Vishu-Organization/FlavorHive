import heroImg640 from "../../assets/home-header-640.webp";
import heroImg750 from "../../assets/home-header-750.webp";
import heroImg828 from "../../assets/home-header-828.webp";
import heroImg1080 from "../../assets/home-header-1080.webp";
import heroImg1200 from "../../assets/home-header-1200.webp";
import heroImg1920 from "../../assets/home-header-1920.webp";
import heroImg2048 from "../../assets/home-header-2048.webp";
import heroImg3840 from "../../assets/home-header-3840.webp";
import Button from "../Button";

const HomeHero = () => {
  return (
    <section id="hero" className="relative block h-96 overflow-hidden">
      <figure>
        <img
          alt="A spread of FlavorHive meals and ingredients"
          decoding="async"
          className="absolute inset-0 h-full w-full max-w-full object-cover"
          sizes="100vw"
          src={heroImg1920}
          srcSet={`${heroImg640} 640w, ${heroImg750} 750w, ${heroImg828} 828w, ${heroImg1080} 1080w, ${heroImg1200} 1200w, ${heroImg1920} 1920w, ${heroImg2048} 2048w, ${heroImg3840} 3840w`}
        ></img>
      </figure>
      <div className="absolute top-0 md:left-[3%] md:top-2/4 md:-translate-y-2/4">
        <h2 className="font-chronicle max-w-[440px] text-xl font-semibold text-primary lg:text-2xl xl:text-3xl 2xl:text-[40px] 2xl:leading-snug">
          Easy meal kits. <br />
          Quality ingredients.
          <br />
          Delivered to your door.
        </h2>
        <Button className="mt-4 px-4 py-2 xl:mt-5 xl:px-5 xl:py-3 2xl:mt-8 2xl:px-7 2xl:py-4">
          See Plans
        </Button>
      </div>
    </section>
  );
};

export default HomeHero;
