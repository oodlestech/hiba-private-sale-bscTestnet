import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from './routes';
import Home from './pages/index';
import Stake from './pages/stakingPage';

class App extends Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/site") {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <Router>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          {this.getRoutes(routes)}
          <Route path="/" component={props => <Home {...props} />} />
          <Route path="/stake" component={props => <Stake {...props} />} />
          
          {/* <Route path="/">
            <Home />
          </Route> */}

          {/* <Route path="/stake">
            <Stake />
          </Route> */}
          
        </Switch>

    </Router>
    );

  }
}

export default App;