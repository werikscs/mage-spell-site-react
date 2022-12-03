import { ReactNode } from 'react';
import { ToggleMenuTypes } from './types';

export interface IReactChildren {
  children: React.ReactNode;
}

export interface IToggleMenu {
  isMenuOpened: ToggleMenuTypes;
}

export interface IButton {
  title: string;
  icon?: ReactNode;
  variant?: string;
  onClick: () => void;
}

export interface IScreenDimensions {
  screenDimensions: { width: number; height: number };
}
