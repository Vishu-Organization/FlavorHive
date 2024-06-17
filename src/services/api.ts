import supabase from "../supabaseClient";

export const getAllCustomerSupportLinks = async () => {
  const { data: customerSupportLinks } = await supabase
    .schema("footer_navigation")
    .from("customer_support")
    .select("*");

  return customerSupportLinks;
};
