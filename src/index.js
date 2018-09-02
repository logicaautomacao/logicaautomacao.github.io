import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Home from './pages/Home';
import logicaReducers from './reducers/logica';
import I18n from './i18n';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(logicaReducers);
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
