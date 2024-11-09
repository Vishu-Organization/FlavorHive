import { useQuery } from "@tanstack/react-query";
import {
  getAllCustomerSupportLinks,
  getAllDiscountedPeopleLinks,
  getHowItWorks,
  getLegalLinks,
  getMealsShippedData,
  getOurVisionScreenDetails,
  getProductsLinks,
  getSignupAdditionalInfo,
  getTeamLinks,
  getTestimonials,
} from "./api";
import { queryClient } from "../App";

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

export const useGetOurVisionScreenDetails = async () => {
  return await queryClient.ensureQueryData({
    queryKey: ["our vision"],
    queryFn: getOurVisionScreenDetails,
    revalidateIfStale: true,
  });
};

const useGetTestimonials = async () => {
  return await queryClient.ensureQueryData({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    revalidateIfStale: true,
  });
};

const useGetMealsShipped = async () => {
  return await queryClient.ensureQueryData({
    queryKey: ["meals shipped"],
    queryFn: getMealsShippedData,
    revalidateIfStale: true,
  });
};

const useGetHowItWorks = async () => {
  return await queryClient.ensureQueryData({
    queryKey: ["how it works"],
    queryFn: getHowItWorks,
    revalidateIfStale: true,
  });
};

const useGetSignupAdditionalInfo = async () => {
  return await queryClient.ensureQueryData({
    queryKey: ["signup additional info"],
    queryFn: getSignupAdditionalInfo,
    revalidateIfStale: true,
  });
};

export const getHomeData = async () => ({
  testimonials: await useGetTestimonials(),
  mealsShipped: await useGetMealsShipped(),
});

export const getSignupData = async () => ({
  howItWorks: await useGetHowItWorks(),
  additionalInfo: await useGetSignupAdditionalInfo(),
});
