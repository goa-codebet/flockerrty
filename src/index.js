import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './configs/routes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { v4 as uuidv4 } from 'uuid';

import './styles/base.scss';

window.uuid = window.localStorage.getItem('flockertyUUID');
if (!window.uuid) {
  window.uuid = uuidv4();
  window.localStorage.setItem('flockertyUUID', window.uuid);
}

const client = new ApolloClient({
  uri: 'https://flockerty-api.azurewebsites.net',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
