import {
  useGetAllCustomerSupportLinks,
  useGetAllDiscountedPeopleLinks,
  useGetLegalLinks,
  useGetProductsLinks,
  useGetTeamLinks,
} from "../../services/use-queries";
import FooterLink from "../FooterLink";

const Footer = () => {
  const { data: customerSupportLinks } = useGetAllCustomerSupportLinks();
  const { data: discountedPeopleLinks } = useGetAllDiscountedPeopleLinks();
  const { data: teamLinks } = useGetTeamLinks();
  const { data: productsLinks } = useGetProductsLinks();
  const { data: legalLinks } = useGetLegalLinks();

  return (
    <footer className="md:bg-primary text-gray-50 md:grid grid-cols-5 justify-items-start mt-auto mr-0 md:py-[3%] px-[2%] lg:py-[4%] lg:px-[5%] xl:py-[4%] xl:px-[6%] 2xl:py-[5%] 2xl:px-[12%] text-xs xl:text-sm leading-[2em]">
      <section className="grid auto-rows-min grid-flow-col md:grid-flow-row">
        {productsLinks?.map((link) => (
          <FooterLink key={link.id} title={link.name} to={link.to}></FooterLink>
        ))}
      </section>
      <section className="grid auto-rows-min grid-flow-col md:grid-flow-row">
        {teamLinks?.map((link) => (
          <FooterLink key={link.id} title={link.name} to={link.to}></FooterLink>
        ))}
      </section>
      <section className="grid auto-rows-min grid-flow-col md:grid-flow-row">
        {discountedPeopleLinks?.map((link) => (
          <FooterLink key={link.id} title={link.name} to={link.to}></FooterLink>
        ))}
      </section>
      <section className="xl:justify-self-center grid auto-rows-min justify-items-center md:justify-items-start">
        <span className="text-slate-400 md:text-gray-50 mt-4 md:mt-0 leading-[2em]">
          Customer Support
        </span>
        {customerSupportLinks?.map((link) => (
          <FooterLink
            key={link.id}
            title={link.name}
            type={link.type}
            to={link.to}></FooterLink>
        ))}
      </section>
      <section className="grid xl:justify-self-end auto-rows-min justify-items-center md:justify-items-start">
        <span className="text-slate-400 md:text-gray-50 mt-4 md:mt-0 leading-[2em]">
          &copy; Blue Apron, LLC 2024
        </span>
        {legalLinks?.map((link) => (
          <FooterLink key={link.id} title={link.name} to={link.to}></FooterLink>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
