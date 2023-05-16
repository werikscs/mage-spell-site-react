import { useState } from 'react';
import { IReactChildren } from '../interfaces-types/interfaces';
import spells from '../utils/spells';
import SpellFilterContext from '../context/SpellFilterContext';
import {
  ISelectedOptionsString,
  SpellFilter,
} from '../components/SpellCardList/spellFilter';
import { Arcanas, Degrees, Practices } from '../utils/spellsUtils';

type FilterSpellsData = {
  optionType: 'arcanas' | 'degrees' | 'practices';
  value: string;
  operationType: 'add' | 'remove';
};

export function SpellFilterProvider({ children }: IReactChildren) {
  const defaultSpellList = spells;
  const defaultFilterOptions: ISelectedOptionsString = {
    arcanas: [Arcanas.all],
    degrees: [Degrees.all],
    practices: [Practices.all],
  };
  const [localSpellList, setLocalSpellList] = useState(
    defaultSpellList.slice(0, 100)
  );

  const [currentOptions, setCurrentOptions] = useState(defaultFilterOptions);

  const filterSpells = (data: FilterSpellsData): void => {
    const currentSpells = defaultSpellList;
    let tempOptions = currentOptions;

    if (data.operationType === 'add') {
      tempOptions = SpellFilter.addOption(currentOptions, {
        type: data.optionType,
        value: data.value,
      });
    } else {
      tempOptions = SpellFilter.removeOption(currentOptions, {
        type: data.optionType,
        value: data.value,
      });
    }

    setCurrentOptions({ ...tempOptions });

    const filteredSpellList = SpellFilter.filterBySelectedOptions(
      tempOptions,
      currentSpells
    );
    setLocalSpellList(() => filteredSpellList);
  };

  const SpellFilterContextValue = {
    localSpellList,
    filterSpells,
  };

  return (
    <SpellFilterContext.Provider value={SpellFilterContextValue}>
      {children}
    </SpellFilterContext.Provider>
  );
}

export default SpellFilterContext;
