import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBeers } from "../redux/beers/beers.actions";

const BeersByFilter = () => {
  const { beers } = useSelector((state) => state.beers);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBeers());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [beers]);

  const updateRating = (beerId, ev) => {
    const beer = beers.find((beer) => beer._id === beerId);
    const rate = Number(ev.target.innerText);

    const updatedBeer = { ...beer, rating: [...beer.rating, rate] };
    axios.put(
      `https://beers-menu.herokuapp.com/beers/edit/${beerId}`,
      updatedBeer
    );
    dispatch(getBeers());
  };

  return (
    <div className="b-gallery">
      {beers &&
        beers.length > 0 &&
        beers.map((beer, key) => {
          return (
            <div
              className={
                key % 2 === 1
                  ? "b-gallery__item b-gallery__item--odd"
                  : "b-gallery__item b-gallery__item--even"
              }
              key={key}
            >
              {beer.image && (
                <img
                  className="b-gallery__image"
                  src={beer.image}
                  alt={beer.name}
                />
              )}
              <div className="b-gallery__text">
                <h1
                  className={
                    key % 2 === 1
                      ? "beer-info beer-info--heading text-color--odd"
                      : "beer-info beer-info--heading text-color---even"
                  }
                >
                  {beer.name}
                </h1>
                <h2
                  className={
                    key % 2 === 1
                      ? "beer-info beer-info--subheading text-color--odd"
                      : "beer-info beer-info--subheading text-color---even"
                  }
                >
                  Tipo
                </h2>
                <p
                  className={
                    key % 2 === 1
                      ? "beer-info__text text-color--odd"
                      : "beer-info__text text-color---even"
                  }
                >
                  {beer.type}
                </p>
                <h2
                  className={
                    key % 2 === 1
                      ? "beer-info beer-info--subheading text-color--odd"
                      : "beer-info beer-info--subheading text-color---even"
                  }
                >
                  Alcohol
                </h2>
                <p
                  className={
                    key % 2 === 1
                      ? "beer-info__text text-color--odd"
                      : "beer-info__text text-color---even"
                  }
                >
                  {beer.alcohol}% vol.
                </p>
                <h2
                  className={
                    key % 2 === 1
                      ? "beer-info beer-info--subheading text-color--odd"
                      : "beer-info beer-info--subheading text-color---even"
                  }
                >
                  País
                </h2>
                <p
                  className={
                    key % 2 === 1
                      ? "beer-info__text text-color--odd"
                      : "beer-info__text text-color---even"
                  }
                >
                  {beer.country}
                </p>
                <h2
                  className={
                    key % 2 === 1
                      ? "beer-info beer-info--subheading text-color--odd"
                      : "beer-info beer-info--subheading text-color---even"
                  }
                >
                  Precio
                </h2>
                <p
                  className={
                    key % 2 === 1
                      ? "beer-info__text text-color--odd"
                      : "beer-info__text text-color---even"
                  }
                >
                  {beer.price} €
                </p>
                <h2
                  className={
                    key % 2 === 1
                      ? "beer-info beer-info--subheading text-color--odd"
                      : "beer-info beer-info--subheading text-color---even"
                  }
                >
                  Puntuación
                </h2>
                {beer.rating.length === 0 ? (
                  <p
                    className={
                      key % 2 === 1
                        ? "beer-info__text text-color--odd"
                        : "beer-info__text text-color---even"
                    }
                  >
                    Esta cerveza aún no ha sido puntuada
                  </p>
                ) : (
                  <p
                    className={
                      key % 2 === 1
                        ? "beer-info__text text-color--odd"
                        : "beer-info__text text-color---even"
                    }
                  >
                    {(
                      beer.rating.reduce((a, b) => a + b, 0) /
                      beer.rating.length
                    ).toFixed(1)}
                  </p>
                )}
                <p
                  className={
                    key % 2 === 1
                      ? "beer-info__text text-color--odd"
                      : "beer-info__text text-color---even"
                  }
                >
                  Pulsa el botón que quieras y puntúa esta cerveza
                </p>

                <button
                  className="btn"
                  onClick={(ev) => updateRating(beer._id, ev)}
                >
                  1
                </button>
                <button
                  className="btn"
                  onClick={(ev) => updateRating(beer._id, ev)}
                >
                  2
                </button>
                <button
                  className="btn"
                  onClick={(ev) => updateRating(beer._id, ev)}
                >
                  3
                </button>
                <button
                  className="btn"
                  onClick={(ev) => updateRating(beer._id, ev)}
                >
                  4
                </button>
                <button
                  className="btn"
                  onClick={(ev) => updateRating(beer._id, ev)}
                >
                  5
                </button>
                <p
                  className={
                    key % 2 === 1
                      ? "beer-info__desc text-color--odd"
                      : "beer-info__desc text-color---even"
                  }
                >
                  {beer.description}
                </p>
              </div>
            </div>
          );
        })}
      {/* {beers && !beers.length > 0 && (
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
      )} */}
    </div>
  );
};

export default BeersByFilter;
