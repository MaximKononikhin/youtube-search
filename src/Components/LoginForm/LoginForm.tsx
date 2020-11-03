import React, { useState } from 'react';

import Input from '../Input/Input';
import PasswordInput from '../PasswordInput/PasswordInput';
import logo from '../../Assets/Images/sibdev-logo.svg';
import './LoginForm.scss';
import BlueBtn from '../BlueBtn/BlueBtn';

interface IProps {
  history: {
    push(url: string): void;
};
}

const LoginForm = (props: IProps) => {
  const {history} = props;
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value)
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserPassword(e.target.value)
  }

  const validate = () => {
    if (userPassword.length > 5 && userName.length > 5) {
      return false
    }

    return true
  }

  return (
    <form className="login-form" onSubmit={(e: React.SyntheticEvent) => {
      e.preventDefault();
      localStorage.setItem('isAuthorized', 'true');
      history.push('/');
    }}>
      <header className="login-form__header">
        <img src={logo} width="88" height="88" alt=""/>
        <h2>Вход</h2>
      </header>

      <Input
        id={'userName'}
        value={userName}
        label={'Логин'}
        name={'userName'}
        handler={handleLoginInput}
      />
      <PasswordInput
        id={'userPassword'}
        value={userPassword}
        label={'Пароль'}
        name={'userPassword'}
        handler={handlePasswordInput}
      />
      <BlueBtn text={'Войти'} disabled={validate()}/>
    </form>
  )
}

export default LoginForm;
