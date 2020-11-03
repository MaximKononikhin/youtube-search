import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import LoginForm from '../../Components/LoginForm/LoginForm';
import './LoginPage.scss';

const Login = () => {
  const history = useHistory();

  if (localStorage.getItem('isAuthorized')) {
    return <Redirect to="/"/>
  }

  return (
    <section className="login">
      <LoginForm
        history={history}
      />
    </section>
  )
};

export default Login;
