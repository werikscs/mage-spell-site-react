import { ISpellData } from '../interfaces-types/interfaces';

const spells: ISpellData[] = [
  {
    id: 5,
    userId: 37,
    favoriteCounter: 0,
    createdAt: '2015-03-25T12:00:00Z',
    updatedAt: '2015-03-25T12:00:00Z',
    author: 'zezim',
    name: 'Carry on, my Wayward Son',
    type: [
      {
        arcana: 4,
        degree: 1,
      },
      {
        arcana: 2,
        degree: 3,
      },
    ],
    properties: {
      practice: 3, // 3 - Unveiling
      primaryFactor: 'Potency',
      suggestedRoteSkills: '', // pode ser vazio
      withstand: 'Stamina', // pode ser vazio
      cost: '5 Mana', // pode ser vazio
    },
    description:
      'Urban mages such as the House of Ariadne often weaponize the city itself, trapping enemies in dead ends and blind alleys.\nThe subject of this spell becomes unable to escape the street, alley or similar space he is in for the Duration, as he is buffeted by coincidences that harass him whenever he tries to leave.',
    extraInfo: [
      {
        title: 'Add Time •••',
        description: [
          'The subject experiences minor time dilation within the cul-de-sac; at an extreme, she might enter an alley at dusk then leave it at midnight.',
        ],
      },
      {
        title: '+1 Reach',
        description: [
          "The mage may scribe the Grimoire directly onto an Ariadne's thread. Mages who can sense Threads can access the Grimoire from any part of the same city.",
        ],
      },
    ],
    comments: [
      {
        id: 1,
        spellId: 5,
        userId: 37,
        createdAt: '2015-03-25T12:00:00Z',
        updatedAt: '2015-03-25T12:00:00Z',
        description: 'muito bom esse spell',
      },
      {
        id: 2,
        spellId: 5,
        userId: 18,
        createdAt: '2015-03-25T12:00:00Z',
        updatedAt: '2015-03-25T12:00:00Z',
        description: 'sei não em...',
      },
    ],
  },
];

export default spells;
