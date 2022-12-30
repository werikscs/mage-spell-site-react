import { Arcanas, Degrees, Practices } from '../../utils/spellsUtils';

interface ISelectedOptions {
  arcanas: string[];
  degrees: string[];
  practices: string[];
}

interface IOptionToAddOrRemove {
  type: 'arcanas' | 'degrees' | 'practices';
  value: Arcanas | Degrees | Practices;
}
class SpellFilter {
  static addOption(
    options: ISelectedOptions,
    optionToAdd: IOptionToAddOrRemove
  ): ISelectedOptions {
    const { type, value } = optionToAdd;
    let optionsUpdated = { ...options };

    if (value === 'All') {
      optionsUpdated = { ...options, [type]: [] };
    } else {
      const arrayWithoutAll = options[type].filter((item) => item !== 'All');
      optionsUpdated = { ...options, [type]: arrayWithoutAll };
    }

    optionsUpdated[type].push(value);

    return optionsUpdated;
  }

  static removeOption(
    options: ISelectedOptions,
    optionToRemove: IOptionToAddOrRemove
  ): ISelectedOptions {
    const { type, value } = optionToRemove;

    const arrayUpdated = options[type].filter(
      (optionValue) => optionValue !== value
    );
    let optionsUpdated = { ...options, [type]: arrayUpdated };

    if (optionsUpdated[type].length === 0) {
      optionsUpdated = { ...optionsUpdated, [type]: ['All'] };
    }

    return optionsUpdated;
  }
}

describe('Filter spells', () => {
  describe('Filter spells - add and remove options', () => {
    it('should add "Death" option to filter options', () => {
      // arrange
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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
      let currentOptions: ISelectedOptions = {
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

  describe('Filter spells - convert prop fron string to number', () => {
    it('should convert ', () => {});
  });

  describe('By Arcanas', () => {});
});
