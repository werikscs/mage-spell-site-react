import { useState } from 'react';
import { IFilterLiComponent } from '../../utils/componentData';
import CheckboxIcon from '../Icons/CheckboxIcon';
import StyledLi from './style';

function CheckboxFilterLi({
  title,
  otherText,
  hasCheckbox,
}: IFilterLiComponent): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <StyledLi onClick={() => setIsChecked(!isChecked)} aria-hidden="true">
      {hasCheckbox && <CheckboxIcon isChecked={isChecked} />}
      <span className="li__name">{title}</span>
      <span>{otherText}</span>
    </StyledLi>
  );
}

CheckboxFilterLi.defaultProps = {
  otherText: '',
  hasCheckbox: true,
};

export default CheckboxFilterLi;
