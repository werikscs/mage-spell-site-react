import { useContext, useEffect, useRef, useState } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import SpellCardLi from '../SpellCardLi';
import SpellCardFormatter from '../SpellCardLi/spellCardFormatter';

import spells from '../../utils/spells';

import StyledMasonry from './style';
import { calcCollumsCount, calcDinamicWidth } from './utils';
import { ISpellData } from '../../interfaces-types/interfaces';

export interface IInfiniteScrollProps {
  callback: () => void;
}

export function InfiniteScroll({ callback }: IInfiniteScrollProps) {
  const divInfiniteScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0) {
        callback();
      }
    });

    if (divInfiniteScrollRef.current) {
      intersectionObserver.observe(divInfiniteScrollRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiniteScrollRef]);

  return <div ref={divInfiniteScrollRef} />;
}

function SpellCardList(): JSX.Element {
  const { width, height } = useContext(WindowSizeContext);

  const [spellList, setSpellList] = useState<ISpellData[]>([]);
  const [slicedSpells, setSlicedSpells] = useState<ISpellData[]>([])
  const [page, setPage] = useState(0);

  useEffect(() => {
    setSlicedSpells(spells.slice(page, page + 10));
    setSpellList([...spellList, ...slicedSpells]);
    console.log(slicedSpells, page);
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
      {slicedSpells.length && <InfiniteScroll
        callback={() => setPage((previousPage) => previousPage + 10)}
      />}
    </StyledMasonry>
  );
}

export default SpellCardList;
