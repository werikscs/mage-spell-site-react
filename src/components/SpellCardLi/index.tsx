import { ISpellDataCardFormatted } from '../../interfaces-types/interfaces';
import Divider from '../Divider';
import CommentIcon from '../Icons/CommentIcon';
import StarIcon from '../Icons/StarIcon';
import StyledLi from './style';

interface ISpellCardLi {
  spellData: ISpellDataCardFormatted;
}

function SpellCardLi({ spellData }: ISpellCardLi): JSX.Element {
  console.log(spellData);
  return (
    <StyledLi>
      <div className="spell-header">
        <span className="spell-name">{spellData.name}</span>
        <span className="spell-level">{spellData.type}</span>
      </div>
      <Divider />
      <div className="spell-props">
        <span>
          Pratice:
          <span>{spellData.properties.practice}</span>
        </span>
        <span>
          Primary Factor:
          <span>{spellData.properties.primaryFactor}</span>
        </span>
        {spellData.properties.withstand && (
          <span>
            Withstand:
            <span>{spellData.properties.withstand}</span>
          </span>
        )}
        {spellData.properties.suggestedRoteSkills && (
          <span>
            Suggested Rote Skills:
            <span>{spellData.properties.suggestedRoteSkills}</span>
          </span>
        )}
        {spellData.properties.cost && (
          <span>
            Cost:
            <span>{spellData.properties.cost}</span>
          </span>
        )}
      </div>
      <div className="spell-descriptions">
        <span className="main-description">{spellData.description}</span>
      </div>
      <div className="spell-footer">
        <span className="author">by Frishman </span>
        <span>
          <CommentIcon />
          22
        </span>
        <span>#999</span>
        <StarIcon local="spell-card" isFilled={false} />
      </div>
      <div>Last edited</div>
    </StyledLi>
  );
}

export default SpellCardLi;
