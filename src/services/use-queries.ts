import { useQueries, useQuery } from "@tanstack/react-query";
import { getAllCustomerSupportLinks } from "./api";

export const useGetAllCustomerSupportLinks = () => {
  return useQuery({
    queryKey: ["customer support"],
    queryFn: getAllCustomerSupportLinks,
  });
};
