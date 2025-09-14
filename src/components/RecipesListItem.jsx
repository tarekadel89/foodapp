import Styles from "./recipeslistitem.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;
export default function RecipesListItem({ recipe, setSelectedRecipeData }) {
  const handleSelectRecipe = (recipeId) => {
    // Logic to handle recipe selection can be added here
    console.log("Selected recipe:", recipeId);
    // make the fetch here
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Full recipe data:", data);
        setSelectedRecipeData(data);
      })
      .catch((error) => {
        console.error("Error fetching full recipe data:", error);
      });
  };
  return (
    <li className={Styles.recipesListItem}>
      {recipe.title}
      <img src={recipe.image} alt={recipe.title} />
      <button onClick={() => handleSelectRecipe(recipe.id)}>
        View Full Recipe
      </button>
    </li>
  );
}
