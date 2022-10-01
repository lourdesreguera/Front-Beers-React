import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Types from "./Types";
import Countries from "./Countries";
import Alcohol from "./Alcohol";

import {
  showAlcohol,
  showCountries,
  showTypes,
} from "../redux/menu/menu.actions";

const Nav = () => {
  const dispatch = useDispatch();
  const { types, countries, alcohol } = useSelector((state) => state.menu);

  return (
    <nav className="b-nav">
      <h2 onClick={() => dispatch(showTypes())}>Tipos:</h2>
      {types && <Types />}

      <h2 onClick={() => dispatch(showCountries())}>País:</h2>
      {countries && <Countries />}

      <h2 onClick={() => dispatch(showAlcohol())}>Alcohol:</h2>
      {alcohol && <Alcohol />}
    </nav>
  );
};

export default Nav;
