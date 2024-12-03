import { useEffect, useState } from "react";
import {
  useGetCuisineTypes,
  useGetDietTypes,
  useGetDishTypes,
  useGetHealthLabels,
  useGetMealTypes,
} from "../../services/use-queries";

import { OnTheMenuFilterOptions } from "../../types/on-the-menu/on-the-menu-filter";

interface Filter {
  id: number;
  value: string;
  label?: string | null;
  description?: string | null;
}

interface Filters {
  [key: string]: string[];
}

const OnTheMenuFilter = () => {
  const [selectedFilterType, setSelectedFilterType] = useState<string | null>(
    null,
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
    <div className="flex w-[600px] min-w-96 gap-6 p-4">
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

      <ul className="grid auto-rows-min grid-cols-3 gap-4 text-xs">
        {selectedFilterType &&
          filtersData[selectedFilterType]?.map(({ label, value }, index) => {
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

      <div>
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export default OnTheMenuFilter;
