import { useQueries, useQuery } from "@tanstack/react-query";
import {
  getAllCustomerSupportLinks,
  getAllDiscountedPeopleLinks,
  getLegalLinks,
  getProductsLinks,
  getTeamLinks,
} from "./api";

export const useGetAllCustomerSupportLinks = () => {
  return useQuery({
    queryKey: ["customer support links"],
    queryFn: getAllCustomerSupportLinks,
    refetchOnWindowFocus: false,
  });
};

export const useGetAllDiscountedPeopleLinks = () => {
  return useQuery({
    queryKey: ["heroes links"],
    queryFn: getAllDiscountedPeopleLinks,
    refetchOnWindowFocus: false,
  });
};

export const useGetTeamLinks = () => {
  return useQuery({
    queryKey: ["team links"],
    queryFn: getTeamLinks,
    _optimisticResults: "optimistic",
    refetchOnWindowFocus: false,
  });
};

export const useGetProductsLinks = () => {
  return useQuery({
    queryKey: ["products links"],
    queryFn: getProductsLinks,
    _optimisticResults: "optimistic",
    refetchOnWindowFocus: false,
  });
};

export const useGetLegalLinks = () => {
  return useQuery({
    queryKey: ["legal links"],
    queryFn: getLegalLinks,
    _optimisticResults: "optimistic",
    refetchOnWindowFocus: false,
  });
};