import { FC } from 'react';

import style from './LoginPage.module.scss';

const LoginPage: FC = () => {
  return (
    <div className={style.LoginPage}>
      <p>LoginPage</p> // Если бы была необходима авторизация
    </div>
  );
};

export default LoginPage;
