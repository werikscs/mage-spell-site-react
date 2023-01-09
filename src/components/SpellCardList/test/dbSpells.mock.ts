import { ISpellData } from '../../../interfaces-types/interfaces';

// contain x spells
const fakeSpells: ISpellData[] = [
  {
    id: 1,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Carry on, my Wayward Son',
    type: [{ arcana: 1, degree: 1 }],
    properties: {
      practice: 2,
      primaryFactor: 'Potency',
      withstand: 'Stamina',
      suggestedRoteSkills: 'Expression, Medicine, Crafts',
    },
    description:
      'The willworker slowly seeps the vitality from a target. Against an awake and aware target, this spell has no effect, but against someone who is already tired and distracted, it causes the Drugged Condition for the Spell’s Duration.\n',
    extraInfo: [],
    author: 'Frishman ',
  },
  {
    id: 68,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Foreshadow',
    type: [{ arcana: 2, degree: 1 }],
    properties: {
      practice: 2,
      primaryFactor: 'Potency',
      withstand: 'Dot rating of the target effect',
      suggestedRoteSkills: 'Academics, Expression, Subterfuge',
      cost: '1 Mana',
    },
    description:
      'When a mage casts this spell, he chooses a destiny (or Destiny) of which he is aware. The spell causes the strings of fate to manifest one symbol per dot of Potency of that destiny between the time of casting and when the fated event occurs. For instance, if a Sleeper is destined to get into a car crash, the spell might cause her to see a commercial about auto insurance, or she might drive by the site of a car crash the day before. The effects of this spell are normally minor and subtle, but they can be useful for getting someone to believe in the power of fate and symbolism. Alternatively, the mage might wish to cause foreshadowing to manifest for particularly obscure destinies in order to analyze a mystery from a different point of view.\n',
    extraInfo: [
      {
        title: '+1 Reach',
        description: 'The mage chooses how the foreshadowing manifests.',
      },
    ],
    author: 'espritdecalmar',
  },
  {
    id: 108,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: "Blind Man's Eyes",
    type: [{ arcana: 3, degree: 1 }],
    properties: {
      practice: 3,
      primaryFactor: 'Duration',
      withstand: 'Composure',
      suggestedRoteSkills: 'Science, Athletics, Socialize',
      cost: '1 Mana (optional)',
    },
    description:
      'Unveiling the visual spectrum to the subject, the mage allows the blind to see once more. For the Duration of the spell the subject ignores the effects of the blinded tilt and condition. A similar spell takes care of deafness.\n',
    extraInfo: [],
    author: 'Flinty',
  },
  {
    id: 146,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Human Torch',
    type: [
      { arcana: 3, degree: 4 },
      { arcana: 4, degree: 4 },
    ],
    properties: {
      practice: 10,
      primaryFactor: 'Duration',
      withstand: 'Composure',
      suggestedRoteSkills: 'Athletics, Medicine, Science',
      cost: '1 Mana (optional)',
    },
    description:
      'The mage transmutes his flesh into fire, trusting his knowledge of Forces to keep the heat from burning vulnerable internal organs. Striking an opponent with a limb has an equivalent size (and base damage) of a torch (1), while grappling increases the amount of exposure to that of a bonfire (2). Each level of Potency increases the heat of the flames, to a maximum intensity of +3 (equivalent to molten metal). If the mage grapples an opponent (or is grappled) for two consecutive turns, the opponent ignites and is subject to the Burning Tilt. The mage is immune to heat and fire of equivalent or lesser intensity, including the Burning and Extreme Heat Tilts.\n',
    extraInfo: [
      {
        title: '+1 Reach',
        description:
          'The planes of force shielding you from the harmful effects of your own fire become more refined, protecting your worn armor and other equipment.',
      },
      {
        title: '+1 Reach',
        description:
          "You can 'flare' your fiery nimbus into a column of superheated air, with explosive results. As an instant action, you can attack at short range with Dexterity + Athletics, using a weapon modifier equal to Potency. Opponents apply Defense, but the 'spread' of your attack is difficult to avoid, not unlike a shotgun; your roll benefits from 9-Again. Alternatively, you can use the explosive burst for propulsion, making a Strength + Athletics roll to jump and multiplying your successes by Potency.",
      },
    ],
    author: 'AmusedByIrony',
  },
  {
    id: 151,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Transportation',
    type: [
      { arcana: 3, degree: 4 },
      { arcana: 5, degree: 4 },
    ],
    properties: {
      practice: 10,
      primaryFactor: 'Potency',
      withstand: 'Durability',
      suggestedRoteSkills: 'Science, Crafts, Occult',
      cost: '1 Mana (optional)',
    },
    description:
      'By understanding that all matter is but energy bundled together and bound in a physical form, the Mage can turn Matter into a data stream which can then be transmitted to another point to be re-materialized.\n',
    extraInfo: [
      {
        title: '+1 Reach',
        description: 'The Mage can store the data stream to be used later.',
      },
      {
        title: '+1 Reach',
        description:
          'The Mage can use free-floating energy (such as light, heat, etc.) to Replicate objects.',
      },
      {
        title: '+2 Reach',
        description:
          'The Mage can now use this spell to Replicate food as per the previous reach option.',
      },
      {
        title: '+3 Reach and Add Life ••••',
        description:
          'This Spell can also be used to Transport living beings (Withstood by Stamina).',
      },
    ],
    author: 'HTaiji',
  },
  {
    id: 215,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'A Bug',
    type: [{ arcana: 6, degree: 1 }],
    properties: {
      practice: 1,
      primaryFactor: 'Duration',
      withstand: 'Resolve',
      suggestedRoteSkills: 'Survival, Persuasion, Medicine',
      cost: '1 or more Mana (variable)',
    },
    description:
      "This spell nests itself on the subject's mind and leaks information in the real time. Pick a topic that this spell keeps eye on to get a descriptive output. It should be moderately precise - work life, commuting, sports competition, news. Whenever something that falls under this topic occurs the caster(or anyone that he chose at the time of casting) gets a description of the event.\nExample: If the topic is 'commute' the caster gets '...at the corner, right behind the butcher shop he turns left and goes straight down the street to the town hall…'. It won't reveal that he met his girlfriend on the way since it’s not the topic. It might however tell that he stopped and asked someone for advice on how to get there. When you choose 'imago', it will describe the spell that she craft when she crafts it '...she burns the tiger-monster-thing and Brian with the winds of Aether…' or reveals the conversation she has with her mentor '...she asks how harmful for the soul is to kill with magic and the master says that it depends on…'. Descriptions should be a little vague, unless the caster specifies a narrowed topic with a Reach option below. \nST should apply a penalty ranging from -1 to -3 when mage for example actively listens to 'soap operas' while trying to read a book on his own.\n",
    extraInfo: [
      {
        title: '+1 Reach',
        description: 'Pick another topic. Can be taken multiple times.',
      },
      {
        title: '+1 Reach',
        description:
          "The topic may be more precise - 'spying' can now become 'spying on a member of the Black Lotus organization' but it will only work on situations where the target thinks the Black Lotus is involved.",
      },
      {
        title: '+1 Reach',
        description:
          'Even thoughts can betray the target giving away what he thinks at the moment about the topic. Now you know what the target will do before he does it, at the moment of its decision.',
      },
      {
        title: '+2 Reach',
        description:
          'As above but when making an opposed check, pertaining the topic, against the subject of the spell you may add potency as bonus equipment. It can’t go above 5. Example',
      },
      {
        title: '+1 Reach',
        description:
          'The mage can tap in and out as an instant action. It’s a safety switch since the surveillance can be distracting at times.',
      },
      {
        title: '+2 Reach',
        description: 'Mage can tap in and out as a reflexive action.',
      },
    ],
    author: 'Moinen',
  },
  {
    id: 262,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Ariadne',
    type: [{ arcana: 7, degree: 1 }],
    properties: {
      practice: 2,
      primaryFactor: 'Duration',
      withstand: 'Resolve',
      suggestedRoteSkills: '?',
      cost: 'None or 1 Mana',
    },
    description:
      'The traveling willworker uncoils behind a thread that allows to find a way back in even the harshest of conditions. The thread can only be seen with Active Mage Sight, but tests to find it are not penalized by Environmental Tilts.\n',
    extraInfo: [
      {
        title: '+1 Reach',
        description:
          "Irises can't be closed entirely if the thread was guided through them. They always leave a mark that can be later reopened with appropriate Arcanum and spell.",
      },
      {
        title: '+1 Reach',
        description: 'The thread is visible even without Active Mage Sight.',
      },
    ],
    author: 'Moinen',
  },
  {
    id: 293,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Sanctify Space',
    type: [
      { arcana: 7, degree: 3 },
      { arcana: 8, degree: 2 },
    ],
    properties: {
      practice: 9,
      primaryFactor: 'Duration',
      withstand: 'Safe Place',
      suggestedRoteSkills: 'Occult, Persuasion, Survival',
      cost: '1 Mana',
    },
    description:
      "For the willworker on the go, this spell aligns a location with the mage's mystical practice, granting the Sanctum Merit at a dot rating equal to Potency (to a maximum of five). The spell is Withstood if the affected area encompasses or is part of an existing Safe Place that does not belong to the mage.\n",
    extraInfo: [],
    author: 'espritdecalmar',
  },
  {
    id: 317,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Sublimate Essence',
    type: [
      { arcana: 7, degree: 4 },
      { arcana: 9, degree: 4 },
    ],
    properties: {
      practice: 10,
      primaryFactor: 'Potency',
      withstand: 'Composure',
      suggestedRoteSkills: 'Expression, Occult, Science',
      cost: '1 Mana',
    },
    description:
      'This spell allows a willworker to sublimate Essence into Mana, converting an amount of Essence into Mana equal to half the spell Potency.\n',
    extraInfo: [
      {
        title: '+1 Reach',
        description: 'the converted Mana solidifies into tass.',
      },
      {
        title: '+1 Reach',
        description:
          'the spell effect is reversed, converting 1 Mana into 2 Essence per Potency instead.',
      },
    ],
    author: 'Redzone',
  },
  {
    id: 372,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Timekeeper',
    type: [{ arcana: 10, degree: 1 }],
    properties: {
      practice: 3,
      primaryFactor: 'Duration',
      withstand: 'None',
      suggestedRoteSkills: 'Survival, Stealth, Brawl',
      cost: '1 Mana',
    },
    description:
      "By use of this spell, the subject becomes aware of their absolute time, as well as the relative time between events. For instance, they could measure exactly how many seconds it takes for someone to run a lap without the use of a stopwatch. The subject not only detects when time has been sped up or slowed down, but they become aware of how much time 'should' have passed.\n",
    extraInfo: [
      {
        title: '+1 Reach',
        description:
          'By measuring the passage of moments, the subject may look upon a project that has been undertaken and know exactly when it’ll be complete. They could tell you exactly how long until a Kettle boils, the exact second a pregnant woman will give birth, or when a cathedral would be completed under present circumstances. Large scale projects that will be completed far in advance will return a likely range. When an Extended Action is evaluated, it returns how long it’ll take to complete on average and how long each interval is.',
      },
    ],
    author: 'SoulGambit',
  },
  {
    id: 420,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Duplicate',
    type: [{ arcana: 10, degree: 5 }],
    properties: {
      practice: 12,
      primaryFactor: 'Duration',
      withstand: 'Resolve',
      suggestedRoteSkills: '?',
      cost: '1 mana',
    },
    description:
      'For a number of actions equal to potency, create a small temporal warp the span of seconds in which time repeats itself for a subject. Any duplicated action performed by the subject will be doubled as though they had performed the action twice. Any expenditure required by the repeated action must be paid for twice, and any penalties accrued by that action will be inflicted twice.\n',
    extraInfo: [],
    author: 'Arduras',
  },
  {
    id: 15,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Corpse Marionette',
    type: [{ arcana: 1, degree: 2 }],
    properties: {
      practice: 4,
      primaryFactor: 'Potency',
      withstand: 'Resolve',
      suggestedRoteSkills: 'Expression, Intimidation, Occult',
    },
    description:
      'The mage seizes control of the subject corpse, and can spend an instant action to manipulate it each turn as if it were an animate being. If the corpse’s vocal cords are intact, it can even be made to speak. The mage may choose to temporarily relinquish control of the corpse, allowing it to appear to return to its natural state - unless independently animate, it will fall to the floor if standing, etc\n',
    extraInfo: [
      {
        title: '+1 Reach',
        description:
          'The mage may choose to temporarily relinquish control of a single part of the corpse - such as the mouth or hands, while maintaining control of the rest.',
      },
      {
        title: '+1 Reach',
        description:
          'The target may be a corpse animated by Quicken Dead, or other similar effect. While under this effect, the subject cannot act independently with its physical body, unless control is relinquished as described above. If the corpse has been animated by a being other than a caster, controlling it calls for a Clash of Wills.',
      },
    ],
    author: 'Inodiv',
  },
  {
    id: 16,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Mirror Mirror',
    type: [{ arcana: 1, degree: 2 }],
    properties: {
      practice: 5,
      primaryFactor: 'Duration',
      withstand: 'Resolve',
      suggestedRoteSkills: 'Expression, Occult, Subterfuge',
    },
    description:
      "By wrapping a person's soul with a reflective coating, the Mage causes others to see a bit of themselves, potentially fooling them into thinking the subject is one of them. For the spell's Duration, any passive attempt to discern the nature of the target of this spell reveals him to be of the same type of being as the discerner. A Vampire would, for example, see his own Beast reflected in the target in passing and assume him to be another of the Damned. A Changeling would see his tatterdemalion soul reflected there, and perceive the subject with a facsimile of his own Mien. However, this spell does not grant the subject knowledge of what someone else is. If unprepared, he will be quite confused by the Changeling who has decided he is kin and wants to know all about his time in Arcadia. This spell only works on passive attempts to discern the subject's nature. Active attempts (such as through the use of Auspex) provoke a Clash of Wills.\n",
    extraInfo: [],
    author: 'Frishman',
  },
  {
    id: 114,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Gravitic Ward',
    type: [{ arcana: 3, degree: 2 }],
    properties: {
      practice: 6,
      primaryFactor: 'Duration',
      withstand: 'Composure',
      suggestedRoteSkills: '?',
      cost: '1 Mana (optional)',
    },
    description:
      "Gravity is just another Force, and while a proficient Mage may seek to redirect it as he desires, there may come times when you will simply want protection from any harm it might occasion.\nFor the Duration of the spell, the subject is immune to all Bashing damage suffered from gravitic forces and decreases all Lethal damage from these sources by the spell's Potency.\nThis is primarily falling damage and the damage from objects falling on you, and does not include non-gravitic damage, such as pneumatic crushing engines, or rock physically thrown downwards by someone (though it will protect against any further kinetic energy imparted to that rock by gravity).\n",
    extraInfo: [
      {
        title: '+2 Reach',
        description:
          "The subject is immune to Bashing and Lethal damage from gravitic forces, and decreases all Aggravated damage from such sources by the spell's Potency.",
      },
    ],
    author: 'HerbertIsBertBert',
  },
  {
    id: 128,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Form Blazing Sword',
    type: [{ arcana: 3, degree: 3 }],
    properties: {
      practice: 7,
      primaryFactor: 'Potency',
      withstand: 'Stamina',
      suggestedRoteSkills: 'Athletics, Weaponry, Expression',
      cost: '1 Mana (optional)',
    },
    description:
      "The mage shapes and contains a source of energy into a melee weapon of elemental force; a campfire becomes a blade of flame, a concert provides a literal hammer of sound, or the mage enters a vampire's den armed with a spear of sunlight. The spell maintains the weapon's form and partially contains its energies, though the bearer suffers the full effects of continuous exposure. If the weapon is used to strike, it releases its stored energy into the target, as if they had spent a turn exposed to the source. The Potency of the effect determines how much energy may be contained in the weapon (as per the chart under Transform Energy), and each discharge reduces the remaining Potency of the effect by one, making future strikes less vicious or negating the spell altogether. The user's passive exposure does not reduce the spell's efficacy, however.\n",
    extraInfo: [
      {
        title: '+1 Reach',
        description:
          'The containment of the weapon is improved, and the user is no longer subject to its effects while bearing it.',
      },
      {
        title: '+2 Reach',
        description: 'Strikes do not reduce the Potency of the spell.',
      },
      {
        title: '+1 Reach',
        description:
          "The weapon acquires a 'core' of kinetic energy that gains heft when swung. If the weapon is used in a Weaponry attack and strikes the target, this buffeting force inflicts bashing damage equal to the attack successes, in addition to the effects of exposure to the stored energy. Armor can reduce this impact damage, but generally does not help against the energy.",
      },
      {
        title: '+2 Reach',
        description:
          "As above, and the core is more refined in shape; the weapon acquires the traits (equipment/initiative modifiers, Size, Strength requirement, etc.) of a weapon with a maximum equipment modifier of [Half Potency, round up.] While it still inflicts only bashing damage (including the weapon's modifier), it is in all other ways treated as the form copied - a flaming chain has the Grapple property, a flaming spear improves Defense and requires two hands to wield, and so on. As an instant action the mage may, if in range of the weapon, reconfigure it into another form within these limits.",
      },
      {
        title: '+1 Reach',
        description:
          "The weapon may be thrown; it has range bands of (Potency x 10/Potency x 20/Potency x 40) and is aimed with Dexterity + Athletics - the target's Defense. A successful throw inflicts damage as a strike. If the weapon has a kinetic element (as above), a throw inflicts additional bashing damage on a successful hit. The 'thrown' energy splits off from the original weapon and dissipates upon impact, leaving the weapon itself still in the user's grasp.",
      },
    ],
    author: 'Five Eyes',
  },
  {
    id: 132,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Myopia',
    type: [{ arcana: 3, degree: 3 }],
    properties: {
      practice: 8,
      primaryFactor: 'Potency',
      withstand: 'Stamina',
      suggestedRoteSkills: 'Science, Firearms, Crafts',
      cost: '1 Mana (optional)',
    },
    description:
      'Many people suffer from myopia, and with his spell mage can add his enemies to this list by disrupting light patterns near the enemy. This spell places a Myopic Condition on the enemy: -1 to all vision-related rolls per dot of Potency. Note that while his Defense suffers from this penalty, he still can use his full Defense for Dodge.\n',
    extraInfo: [],
    author: 'Dark Archon',
  },
  {
    id: 150,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Technostress',
    type: [{ arcana: 3, degree: 4 }],
    properties: {
      practice: 11,
      primaryFactor: 'Duration',
      withstand: 'Composure',
      suggestedRoteSkills: 'Computer, Stealth, Subterfuge',
      cost: '1 Mana (optional)',
    },
    description:
      'In the face of ever more ubiquitous recording devices and a greater ability for people to communicate with one another, the Guardians often have a difficult time protecting the Veil. But the Guardians have ways of denying people these advantages, such as this spell.\nWith this spell the mage can temporarily make digital systems oppose the subject. Every system and device that the subject uses will start having problems or otherwise do anything but what the subject requires.\nThis prevents the subject from gaining any aid from electronic devices whatsoever.\n',
    extraInfo: [],
    author: 'BeyondTheGrave',
  },
  {
    id: 152,
    userId: 0,
    favoriteCounter: 0,
    createdAt: '2022-12-28T23:35:32.816Z',
    updatedAt: '2022-12-28T23:35:32.816Z',
    comments: [],
    name: 'Neo-Luddite',
    type: [{ arcana: 3, degree: 5 }],
    properties: {
      practice: 13,
      primaryFactor: 'Potency',
      withstand: 'Durability',
      suggestedRoteSkills: 'Occult, Science, Survival',
      cost: '1 Mana (optional)',
    },
    description:
      "Within the area of the spell the mage destroys all manifestations of electromagnetic forces that are commonly used in technology. Electric currents, wireless transmissions, lasers, etc.\nThis spell is used in a process called 'rewildening' by a Free Council anarcho-primitivist philosophy that supposes that technology is purely an instrument of the Lie and that the future Atlantis will be ruled by magic utterly without technology.\n",
    extraInfo: [
      {
        title: 'Add Matter •••••',
        description:
          'This spell also destroys any manifestation of advanced materials. This could be plastics as well as any alloy more advanced than bronze. Although the specifics depend on the mage casting the spell.',
      },
    ],
    author: 'BeyondTheGrave',
  },
];

export default fakeSpells;
