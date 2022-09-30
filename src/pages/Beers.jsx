import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBeers, getBeers, setBeers } from "../redux/beers/beers.actions";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import BeersByFilter from "../components/BeersByFilter";

const Beers = () => {
  const dispatch = useDispatch();
  const { beers, allBeers } = useSelector((state) => state.beers);
  const [type, setType] = useState();

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
          allBeers.map((beer) => {
            return (
              <p key={beer._id} onClick={() => dispatch(getBeers(beer.type))}>
                {beer.type}
              </p>
            );
          })}
        <h2>País:</h2>
        <p onClick={() => dispatch(getBeers())}>Todas</p>
        {allBeers &&
          allBeers.map((beer) => {
            return (
              <p
                key={beer._id}
                onClick={() => dispatch(getBeers(beer.country))}
              >
                {beer.country}
              </p>
            );
          })}
        <h2>Alcohol:</h2>
        <p onClick={() => dispatch(getBeers())}>Todas</p>
        {allBeers &&
          allBeers.map((beer) => {
            return (
              <p
                key={beer._id}
                onClick={() => dispatch(getBeers(beer.alcohol))}
              >
                {beer.alcohol}
              </p>
            );
          })}
      </nav>
      <BeersByFilter />
      {/* {type !== [] ? <BeersByFilter beers={type} /> : <BeersByFilter beers={beers} />} */}

      {/*  
      {beers &&
        beers.map((beer) => {
          return (
            <div key={beer._id}>
              <h1>{beer.name}</h1>
              {beer.rating.length === 0 ? (
                <p>Esta cerveza aún no ha sido puntuada</p>
              ) : (
                <p>
                  {beer.rating.reduce((a, b) => a + b, 0) / beer.rating.length}
                </p>
              )}
              <button onClick={(ev) => updateRating(beer._id, ev)}>1</button>
              <button onClick={(ev) => updateRating(beer._id, ev)}>2</button>
              <button onClick={(ev) => updateRating(beer._id, ev)}>3</button>
              <button onClick={(ev) => updateRating(beer._id, ev)}>4</button>
              <button onClick={(ev) => updateRating(beer._id, ev)}>5</button>
            </div>
          );
        })} */}
    </div>
  );
};

export default Beers;
