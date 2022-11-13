import SideMenu from '../../components/SideMenu';
import SpellCardList from '../../components/SpellCardList';
import StyledMain from './style';

function MainPage(): JSX.Element {
  return (
    <StyledMain>
      <SpellCardList />
      <SideMenu />
    </StyledMain>
  );
}

export default MainPage;
