import { Arcanas, Degrees, Practices } from './spellsUtils';

export interface ILiComponent {
  title: string;
  otherText?: string;
  hasCheckbox?: boolean;
  resetCheckboxState?: {
    resetCheckbox: boolean;
    setResetCheckbox: (value: boolean) => void;
  };
}

export interface ILiArray extends ILiComponent {
  id: number;
}

export const degreesData: ILiArray[] = [
  { id: 0, title: Degrees.all, hasCheckbox: false },
  { id: 1, title: Degrees.initiate, otherText: '•' },
  { id: 2, title: Degrees.apprentice, otherText: '••' },
  { id: 3, title: Degrees.disciple, otherText: '•••' },
  { id: 4, title: Degrees.adept, otherText: '••••' },
  { id: 5, title: Degrees.master, otherText: '•••••' },
];

export const arcanasData: ILiArray[] = [
  { id: 0, title: Arcanas.all, hasCheckbox: false },
  { id: 1, title: Arcanas.death },
  { id: 2, title: Arcanas.fate },
  { id: 3, title: Arcanas.forces },
  { id: 4, title: Arcanas.life },
  { id: 5, title: Arcanas.matter },
  { id: 6, title: Arcanas.mind },
  { id: 7, title: Arcanas.prime },
  { id: 8, title: Arcanas.space },
  { id: 9, title: Arcanas.spirit },
  { id: 10, title: Arcanas.time },
];

export const practicesData: ILiArray[] = [
  { id: 0, title: Practices.all, hasCheckbox: false },
  { id: 1, title: Practices.knowing, otherText: '•' },
  { id: 2, title: Practices.compelling, otherText: '•' },
  { id: 3, title: Practices.unveiling, otherText: '•' },
  { id: 4, title: Practices.ruling, otherText: '••' },
  { id: 5, title: Practices.veiling, otherText: '••' },
  { id: 6, title: Practices.shielding, otherText: '••' },
  { id: 7, title: Practices.weaving, otherText: '•••' },
  { id: 8, title: Practices.fraying, otherText: '•••' },
  { id: 9, title: Practices.perfecting, otherText: '•••' },
  { id: 10, title: Practices.patterning, otherText: '••••' },
  { id: 11, title: Practices.unraveling, otherText: '••••' },
  { id: 12, title: Practices.making, otherText: '•••••' },
  { id: 13, title: Practices.unmaking, otherText: '•••••' },
];
