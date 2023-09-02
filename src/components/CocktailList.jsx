import React from "react";
import CocktailCard from "./CocktailCard";
import Wrapper from "../wappers/CocktailList";
const CocktailList = ({ data }) => {
  if (!data) {
    return <h1>You entered wrong search value!!</h1>;
  }
  return (
    <Wrapper>
      {data.map((item) => {
        return <CocktailCard key={item.idDrink} item={item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
