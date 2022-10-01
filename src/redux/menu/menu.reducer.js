import * as actions from "./menu.actions";

const INITIAL_STATE = {
  types: false,
  countries: false,
  alcohol: false,
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
      };
    case actions.SHOW_COUNTRIES:
      return {
        ...state,
        types: false,
        countries: !state.countries,
        alcohol: false,
      };
    case actions.SHOW_ALCOHOL:
      return {
        ...state,
        types: false,
        countries: false,
        alcohol: !state.alcohol,
      };
    default:
      return state;
  }
};

export default menuReducer;
