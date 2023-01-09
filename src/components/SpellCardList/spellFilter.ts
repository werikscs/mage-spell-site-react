import { ISpellData, SpellType } from '../../interfaces-types/interfaces';
import { Arcanas, Degrees, Practices } from '../../utils/spellsUtils';

export interface ISelectedOptionsString {
  arcanas: string[];
  degrees: string[];
  practices: string[];
}

export interface ISelectedOptionsFormattedToNumbers {
  arcanas: number[];
  degrees: number[];
  practices: number[];
}

export interface IOptionToAddOrRemove {
  type: 'arcanas' | 'degrees' | 'practices';
  value: Arcanas | Degrees | Practices;
}

export class SpellFilter {
  static addOption(
    currentOptions: ISelectedOptionsString,
    optionToAdd: IOptionToAddOrRemove
  ): ISelectedOptionsString {
    const { type, value } = optionToAdd;
    let optionsUpdated = { ...currentOptions };

    if (value === 'All') {
      optionsUpdated = { ...currentOptions, [type]: [] };
    } else {
      const arrayWithoutAll = currentOptions[type].filter(
        (item) => item !== 'All'
      );
      optionsUpdated = { ...currentOptions, [type]: arrayWithoutAll };
    }

    optionsUpdated[type].push(value);

    return optionsUpdated;
  }

  static removeOption(
    currentOptions: ISelectedOptionsString,
    optionToRemove: IOptionToAddOrRemove
  ): ISelectedOptionsString {
    const { type, value } = optionToRemove;

    const arrayUpdated = currentOptions[type].filter(
      (optionValue) => optionValue !== value
    );
    let optionsUpdated = { ...currentOptions, [type]: arrayUpdated };

    if (optionsUpdated[type].length === 0) {
      optionsUpdated = { ...optionsUpdated, [type]: ['All'] };
    }

    return optionsUpdated;
  }

  static filterBySelectedOptions(
    currentOptions: ISelectedOptionsString,
    currentSpells: ISpellData[]
  ): ISpellData[] {
    const currentOptionsToNumbers = SpellFilter.formatOptions(currentOptions);
    const { arcanas, degrees, practices } = currentOptionsToNumbers;
    const filteredSpells: ISpellData[] = [];

    currentSpells.forEach((spell) => {
      const spellType = spell.type;
      const spellPractice = spell.properties.practice;

      const isSpellArcanasInTheOptions =
        SpellFilter.checkIfSpellArcanasIsInTheOptions(spellType, arcanas);

      const isSpellDegreesInTheOptions =
        SpellFilter.checkIfSpellDegreesIsInTheOptions(spellType, degrees);

      const isSpellPracticeInTheOptions =
        SpellFilter.checkIfSpellPracticeIsInTheOptions(
          spellPractice,
          practices
        );

      if (
        isSpellArcanasInTheOptions &&
        isSpellDegreesInTheOptions &&
        isSpellPracticeInTheOptions
      ) {
        filteredSpells.push(spell);
      }
    });

    return filteredSpells;
  }

  static checkIfSpellDegreesIsInTheOptions(
    spellType: SpellType[],
    degrees: number[]
  ): boolean {
    const isDegreeToShowAll = degrees[0] === 0;

    if (isDegreeToShowAll) return true;

    const isEachDegreeInSpell = degrees.every((degree) => {
      const isDegreePresentInAnyType = spellType.some((spellTypeItem) => {
        const currentDegreeSpellType = spellTypeItem.degree;
        return currentDegreeSpellType === degree;
      });
      return isDegreePresentInAnyType;
    });

    return isEachDegreeInSpell;
  }

  static checkIfSpellArcanasIsInTheOptions(
    spellType: SpellType[],
    arcanas: number[]
  ): boolean {
    const isArcanaToShowAll = arcanas[0] === 0;

    if (isArcanaToShowAll) return true;

    const isEachArcanaInSpell = arcanas.every((arcana) => {
      const isArcanaPresentInAnyType = spellType.some((spellTypeItem) => {
        const currentArcanaSpellType = spellTypeItem.arcana;
        return currentArcanaSpellType === arcana;
      });
      return isArcanaPresentInAnyType;
    });

    return isEachArcanaInSpell;
  }

  static checkIfSpellPracticeIsInTheOptions(
    spellPractice: number,
    practices: number[]
  ): boolean {
    const isPracticeToShowAll = practices[0] === 0;

    if (isPracticeToShowAll) return true;

    return practices.some((practice) => practice === spellPractice);
  }

  static formatOptions(
    currentOptions: ISelectedOptionsString
  ): ISelectedOptionsFormattedToNumbers {
    const { arcanas, degrees, practices } = currentOptions;

    const arcanaEnumValues = Object.values(Arcanas);
    const degreesEnumValues = Object.values(Degrees);
    const practicesEnumValues = Object.values(Practices);

    const arcanasFormatted = arcanas.map((arcanaName) => {
      return arcanaEnumValues.findIndex((value) => value === arcanaName);
    });

    const degreesFormatted = degrees.map((degreeName) => {
      return degreesEnumValues.findIndex((value) => value === degreeName);
    });

    const practicesFormatted = practices.map((practiceName) => {
      return practicesEnumValues.findIndex((value) => value === practiceName);
    });

    return {
      arcanas: arcanasFormatted,
      degrees: degreesFormatted,
      practices: practicesFormatted,
    };
  }
}
