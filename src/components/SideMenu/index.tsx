import { useContext } from 'react';
import { useTheme } from 'styled-components';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import CheckboxFilter from '../CheckboxFilter';
import Divider from '../Divider';
import SearchBar from '../SearchBar';
import { StyledDiv, StyledSection } from './style';

function SideMenu(): JSX.Element {
  const { isMenuOpened } = useContext(ToggleMenuContext);
  const { width } = useContext(WindowSizeContext);
  const theme = useTheme();

  const variants = {
    visible: {
      opacity: 1,
      width: theme.sizes.sideMenuShadow,
      transition: { duration: 0.25 },
    },
    hidden: {
      opacity: 0,
      width: theme.sizes.sideMenuShadow,
      transition: { duration: 0.25 },
    },
    none: { opacity: 1, width: theme.sizes.sideMenu },
  };

  const child = {
    hidden: {
      display: 'none',
      width: 0,
      transition: { duration: theme.animation.fast },
    },
    visible: {
      display: 'flex',
      width: theme.sizes.sideMenu,
      transition: { duration: theme.animation.fast },
    },
    none: { display: 'flex', width: theme.sizes.sideMenu },
  };

  const handleResize = () => {
    if (width > theme.sizes.maxMobileScreen) return 'none';
    return isMenuOpened ? 'visible' : 'hidden';
  };

  return (
    <StyledDiv
      animate={handleResize()}
      initial={handleResize()}
      variants={variants}
      width={width}
    >
      <StyledSection variants={child}>
        <SearchBar />
        <Divider />
        <CheckboxFilter />
      </StyledSection>
    </StyledDiv>
  );
}

export default SideMenu;
