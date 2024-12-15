import { RecipeHit } from "../../types/home";
import OnTheMenuRecipeCard from "./OnTheMenuRecipeCard";

interface Props {
  recipes: RecipeHit[];
}

const OnTheMenuRecipes = ({ recipes }: Props) => {
  return (
    <section id="recipes-list" className="container mx-auto p-4">
      <div className="grid grid-cols-2 justify-items-center gap-y-10 sm:grid-cols-2 md:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4">
        {recipes?.map((recipe, index) => {
          return <OnTheMenuRecipeCard key={index} recipe={recipe} />;
        })}
      </div>
    </section>
  );
};

export default OnTheMenuRecipes;
