import { useGetAllCustomerSupportLinks } from "../../services/use-queries";
import FooterLink from "../FooterLink";

const Footer = () => {
  const { data: customerSupportLinks } = useGetAllCustomerSupportLinks();

  // console.log(data);

  return (
    <footer className="bg-primary text-gray-50 flex flex-col mt-auto">
      {customerSupportLinks?.map((link) => <FooterLink key={link.id} />)}
    </footer>
  );
};

export default Footer;
