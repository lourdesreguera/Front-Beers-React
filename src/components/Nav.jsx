import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Types from "./Types";
import Countries from "./Countries";
import Alcohol from "./Alcohol";
import { useEffect } from "react";
import {
  showAlcohol,
  showCountries,
  showTypes,
} from "../redux/menu/menu.actions";

const Nav = () => {
  const dispatch = useDispatch();
  const { types, countries, alcohol } = useSelector((state) => state.menu);

  return (
    <header className="b-header">
      <nav className="b-header__nav">
        <h2
          className="b-link b-link--head"
          onClick={() => dispatch(showTypes())}
        >
          Tipos
        </h2>

        <h2
          className="b-link b-link--head"
          onClick={() => dispatch(showCountries())}
        >
          País
        </h2>

        <h2
          className="b-link b-link--head"
          onClick={() => dispatch(showAlcohol())}
        >
          Alcohol
        </h2>
      </nav>

      {types && <Types />}
      {countries && <Countries />}
      {alcohol && <Alcohol />}
    </header>
  );
};

export default Nav;
