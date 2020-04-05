import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './configs/routes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './styles/base.scss';

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
