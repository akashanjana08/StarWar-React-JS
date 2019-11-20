import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import LoginReducer from './login';
import PlanetReducer from './planet';

const rootReducer = combineReducers({
  routing: routeReducer,
  login: LoginReducer,
  planet: PlanetReducer,
});

export default rootReducer;
