import {
  arcanasData,
  degreesData,
  practicesData,
} from '../../utils/componentData';
import CheckboxFilterList from '../CheckboxFilterList';
import ExpandableElement from '../ExpandableElement';

function ExapandableOptions(): JSX.Element {
  return (
    <>
      <ExpandableElement title="Arcanas">
        <CheckboxFilterList optionType="arcanas" dataArray={arcanasData} />
      </ExpandableElement>
      <ExpandableElement title="Degrees">
        <CheckboxFilterList optionType="degrees" dataArray={degreesData} />
      </ExpandableElement>
      <ExpandableElement title="Practices">
        <CheckboxFilterList optionType="practices" dataArray={practicesData} />
      </ExpandableElement>
    </>
  );
}

export default ExapandableOptions;
