//Afficher le tableau data.drinks (les resultats de notre recherche)

import "./cocktails.css";
function Cocktails(props) {
  console.log(props);
  return (
    <div className="cocktails">
      <div id="cocktails_area">
        {/*NOM */}
        <h2>{props.strDrink}</h2>
        <img src={props.strDrinkThumb} alt="new" />
        {/*Instructions */}
        <h3>{"Instructions : " + props.strInstructions}</h3>
        {/*INGREDIENTS */}
        <h3>{"Premier Ingredient : " + props.strIngredient1}</h3>
        <h3>{"Deuxième Ingredient : " + props.strIngredient2}</h3>
        <h3>{"Troisième Ingredient : " + props.strIngredient3}</h3>
        <h3>{"Quatrième Ingredient : " + props.strIngredient4}</h3>
        <h3>{"Cinquième Ingredient : " + props.strIngredient5}</h3>
      </div>
    </div>
  );
}

export default Cocktails;
