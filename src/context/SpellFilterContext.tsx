import { createContext } from 'react';
import { ISpellData } from '../interfaces-types/interfaces';
import { Arcanas, Degrees, Practices } from '../utils/spellsUtils';

type FilterSpellsData = {
  optionType: 'arcanas' | 'degrees' | 'practices';
  value: Arcanas | Degrees | Practices | string;
  operationType: 'add' | 'remove';
};

type ISpellFilterContext = {
  localSpellList: ISpellData[];
  filterSpells: (filterOptions: FilterSpellsData) => void;
};

const SpellFilterContext = createContext<ISpellFilterContext>({
  localSpellList: [],
  filterSpells: () => {},
});

export default SpellFilterContext;
