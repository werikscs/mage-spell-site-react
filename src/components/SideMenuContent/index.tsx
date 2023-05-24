import { useContext } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import StyledSection from './style';
import SearchBar from '../SearchBar';
import Divider from '../Divider';
import SideMenuButton from '../SideMenuButton';
import ExapandableOptions from '../ExapandableOptions';
import AuthenticatedSideMenu from '../AuthenticatedSideMenu';
import QuestionIcon from '../Icons/QuestionIcon';
import LoginLogoutButtonSideMenu from '../LoginLogoutSideMenu';

function SideMenuContent() {
  const { width, height } = useContext(WindowSizeContext);
  return (
    <StyledSection width={width} height={height}>
      <SearchBar />
      <Divider />
      <SideMenuButton
        title="Most Favorited"
        onClick={() => console.log('Most favorited')}
      />
      <ExapandableOptions />
      <AuthenticatedSideMenu />
      <Divider />
      <SideMenuButton
        title="About"
        onClick={() => console.log('About')}
        icon={<QuestionIcon />}
      />
      <LoginLogoutButtonSideMenu />
    </StyledSection>
  );
}

export default SideMenuContent;
