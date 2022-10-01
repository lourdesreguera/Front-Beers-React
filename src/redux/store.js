import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import beersReducer from "./beers/beers.reducer";
import menuReducer from "./menu/menu.reducer";

const rootReducer = combineReducers({
    beers: beersReducer,
    menu: menuReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
