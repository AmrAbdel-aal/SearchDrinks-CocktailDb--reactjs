import React from "react";
import { Link } from "react-router-dom";

const CocktailCard = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={item.strDrinkThumb} alt="" />
        </div>
        <div className="info">
          <h4>{item.strDrink}</h4>
          <h5>{item.strGlass}</h5>
          <p>{item.strAlcoholic}</p>
          <Link to={`cocktail/${item.idDrink}`} className="details-btn">
            Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default CocktailCard;
