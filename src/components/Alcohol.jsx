import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBeers, getBeers } from "../redux/beers/beers.actions";

const Alcohol = () => {
  const dispatch = useDispatch();
  const { allBeers } = useSelector((state) => state.beers);

  useEffect(() => {
    dispatch(getAllBeers());
  }, []);

  return (
    <div>
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
          .map((type) => {
            return (
              <p key={type._id} onClick={() => dispatch(getBeers(type))}>
                {type}
              </p>
            );
          })}
    </div>
  );
};

export default Alcohol;
