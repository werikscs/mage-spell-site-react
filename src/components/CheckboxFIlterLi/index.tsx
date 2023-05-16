import { useContext, useEffect, useState } from 'react';
import { ILiComponent } from '../../utils/componentData';
import CheckboxIcon from '../Icons/CheckboxIcon';
import StyledLi from './style';
import SpellFilterContext from '../../context/SpellFilterContext';

type Prop = {
  title: string;
  otherText?: string;
  hasCheckbox?: boolean;
  // eslint-disable-next-line react/require-default-props
  resetCheckboxState?: {
    resetCheckbox: boolean;
    setResetCheckbox: (value: boolean) => void;
  };
  optionType: 'arcanas' | 'degrees' | 'practices';
};

function CheckboxFilterLi({
  title,
  otherText,
  hasCheckbox,
  resetCheckboxState,
  optionType,
}: Prop): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { filterSpells } = useContext(SpellFilterContext);

  useEffect(() => {
    setIsChecked(false);
  }, [resetCheckboxState?.resetCheckbox]);

  const handleOnClick = () => {
    if (hasCheckbox) {
      setIsChecked(() => !isChecked);
    } else {
      resetCheckboxState?.setResetCheckbox(!resetCheckboxState.resetCheckbox);
    }
    filterSpells({
      optionType,
      value: title,
      operationType: !isChecked ? 'add' : 'remove',
    });
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
