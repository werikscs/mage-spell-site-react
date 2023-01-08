export enum Arcanas {
  all = 'All',
  death = 'Death',
  fate = 'Fate',
  forces = 'Forces',
  life = 'Life',
  matter = 'Matter',
  mind = 'Mind',
  prime = 'Prime',
  space = 'Space',
  spirit = 'Spirit',
  time = 'Time',
}

export enum Degrees {
  all = 'All',
  initiate = 'Initiate',
  apprentice = 'Apprentice',
  disciple = 'Disciple',
  adept = 'Adept',
  master = 'Master',
}

export enum Practices {
  all = 'All',
  // •
  knowing = 'Knowing',
  compelling = 'Compelling',
  unveiling = 'Unveiling',
  // ••
  ruling = 'Ruling',
  veiling = 'Veiling',
  shielding = 'Shielding',
  // •••
  weaving = 'Weaving',
  fraying = 'Fraying',
  perfecting = 'Perfecting',
  // ••••
  patterning = 'Patterning',
  unraveling = 'Unraveling',
  // •••••
  making = 'Making',
  unmaking = 'Unmaking',
}

export const arcanaIndexes = (arcanaNames: string[]): number[] => {
  const arcanaKeys = Object.values(Arcanas);

  return arcanaNames.map((arcanaName) => {
    return arcanaKeys.findIndex((name) => name === arcanaName);
  });
};
