import { useState } from 'react';
import { ILiArray } from '../../utils/componentData';
import CheckboxFilterLi from '../CheckboxFIlterLi';
import StyledUl from './style';

interface ICheckboxFilter {
  dataArray: ILiArray[];
}

function CheckboxFilter({ dataArray }: ICheckboxFilter): JSX.Element {
  const [resetCheckbox, setResetCheckbox] = useState<boolean>(false);

  return (
    <StyledUl>
      {dataArray.map((dataItem) => (
        <CheckboxFilterLi
          key={dataItem.id}
          title={dataItem.title}
          otherText={dataItem.otherText}
          hasCheckbox={dataItem.hasCheckbox}
          resetCheckboxState={{ resetCheckbox, setResetCheckbox }}
        />
      ))}
    </StyledUl>
  );
}

export default CheckboxFilter;
