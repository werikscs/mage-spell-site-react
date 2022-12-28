import { useContext, useEffect, useState } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import SpellCardLi from '../SpellCardLi';
import SpellCardFormatter from '../SpellCardLi/spellCardFormatter';

import spells from '../../utils/spells';

import StyledMasonry from './style';
import { calcCollumsCount, calcDinamicWidth } from './utils';
import { ISpellData } from '../../interfaces-types/interfaces';
import InfiniteScroll from './infinityScroll';

function SpellCardList(): JSX.Element {
  const { width, height } = useContext(WindowSizeContext);

  const [spellList, setSpellList] = useState<ISpellData[]>([]);
  const [slicedSpells, setSlicedSpells] = useState<ISpellData[]>([]);
  const [page, setPage] = useState(0);

  const SPELLS_PER_PAGE = 10;

  useEffect(() => {
    setSlicedSpells(spells.slice(page, page + SPELLS_PER_PAGE));
    setSpellList([...spellList, ...slicedSpells]);
  }, [page]);

  return (
    <StyledMasonry
      columnsCount={calcCollumsCount(width)}
      gutter="0.5rem"
      screenDimensions={{ width, height }}
      style={{ width: calcDinamicWidth(width) }}
    >
      {spellList.map((spell) => (
        <SpellCardLi
          key={spell.id}
          spellData={SpellCardFormatter.formatDataCardObject(spell)}
        />
      ))}
      {slicedSpells.length && (
        <InfiniteScroll
          callback={() =>
            setPage((previousPage) => previousPage + SPELLS_PER_PAGE)
          }
        />
      )}
    </StyledMasonry>
  );
}

export default SpellCardList;
