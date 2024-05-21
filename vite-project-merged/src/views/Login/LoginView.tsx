import { FC } from 'react';
import Login from '../../components/layout/Login';
import { UserProvider } from '../../components/common/UserContext';


const LoginView: FC = () => {
  return (
    <div id="root">
      <UserProvider>
        <Login />
      </UserProvider>
    </div>
  );
};

export default LoginView;