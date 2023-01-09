import { SpellType } from '../../../interfaces-types/interfaces';
import { Arcanas, Degrees, Practices } from '../../../utils/spellsUtils';
import {
  IOptionToAddOrRemove,
  ISelectedOptionsString,
  SpellFilter,
} from '../spellFilter';
import fakeSpells from './dbSpells.mock';

describe('Filter spells', () => {
  describe('add and remove options', () => {
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

  describe('format prop from string to number', () => {
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

  describe('check filter options', () => {
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

    it('should return true if spell has more than one type and one option', () => {
      // arrange
      const spellType: SpellType[] = [
        { arcana: 5, degree: 4 },
        { arcana: 3, degree: 4 },
      ];
      const arcanas: number[] = [3];
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

    it('should return true if spell has more than one type and one option', () => {
      // arrange
      const spellType: SpellType[] = [
        { arcana: 5, degree: 4 },
        { arcana: 3, degree: 7 },
      ];
      const degrees: number[] = [7];
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

  describe('by Arcanas', () => {
    it('should return all death spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 1;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.death],
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
      expect(filteredSpells.length).toBe(3);
      filteredSpells.forEach((spell) => {
        const isDeathSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isDeathSpell).toBe(true);
      });
    });

    it('should return all fate spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 2;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.fate],
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
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isFateSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isFateSpell).toBe(true);
      });
    });

    it('should return all forces spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 3;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.forces],
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
      expect(filteredSpells.length).toBe(8);
      filteredSpells.forEach((spell) => {
        const isForcesSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isForcesSpell).toBe(true);
      });
    });

    it('should return all life spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 4;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.life],
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
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isLifeSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isLifeSpell).toBe(true);
      });
    });

    it('should return all matter spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 5;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.matter],
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
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isMatterSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isMatterSpell).toBe(true);
      });
    });

    it('should return all mind spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 6;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.mind],
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
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isMindSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isMindSpell).toBe(true);
      });
    });

    it('should return all prime spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 7;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.prime],
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
      expect(filteredSpells.length).toBe(3);
      filteredSpells.forEach((spell) => {
        const isPrimeSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isPrimeSpell).toBe(true);
      });
    });

    it('should return all space spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 8;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.space],
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
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isSpaceSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isSpaceSpell).toBe(true);
      });
    });

    it('should return all spirit spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 9;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.spirit],
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
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isSpiritSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isSpiritSpell).toBe(true);
      });
    });

    it('should return all time spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const arcanaIndex = 10;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.time],
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
      expect(filteredSpells.length).toBe(2);
      filteredSpells.forEach((spell) => {
        const isTimeSpell = spell.type.some((type) => {
          return type.arcana === arcanaIndex;
        });
        expect(isTimeSpell).toBe(true);
      });
    });
  });

  describe('by Degrees', () => {
    it('should return all initiate spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const degreeIndex = 1;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.initiate],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(6);
      filteredSpells.forEach((spell) => {
        const isInitiateSpell = spell.type.some((type) => {
          return type.degree === degreeIndex;
        });
        expect(isInitiateSpell).toBe(true);
      });
    });

    it('should return all apprentice spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const degreeIndex = 2;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.apprentice],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(4);
      filteredSpells.forEach((spell) => {
        const isApprenticeSpell = spell.type.some((type) => {
          return type.degree === degreeIndex;
        });
        expect(isApprenticeSpell).toBe(true);
      });
    });

    it('should return all adept spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const degreeIndex = 4;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.adept],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(4);
      filteredSpells.forEach((spell) => {
        const isAdeptSpell = spell.type.some((type) => {
          return type.degree === degreeIndex;
        });
        expect(isAdeptSpell).toBe(true);
      });
    });

    it('should return all master spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const degreeIndex = 5;

      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.master],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(2);
      filteredSpells.forEach((spell) => {
        const isMasterSpell = spell.type.some((type) => {
          return type.degree === degreeIndex;
        });
        expect(isMasterSpell).toBe(true);
      });
    });
  });

  describe('by Practices', () => {
    it('should return all knowing spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 1;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.knowing],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isKnowingSpell = practiceIndex === spell.properties.practice;
        expect(isKnowingSpell).toBe(true);
      });
    });

    it('should return all compelling spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 2;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.compelling],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(3);
      filteredSpells.forEach((spell) => {
        const isCompellingSpell = practiceIndex === spell.properties.practice;
        expect(isCompellingSpell).toBe(true);
      });
    });

    it('should return all unveiling spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 3;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.unveiling],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(2);
      filteredSpells.forEach((spell) => {
        const isUnveilingSpell = practiceIndex === spell.properties.practice;
        expect(isUnveilingSpell).toBe(true);
      });
    });

    it('should return all ruling spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 4;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.ruling],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isRulingSpell = practiceIndex === spell.properties.practice;
        expect(isRulingSpell).toBe(true);
      });
    });

    it('should return all veiling spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 5;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.veiling],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isVeiling = practiceIndex === spell.properties.practice;
        expect(isVeiling).toBe(true);
      });
    });

    it('should return all shielding spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 6;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.shielding],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isShielding = practiceIndex === spell.properties.practice;
        expect(isShielding).toBe(true);
      });
    });

    it('should return all weaving spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 7;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.weaving],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isWeaving = practiceIndex === spell.properties.practice;
        expect(isWeaving).toBe(true);
      });
    });

    it('should return all fraying spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 8;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.fraying],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isFraying = practiceIndex === spell.properties.practice;
        expect(isFraying).toBe(true);
      });
    });

    it('should return all perfecting spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 9;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.perfecting],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isPerfecting = practiceIndex === spell.properties.practice;
        expect(isPerfecting).toBe(true);
      });
    });

    it('should return all patterning spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 10;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.patterning],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(3);
      filteredSpells.forEach((spell) => {
        const isPatterning = practiceIndex === spell.properties.practice;
        expect(isPatterning).toBe(true);
      });
    });

    it('should return all unraveling spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 11;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.unraveling],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isUnraveling = practiceIndex === spell.properties.practice;
        expect(isUnraveling).toBe(true);
      });
    });

    it('should return all making spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 12;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.making],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isMaking = practiceIndex === spell.properties.practice;
        expect(isMaking).toBe(true);
      });
    });

    it('should return all unmaking spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const practiceIndex = 13;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.all],
        degrees: [Degrees.all],
        practices: [Practices.unmaking],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
      filteredSpells.forEach((spell) => {
        const isUnmaking = practiceIndex === spell.properties.practice;
        expect(isUnmaking).toBe(true);
      });
    });
  });

  describe('mixed options', () => {
    it('should return all spells', () => {
      // arrange
      const currentSpells = fakeSpells;
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

    it('should return death and apprentice spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.death],
        degrees: [Degrees.apprentice],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(2);
    });

    it('should return forces and adept spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.forces],
        degrees: [Degrees.adept],
        practices: [Practices.all],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(3);
    });

    it('should return forces, adept and patterning spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.forces],
        degrees: [Degrees.adept],
        practices: [Practices.patterning],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(2);
    });

    it('should return forces, adept and unraveling spells', () => {
      // arrange
      const currentSpells = fakeSpells;
      const currentOptions: ISelectedOptionsString = {
        arcanas: [Arcanas.forces],
        degrees: [Degrees.adept],
        practices: [Practices.unraveling],
      };
      // act
      const sut = SpellFilter;
      const filteredSpells = sut.filterBySelectedOptions(
        currentOptions,
        currentSpells
      );
      // assert
      expect(filteredSpells.length).toBe(1);
    });
  });
});
