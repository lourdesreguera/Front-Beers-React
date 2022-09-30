import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBeers, getBeers, setBeers } from "../redux/beers/beers.actions";
import { useState } from "react";
import { useEffect } from "react";
import BeersByFilter from "../components/BeersByFilter";

const Beers = () => {
  const dispatch = useDispatch();
  const { beers, allBeers } = useSelector((state) => state.beers);

  useEffect(() => {
    dispatch(getAllBeers());
    dispatch(getBeers());
  }, []);

  return (
    <div>
      <nav>
        <h2>Tipo:</h2>
        <p onClick={() => dispatch(getBeers())}>Todas</p>
        {allBeers &&
          Array.from(
            allBeers.map((beer) => {
              return beer.type;
            })
          )
            .filter((beer, index) => {
              return (
                Array.from(
                  allBeers.map((beer) => {
                    return beer.type;
                  })
                ).indexOf(beer) === index
              );
            })
            .map((type) => {
              return (
                <p key={type._id} onClick={() => dispatch(getBeers(type))}>
                  {type}
                </p>
              );
            })}

        <h2>País:</h2>
        <p onClick={() => dispatch(getBeers())}>Todas</p>
        {allBeers &&
          Array.from(
            allBeers.map((beer) => {
              return beer.country;
            })
          )
            .filter((beer, index) => {
              return (
                Array.from(
                  allBeers.map((beer) => {
                    return beer.country;
                  })
                ).indexOf(beer) === index
              );
            })
            .map((country) => {
              return (
                <p
                  key={country._id}
                  onClick={() => dispatch(getBeers(country))}
                >
                  {country}
                </p>
              );
            })}

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
                <p
                  key={alcohol._id}
                  onClick={() => dispatch(getBeers(alcohol))}
                >
                  {alcohol}
                </p>
              );
            })}
      </nav>
      <BeersByFilter />
    </div>
  );
};

export default Beers;
