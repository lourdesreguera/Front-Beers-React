import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBeers } from "../redux/beers/beers.actions";

const BeersByFilter = () => {
  const { beers } = useSelector((state) => state.beers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers());
  }, []);

  const updateRating = (beerId, ev) => {
    const beer = beers.find((beer) => beer._id === beerId);
    const rate = Number(ev.target.innerText);

    const updatedBeer = { ...beer, rating: [...beer.rating, rate] };
    axios.put(
      `hhttps://beers-menu.herokuapp.com/beers/edit/${beerId}`,
      updatedBeer
    );
  };

  return (
    <div>
      {beers &&
        beers.length > 0 &&
        beers.map((beer) => {
          return (
            <div key={beer._id}>
              <h1>{beer.name}</h1>
              {beer.image && <img src={beer.image} alt={beer.name} />}
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
        })}
      {beers && !beers.length > 0 && (
        <div>
          <h1>{beers.name}</h1>
          {beers.image && <img src={beers.image} alt={beers.name} />}
          {!beers.rating ? (
            <p>Esta cerveza aún no ha sido puntuada</p>
          ) : (
            <p>
              {beers.rating.reduce((a, b) => a + b, 0) / beers.rating.length}
            </p>
          )}
          <button onClick={(ev) => updateRating(beers._id, ev)}>1</button>
          <button onClick={(ev) => updateRating(beers._id, ev)}>2</button>
          <button onClick={(ev) => updateRating(beers._id, ev)}>3</button>
          <button onClick={(ev) => updateRating(beers._id, ev)}>4</button>
          <button onClick={(ev) => updateRating(beers._id, ev)}>5</button>
        </div>
      )}
    </div>
  );
};

export default BeersByFilter;
