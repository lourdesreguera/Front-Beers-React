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
      `https://beers-menu.herokuapp.com/beers/edit/${beerId}`,
      updatedBeer
    );
  };

  return (
    <div className="b-gallery">
      {beers &&
        beers.length > 0 &&
        beers.map((beer, key) => {
          if(key % 2 === 1) { key = 'odd'} else {key = 'even'}
          return (
            <div className={"b-gallery__item b-gallery__item--" + key} key={key}>
              {beer.image && <img className="b-gallery__image" src={beer.image} alt={beer.name} />}
              <div>
                <h1>{beer.name}</h1>
                <h2>Tipo</h2>
                <p>{beer.type}</p>
                <h2>Alcohol</h2>
                <p>{beer.alcohol}% vol.</p>
                <h2>País</h2>
                <p>{beer.country}</p>
                {beer.rating.length === 0 ? (
                  <p>Esta cerveza aún no ha sido puntuada</p>
                ) : (
                  <p>
                    {beer.rating.reduce((a, b) => a + b, 0) /
                      beer.rating.length}
                  </p>
                )}
                <button onClick={(ev) => updateRating(beer._id, ev)}>1</button>
                <button onClick={(ev) => updateRating(beer._id, ev)}>2</button>
                <button onClick={(ev) => updateRating(beer._id, ev)}>3</button>
                <button onClick={(ev) => updateRating(beer._id, ev)}>4</button>
                <button onClick={(ev) => updateRating(beer._id, ev)}>5</button>
              </div>
              <p>{beer.description}</p>
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
