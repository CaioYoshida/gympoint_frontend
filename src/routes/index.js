import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Enrollment from '../pages/Enrollment/index';
import Help_Order from '../pages/Help_Order/index';
import Membership from '../pages/Membership/index';
import SignIn from '../pages/SignIn/index';
import Student from '../pages/Student/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/enrollments" exact component={Enrollment} />
      <Route path="/help_orders" exact component={Help_Order} />
      <Route path="/memberships" exact component={Membership} />
      <Route path="/students" exact component={Student} />
    </Switch>
  );
}
