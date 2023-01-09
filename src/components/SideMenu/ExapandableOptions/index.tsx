import {
  arcanasData,
  degreesData,
  practicesData,
} from '../../../utils/componentData';
import CheckboxFilterList from '../../CheckboxFilterList';
import ExpandableElement from '../../ExpandableElement';

function ExapandableOptions(): JSX.Element {
  return (
    <>
      <ExpandableElement title="Arcanas">
        <CheckboxFilterList dataArray={arcanasData} />
      </ExpandableElement>
      <ExpandableElement title="Degrees">
        <CheckboxFilterList dataArray={degreesData} />
      </ExpandableElement>
      <ExpandableElement title="Practices">
        <CheckboxFilterList dataArray={practicesData} />
      </ExpandableElement>
    </>
  );
}

export default ExapandableOptions;
