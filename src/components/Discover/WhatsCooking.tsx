import {
  FacebookRounded,
  Instagram,
  Pinterest,
  Telegram,
  YouTube,
} from "@mui/icons-material";
import { Link } from "@tanstack/react-router";
// import instagram from

const WhatsCooking = () => {
  const icons = [
    <Instagram
      sx={{ width: "100%", height: "100%", color: "rgb(177, 181, 189)" }}
    />,
    <FacebookRounded
      sx={{ width: "100%", height: "100%", color: "rgb(177, 181, 189)" }}
    />,
    <Pinterest
      sx={{ width: "100%", height: "100%", color: "rgb(177, 181, 189)" }}
    />,
    <YouTube
      sx={{ width: "100%", height: "100%", color: "rgb(177, 181, 189)" }}
    />,
    <Telegram
      sx={{ width: "100%", height: "100%", color: "rgb(177, 181, 189)" }}
    />,
  ];

  return (
    <section id="whats-cooking" className="bg-gray-50">
      <div id="follow-us">
        <ul className="grid list-none grid-flow-col justify-center">
          {icons.map((icon, index) => (
            <li className="m-4 py-2" key={index}>
              <Link className="flex size-8 justify-center">{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div id="newsletter-signup" className="mx-auto max-w-80 text-center">
        <aside className="align-baseline text-sm font-normal leading-relaxed text-header-primary">
          Sign up for offers, recipes, news, & more (subscribers to the Blue
          Apron recipe newsletter agree to our Privacy Policy)
        </aside>
      </div>
      <div id="blog-preview">Text</div>
    </section>
  );
};

export default WhatsCooking;
