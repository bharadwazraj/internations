import React, { Component } from "react";

import Landing from "./pages/Landing";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./layout/Header";
import UsersPage from "./pages/Users";
import GroupsPage from "./pages/Groups";

import User from "./pages/User";
import CreateUser from "./pages/CreateUser";
import Group from "./pages/Group";
import CreateGroup from "./pages/CreateGroup";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="container-fluid">
              <div>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/users" component={UsersPage} />
                  <Route exact path="/groups" component={GroupsPage} />
                  <Route exact path="/users/create" component={CreateUser} />
                  <Route exact path="/groups/create" component={CreateGroup} />
                  <Route exact path="/users/:name" component={User} />
                  <Route path="/groups/:id" component={Group} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
