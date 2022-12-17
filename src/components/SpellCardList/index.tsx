import { useContext } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import SpellCardLi from '../SpellCardLi';
import SpellCardFormatter from '../SpellCardLi/spellCardFormatter';

import spells from '../../utils/spells';

import StyledMasonry from './style';
import { calcCollumsCount, calcDinamicWidth } from './utils';

function SpellCardList(): JSX.Element {
  const { width, height } = useContext(WindowSizeContext);

  return (
    <StyledMasonry
      columnsCount={calcCollumsCount(width)}
      gutter="0.5rem"
      screenDimensions={{ width, height }}
      style={{ width: calcDinamicWidth(width) }}
    >
      {spells.map((spell) => (
        <SpellCardLi
          key={spell.id}
          spellData={SpellCardFormatter.formatDataCardObject(spell)}
        />
      ))}
    </StyledMasonry>
  );
}

export default SpellCardList;
