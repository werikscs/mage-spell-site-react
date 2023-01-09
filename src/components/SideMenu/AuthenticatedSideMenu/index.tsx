import { useContext } from 'react';
import AutheticateContext from '../../../context/AuthenticateContex';
import Divider from '../../Divider';
import BookIcon from '../../Icons/BookIcon';
import StarIcon from '../../Icons/StarIcon';
import SideMenuButton from '../../SideMenuButton';
import StyledDiv from './styled';

function AuthenticatedSideMenu(): JSX.Element {
  const { isLogged } = useContext(AutheticateContext);

  return (
    <StyledDiv isLogged={isLogged}>
      <Divider />
      <SideMenuButton
        title="My Favorites"
        onClick={() => console.log('My Favorites')}
        icon={<StarIcon local="sidemenu" isFilled />}
      />
      <SideMenuButton
        title="My Spells"
        onClick={() => console.log('My Spells')}
        icon={<BookIcon />}
      />
    </StyledDiv>
  );
}

export default AuthenticatedSideMenu;
