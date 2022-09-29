import axios from 'axios';

export const GETTING_BEERS = "GETTING_BEERS";
export const GET_BEERS = "GET_BEERS";
export const ERROR_BEERS = "ERROR_BEERS";


export const getBeers = () => async(dispatch) => {
    dispatch({ type: GETTING_BEERS });
    try {
        const res = await axios.get("http://localhost:4000/beers");
        await dispatch({ type: GET_BEERS, payload: res.data });
    } catch (error) {
        dispatch({ type: ERROR_BEERS, payload: error.message })
    }
};
