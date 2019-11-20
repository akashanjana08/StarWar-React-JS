import React, { Component } from 'react';
import { history } from '../../helpers/history';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LoginScreen from '../../components/Login';
import SearchScreen from '../../components/SearchScreen';
import configureStore from '../../store';
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/search' component={SearchScreen} />
          <Route path="*" component={LoginScreen} />
          <Redirect to="/" />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
