import { useContext } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import spells from '../../utils/spells';
import SpellCardLi from '../SpellCardLi';
import SpellCardFormatter from '../SpellCardLi/spellCardFormatter';

import StyledUl from './style';

function SpellCardList(): JSX.Element {
  const { width, height } = useContext(WindowSizeContext);

  return (
    <StyledUl screenDimensions={{ width, height }}>
      {spells.map((spell) => (
        <SpellCardLi
          key={spell.id}
          spellData={SpellCardFormatter.formatDataCardObject(spell)}
        />
      ))}
    </StyledUl>
  );
}

export default SpellCardList;
