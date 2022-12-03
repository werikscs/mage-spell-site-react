import { useContext } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import SpellCardLi from '../SpellCardLi';
import StyledUl from './style';

function SpellCardList(): JSX.Element {
  const { width, height } = useContext(WindowSizeContext);

  return (
    <StyledUl screenDimensions={{ width, height }}>
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
      <SpellCardLi />
    </StyledUl>
  );
}

export default SpellCardList;
