export default function SelectedRecipe({ selectedRecipeData }) {
  return (
    <div>
      {selectedRecipeData ? (
        <div>
          <h2>{selectedRecipeData.title}</h2>
          <img src={selectedRecipeData.image} alt={selectedRecipeData.title} />
          <p>Number of servings: {selectedRecipeData.servings}</p>
          <p>Ingredients:</p>
          <ul>
            {selectedRecipeData.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
          <p>Steps:</p>
          <ol>
            {selectedRecipeData.analyzedInstructions[0]?.steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
