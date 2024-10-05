import supabase from "../supabaseClient";
import { SignUpUser } from "../types/types";

export const getAllCustomerSupportLinks = async () => {
  const { data: customerSupportLinks } = await supabase
    .schema("footer_navigation")
    .from("customer_support")
    .select("id, name, type, to, test_id")
    .order("id");

  return customerSupportLinks;
};

export const getAllDiscountedPeopleLinks = async () => {
  const { data: discountedPeopleLinks } = await supabase
    .schema("footer_navigation")
    .from("heroes")
    .select("id, name, to, type, test_id")
    .order("id");
  return discountedPeopleLinks;
};

export const getTeamLinks = async () => {
  const { data: teamLinks } = await supabase
    .schema("footer_navigation")
    .from("team")
    .select("id, name, to, type, test_id")
    .order("id");
  return teamLinks;
};

export const getProductsLinks = async () => {
  const { data: productsLinks } = await supabase
    .schema("footer_navigation")
    .from("product_links")
    .select("id, name, to, type, test_id")
    .order("id");
  return productsLinks;
};

export const getLegalLinks = async () => {
  const { data: legalLinks } = await supabase
    .schema("footer_navigation")
    .from("legal")
    .select("id, name, to, type, test_id")
    .order("id");
  return legalLinks;
};

export const getOurVisionScreenDetails = async () => {
  const { data: ourVisionData } = await supabase
    .schema("our_vision")
    .from("description")
    .select("id, description");
  return ourVisionData;
};

export const signUpWithPassword = async (user: SignUpUser) => {
  const { email, password, name } = user;
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (signUpError) {
    throw signUpError;
  }
  return data;
};

export const signInWithGoogle = async () => {
  const { data, error: signInError } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (signInError) {
    throw signInError;
  }
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
};

