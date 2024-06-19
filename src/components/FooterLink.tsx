import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { CustomerSupportLinkType } from "../types/types";

type FooterLinkProps = {
  title: string | null;
  type: number | null;
  to: string | null;
  children?: ReactNode;
};

const FooterLink = ({ title, type, to, children }: FooterLinkProps) => {
  if (!type || type === CustomerSupportLinkType.Link) {
    return (
      <Link
        to={`/${to}`}
        className="text-footer-text-primary capitalize hover:text-footer-text-hover"
        activeProps={{
          className: "underline text-footer-text-hover",
        }}>
        {title}
      </Link>
    );
  }
};

export default FooterLink;
