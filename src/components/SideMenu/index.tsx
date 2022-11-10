import { useContext } from 'react';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import useCustomTheme from '../../hooks/useCustomTheme';
import Divider from '../Divider';
import SearchBar from '../SearchBar';
import { StyledDiv, StyledSection } from './style';
import { arcanasDdata, degreesData } from '../../utils/componentData';
import ExpandableElement from '../ExpandableElement';
import SideMenuFilterUl from '../SideMenuFilterUl';

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
        <ExpandableElement title="Arcanas">
          <SideMenuFilterUl dataArray={arcanasDdata} />
        </ExpandableElement>
        <ExpandableElement title="Degrees">
          <SideMenuFilterUl dataArray={degreesData} />
        </ExpandableElement>
      </StyledSection>
    </StyledDiv>
  );
}

export default SideMenu;
