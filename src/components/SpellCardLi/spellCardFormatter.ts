import {
  ISpellData,
  ISpellDataCardFormatted,
  SpellType,
} from '../../interfaces-types/interfaces';
import { Arcanas, Practices } from '../../utils/spellsUtils';

class SpellCardFormatter {
  static formatDataCardObject(spellData: ISpellData): ISpellDataCardFormatted {
    const {
      id,
      author,
      updatedAt,
      name,
      type,
      properties,
      description,
      extraInfo,
    } = spellData;

    const dataCardListItem: ISpellDataCardFormatted = {
      type: this.formatSpellType(type),
      properties: {
        ...properties,
        practice: Object.values(Practices)[properties.practice],
      },
      id,
      updatedAt,
      author,
      name,
      description,
      extraInfo,
    };

    return dataCardListItem;
  }

  static formatSpellType(spellTypes: SpellType[]): string {
    let stringSpellStype = '';
    spellTypes.forEach(({ arcana, degree }) => {
      const arcanaName = Object.values(Arcanas)[arcana];
      const degreeBalls = '•'.repeat(degree);

      stringSpellStype += `${arcanaName} ${degreeBalls}, `;
    });

    return stringSpellStype.slice(0, -2);
  }

  static formatDescription(description: string): string {
    
  }
}

export default SpellCardFormatter;
