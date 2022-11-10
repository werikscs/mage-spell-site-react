export interface IFilterLiComponent {
  title: string;
  otherText?: string;
  hasCheckbox?: boolean;
}

export interface IFilterLiArray extends IFilterLiComponent {
  id: number;
}

export const degreesData: IFilterLiArray[] = [
  { id: 0, title: 'All', hasCheckbox: false },
  { id: 1, title: 'Initiate', otherText: '•' },
  { id: 2, title: 'Apprentice', otherText: '••' },
  { id: 3, title: 'Disciple', otherText: '•••' },
  { id: 4, title: 'Adept', otherText: '••••' },
  { id: 5, title: 'Master', otherText: '•••••' },
];

export const arcanasDdata: IFilterLiArray[] = [
  { id: 0, title: 'All', hasCheckbox: false },
  { id: 1, title: 'Death' },
  { id: 2, title: 'Fate' },
  { id: 3, title: 'Forces' },
  { id: 4, title: 'Life' },
  { id: 5, title: 'Matter' },
  { id: 6, title: 'Mind' },
  { id: 7, title: 'Prime' },
  { id: 8, title: 'Space' },
  { id: 9, title: 'Spirit' },
  { id: 10, title: 'Time' },
];
