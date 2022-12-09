/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import WindowSizeContext from '../../context/WindowSizeContext';
import { ISpellDataCardFormatted } from '../../interfaces-types/interfaces';
import Divider from '../Divider';
import CommentIcon from '../Icons/CommentIcon';
import StarIcon from '../Icons/StarIcon';
import StyledLi from './style';

interface ISpellCardLi {
  spellData: ISpellDataCardFormatted;
}

function SpellCardLi({ spellData }: ISpellCardLi): JSX.Element {
  const { width } = useContext(WindowSizeContext);
  return (
    <StyledLi width={width}>
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
        {spellData.description.map((description, i) => (
          <span key={'desc'+i} className="main-description">
            {description}
          </span>
        ))}
      </div>
      <div className="spell-extra-info">
        {spellData.extraInfo.map((info, i) => (
          <div key={'extraInfo'+i}>
            <span className="info-title">{info.title}</span>
            {info.description.map((description, i) => (
              // eslint-disable-next-line react/jsx-key
              <span key={'info-title'+i} className="main-description">{description}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="spell-last-edited">
        Last edited: {spellData.updatedAt}
      </div>
      <div className="spell-footer">
        <span className="author">by {spellData.author} </span>
        <span>
          <CommentIcon />
          {spellData.commentNum}
        </span>
        <span>#{spellData.id}</span>
        <StarIcon local="spell-card" isFilled={false} />
      </div>
    </StyledLi>
  );
}

export default SpellCardLi;
