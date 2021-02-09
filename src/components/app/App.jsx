import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../Home/Home.jsx";
import List from "../List/List.jsx";
import Details from "../Details/Details.jsx";

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
