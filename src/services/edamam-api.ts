import axios from "axios";

type SelectorMap = {
  fields: string[];
  mealType?: string;
  cuisineType?: string;
  health?: string;
  dishType?: string;
  diet?: string;
};

const appId = "7f563e49";
const appKeys = [
  "4be7f47dd4dc6fd6ed0b7644e352f6aa",
  "7bbf70c600c349da70d8d807a2949f29",
];

const homeRecipeFields = ["label", "image", "images"];

const getBaseUrl = () =>
  `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKeys[Math.floor(Math.random() * appKeys.length)]}`;

const buildUrl = (selectorMap: SelectorMap) => {
  const selectors = Object.entries(selectorMap)
    .map(([key, value]) => {
      if (key !== "fields") {
        return `&${key}=${value}`;
      }
    })
    .join("");

  return `${getBaseUrl()}${appendFields(selectorMap.fields)}${selectors}`;
};

const appendFields = (fields: string[]) => {
  const urlPart = fields.map((field) => {
    return `&field=${field}`;
  });
  return urlPart.join("");
};

const getRecipe = async (url: string): Promise<Recipe> => {
  try {
    const {
      data: { hits },
    } = await axios.get(url);
    const [{ recipe }] = hits;
    return recipe;
  } catch (error) {
    throw error;
  }
};

export const getHomeMenu = async (): Promise<HomeMenu> => {
  try {
    return {
      mediterranean: await getRecipe(
        buildUrl({ fields: homeRecipeFields, cuisineType: "Mediterranean" }),
      ),
      breakFast: await getRecipe(
        buildUrl({ fields: homeRecipeFields, mealType: "Breakfast" }),
      ),
      vegetarian: await getRecipe(
        buildUrl({ fields: homeRecipeFields, health: "vegetarian" }),
      ),
      french: await getRecipe(
        buildUrl({ fields: homeRecipeFields, cuisineType: "French" }),
      ),
      indian: await getRecipe(
        buildUrl({ fields: homeRecipeFields, cuisineType: "Indian" }),
      ),
      starter: await getRecipe(
        buildUrl({ fields: homeRecipeFields, dishType: "Starter" }),
      ),
      snack: await getRecipe(
        buildUrl({ fields: homeRecipeFields, mealType: "Snack" }),
      ),
      mexican: await getRecipe(
        buildUrl({ fields: homeRecipeFields, cuisineType: "Mexican" }),
      ),
      pancake: await getRecipe(
        buildUrl({ fields: homeRecipeFields, dishType: "Pancake" }),
      ),
      soup: await getRecipe(
        buildUrl({ fields: homeRecipeFields, dishType: "Soup" }),
      ),
    };
  } catch (error) {
    throw error;
  }
};
