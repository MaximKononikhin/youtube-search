import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router-dom';

type RouteType = {
  component: React.ComponentType<RouteProps>,
  path: string,
  exact: boolean
}


const PrivateRoute = ({ component: RouteComponent, ...rest }: RouteType) => {

  return (
    <Route
      {...rest}
      render={routeProps =>
        localStorage.getItem('isAuthorized') ? (
          <RouteComponent {...routeProps}/>
        ) : (
          <Redirect to="/login"/>
        )
      }
    />
  )
};

export default PrivateRoute;
