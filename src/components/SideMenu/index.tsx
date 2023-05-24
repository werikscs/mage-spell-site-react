import React, { useContext } from 'react';
import { StyledDiv } from './style';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import SideMenuContent from '../SideMenuContent';

const SideMenuContentMemo = React.memo(SideMenuContent);

function SideMenu(): JSX.Element {
  const { isMenuOpened } = useContext(ToggleMenuContext);

  return (
    <StyledDiv isMenuOpen={isMenuOpened}>
      <SideMenuContentMemo />
    </StyledDiv>
  );
}

export default SideMenu;
