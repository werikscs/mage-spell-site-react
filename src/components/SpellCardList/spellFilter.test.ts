import { ISpellData, SpellType } from '../../interfaces-types/interfaces';
import spells from '../../utils/spells';
import { Arcanas, Degrees, Practices } from '../../utils/spellsUtils';

interface ISelectedOptionsString {
  arcanas: string[];
  degrees: string[];
  practices: string[];
}

interface ISelectedOptionsFormattedToNumbers {
  arcanas: number[];
  degrees: number[];
  practices: number[];
}

interface IOptionToAddOrRemove {
  type: 'arcanas' | 'degrees' | 'practices';
  value: Arcanas | Degrees | Practices;
}
class SpellFilter {
  static checkIfSpellDegreesIsInTheOptions(
    spellType: SpellType[],
    degrees: number[]
  ): boolean {
    const isDegreeToShowAll = degrees[0] === 0;

    if (isDegreeToShowAll) return true;

    const hasSpellTypeAllDegrees = spellType.every((spellTypeItem) => {
      const spellTypeCurrentDegree = spellTypeItem.degree;
      const isSpellTypeCurrentDegreeInDegreeOptions = degrees.includes(
        spellTypeCurrentDegree
      );
      return isSpellTypeCurrentDegreeInDegreeOptions;
    });

    return hasSpellTypeAllDegrees;
  }

  static checkIfSpellArcanasIsInTheOptions(
    spellType: SpellType[],
    arcanas: number[]
  ): boolean {
    const isArcanaToShowAll = arcanas[0] === 0;

    if (isArcanaToShowAll) return true;

    const hasSpellTypeAllArcanas = spellType.every((spellTypeItem) => {
      const spellTypeCurrentArcana = spellTypeItem.arcana;
      const isSpellTypeCurrentArcanaInArcanaOptions = arcanas.includes(
        spellTypeCurrentArcana
      );
      return isSpellTypeCurrentArcanaInArcanaOptions;
    });

    return hasSpellTypeAllArcanas;
  }

  static checkIfSpellPracticeIsInTheOptions(
    spellPractice: number,
    practices: number[]
  ): boolean {
    const isPracticeToShowAll = practices[0] === 0;

    if (isPracticeToShowAll) return true;

    return practices.some((practice) => practice === spellPractice);
  }

  static filterBySelectedOptions(
    currentOptions: ISelectedOptionsString,
    currentSpells: ISpellData[]
  ): ISpellData[] {
    const currentOptionsToNumbers = SpellFilter.formatOptions(currentOptions);
    const { arcanas, degrees, practices } = currentOptionsToNumbers;
    const newSpell: ISpellData[] = [];

    currentSpells.forEach((spell) => {
      const spellType = spell.type;
      const spellPractice = spell.properties.practice;

      // // verify if inside type exist all options of arcanas
      // const isSpellArcanasInTheOptions =
      //   SpellFilter.checkIfSpellArcanasIsInTheOptions(spellType, arcanas);
      // // verify if inside type exist all options of degrees
      // const isSpellDegreesInTheOptions =
      //   SpellFilter.checkIfSpellDegreesIsInTheOptions(spellType, degrees);
      // verify if spell practice exists inside of practices
      // const isSpellPracticeInTheOptions =
      //   SpellFilter.checkIfSpellPracticeIsInTheOptions(
      //     spellPractice,
      //     practices
      //   );
    });
    return currentSpells;
  }

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

describe('Filter spells', () => {
  describe('Filter spells - add and remove options', () => {
    it('should add "Death" option to filter options', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd: IOptionToAddOrRemove = {
        type: 'arcanas',
        value: Arcanas.death,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd);
      // assert
      expect(currentOptions.arcanas).toEqual(
        expect.arrayContaining([optionToAdd.value])
      );
    });

    it('should remove "Death" option to filter options', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd: IOptionToAddOrRemove = {
        type: 'arcanas',
        value: Arcanas.death,
      };
      const optionToRemove: IOptionToAddOrRemove = {
        type: 'arcanas',
        value: Arcanas.death,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd);
      currentOptions = sut.removeOption(currentOptions, optionToRemove);
      // assert
      expect(currentOptions.arcanas).toEqual(
        expect.not.arrayContaining([optionToRemove.value])
      );
    });

    it('should add "Initiate" option to filter options', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.initiate,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd);
      // assert
      expect(currentOptions.degrees).toEqual(
        expect.arrayContaining([optionToAdd.value])
      );
    });

