import {
  ISpellData,
  ISpellDataCardFormatted,
  SpellExtraInfo,
  SpellExtraInfoFormatted,
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
      comments,
    } = spellData;

    const dataCardListItem: ISpellDataCardFormatted = {
      type: this.formatSpellType(type),
      properties: {
        ...properties,
        practice: Object.values(Practices)[properties.practice],
      },
      id,
      updatedAt: this.formatLastUpdatedDate(updatedAt),
      author,
      name,
      description: this.formatDescription(description),
      extraInfo: this.formatExtraInfo(extraInfo),
      commentNum: comments.length,
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

  static formatDescription(description: string): string[] {
    return description.split('\n');
  }

  static formatExtraInfo(extraInfo: SpellExtraInfo): SpellExtraInfoFormatted {
    return extraInfo.map(({ title, description }) => {
      return {
        title,
        description: this.formatDescription(description),
      };
    });
  }

  static formatLastUpdatedDate(date: string): string {
    const dateObj = new Date(date);
    return dateObj.toLocaleString();
  }
}

export default SpellCardFormatter;
