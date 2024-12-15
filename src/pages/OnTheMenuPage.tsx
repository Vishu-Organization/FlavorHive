import { createLazyRoute } from "@tanstack/react-router";
import OnTheMenuHeader from "../components/on-the-menu/OnTheMenuHeader";
import { useState } from "react";

import { replaceKeysInObject } from "../services/helper-functions";
import { useGetOnTheMenuData } from "../services/use-queries";
import Loader from "../components/layout/Loader";
import OnTheMenuRecipes from "../components/on-the-menu/OnTheMenuRecipes";
import { RecipeHit } from "../types/home";
import { Filters } from "../types/on-the-menu/on-the-menu-filter";

const OnTheMenuPage = () => {
  const [appliedFilters, setAppliedFilters] = useState<Filters | null>(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters
      ? replaceKeysInObject(JSON.parse(savedFilters) as Filters)
      : null;
  });
  const {
    data: recipes,
    isPending,
    isFetching,
    isLoading,
    isError,
    error,
  } = useGetOnTheMenuData(appliedFilters || {});

  console.log(recipes, isPending, isFetching, isLoading, isError, error);

  return (
    <section id="on-the-menu">
      <OnTheMenuHeader setAppliedFilters={setAppliedFilters} />
      {isPending && <Loader />}
      <OnTheMenuRecipes recipes={recipes as RecipeHit[]} />
    </section>
  );
};

export default OnTheMenuPage;

export const Route = createLazyRoute("/on-the-menu")({
  component: OnTheMenuPage,
});
