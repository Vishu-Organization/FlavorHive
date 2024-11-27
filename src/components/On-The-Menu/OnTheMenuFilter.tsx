import { useState } from "react";
import {
  useGetCuisineTypes,
  useGetDietTypes,
  useGetDishTypes,
  useGetHealthLabels,
  useGetMealTypes,
} from "../../services/use-queries";

interface Filter {
  id: number;
  value: string;
  label?: string | null;
  description?: string | null;
}

const OnTheMenuFilter = () => {
  const filterTypes = [
    "Cuisine",
    "Diet",
    "Dish",
    "Health",
    "Meal",
    "Ingredients",
  ];

  const [filters, setFilters] = useState<Filter[] | null | undefined>(null);

  const { data: cuisines } = useGetCuisineTypes();
  const { data: diets } = useGetDietTypes();
  const { data: dishes } = useGetDishTypes();
  const { data: healthLables } = useGetHealthLabels();
  const { data: meals } = useGetMealTypes();
  // console.log(data);

  const updateFilters = (filterParam: string) => {
    switch (filterParam) {
      case "Cuisine":
        setFilters(cuisines);
        break;
      case "Diet":
        setFilters(diets);
        break;
      case "Dish":
        setFilters(dishes);
        break;
      case "Health":
        setFilters(healthLables);
        break;
      case "Meal":
        setFilters(meals);
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex min-w-96 max-w-[600px]">
      <nav className="w-1/5">
        <ul>
          {filterTypes.map((filter, index) => (
            <li key={index}>
              <a onClick={() => updateFilters(filter)}>{filter}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>{filters?.length && <p>{filters[0].value}</p>}</div>
    </div>
  );
};

export default OnTheMenuFilter;
