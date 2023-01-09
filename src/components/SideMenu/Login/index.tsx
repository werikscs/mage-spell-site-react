import { useContext } from 'react';
import AutheticateContext from '../../../context/AuthenticateContex';
import UserIcon from '../../Icons/UserIcon';
import SideMenuButton from '../../SideMenuButton';

function LoginLogoutButtonSideMenu() {
  const { isLogged, toggleAuthenticate } = useContext(AutheticateContext);

  return isLogged ? (
    <SideMenuButton
      title="Logout"
      variant="login-logout-side-menu"
      onClick={() => toggleAuthenticate(false)}
      icon={<UserIcon />}
    />
  ) : (
    <SideMenuButton
      title="Login"
      variant="login-logout-side-menu"
      onClick={() => toggleAuthenticate(true)}
    />
  );
}

export default LoginLogoutButtonSideMenu;
