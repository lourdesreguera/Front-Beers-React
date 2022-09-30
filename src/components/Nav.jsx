import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBeers, getBeers } from "../redux/beers/beers.actions";
import Types from "./Types";
import Countries from "./Countries";

const Nav = () => {
  const dispatch = useDispatch();
  const { allBeers } = useSelector((state) => state.beers);
  const [showType, setShowType] = useState(false);
  const [showCountry, setShowCountry] = useState(false);

  useEffect(() => {
    dispatch(getAllBeers());
  }, []);

  const showMenuType = () => {
    setShowType(!showType);
    setShowCountry(false);
  };

  const showMenuCountry = () => {
    setShowCountry(!showCountry);
    setShowType(false);
  };

  return (
    <nav className="b-nav">
      <h2 onClick={showMenuType}>Tipos:</h2>
      {showType && <Types />}

      <h2 onClick={showMenuCountry}>País:</h2>
      {showCountry && <Countries />}

      <h2>Alcohol:</h2>
      <p onClick={() => dispatch(getBeers())}>Todas</p>
      {allBeers &&
        Array.from(
          allBeers.map((beer) => {
            return beer.alcohol;
          })
        )
          .filter((beer, index) => {
            return (
              Array.from(
                allBeers.map((beer) => {
                  return beer.alcohol;
                })
              ).indexOf(beer) === index
            );
          })
          .map((alcohol) => {
            return (
              <p key={alcohol._id} onClick={() => dispatch(getBeers(alcohol))}>
                {alcohol}
              </p>
            );
          })}
    </nav>
  );
};

export default Nav;
