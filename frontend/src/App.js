import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from './routes';
import Home from './pages/index';
import Staking from './pages/stakingPage';

class App extends Component {

  state = {
    loading: true
  };

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

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
      // <!-- Loader starts -->
        <div className="loader-wrapper">
          <div className="loader loader-7">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          </div>
        </div>
      // <!-- Loader ends -->
      )
    }
    
    return (
      <Router>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            {this.getRoutes(routes)}
            <Route path="/" component={props => <Home {...props} />} />
            <Route path="/stake" component={props => <Staking {...props} />} />
            
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

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;