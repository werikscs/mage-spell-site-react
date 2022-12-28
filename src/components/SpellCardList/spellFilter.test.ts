import { ISpellData } from '../../interfaces-types/interfaces';
import spells from '../../utils/spells';

class SpellFilter {
  static filterBy(tagToSearch: string, spellArray: ISpellData[]): ISpellData[] {
    return spellArray;
  }
}

describe('Filter - by Arcanas', () => {
  it('should return all arcanas when clicking "All"', () => {
    // arrange
    const spellArray = spells;
    const tagToSearch = 'All';
    const sut = SpellFilter;
    // act
    const spellsFiltered = sut.filterBy(tagToSearch, spellArray);
    // assert
    expect(spellsFiltered.length).toBe(spellArray.length);
  });
});
