import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import IndexPage from '../pages/index';
import PlacePage from '../pages/place-page';
import SearchPage from '../pages/search';

const routes = [
  {
    path: '/',
    component: IndexPage,
    exact: true,
  },
  {
    path: '/place/:id',
    component: PlacePage,
  },
  {
    path: '/search/:q',
    component: SearchPage,
  },
];

export default function RouteConfig() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}
