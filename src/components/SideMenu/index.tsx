import { useContext } from 'react';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import useCustomTheme from '../../hooks/useCustomTheme';
import Divider from '../Divider';
import SearchBar from '../SearchBar';
import { StyledDiv, StyledSection } from './style';
import SideMenuButton from '../SideMenuButton';
import QuestionIcon from '../Icons/QuestionIcon';
import LoginLogoutButtonSideMenu from '../LoginLogoutSideMenu';
import AuthenticatedSideMenu from '../AuthenticatedSideMenu';
import ExapandableOptions from '../ExapandableOptions';
import SpellFilterContext from '../../context/SpellFilterContext';

function SideMenu(): JSX.Element {
  const { isMenuOpened } = useContext(ToggleMenuContext);
  const { width, height } = useContext(WindowSizeContext);
  const { theme } = useCustomTheme();

  const variants = {
    hidden: {
      opacity: 0,
      display: 'none',
      width: theme.sizes.sideMenuShadow,
      transition: { duration: theme.animation.fast },
    },
    visible: {
      opacity: 1,
      display: 'flex',
      width: theme.sizes.sideMenuShadow,
      transition: { duration: theme.animation.fast },
    },
    none: { opacity: 1, width: theme.sizes.sideMenu },
  };

  const handleScreenResize = () => {
    if (width < theme.sizes.maxMobileScreen)
      return isMenuOpened ? 'visible' : 'hidden';
    return 'none';
  };

  return (
    <StyledDiv
      animate={handleScreenResize()}
      initial={handleScreenResize()}
      variants={variants}
    >
      <StyledSection screenDimensions={{ width, height }}>
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
    </StyledDiv>
  );
}

export default SideMenu;
