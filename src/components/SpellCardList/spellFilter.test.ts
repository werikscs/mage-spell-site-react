import { ISpellData } from '../../interfaces-types/interfaces';
import spells from '../../utils/spells';
import { arcanaIndex } from '../../utils/spellsUtils';

class SpellFilter {
  static filterBy(
    arcanaToSearch: number,
    spellArray: ISpellData[]
  ): ISpellData[] {
    if (arcanaToSearch === 0) return spellArray;

    const filteredSpells = spellArray.filter((spell) => {
      const arcanaAndDegreeArray = spell.type;

      return arcanaAndDegreeArray.some(
        (item) => item.arcana === arcanaToSearch
      );
    });

    return filteredSpells;
  }
}

describe('Filter - by Arcanas', () => {
  it('should return all arcanas when clicking "All"', () => {
    // arrange
    const currentSpells = spells;
    const arcanaToSearch = arcanaIndex('All');
    const sut = SpellFilter;
    // act
    const filteredSpells = sut.filterBy(arcanaToSearch, currentSpells);
    // assert
    expect(filteredSpells.length).toBe(currentSpells.length);
  });

  it('should return only Death spells', () => {
    // arrange
    const currentSpells = spells;
    const arcanaToSearch = arcanaIndex('Death');
    const sut = SpellFilter;
    // act
    const filteredSpells = sut.filterBy(arcanaToSearch, currentSpells);
    // assert
    filteredSpells.forEach((spellFiltered) => {
      const arcanaAndDegreeArray = spellFiltered.type;

      expect(arcanaAndDegreeArray).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            arcana: arcanaToSearch,
          }),
        ])
      );
    });
  });
});
