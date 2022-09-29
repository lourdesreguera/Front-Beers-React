import * as actions from './beers.actions';

const INITIAL_STATE = {
    beers: [],
    isLoading: false,
    error: null
};

const beersReducer = (state = INITIAL_STATE, action) => {
const { type, payload } = action;
    switch (type) {
        case actions.GETTING_BEERS: {
            return { ...state, isLoading: false, error: null}
        }
        case actions.GET_BEERS: {
            return { ...state, beers: payload, isLoading: false, error: null }
        }
        case actions.ERROR_BEERS: {
            return { ...state, beers: [], isLoading: false, error: payload }
        }
        default:
           return state
    }
}

export default beersReducer;