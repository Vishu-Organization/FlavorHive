import { useGetAllCustomerSupportLinks } from "../../services/use-queries";
import FooterLink from "../FooterLink";

const Footer = () => {
  const { data: customerSupportLinks } = useGetAllCustomerSupportLinks();

  return (
    <footer className="bg-primary text-gray-50 flex flex-col mt-auto">
      {customerSupportLinks?.map((link) => (
        <FooterLink
          key={link.id}
          title={link.name}
          type={link.type}
          to={link.to}></FooterLink>
      ))}
    </footer>
  );
};

export default Footer;
