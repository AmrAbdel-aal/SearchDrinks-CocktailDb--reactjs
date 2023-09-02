import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Wrapper from "../wappers/cocktail";
const Cocktail = () => {
  const data = useLoaderData();
  const item = data[0];
  console.log(item);
  return (
    <Wrapper>
      <Link to={"/"} className="return-btn ">
        Back Home
      </Link>
      <p className="drink-name">{item.strDrink}</p>
      <div className="card">
        <div className="image">
          <img src={item.strDrinkThumb} alt="" />
        </div>
        <div className="info">
          <p>
            <span>name</span> {item.strDrink}
          </p>
          <p>
            <span>Category</span> {item.strCategory}
          </p>
          <p>
            <span>Info</span> {item.strAlcoholic}
          </p>
          <p>
            <span>Glass</span> {item.strGlass}
          </p>
          <p>
            <span>Ingredients</span> {}
          </p>
          <p>
            <span>Instructions</span> {item.strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
