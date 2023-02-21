//Grâce a ce composant on à les resultat qui correpondent à ma recherche, il reste plus qu'a les afficher

import "./search.css";
import { useState } from "react";
import Cocktails from "../cocktails/cocktails";
function Search(props) {
  //variable d'etat qui stockera la value entrer dans la search bar
  const [cocktail, setCocktail] = useState({});
  const [allCocktails, setAllCocktails] = useState([]);

  //la fonction pour récuperer cette dernière se fait au onChange de l'input
  //maintenant que cocktail = search.value on peut rajouter cette variable a notre URL grâce a l'async function
  async function handle_click() {
    let response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail
    );
    //data étant le tableaux de resultat correspondant à notre recherche
    let data = await response.json();
    console.log("Le cockail recherché est ", cocktail);
    console.log(
      "Le tableau associé à ce cocktail est composé de ",
      data.drinks
    );
    setAllCocktails(data.drinks);
  }
  function renderCocktails() {
    return allCocktails?.map((element, index) => {
      return (
        <Cocktails
          strDrink={element.strDrink}
          strInstructions={element.strInstructions}
          strIngredient1={element.strIngredient1}
          strIngredient2={element.strIngredient2}
          strIngredient3={element.strIngredient3}
          strIngredient4={element.strIngredient4}
          strIngredient5={element.strIngredient5}
          strDrinkThumb={element.strDrinkThumb}
        />
      );
    });
  }
  return (
    <div className="search">
      <input
        id="input_search"
        type="search"
        placeholder="Search a cocktail"
        onChange={(event) => setCocktail(event.target.value)}
      />

      <button id="btn_search" onClick={handle_click}>
        Search
      </button>
      <br></br>
      <br></br>
      <br></br>
      <div>{renderCocktails()}</div>
    </div>
  );
}

export default Search;
