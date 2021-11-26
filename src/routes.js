import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Master from './pages/Master';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/master" component={Master} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
