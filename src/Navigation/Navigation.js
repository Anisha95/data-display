import React from 'react';
import { Switch, Route , BrowserRouter} from 'react-router-dom';
import Login from '../Login';
import List from '../List';
//const file  = require('../../public/ront-end.json');
export default function Routes() {
  return (
      <BrowserRouter>
    <Switch>
      <Route exact path="/" exact component={Login} />
      <Route path="/List" component={List} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
    </BrowserRouter>
  );
}