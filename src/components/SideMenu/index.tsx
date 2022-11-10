import { useContext } from 'react';

import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import useCustomTheme from '../../hooks/useCustomTheme';
import CheckboxFilter from '../CheckboxFilter';
import Divider from '../Divider';
import SearchBar from '../SearchBar';
import { StyledDiv, StyledSection } from './style';

function SideMenu(): JSX.Element {
  const { isMenuOpened } = useContext(ToggleMenuContext);
  const { width } = useContext(WindowSizeContext);
  const { theme } = useCustomTheme();

  const variants = {
    hidden: {
      opacity: 0,
      width: theme.sizes.sideMenuShadow,
      transition: { duration: 0.25 },
    },
    visible: {
      opacity: 1,
      width: theme.sizes.sideMenuShadow,
      transition: { duration: 0.25 },
    },
    none: { opacity: 1, width: theme.sizes.sideMenu },
  };

  const childVariants = {
    hidden: {
      display: 'none',
      width: '0',
      transition: { duration: theme.animation.fast },
    },
    visible: {
      display: 'flex',
      width: '100%',
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
      <StyledSection variants={childVariants}>
        <SearchBar />
        <Divider />
        <CheckboxFilter title="Degrees" />
      </StyledSection>
    </StyledDiv>
  );
}

export default SideMenu;
