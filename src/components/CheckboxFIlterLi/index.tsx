import { useEffect, useState } from 'react';
import useCustomTheme from '../../hooks/useCustomTheme';
import { ILiComponent } from '../../utils/componentData';
import CheckboxIcon from '../Icons/CheckboxIcon';
import StyledLi from './style';

function CheckboxFilterLi({
  title,
  otherText,
  hasCheckbox,
  resetCheckboxState,
}: ILiComponent): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(false);
  }, [resetCheckboxState?.resetCheckbox]);

  const handleOnClick = () => {
    if (hasCheckbox) {
      setIsChecked(!isChecked);
    } else {
      resetCheckboxState?.setResetCheckbox(!resetCheckboxState.resetCheckbox);
    }
    console.log('filtrar spells por', title);
  };

  return (
    <StyledLi onClick={handleOnClick} aria-hidden="true">
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
