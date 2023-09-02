import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import loaderImage from "../assets/Heart beat.gif";
const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />

      <section className="pages-container">
        {isLoading ? <img src={loaderImage} alt="Loading ..." /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
