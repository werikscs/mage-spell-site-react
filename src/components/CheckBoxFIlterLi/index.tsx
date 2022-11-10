import { useState } from 'react';
import CheckboxIcon from '../Icons/CheckboxIcon';
import StyledLi from './style';

interface ICheckboxFilterLi {
  title: string;
  otherText?: string;
}

function CheckboxFilterLi({
  title,
  otherText,
}: ICheckboxFilterLi): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <StyledLi onClick={() => setIsChecked(!isChecked)} aria-hidden="true">
      <CheckboxIcon isChecked={isChecked} />
      <span className="li__name">{title}</span>
      <span>{otherText}</span>
    </StyledLi>
  );
}

CheckboxFilterLi.defaultProps = {
  otherText: '',
};

export default CheckboxFilterLi;
