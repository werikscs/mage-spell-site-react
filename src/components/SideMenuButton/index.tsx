import { IButton } from '../../interfaces-types/interfaces';
import StyledSideMenuButton from './style';

function SideMenuButton({ title, icon, onClick }: IButton): JSX.Element {
  return (
    <StyledSideMenuButton type="button" onClick={onClick}>
      {icon} {title}
    </StyledSideMenuButton>
  );
}

SideMenuButton.defaultProps = {
  icon: '',
};

export default SideMenuButton;
