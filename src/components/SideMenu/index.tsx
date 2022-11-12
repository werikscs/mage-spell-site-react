import { useContext } from 'react';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import {
  arcanasData,
  degreesData,
  practicesData,
} from '../../utils/componentData';
import useCustomTheme from '../../hooks/useCustomTheme';
import Divider from '../Divider';
import SearchBar from '../SearchBar';
import { StyledDiv, StyledSection } from './style';
import ExpandableElement from '../ExpandableElement';
import CheckboxFilter from '../CheckboxFilter';
import SideMenuButton from '../SideMenuButton';

function SideMenu(): JSX.Element {
  const { isMenuOpened } = useContext(ToggleMenuContext);
  const { width } = useContext(WindowSizeContext);
  const { theme } = useCustomTheme();

  const variants = {
    hidden: {
      opacity: 0,
      width: theme.sizes.sideMenuShadow,
      transition: { duration: theme.animation.fast },
    },
    visible: {
      opacity: 1,
      width: theme.sizes.sideMenuShadow,
      transition: { duration: theme.animation.fast },
    },
    none: { opacity: 1, width: theme.sizes.sideMenu },
  };

  const handleScreenResize = () => {
    if (width > theme.sizes.maxMobileScreen) return 'none';
    return isMenuOpened ? 'visible' : 'hidden';
  };

  return (
    <StyledDiv
      animate={handleScreenResize()}
      initial={handleScreenResize()}
      variants={variants}
      width={width}
    >
      <StyledSection>
        <SearchBar />
        <Divider />
        <SideMenuButton
          title="Most Favorited"
          onClick={() => console.log('Most favorited')}
        />
        <ExpandableElement title="Arcanas">
          <CheckboxFilter dataArray={arcanasData} />
        </ExpandableElement>
        <ExpandableElement title="Degrees">
          <CheckboxFilter dataArray={degreesData} />
        </ExpandableElement>
        <ExpandableElement title="Practices">
          <CheckboxFilter dataArray={practicesData} />
        </ExpandableElement>
        <Divider />
      </StyledSection>
    </StyledDiv>
  );
}

export default SideMenu;
