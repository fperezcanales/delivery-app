import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import {createHistory}  from 'history/createBrowserHistory'

import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

// import FormAccordion from './modulos/form/FormAccordion';

/*function reducerApi ( state={} , action ){
  return state
}*/

const store = createStore(combineReducers({
  contador: reducer,
  form: formReducer
}), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <div>
          <Route exact={true} path="/" component={App} />
          <Route path="/list" component={App} />
        </div>
    </Router>
  </Provider>

  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
