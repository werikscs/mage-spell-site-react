import { useContext } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import SpellCardLi from '../SpellCardLi';
import SpellCardFormatter from '../SpellCardLi/spellCardFormatter';

import spells from '../../utils/spells';

import { StyledBox, StyledMasonry } from './style';

function SpellCardList(): JSX.Element {
  const { width, height } = useContext(WindowSizeContext);
  const spellSliced = spells.slice(0, 50);

  return (
    <StyledBox width={width}>
      <StyledMasonry width={width}>
        {spellSliced.map((spell) => (
          <SpellCardLi
            key={spell.id}
            spellData={SpellCardFormatter.formatDataCardObject(spell)}
          />
        ))}
      </StyledMasonry>
    </StyledBox>
  );
}

export default SpellCardList;
