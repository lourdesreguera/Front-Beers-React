import axios from "axios";

export const GETTING_BEERS = "GETTING_BEERS";
export const GET_BEERS = "GET_BEERS";
export const GET_ALL_BEERS = "GET_ALL_BEERS";
export const ERROR_BEERS = "ERROR_BEERS";

export const getBeers = (filter) => async (dispatch) => {
  dispatch({ type: GETTING_BEERS });
  try {
    const res = await axios.get("https://beers-menu.herokuapp.com/beers");
    if (filter) {
      const result = res.data.filter((beer) => {
        const { type, country, alcohol } = beer;
        return type === filter || country === filter || alcohol === filter;
      });
      await dispatch({ type: GET_BEERS, payload: result });
    } else {
      await dispatch({ type: GET_BEERS, payload: res.data });
    }
  } catch (error) {
    dispatch({ type: ERROR_BEERS, payload: error.message });
  }
};

export const getAllBeers = () => async (dispatch) => {
  dispatch({ type: GETTING_BEERS });
  try {
    const res = await axios.get("https://beers-menu.herokuapp.com/beers");
    await dispatch({ type: GET_ALL_BEERS, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR_BEERS, payload: error.message });
  }
};
