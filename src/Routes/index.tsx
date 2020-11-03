import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Favorite from '../Pages/Favorite/Favorite';
import Login from '../Pages/LoginPage/LoginPage';
import Main from '../Pages/Main/Main';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <PrivateRoute exact path='/' component={Main}/>
        <PrivateRoute exact path='/favorite' component={Favorite}/>
      </Switch>
    </Router>
  )
}

export default Routes
