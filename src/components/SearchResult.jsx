import RecipesList from "./RecipesList";
import SelectedRecipe from "./SelectedRecipe";
import Styles from "./searchResult.module.css";
import { useState } from "react";

export default function SearchResult({ recipes }) {
  const [selectedRecipeData, setSelectedRecipeData] = useState(null);

  return (
    <div className={Styles.searchResultContainer}>
      <RecipesList
        recipes={recipes}
        setSelectedRecipeData={setSelectedRecipeData}
        className={Styles.recipesListWrapper}
      />
      <SelectedRecipe
        selectedRecipeData={selectedRecipeData}
        className={Styles.selectedRecipeWrapper}
      />
    </div>
  );
}
