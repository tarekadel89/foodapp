import styles from "./searchbar.module.css";
import { useEffect, useState } from "react";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBar({ setRecipes }) {
  const [searchTerm, setSearchTerm] = useState("");
  function searchForRecipes() {
    if (searchTerm === "" || searchTerm === null || searchTerm === undefined)
      return;
    console.log("Searching for recipes with term:", searchTerm);
    fetch(`${API_URL}?query=${searchTerm}&apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Recipes found:", data.results);
        setRecipes(data.results);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }

  function searchBtnClicked() {
    searchForRecipes();
  }

  useEffect(() => {
    searchTerm.length < 3 ? null : searchForRecipes();
  }, [searchTerm]);

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          name="search-bar"
          type="text"
          value={searchTerm}
          onChange={(e) => handleInputChange(e)}
          placeholder="Search for recipes..."
        />
        <button onClick={searchBtnClicked}>Search</button>
      </div>
      {searchTerm.length > 0 && searchTerm.length < 3 ? (
        <span className={styles.searchHint}>type 3 letters or hit search.</span>
      ) : null}
    </div>
  );
}
