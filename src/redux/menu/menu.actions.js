export const SHOW_TYPES = "SHOW_TYPES";
export const SHOW_COUNTRIES = "SHOW_COUNTRIES";
export const SHOW_ALCOHOL = "SHOW_ALCOHOL";

export const showTypes = () => dispatch => {
    dispatch({ type: SHOW_TYPES });
}

export const showCountries = () => dispatch => {
    dispatch({ type: SHOW_COUNTRIES });
}

export const showAlcohol = () => dispatch => {
    dispatch({ type: SHOW_ALCOHOL });
}
