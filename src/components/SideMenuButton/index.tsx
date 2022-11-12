import { IButton } from '../../interfaces-types/interfaces';
import StyledSideMenuButton from './style';

function SideMenuButton({
  title,
  icon,
  onClick,
  variant,
}: IButton): JSX.Element {
  return (
    <StyledSideMenuButton type="button" variant={variant} onClick={onClick}>
      {icon} {title}
    </StyledSideMenuButton>
  );
}

SideMenuButton.defaultProps = {
  icon: '',
  variant: '',
};

export default SideMenuButton;
