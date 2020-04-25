import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './configs/routes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { v4 as uuidv4 } from 'uuid';

import LocationProvider, { useLocation } from './location';

import './styles/base.scss';

window.uuid = window.localStorage.getItem('flockertyUUID');
if (!window.uuid) {
  window.uuid = uuidv4();
  window.localStorage.setItem('flockertyUUID', window.uuid);
}

const client = new ApolloClient({
  uri: 'https://flockerty-api.azurewebsites.net',
});

const Ask = ({ onAccept }) => {
  return (
    <div className="AskLocation">
      <h2>Welcome to flockerty!</h2>
      <p>In order to use our service you'll need to enable location services. Do so by pressing the button below. Thanks &amp; Stay safe!</p>
      <button className="button" onClick={() => onAccept()}>Enable location</button>
    </div>
  )
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <LocationProvider ask askComponent={<Ask />}>
        <Router />
      </LocationProvider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
