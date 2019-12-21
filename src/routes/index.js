import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Students from '../pages/Students';
import AddStudents from '../pages/Students/create';
import UpdateStudents from '../pages/Students/update';
import Registrations from '../pages/Registrations';
import Plans from '../pages/Plans';
import AddPlans from '../pages/Plans/create';
// import UpdatePlans from '../pages/Plans/update';
import HelpOrders from '../pages/HelpOrders';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/add" component={AddStudents} isPrivate />
      <Route path="/students/edit/:id" component={UpdateStudents} isPrivate />
      <Route path="/registrations" exact component={Registrations} isPrivate />
      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/add" component={AddPlans} isPrivate />
      {/* <Route path="/plans/edit/:id" exact component={UpdatePlans} isPrivate /> */}
      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
