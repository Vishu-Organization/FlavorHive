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
    <footer className="mr-0 mt-auto grid-cols-5 justify-items-start px-[2%] text-xs leading-[2em] text-gray-50 md:grid md:bg-primary md:py-[3%] lg:px-[5%] lg:py-[4%] xl:px-[6%] xl:py-[4%] xl:text-sm 2xl:px-[12%] 2xl:py-[5%]">
      <section className="grid grid-flow-col auto-rows-min md:grid-flow-row">
        {productsLinks?.map((link) => (
          <FooterLink key={link.id} title={link.name} to={link.to}></FooterLink>
        ))}
      </section>
      <section className="grid grid-flow-col auto-rows-min md:grid-flow-row">
        {teamLinks?.map((link) => (
          <FooterLink key={link.id} title={link.name} to={link.to}></FooterLink>
        ))}
      </section>
      <section className="grid grid-flow-col auto-rows-min md:grid-flow-row">
        {discountedPeopleLinks?.map((link) => (
          <FooterLink key={link.id} title={link.name} to={link.to}></FooterLink>
        ))}
      </section>
      {customerSupportLinks && (
        <section className="grid auto-rows-min justify-items-center md:justify-items-start xl:justify-self-center">
          <span className="mt-4 leading-[2em] text-slate-400 md:mt-0 md:text-gray-50">
            Customer Support
          </span>
          {customerSupportLinks?.map((link) => (
            <FooterLink
              key={link.id}
              title={link.name}
              type={link.type}
              to={link.to}
            ></FooterLink>
          ))}
        </section>
      )}
      {legalLinks && (
        <section className="grid auto-rows-min justify-items-center md:justify-items-start xl:justify-self-end">
          <span className="mt-4 leading-[2em] text-slate-400 md:mt-0 md:text-gray-50">
            &copy; Blue Apron, LLC 202
          </span>
          {legalLinks?.map((link) => (
            <FooterLink
              key={link.id}
              title={link.name}
              to={link.to}
            ></FooterLink>
          ))}
        </section>
      )}
    </footer>
  );
};

export default Footer;
