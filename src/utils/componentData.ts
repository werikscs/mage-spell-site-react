export interface IFilterLi {
  id: number;
  title: string;
  otherText?: string;
}

const degreesData: IFilterLi[] = [
  { id: 0, title: 'Initiate', otherText: '•' },
  { id: 1, title: 'Apprentice', otherText: '••' },
  { id: 2, title: 'Disciple', otherText: '•••' },
  { id: 3, title: 'Adept', otherText: '••••' },
  { id: 4, title: 'Master', otherText: '•••••' },
];

export default degreesData;
