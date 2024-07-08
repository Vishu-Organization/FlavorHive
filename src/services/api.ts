import supabase from "../supabaseClient";

export const getAllCustomerSupportLinks = async () => {
  const { data: customerSupportLinks } = await supabase
    .schema("footer_navigation")
    .from("customer_support")
    .select("id, name, type, to")
    .order("id");

  return customerSupportLinks;
};

export const getAllDiscountedPeopleLinks = async () => {
  const { data: discountedPeopleLinks } = await supabase
    .schema("footer_navigation")
    .from("heroes")
    .select("id, name, to")
    .order("id");
  return discountedPeopleLinks;
};

export const getTeamLinks = async () => {
  const { data: teamLinks } = await supabase
    .schema("footer_navigation")
    .from("team")
    .select("id, name, to, type")
    .order("id");
  return teamLinks;
};

export const getProductsLinks = async () => {
  const { data: productsLinks } = await supabase
    .schema("footer_navigation")
    .from("product_links")
    .select("id, name, to")
    .order("id");
  return productsLinks;
};

export const getLegalLinks = async () => {
  const { data: legalLinks } = await supabase
    .schema("footer_navigation")
    .from("legal")
    .select("id, name, to")
    .order("id");
  return legalLinks;
};

