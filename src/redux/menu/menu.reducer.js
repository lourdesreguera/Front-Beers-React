import * as actions from "./menu.actions";

const INITIAL_STATE = {
  types: false,
  countries: false,
  alcohol: false,
  typeClassActive: false,
  countryClassActive: false,
  alcoholClassActive: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case actions.SHOW_TYPES:
      return {
        ...state,
        types: !state.types,
        countries: false,
        alcohol: false,
        typeClassActive: !state.typeClassActive,
        countryClassActive: false,
        alcoholClassActive: false,
      };
    case actions.SHOW_COUNTRIES:
      return {
        ...state,
        types: false,
        countries: !state.countries,
        alcohol: false,
        typeClassActive: false,
        countryClassActive: !state.countryClassActive,
        alcoholClassActive: false,
      };
    case actions.SHOW_ALCOHOL:
      return {
        ...state,
        types: false,
        countries: false,
        alcohol: !state.alcohol,
        typeClassActive: false,
        countryClassActive: false,
        alcoholClassActive: !state.alcoholClassActive,
      };
    default:
      return state;
  }
};

export default menuReducer;
