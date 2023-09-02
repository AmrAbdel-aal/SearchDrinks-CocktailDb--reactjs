import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const Landing = () => {
  const data = useLoaderData();

  return (
    <>
      <SearchForm />
      <CocktailList data={data} />
    </>
  );
};

export default Landing;
