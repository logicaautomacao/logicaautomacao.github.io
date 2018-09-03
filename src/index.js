import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Home from './pages/Home';
import Route from './logical-components/PropsRouter';
import logicaReducers from './reducers/logica';
import I18n from './i18n';
import registerServiceWorker from './registerServiceWorker';

import structure from './config/structure.json';

const store = createStore(logicaReducers);
I18n.setup();

const {
  'pagina-inicial': home
} = structure;

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} home={home} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
