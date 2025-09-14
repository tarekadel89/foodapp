import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

export default function Body() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <SearchBar setRecipes={setRecipes} />
      <SearchResult recipes={recipes} />
    </div>
  );
}
