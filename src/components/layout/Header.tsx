import img from "../../assets/favicon_package_v0.16/android-chrome-192x192.png";
import { Link } from "@tanstack/react-router";
import supabase from "../../supabaseClient";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { Button } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useSignOut } from "../../services/use-mutations";

const Header = () => {
  const [session, setSession] = useState<Session | null>(null);

  const { mutate: signOutMutate } = useSignOut();

  const onSignout = () => {
    signOutMutate();
  };

  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    setSession(session);
  };

  useEffect(() => {
    getSession();
    // Subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => setSession(session),
    );

    // Remove the hash (#) from the URL after sign-in
    if (window.location.href.slice(-1).includes("#")) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Cleanup the subscription when the component unmounts
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

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
      <section className="mx-8 grid w-full grid-cols-2 items-center justify-between font-normal uppercase tracking-widest text-header-primary">
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
          {session?.user.user_metadata.name || session?.user.email ? (
            <span className="mr-2 inline-block normal-case">
              Welcome {session?.user.user_metadata.name || session?.user.email}!
            </span>
          ) : (
            <Link
              to="/users/sign-in"
              className="px-4 py-3 hover:text-primary"
              activeProps={{
                className: "text-primary",
              }}
            >
              Login
            </Link>
          )}

          {!session ? (
            <Link
              className="rounded-md border border-orange-600 bg-header-login-link px-6 py-3 font-bold text-white hover:border-orange-500 hover:bg-header-login-link-hover hover:text-white active:bg-header-login-link-active"
              to="/users/sign-up"
              activeProps={{
                className: "text-gray-100 bg-header-login-link-active",
              }}
            >
              Sign up
            </Link>
          ) : (
            <Button
              variant="text"
              type="button"
              sx={{ color: "orangered" }}
              onClick={onSignout}
            >
              <Logout />
            </Button>
          )}
        </div>
      </section>
    </section>
  );
};

export default Header;
