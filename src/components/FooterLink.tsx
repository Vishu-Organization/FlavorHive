import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { LinkType } from "../types/types";

type FooterLinkProps = {
  title: string | null;
  type?: number | null;
  to: string | null;
  testId: string | null;
  children?: ReactNode;
};

function FooterLink({ title, type, to, testId }: FooterLinkProps) {
  const navigation =
    !type || type === LinkType.Link
      ? `/${to}`
      : type === LinkType.Email
        ? `mailto:${title}`
        : `tel:${title}`;

  return (
    navigation && (
      <Link
        data-testid={testId}
        to={navigation}
        aria-label={title ?? ""}
        className="justify-self-start capitalize leading-[2em] text-gray-500 hover:text-footer-hover md:text-footer-primary"
        activeProps={{
          className: "text-footer-hover underline md:text-footer-hover",
        }}
      >
        {title}
      </Link>
    )
  );
};

export default FooterLink;
