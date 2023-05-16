import { useContext } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import SpellCardLi from '../SpellCardLi';
import SpellCardFormatter from '../SpellCardLi/spellCardFormatter';

import { StyledBox, StyledMasonry } from './style';
import SpellFilterContext from '../../context/SpellFilterContext';

function SpellCardList(): JSX.Element {
  const { width } = useContext(WindowSizeContext);
  const { localSpellList } = useContext(SpellFilterContext);
  const spellSliced = localSpellList;

  return (
    <StyledBox width={width}>
      <StyledMasonry>
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
