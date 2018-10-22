import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Home from './pages/Home';
import Route from './logical-components/PropsRouter';
import logicaReducers from './reducers/logica';
import I18n from './i18n';
import registerServiceWorker from './registerServiceWorker';
import asyncDispatchMiddleware from './middlewares/asyncDispatchMiddleware';

import structure from './config/structure';

const defaultState = {
  ...structure,
  contactForm: {
    loading: false,
    success: false,
    email: '',
    message: '',
  },
  carrouselActiveIndex: 0,
};

const store = createStore(
  logicaReducers,
  defaultState,
  applyMiddleware(asyncDispatchMiddleware),
);
I18n.setup();

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
