import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBeers } from "../redux/beers/beers.actions";

const BeersByFilter = ({beers}) => {
    console.log(beers)
  const dispatch = useDispatch();
//   const { beers } = useSelector((state) => state.beers);

  useEffect(() => {
    dispatch(getBeers());
  }, []);

  const updateRating = (beerId, ev) => {
    const beer = beers.find((beer) => beer._id === beerId);
    const rate = Number(ev.target.innerText);

    const updatedBeer = { ...beer, rating: [...beer.rating, rate] };
    axios.put(`http://localhost:4000/beers/edit/${beerId}`, updatedBeer);
  };

  return (
    <div>
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
        })}
    </div>
  );
};

export default BeersByFilter;
