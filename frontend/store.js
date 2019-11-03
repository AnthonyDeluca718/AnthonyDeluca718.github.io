import { createStore } from 'redux';
import Reducer from './reducers/reducer';
import Middleware from './middleware/middleware';

const configureStore = (preloadedState = {}) => {

  const store = createStore(
    Reducer,
    preloadedState
  );

  return(
    store
  );
}

export default configureStore;
