import useCustomTheme from '../../hooks/useCustomTheme';
import { IFilterLi } from '../../utils/componentData';
import CheckboxFilterLi from '../CheckBoxFIlterLi';
import StyledUl from './style';

interface ISideMenuFilerUl {
  dataArray: IFilterLi[];
}

function SideMenuFilterUl({ dataArray }: ISideMenuFilerUl): JSX.Element {
  const { theme } = useCustomTheme();

  const childVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      display: 'none',
      transition: { duration: theme.animation.fast },
    },
    visible: {
      height: 'fit-content',
      opacity: 1,
      display: 'flex',
      transition: { duration: theme.animation.fast },
    },
  };

  return (
    <StyledUl variants={childVariants}>
      {dataArray.map((data) => (
        <CheckboxFilterLi
          key={data.id}
          title={data.title}
          otherText={data.otherText}
        />
      ))}
    </StyledUl>
  );
}

export default SideMenuFilterUl;
