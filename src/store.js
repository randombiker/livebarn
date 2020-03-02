import { createStore } from 'redux';

const initialState = {
  searchQuery: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'QUERY':
      return { ...state, searchQuery: action.q };

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
