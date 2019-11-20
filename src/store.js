import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { syncHistory } from 'redux-simple-router';
import rootReducer from './reducers/root-reducer';

export const history = createHashHistory();

function configureStore() {
  const reduxRouterMiddleware = syncHistory(history);
  let storeEnhancers;

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    storeEnhancers = compose(
      applyMiddleware(thunk),
      applyMiddleware(reduxRouterMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    storeEnhancers = compose(
      applyMiddleware(thunk),
      applyMiddleware(reduxRouterMiddleware)
    );
  }

  return createStore(rootReducer, {}, storeEnhancers);
}

export default configureStore;
