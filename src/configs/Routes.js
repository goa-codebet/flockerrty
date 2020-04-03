import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from '../pages/index';
import LocationPage from '../pages/location';

const routes = [
  {
    path: '/',
    component: IndexPage,
    exact: true,
  },
  {
    path: '/location',
    component: LocationPage,
  },
];

export default function RouteConfig() {
  return (
    <Router>
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
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
