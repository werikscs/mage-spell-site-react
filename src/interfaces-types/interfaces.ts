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

export type SpellTypeFormatted = { arcana: string; degree: string };
export type SpellType = { arcana: number; degree: number };

type SpellPropertiesFormatted = {
  practice: string;
  primaryFactor: string;
  suggestedRoteSkills?: string;
  withstand?: string;
  cost?: string;
};

type SpellProperties = {
  practice: number;
  primaryFactor: string;
  suggestedRoteSkills?: string;
  withstand?: string;
  cost?: string;
};

interface ISpellDataCard {
  id: number;
  updatedAt: string;
  author: string;
  name: string;
  description: string;
  extraInfo: { title: string; description: string[] }[];
}

export interface ISpellDataCardFormatted extends ISpellDataCard {
  type: string;
  properties: SpellPropertiesFormatted;
}

export interface ISpellData extends ISpellDataCard {
  userId: number;
  favoriteCounter: number;
  createdAt: string;
  type: SpellType[];
  properties: SpellProperties;
  comments: {
    id: number;
    spellId: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
    description: string;
  }[];
}
