import Button from "../Button";

const HomeBanner = () => {
  return (
    <section
      id="banner"
      className="mx-4 grid max-w-[1120px] grid-rows-2 md:grid-cols-[40%,1fr] md:grid-rows-1 lg:mx-auto"
    >
      <div className="max-h-52 overflow-hidden md:relative md:order-last md:max-h-none">
        <img
          loading="lazy"
          className="align-middle md:hidden"
          src="https://media.blueapron.com/assets/registration/homepage/marble-variety-prepared-mobile.webp?width=800&quality=90"
        />
        <img
          loading="lazy"
          className="hidden h-full max-h-none w-full -translate-x-1/2 align-middle md:absolute md:left-1/2 md:block"
          src="https://media.blueapron.com/assets/registration/homepage/marble-variety-prepared.webp?height=500&quality=90"
        />
      </div>
      <div className="flex flex-col space-y-3 bg-primary px-4 py-3 text-white">
        <h1 className="text-lg font-bold">Save up to $4 per serving</h1>
        <p className="text-blue40 text-base font-normal">
          Enjoy{" "}
          <span className="font-bold text-white">unlimited menu access </span>to
          100+ weekly options. The more you order, the more you save!
        </p>
        <Button type="button" variant="white" className="w-1/5 md:w-1/2">
          See Plans
        </Button>
      </div>
    </section>
  );
};

export default HomeBanner;
