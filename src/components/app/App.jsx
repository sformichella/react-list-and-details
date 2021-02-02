import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home';
import List from '../List';
import Details from '../Details';

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route
              path = "/"
              exact
              render = {routerProps => <Home {...routerProps} />}
            />
            <Route
              path = "/list"
              exact
              render = {routerProps => <List {...routerProps}/>}
            />
            <Route
              path = "/list/:id"
              exact
              render = {routerProps => <Details {...routerProps}/>}
            />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
