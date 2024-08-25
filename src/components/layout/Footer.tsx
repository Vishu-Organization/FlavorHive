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

  const productLinks = [
    {
      links: productsLinks,
      title: "",
    },
    {
      links: teamLinks,
      title: "",
    },
    {
      links: discountedPeopleLinks,
      title: "",
    },
    {
      links: customerSupportLinks,
      title: "Customer Support",
    },
    {
      links: legalLinks,
      title: "&copy; Blue Apron, LLC 202",
    },
  ];

  return (
    <footer className="mr-0 mt-auto grid grid-cols-5 justify-items-start px-[2%] text-xs leading-[2em] text-gray-50 md:grid md:bg-primary md:py-[3%] lg:px-[5%] lg:py-[4%] xl:px-[6%] xl:py-[4%] xl:text-sm 2xl:px-[12%] 2xl:py-[5%]">
      {productLinks.map(({ links, title }, id) => (
        <section
          key={id}
          className="grid grid-flow-col auto-rows-min md:grid-flow-row"
        >
          {title && (
            <span
              className="mt-4 leading-[2em] text-slate-400 md:mt-0 md:text-gray-50"
              dangerouslySetInnerHTML={{ __html: title }}
            ></span>
          )}
          {links?.map(({ id, name, to, type }) => (
            <FooterLink key={id} title={name} to={to} type={type}></FooterLink>
          ))}
        </section>
      ))}
    </footer>
  );
};

export default Footer;
