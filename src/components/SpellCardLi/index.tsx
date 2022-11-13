import Divider from '../Divider';
import CommentIcon from '../Icons/CommentIcon';
import StarIcon from '../Icons/StarIcon';
import StyledLi from './style';

function SpellCardLi(): JSX.Element {
  return (
    <StyledLi>
      <div className="spell-header">
        <span className="spell-name">Carry on, my Wayward Son</span>
        <span className="spell-level">Death •</span>
      </div>
      <Divider />
      <div className="spell-props">
        <span>
          Pratice:
          <span>Compelling</span>
        </span>
        <span>
          Primary Factor:
          <span>Potency</span>
        </span>
        <span>
          Withstand:
          <span>Stamina</span>
        </span>
        <span>
          Suggested Rote Skills:
          <span>Expression, Medicine, Crafts</span>
        </span>
      </div>
      <div className="spell-descriptions">
        <span className="main-description">
          The willworker slowly seeps the vitality from a target. Against an
          awake and aware target, this spell has no effect, but against someone
          who is already tired and distracted, it causes the Drugged Condition
          for the Spell’s Duration.
        </span>
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
    </StyledLi>
  );
}

export default SpellCardLi;
