import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Wrapper from "../wappers/AboutPage";
const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>
        CockTail, an innovative libation destination, stands as a premier
        provider of meticulously crafted cocktails and an array of delectable
        beverages. With an unwavering dedication to the art of mixology,
        Cocktail has redefined the landscape of drink experiences. Our expert
        mixologists blend premium spirits, fresh ingredients, and creative flair
        to concoct a symphony of flavors that tantalize the palate and elevate
        the senses. Beyond just a beverage provider, Cocktail curates an
        immersive journey into the world of libations, where every sip tells a
        story. Whether it's the classics reimagined or signature creations, we
        take pride in delivering an unparalleled beverage adventure that caters
        to connoisseurs and casual enthusiasts alike. Welcome to Cocktail, where
        every drink is an embodiment of craftsmanship and passion.
      </p>
    </Wrapper>
  );
};

export default About;
