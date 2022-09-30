import React from "react";
import BeersByFilter from "../components/BeersByFilter";
import Nav from "../components/Nav";

const Beers = () => {
  return (
    <div>
      <Nav />
      <BeersByFilter />
    </div>
  );
};

export default Beers;