    it('should remove "Initiate" option to filter options', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.initiate,
      };
      const optionToRemove: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.initiate,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd);
      currentOptions = sut.removeOption(currentOptions, optionToRemove);
      // assert
      expect(currentOptions.degrees).toEqual(
        expect.not.arrayContaining([optionToRemove.value])
      );
    });

    it('should add "Knowing" option to filter options', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd: IOptionToAddOrRemove = {
        type: 'practices',
        value: Practices.knowing,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd);
      // assert
      expect(currentOptions.practices).toEqual(
        expect.arrayContaining([optionToAdd.value])
      );
    });

    it('should remove "Knowing" option to filter options', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd: IOptionToAddOrRemove = {
        type: 'practices',
        value: Practices.knowing,
      };
      const optionToRemove: IOptionToAddOrRemove = {
        type: 'practices',
        value: Practices.knowing,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd);
      currentOptions = sut.removeOption(currentOptions, optionToRemove);
      // assert
      expect(currentOptions.practices).toEqual(
        expect.not.arrayContaining([optionToRemove.value])
      );
    });

    it('should add two options and remove one option', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd1: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.apprentice,
      };
      const optionToAdd2: IOptionToAddOrRemove = {
        type: 'practices',
        value: Practices.knowing,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd1);
      currentOptions = sut.addOption(currentOptions, optionToAdd2);
      currentOptions = sut.removeOption(currentOptions, optionToAdd1);
      // assert
      expect(currentOptions.degrees).toEqual(
        expect.not.arrayContaining([optionToAdd1.value])
      );
      expect(currentOptions.practices).toEqual(
        expect.arrayContaining([optionToAdd2.value])
      );
    });

    it('should add three options and remove one', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd1: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.apprentice,
      };
      const optionToAdd2: IOptionToAddOrRemove = {
        type: 'practices',
        value: Practices.knowing,
      };
      const optionToAdd3: IOptionToAddOrRemove = {
        type: 'arcanas',
        value: Arcanas.fate,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd1);
      currentOptions = sut.addOption(currentOptions, optionToAdd2);
      currentOptions = sut.addOption(currentOptions, optionToAdd3);
      currentOptions = sut.removeOption(currentOptions, optionToAdd1);
      // assert
      expect(currentOptions.degrees).toEqual(
        expect.not.arrayContaining([optionToAdd1.value])
      );
      expect(currentOptions.practices).toEqual(
        expect.arrayContaining([optionToAdd2.value])
      );
      expect(currentOptions.arcanas).toEqual(
        expect.arrayContaining([optionToAdd3.value])
      );
    });

    it('should add All option and clean its category', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: [],
        degrees: [],
        practices: [],
      };
      const optionToAdd1: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.apprentice,
      };
      const optionToAdd2: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.adept,
      };
      const optionToAdd3: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.all,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd1);
      currentOptions = sut.addOption(currentOptions, optionToAdd2);
      currentOptions = sut.addOption(currentOptions, optionToAdd3);
      // assert

      expect(currentOptions.degrees).toEqual(
        expect.arrayContaining([optionToAdd3.value])
      );
      expect(currentOptions.degrees).toEqual(
        expect.not.arrayContaining([optionToAdd1.value])
      );
      expect(currentOptions.degrees).toEqual(
        expect.not.arrayContaining([optionToAdd2.value])
      );
    });

    it('should remove All if add any other type', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: ['All'],
        degrees: ['All'],
        practices: ['All'],
      };
      const optionToAdd1: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.apprentice,
      };
      const optionToAdd2: IOptionToAddOrRemove = {
        type: 'arcanas',
        value: Arcanas.death,
      };
      const optionToAdd3: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.disciple,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd1);
      currentOptions = sut.addOption(currentOptions, optionToAdd2);
      currentOptions = sut.addOption(currentOptions, optionToAdd3);
      // assert

      expect(currentOptions.degrees).toEqual(
        expect.arrayContaining([optionToAdd3.value, optionToAdd1.value])
      );
      expect(currentOptions.degrees).toEqual(
        expect.not.arrayContaining(['All'])
      );
      expect(currentOptions.arcanas).toEqual(
        expect.arrayContaining([optionToAdd2.value])
      );
      expect(currentOptions.arcanas).toEqual(
        expect.not.arrayContaining(['All'])
      );
      expect(currentOptions.practices).toEqual(expect.arrayContaining(['All']));
    });

    it('should keeps All if remove other types', () => {
      // arrange
      let currentOptions: ISelectedOptionsString = {
        arcanas: ['All'],
        degrees: ['All'],
        practices: ['All'],
      };
      const optionToAdd1: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.apprentice,
      };
      const optionToAdd2: IOptionToAddOrRemove = {
        type: 'arcanas',
        value: Arcanas.death,
      };
      const optionToAdd3: IOptionToAddOrRemove = {
        type: 'degrees',
        value: Degrees.disciple,
      };
      // act
      const sut = SpellFilter;
      currentOptions = sut.addOption(currentOptions, optionToAdd1);
      currentOptions = sut.addOption(currentOptions, optionToAdd2);
      currentOptions = sut.addOption(currentOptions, optionToAdd3);
      currentOptions = sut.removeOption(currentOptions, optionToAdd1);
      currentOptions = sut.removeOption(currentOptions, optionToAdd2);
      currentOptions = sut.removeOption(currentOptions, optionToAdd3);
      // assert

      expect(currentOptions.degrees).toEqual(
        expect.not.arrayContaining([optionToAdd3.value, optionToAdd1.value])
      );
      expect(currentOptions.degrees).toEqual(expect.arrayContaining(['All']));

      expect(currentOptions.arcanas).toEqual(
        expect.not.arrayContaining([optionToAdd2.value])
      );
      expect(currentOptions.arcanas).toEqual(expect.arrayContaining(['All']));

      expect(currentOptions.practices).toEqual(expect.arrayContaining(['All']));
    });
  });

  describe('Filter spells - format prop from string to number', () => {
    it('should format arcanas array when it has one string', () => {
      // arrange
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const currentOptionsFormatted = sut.formatOptions(currentOptions);
      // assert
      expect(currentOptionsFormatted.arcanas).toMatchObject([0]);
    });

    it('should format arcanas array when it has two string', () => {
      // arrange
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.death, Arcanas.fate],
        degrees: [Degrees.all],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const currentOptionsFormatted = sut.formatOptions(currentOptions);
      // assert
      expect(currentOptionsFormatted.arcanas).toMatchObject([1, 2]);
    });

    it('should format arcanas, degrees and practices', () => {
      // arrange
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.death, Arcanas.fate, Arcanas.time],
        degrees: [Degrees.initiate, Degrees.apprentice],
        practices: [Practices.knowing, Practices.unmaking],
      };
      // act
      const sut = SpellFilter;
      const currentOptionsFormatted = sut.formatOptions(currentOptions);
      // assert
      expect(currentOptionsFormatted.arcanas).toMatchObject([1, 2, 10]);
      expect(currentOptionsFormatted.degrees).toMatchObject([1, 2]);
      expect(currentOptionsFormatted.practices).toMatchObject([1, 13]);
    });
  });

  describe('Filter spells - check filter options', () => {
    it('should return true if arcana options is 0 (All)', () => {
      // arrange
      const spellType: SpellType[] = [{ arcana: 4, degree: 4 }];
      const arcanas: number[] = [0];
      // act
      const sut = SpellFilter;
      const isSpellArcanasInTheOptions = sut.checkIfSpellArcanasIsInTheOptions(
        spellType,
        arcanas
      );
      // assert
      expect(isSpellArcanasInTheOptions).toBe(true);
    });

    it('should return true if spell has all arcanas options (one)', () => {
      // arrange
      const spellType: SpellType[] = [{ arcana: 5, degree: 4 }];
      const arcanas: number[] = [5];
      // act
      const sut = SpellFilter;
      const isSpellArcanasInTheOptions = sut.checkIfSpellArcanasIsInTheOptions(
        spellType,
        arcanas
      );
      // assert
      expect(isSpellArcanasInTheOptions).toBe(true);
    });

    it('should return true if spell has all arcanas options (two)', () => {
      // arrange
      const spellType: SpellType[] = [
        { arcana: 5, degree: 4 },
        { arcana: 3, degree: 4 },
      ];
      const arcanas: number[] = [3, 5];
      // act
      const sut = SpellFilter;
      const isSpellArcanasInTheOptions = sut.checkIfSpellArcanasIsInTheOptions(
        spellType,
        arcanas
      );
      // assert
      expect(isSpellArcanasInTheOptions).toBe(true);
    });

    it('should return false if spell does not contain all arcanas options (one)', () => {
      // arrange
      const spellType: SpellType[] = [{ arcana: 5, degree: 4 }];
      const arcanas: number[] = [4];
      // act
      const sut = SpellFilter;
      const isSpellArcanasInTheOptions = sut.checkIfSpellArcanasIsInTheOptions(
        spellType,
        arcanas
      );
      // assert
      expect(isSpellArcanasInTheOptions).toBe(false);
    });

    it('should return false if spell does not contain all arcanas options (two)', () => {
      // arrange
      const spellType: SpellType[] = [
        { arcana: 5, degree: 4 },
        { arcana: 3, degree: 4 },
      ];
      const arcanas: number[] = [5, 1];
      // act
      const sut = SpellFilter;
      const isSpellArcanasInTheOptions = sut.checkIfSpellArcanasIsInTheOptions(
        spellType,
        arcanas
      );
      // assert
      expect(isSpellArcanasInTheOptions).toBe(false);
    });

    it('should return true if degree options is 0 (All)', () => {
      // arrange
      const spellType: SpellType[] = [{ arcana: 4, degree: 4 }];
      const degrees: number[] = [0];
      // act
      const sut = SpellFilter;
      const isSpellDegreesInTheOptions = sut.checkIfSpellDegreesIsInTheOptions(
        spellType,
        degrees
      );
      // assert
      expect(isSpellDegreesInTheOptions).toBe(true);
    });

    it('should return true if spell has all degree options (one)', () => {
      // arrange
      const spellType: SpellType[] = [{ arcana: 5, degree: 4 }];
      const degrees: number[] = [4];
      // act
      const sut = SpellFilter;
      const isSpellDegreesInTheOptions = sut.checkIfSpellDegreesIsInTheOptions(
        spellType,
        degrees
      );
      // assert
      expect(isSpellDegreesInTheOptions).toBe(true);
    });

    it('should return true if spell has all degree options (two)', () => {
      // arrange
      const spellType: SpellType[] = [
        { arcana: 5, degree: 4 },
        { arcana: 3, degree: 7 },
      ];
      const degrees: number[] = [4, 7];
      // act
      const sut = SpellFilter;
      const isSpellDegreesInTheOptions = sut.checkIfSpellDegreesIsInTheOptions(
        spellType,
        degrees
      );
      // assert
      expect(isSpellDegreesInTheOptions).toBe(true);
    });

    it('should return false if spell does not contain all degrees options (one)', () => {
      // arrange
      const spellType: SpellType[] = [{ arcana: 5, degree: 4 }];
      const degrees: number[] = [5];
      // act
      const sut = SpellFilter;
      const isSpellDegreesInTheOptions = sut.checkIfSpellDegreesIsInTheOptions(
        spellType,
        degrees
      );
      // assert
      expect(isSpellDegreesInTheOptions).toBe(false);
    });

    it('should return false if spell does not contain all degrees options (two)', () => {
      // arrange
      const spellType: SpellType[] = [
        { arcana: 5, degree: 4 },
        { arcana: 3, degree: 7 },
      ];
      const degrees: number[] = [4, 1];
      // act
      const sut = SpellFilter;
      const isSpellDegreesInTheOptions = sut.checkIfSpellDegreesIsInTheOptions(
        spellType,
        degrees
      );
      // assert
      expect(isSpellDegreesInTheOptions).toBe(false);
    });

    it('should return true if spell contains practice in the options', () => {
      // arrange
      const spellPractice = 1;
      const practices = [1];
      const sut = SpellFilter;
      // act
      const isSpellPracticeInTheOptions =
        sut.checkIfSpellPracticeIsInTheOptions(spellPractice, practices);
      // assert
      expect(isSpellPracticeInTheOptions).toBe(true);
    });

    it('should return false if spell not contains practice 2 in the options', () => {
      // arrange
      const spellPractice = 2;
      const practices = [1, 3];
      const sut = SpellFilter;

      // act
      const isSpellPracticeInTheOptions =
        sut.checkIfSpellPracticeIsInTheOptions(spellPractice, practices);
      // assert
      expect(isSpellPracticeInTheOptions).toBe(false);
    });

    it('should return true if practices is 0 (All)', () => {
      // arrange
      const spellPractice = 2;
      const practices = [0];
      const sut = SpellFilter;

      // act
      const isSpellPracticeInTheOptions =
        sut.checkIfSpellPracticeIsInTheOptions(spellPractice, practices);
      // assert
      expect(isSpellPracticeInTheOptions).toBe(true);
    });
  });

  describe('By Arcanas', () => {
    it('should return all spells', () => {
      // arrange
      const currentSpells = spells;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(currentSpells).toEqual(currentSpells);
      expect(filteredSpells.length).toBe(currentSpells.length);
    });
  });
});
