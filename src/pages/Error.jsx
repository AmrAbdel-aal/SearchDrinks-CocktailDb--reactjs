import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/error.svg";
import Wrapper from "../wappers/Error";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="not found" />
        <h1>Page Not Found!!</h1>
        <Link to={"/"}>Return Home</Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Unexpected error occured</h1>
    </Wrapper>
  );
};

export default Error;
