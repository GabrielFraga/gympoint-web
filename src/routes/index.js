import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Students from '../pages/Students';
import Registrations from '../pages/Registrations';
import Plans from '../pages/Plans';
import HelpOrders from '../pages/HelpOrders';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={Students} isPrivate />
      <Route path="/registrations" component={Registrations} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
