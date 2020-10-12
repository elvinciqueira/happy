import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import OrphanagesMap from './pages/OrphanagesMap';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  )
}

