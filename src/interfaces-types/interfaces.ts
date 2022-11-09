import { ToggleMenuTypes } from './types';

export interface IReactChildren {
  children: React.ReactNode;
}

export interface IToggleMenu {
  isMenuOpened: ToggleMenuTypes;
}
