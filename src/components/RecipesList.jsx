import RecipesListItem from "./RecipesListItem";
export default function RecipesList({ recipes, setSelectedRecipeData }) {
  return (
    <div>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipesListItem
            recipe={recipe}
            key={recipe.id}
            setSelectedRecipeData={setSelectedRecipeData}
          />
        ))}
      </ul>
    </div>
  );
}
