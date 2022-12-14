import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBeers, getBeers } from "../redux/beers/beers.actions";
import { showAlcohol } from "../redux/menu/menu.actions";

const Alcohol = () => {
  const dispatch = useDispatch();
  const { allBeers } = useSelector((state) => state.beers);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllBeers());
  }, []);

  return (
    <div className="b-header__nav b-header__nav--submenu">
      <p
        className="b-link b-link--submenu"
        onClick={() => {
          dispatch(getBeers());
          dispatch(showAlcohol());
        }}
      >
        Todas
      </p>
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
          .sort(function (a, b) {
            return a - b;
          })
          .map((type) => {
            return (
              <p
                className="b-link b-link--submenu"
                key={type._id}
                onClick={() => {
                  dispatch(getBeers(type));
                  dispatch(showAlcohol());
                }}
              >
                {type}% vol.
              </p>
            );
          })}
    </div>
  );
};

export default Alcohol;
