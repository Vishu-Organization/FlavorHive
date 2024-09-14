import img from "../../assets/favicon_package_v0.16/android-chrome-192x192.png";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <section
      id="header"
      className="fixed left-0 right-0 z-10 flex max-h-20 w-full bg-slate-50 p-4 text-sm"
    >
      <div className="flex">
        <img
          src={img}
          height="40"
          width="40"
          title="FlavorHive"
          alt="FlavourHive icon"
          className="rounded-full"
        />
      </div>
      <section className="text-header-primary mx-8 grid w-full grid-cols-2 items-center justify-between font-normal uppercase tracking-widest">
        <div>
          <Link
            to="/on-the-menu"
            className="px-4 py-3 hover:text-primary"
            activeProps={{
              className: "text-primary",
            }}
          >
            on the menu
          </Link>
          <Link
            to="/pages/vision"
            className="px-4 py-3 hover:text-primary"
            activeProps={{
              className: "text-primary",
            }}
          >
            our vision
          </Link>
          <Link
            to="/pages/blog"
            className="px-4 py-3 hover:text-primary"
            activeProps={{
              className: "text-primary",
            }}
          >
            blog
          </Link>
        </div>
        <div className="justify-self-end">
          <Link
            to="/users/sign-in"
            className="px-4 py-3 hover:text-primary"
            activeProps={{
              className: "text-primary",
            }}
          >
            Login
          </Link>
          <Link
            className="bg-header-login-link hover:bg-header-login-link-hover active:bg-header-login-link-active rounded-md border border-orange-600 px-6 py-3 font-bold text-white hover:border-orange-500 hover:text-white"
            to="/users/sign-up"
            activeProps={{
              className: "text-gray-100 bg-header-login-link-active",
            }}
          >
            Sign up
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Header;
