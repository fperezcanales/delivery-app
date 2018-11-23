import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

/*function reducerApi ( state={} , action ){
  return state
}*/

const store = createStore(combineReducers({
  contador: reducer,
  form: formReducer
}), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
