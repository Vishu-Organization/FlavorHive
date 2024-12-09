import { forwardRef, useState } from "react";
import { OnTheMenuFilterOptions } from "../../types/on-the-menu/on-the-menu-filter";
import {
  useGetCuisineTypes,
  useGetDietTypes,
  useGetDishTypes,
  useGetHealthLabels,
  useGetMealTypes,
} from "../../services/use-queries";
import Button from "../Button";

interface Filter {
  id: number;
  value: string;
  label?: string | null;
  description?: string | null;
}

interface Filters {
  [key: string]: string[];
}

const OnTheMenuFilter = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [selectedFilterType, setSelectedFilterType] = useState<string>(
    OnTheMenuFilterOptions.Cuisine,
  );
  const [filters, setFilters] = useState<Filters>(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? (JSON.parse(savedFilters) as Filters) : {};
  });

  const handleFilterTypeSelect = (filterType: string) => {
    setSelectedFilterType(filterType);
  };

  const handleOptionChange = (option: string) => {
    if (!selectedFilterType) return;
    setFilters((prev) => {
      const currentOptions = prev[selectedFilterType] || [];
      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter((o) => o !== option) // Remove if already selected
        : [...currentOptions, option]; // Add if not selected
      return { ...prev, [selectedFilterType]: updatedOptions };
    });
  };

  const filtersData: {
    [x: string]: Filter[] | null | undefined;
  } = {
    [OnTheMenuFilterOptions.Cuisine]: useGetCuisineTypes().data,
    [OnTheMenuFilterOptions.Diet]: useGetDietTypes().data,
    [OnTheMenuFilterOptions.Dish]: useGetDishTypes().data,
    [OnTheMenuFilterOptions.Health]: useGetHealthLabels().data,
    [OnTheMenuFilterOptions.Meal]: useGetMealTypes().data,
    [OnTheMenuFilterOptions.Ingredients]: [],
  };

  const handleDone = () => {
    localStorage.setItem("filters", JSON.stringify(filters));
  };

  return (
    <div
      ref={ref}
      role="dialog"
      className={`absolute left-1/2 top-10 z-10 w-[600px] min-w-96 -translate-x-1/2 transform space-y-2 bg-white p-4 pb-0 shadow-lg`}
    >
      <div className="flex">
        <nav className="w-1/5 border-r border-slate-100 text-sm">
          <ul>
            {Object.keys(filtersData).map((filterType) => (
              <li key={filterType} className="p-2">
                <a
                  className="cursor-pointer rounded-md p-2 text-primary transition-all hover:bg-slate-100 hover:no-underline"
                  onClick={() => handleFilterTypeSelect(filterType)}
                >
                  {filterType}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mx-5 grid auto-rows-min grid-cols-3 gap-4 text-xs">
          {filtersData[selectedFilterType]?.map(({ label, value }, index) => {
            return (
              <li className="flex items-center gap-2" key={index}>
                <input
                  type="checkbox"
                  id={`input-checkbox-${value}`}
                  name={value}
                  className="cursor-pointer"
                  checked={
                    filters[selectedFilterType]?.includes(value) || false
                  }
                  onChange={() => handleOptionChange(value)}
                />
                <label
                  className="cursor-pointer capitalize"
                  htmlFor={`input-checkbox-${value}`}
                >
                  {label || value}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <footer className="flex justify-between p-4 capitalize">
        <Button
          variant="white"
          className="rounded-none p-0 text-xs capitalize text-gray20 hover:bg-transparent"
        >
          Clear all
        </Button>
        <div className="flex space-x-6">
          <Button
            variant="white"
            className="rounded-none p-0 text-xs capitalize text-gray20 hover:bg-transparent"
          >
            Clear
          </Button>
          <Button
            onClick={handleDone}
            className="rounded-md font-medium capitalize"
          >
            Done
          </Button>
        </div>
      </footer>
    </div>
  );
});

export default OnTheMenuFilter;