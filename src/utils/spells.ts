import { ISpellData } from '../interfaces-types/interfaces';

// const spells: ISpellData[] = [
//   {
//     id: 5,
//     userId: 37,
//     favoriteCounter: 0,
//     createdAt: '2015-03-25T12:00:00Z',
//     updatedAt: '2015-03-25T12:00:00Z',
//     author: 'zezim',
//     name: 'Carry on, my Wayward Son',
//     type: [
//       {
//         arcana: 4,
//         degree: 1,
//       },
//       {
//         arcana: 2,
//         degree: 3,
//       },
//     ],
//     properties: {
//       practice: 3, // 3 - Unveiling
//       primaryFactor: 'Potency',
//       suggestedRoteSkills: '', // pode ser vazio
//       withstand: 'Stamina', // pode ser vazio
//       cost: '5 Mana', // pode ser vazio
//     },
//     description:
//       'Urban mages such as the House of Ariadne often weaponize the city itself, trapping enemies in dead ends and blind alleys.\nThe subject of this spell becomes unable to escape the street, alley or similar space he is in for the Duration, as he is buffeted by coincidences that harass him whenever he tries to leave.',
//     extraInfo: [
//       {
//         title: 'Add Time •••',
//         description:
//           'The subject experiences minor time dilation within the cul-de-sac; at an extreme, she might enter an alley at dusk then leave it at midnight.',
//       },
//       {
//         title: '+1 Reach',
//         description:
//           "The mage may scribe the Grimoire directly onto an Ariadne's thread. Mages who can sense Threads can access the Grimoire from any part of the same city.",
//       },
//     ],
//     comments: [
//       {
//         id: 1,
//         spellId: 5,
//         userId: 37,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2015-03-25T12:00:00Z',
//         description: 'muito bom esse spell',
//       },
//       {
//         id: 2,
//         spellId: 5,
//         userId: 18,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2015-03-25T12:00:00Z',
//         description: 'sei não em...',
//       },
//     ],
//   },
//   {
//     id: 3,
//     userId: 37,
//     favoriteCounter: 0,
//     createdAt: '2015-03-25T12:00:00Z',
//     updatedAt: '2016-03-25T12:00:00Z',
//     author: 'zezim',
//     name: 'Carry on, my Wayward Son',
//     type: [
//       {
//         arcana: 4,
//         degree: 1,
//       },
//       {
//         arcana: 2,
//         degree: 3,
//       },
//     ],
//     properties: {
//       practice: 3, // 3 - Unveiling
//       primaryFactor: 'Potency',
//       suggestedRoteSkills: '', // pode ser vazio
//       withstand: 'Stamina', // pode ser vazio
//       cost: '5 Mana', // pode ser vazio
//     },
//     description:
//       'Urban mages such as the House of Ariadne often weaponize the city itself, trapping enemies in dead ends and blind alleys.\nThe subject of this spell becomes unable to escape the street, alley or similar space he is in for the Duration, as he is buffeted by coincidences that harass him whenever he tries to leave.',
//     extraInfo: [
//       {
//         title: 'Add Time •••',
//         description:
//           'The subject experiences minor time dilation within the cul-de-sac; \nat an extreme, she might enter an alley at dusk then leave it at midnight.',
//       },
//       {
//         title: '+1 Reach',
//         description:
//           "The mage may scribe the Grimoire directly onto an Ariadne's thread. \nMages who can sense Threads can access the Grimoire from any part of the same city.",
//       },
//     ],
//     comments: [
//       {
//         id: 1,
//         spellId: 5,
//         userId: 37,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2015-03-25T12:00:00Z',
//         description: 'muito bom esse spell',
//       },
//       {
//         id: 2,
//         spellId: 5,
//         userId: 18,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2014-03-25T12:00:00Z',
//         description: 'sei não em...',
//       },
//       {
//         id: 3,
//         spellId: 5,
//         userId: 18,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2016-03-25T12:00:00Z',
//         description: 'confia...',
//       },
//     ],
//   },
//   {
//     id: 9,
//     userId: 37,
//     favoriteCounter: 0,
//     createdAt: '2015-03-25T12:00:00Z',
//     updatedAt: '2015-03-25T12:00:00Z',
//     author: 'zezim',
//     name: 'Carry on, my Wayward Son',
//     type: [
//       {
//         arcana: 4,
//         degree: 1,
//       },
//       {
//         arcana: 2,
//         degree: 3,
//       },
//     ],
//     properties: {
//       practice: 3, // 3 - Unveiling
//       primaryFactor: 'Potency',
//       suggestedRoteSkills: '', // pode ser vazio
//       withstand: 'Stamina', // pode ser vazio
//       cost: '5 Mana', // pode ser vazio
//     },
//     description:
//       'Urban mages such as the House of Ariadne often weaponize the city itself, trapping enemies in dead ends and blind alleys.\nThe subject of this spell becomes unable to escape the street, alley or similar space he is in for the Duration, as he is buffeted by coincidences that harass him whenever he tries to leave.',
//     extraInfo: [
//       {
//         title: 'Add Time •••',
//         description:
//           'The subject experiences minor time dilation within the cul-de-sac; at an extreme, she might enter an alley at dusk then leave it at midnight.',
//       },
//       {
//         title: '+1 Reach',
//         description:
//           "The mage may scribe the Grimoire directly onto an Ariadne's thread. Mages who can sense Threads can access the Grimoire from any part of the same city.",
//       },
//     ],
//     comments: [
//       {
//         id: 1,
//         spellId: 5,
//         userId: 37,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2015-03-25T12:00:00Z',
//         description: 'muito bom esse spell',
//       },
//       {
//         id: 2,
//         spellId: 5,
//         userId: 18,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2015-03-25T12:00:00Z',
//         description: 'sei não em...',
//       },
//     ],
//   },
//   {
//     id: 7,
//     userId: 37,
//     favoriteCounter: 0,
//     createdAt: '2015-03-25T12:00:00Z',
//     updatedAt: '2016-03-25T12:00:00Z',
//     author: 'zezim',
//     name: 'Carry on, my Wayward Son',
//     type: [
//       {
//         arcana: 4,
//         degree: 1,
//       },
//       {
//         arcana: 2,
//         degree: 3,
//       },
//     ],
//     properties: {
//       practice: 3, // 3 - Unveiling
//       primaryFactor: 'Potency',
//       suggestedRoteSkills: '', // pode ser vazio
//       withstand: 'Stamina', // pode ser vazio
//       cost: '5 Mana', // pode ser vazio
//     },
//     description:
//       'Urban mages such as the House of Ariadne often weaponize the city itself, trapping enemies in dead ends and blind alleys.\nThe subject of this spell becomes unable to escape the street, alley or similar space he is in for the Duration, as he is buffeted by coincidences that harass him whenever he tries to leave.',
//     extraInfo: [
//       {
//         title: 'Add Time •••',
//         description:
//           'The subject experiences minor time dilation within the cul-de-sac; \nat an extreme, she might enter an alley at dusk then leave it at midnight.',
//       },
//       {
//         title: '+1 Reach',
//         description:
//           "The mage may scribe the Grimoire directly onto an Ariadne's thread. \nMages who can sense Threads can access the Grimoire from any part of the same city.",
//       },
//     ],
//     comments: [
//       {
//         id: 1,
//         spellId: 5,
//         userId: 37,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2015-03-25T12:00:00Z',
//         description: 'muito bom esse spell',
//       },
//       {
//         id: 2,
//         spellId: 5,
//         userId: 18,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2014-03-25T12:00:00Z',
//         description: 'sei não em...',
//       },
//       {
//         id: 3,
//         spellId: 5,
//         userId: 18,
//         createdAt: '2015-03-25T12:00:00Z',
//         updatedAt: '2016-03-25T12:00:00Z',
//         description: 'confia...',
//       },
//     ],
//   },
// ];

const spells = [
  {
    "id":1,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Carry on, my Wayward Son",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":2,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Expression, Medicine, Crafts"
    },
    "description":"The willworker slowly seeps the vitality from a target. Against an awake and aware target, this spell has no effect, but against someone who is already tired and distracted, it causes the Drugged Condition for the Spell’s Duration.\n",
    "extraInfo":[
      
    ],
    "author":"Frishman "
  },
  {
    "id":2,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Death Perception",
    "type":[
      {
        "arcana":1,
        "degree":1
      },
      {
        "arcana":4,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Medicine, Brawl"
    },
    "description":"Destruction is easy, if you know the structure of a target - attack its weak point for massive damage. You combine your knowledge of life and death to find the most weak point of a target - the pillar upon which its existence stands. If you successfully physically damage enemy in hit locations (arms, legs, head, heart, hands or foots) while this spell works, reduce Stamina of enemy by Potency for counting infliction of Tilt (for example, in you successfully strike your enemy with Stamina 4 in arm while this spell with Potency 2, he gets Arm Wrack Tilt on 3 or more damage).\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"Apply Potency of a spell to damage. You only get additional damage if you target and successfully strike an enemy in hit location with at least 1 point of damage. Type of damage does not change."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":3,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Discover the Reaper",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Survival, Empathy"
    },
    "description":"Contact with Death marks you, and the more you mess with the Reaper the more you wear it's scent. Assassins, gravediggers, emergency workers, war veterans, coroners... all of them wear their share. For the spell's Duration, the caster can focus his sight on a subject and measure the amount of contact with the death the target has. Most people have only a very minor death aura, but a veteran coroner's aura could be startling.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"You know if the death cloud is caused because the target is a killer. Also gives you a measure of how many people he has killed, one, a few, dozens, hundreds."
      }
    ],
    "author":"Masa"
  },
  {
    "id":4,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Executioner’s Sight",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Medicine, Empathy"
    },
    "description":"The subject is able to see the inner flaws of any object or person. By studying something, the subject can subtract one point of Durability from something he studied during the spell’s Duration for each turn he spent observing the object. The maximum reduction is equal to the spell’s potency. When studying a person, each turn of observation allows the mage to reduce the target’s Defense by one point in the first turn of combat.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject gains also 9-again on the first roll made to affect a subject he has spent at least one turn observing."
      }
    ],
    "author":"Menace"
  },
  {
    "id":5,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Killer Instinct",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Firearms, Survival"
    },
    "description":"Everything dies, sooner or later. This spell allows a subject to assess how to best expedite that process. While it is in effect, when the subject focuses upon a person or object, an inkling akin to peripheral mage sight will emphasize any nearby objects or phenomena that threaten that target, with greater stress placed on more dangerous things. A subject might find that their gun feels lighter when trained upon a vampire, while a candle's flame pulses and roils with ill-concealed animosity towards the undead.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject may take turns to aim hand-to-hand attacks. For each bonus die gained from aiming, an attack (ranged or melee) gains Armor-piercing (1), up to a maximum of (3)."
      },
      {
        "title":"+1 Reach",
        "description":"For each die gained from aiming, reduce the threshold for an attack (ranged or melee) to be considered an exceptional success by one, to a minimum of two successes."
      },
      {
        "title":"+1 Reach",
        "description":"Each action spent aiming grants Potency bonus dice, instead of one, up to the character's limit on bonus dice from aiming."
      },
      {
        "title":"+1 Reach",
        "description":"Increase the subject's limit on bonus dice from aiming (usually +3) by the Potency of the spell."
      },
      {
        "title":"+1 Reach",
        "description":"If the subject scores an exceptional success on an attack, one level of inflicted damage is upgraded one step (bashing to lethal, etc.)"
      },
      {
        "title":"+1 Reach",
        "description":"If the subject scores an exceptional success on an attack, the Armor rating or Durability of their target is reduced by 1 until they heal or are repaired."
      },
      {
        "title":"+1 Reach",
        "description":"While under the effects of this spell and using Active Death Sight, a subject is always considered as having spent the last two turns aiming prior to making an attack."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":6,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Revealing Shadows",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Occult, Athletics, Streetwise"
    },
    "description":"Darkness and shadows are the places where strange and dangerous beings hide and hunt. But to a Moros, that very darkness can become the very thing that can turn the hunt around. Any shadow the subject looks upon reveals what it is hiding within.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"When staging a surprise attack from the shadows against the subject it gains a bonus equal to the spell’s potency to its roll to notice."
      }
    ],
    "author":"Neros"
  },
  {
    "id":7,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Probing the Shadows",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Investigation, Athletics, Larceny"
    },
    "description":"The Mage switches off their visual sight in favor of sensing all shadows in the vicinity. They can determine the location and shape of all shadows within the Sensory Range. Within complete darkness the effect is much more pronounced. The Mage can sense the distribution of all darkness, with living and inanimate objects visible as solid white outlines. For many purposes, the spell negates the effects of Blinded Tilt when within full darkness. The Mage can still suffer the effects of Poor Light Tilt because of residual amounts of light. Within strongly illuminated areas the Mage suffers from the Blinded Tilt.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage receives both the usual and magical sensory input. She does not suffer the effects of either Poor Light or Blinded Tilts within bright areas."
      },
      {
        "title":"+1 Reach",
        "description":"All dark areas also carry tactile sensations, should the Mage pay attention."
      }
    ],
    "author":"Tea Time"
  },
  {
    "id":8,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"See the Cracks",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Empathy, Investigation, Subterfuge"
    },
    "description":"The caster intuits the target’s Vice, Integrity level, and the presence of any Integrity-related Conditions. Against mages, it reads Wisdom, any Wisdom related Conditions, and which (if any) are the target's inured spells.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Knowledge of the target's psyche makes him easier to manipulate. The caster gains a bonus to appropriate Social rolls against the target equal to the spell's Potency."
      }
    ],
    "author":"Justin Sane"
  },
  {
    "id":9,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sense Undead",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Empathy, Investigation, Subterfuge",
      "undefined":"?"
    },
    "description":"Ghosts aren't bound by physical obstacles, and naturally can't be seen or felt by human senses. This spell tells the mage, if something undead enters the area of the spell and gives the location of it.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage knows the Rank and Influence of the ghost who is entering the area."
      },
      {
        "title":"+1 Reach",
        "description":"The mage knows the amount of dots in attributes of the ghost who is entering the area."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":10,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Conceive Ghost",
    "type":[
      {
        "arcana":1,
        "degree":1
      }
    ],
    "properties":{
      "practice":2,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Empathy, Investigation, Subterfuge",
      "undefined":"?"
    },
    "description":"The caster impregnates an applicable subject with necromantic energy; should the subject die before the Duration of this spell elapses, the death is guaranteed to birth a ghost of the subject within Twilight. The ghost's initial anchor is the caster of the spell. It's unlikely to be in a friendly mood.\nIf you see a Moros lurking around the nursing home or ICU, you can guess what they're up to.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster may decide the ghost's ban."
      },
      {
        "title":"+1 Reach",
        "description":"The caster may decide the ghost's bane."
      },
      {
        "title":"+1 Reach",
        "description":"The caster may decide the ghost's numina."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"For one point of mana, the ghost will come into being with Rank 2 and additional numen decided by the caster until the ghost has at least three numina. This investment of mana is lost if the spell elapses without birthing a ghost."
      }
    ],
    "author":"galivet"
  },
  {
    "id":11,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Body Heat Camouflage",
    "type":[
      {
        "arcana":1,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Medicine, Science, Survival",
      "undefined":"?"
    },
    "description":"The mage invites cold to surround the subject, distorting any heat they radiate. This leaves the subject invisible to any thermal imaging technologies or heat detecting abilities.\n",
    "extraInfo":[
      
    ]
  },
  {
    "id":12,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Coldproof",
    "type":[
      {
        "arcana":1,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Medicine, Occult, Survival",
      "undefined":"?"
    },
    "description":"The subject becomes immune to any damage caused by cold. Note that this only stops cold related damage, a blizzard may not harm you but its perception penalties would still apply, same with penalties for a slippery ice floor. Supernatural attempts to cause cold-related harm to the subject provoke a Clash of Wills.\n",
    "extraInfo":[
      
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":13,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Buried Anchor",
    "type":[
      {
        "arcana":1,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Survival, Subterfuge",
      "undefined":"?"
    },
    "description":"When ghosts are formed, they develop intimate connections with people, places, or objects that held personal significance to them in their life. These Anchors protect ghosts from Essence bleed and provide sustenance. This spell wards one potential source of Essence, preventing the ghost from obtaining Essence from a specified Anchor for the Duration of this spell unless they succeed on a Clash of Wills.\n",
    "extraInfo":[
      
    ],
    "author":"rwknoll"
  },
  {
    "id":14,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Bolster Soul",
    "type":[
      {
        "arcana":1,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"None",
      "suggestedRoteSkills":"Medicine, Occult, Empathy",
      "undefined":"?"
    },
    "description":"The caster wards a target's soul against iniquity, allowing him to better weather the slings and arrows of this world. For the spell's Duration, the target gains the 9-again quality on any degeneration roll he makes as a result of reaching a breaking point.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The target instead gains the 8-again quality."
      }
    ],
    "author":"Frishman"
  },
  {
    "id":15,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Corpse Marionette",
    "type":[
      {
        "arcana":1,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Expression, Intimidation, Occult",
      "undefined":"?"
    },
    "description":"The mage seizes control of the subject corpse, and can spend an instant action to manipulate it each turn as if it were an animate being. If the corpse’s vocal cords are intact, it can even be made to speak. The mage may choose to temporarily relinquish control of the corpse, allowing it to appear to return to its natural state - unless independently animate, it will fall to the floor if standing, etc\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may choose to temporarily relinquish control of a single part of the corpse - such as the mouth or hands, while maintaining control of the rest."
      },
      {
        "title":"+1 Reach",
        "description":"The target may be a corpse animated by Quicken Dead, or other similar effect. While under this effect, the subject cannot act independently with its physical body, unless control is relinquished as described above. If the corpse has been animated by a being other than a caster, controlling it calls for a Clash of Wills."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":16,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mirror Mirror",
    "type":[
      {
        "arcana":1,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Expression, Occult, Subterfuge",
      "undefined":"?"
    },
    "description":"By wrapping a person's soul with a reflective coating, the Mage causes others to see a bit of themselves, potentially fooling them into thinking the subject is one of them. For the spell's Duration, any passive attempt to discern the nature of the target of this spell reveals him to be of the same type of being as the discerner. A Vampire would, for example, see his own Beast reflected in the target in passing and assume him to be another of the Damned. A Changeling would see his tatterdemalion soul reflected there, and perceive the subject with a facsimile of his own Mien. However, this spell does not grant the subject knowledge of what someone else is. If unprepared, he will be quite confused by the Changeling who has decided he is kin and wants to know all about his time in Arcadia. This spell only works on passive attempts to discern the subject's nature. Active attempts (such as through the use of Auspex) provoke a Clash of Wills.\n",
    "extraInfo":[
      
    ],
    "author":"Frishman"
  },
  {
    "id":17,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"There’ll Be Peace When You Are Done",
    "type":[
      {
        "arcana":1,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Expression, Medicine, Crafts",
      "undefined":"?"
    },
    "description":"With greater understanding comes greater power, and now the Mage can affect even the awake and the aware. For the spell’s Duration, the target becomes subjected to the Drugged Condition. This spell does not work on targets who are currently experiencing an adrenaline rush, such as those in combat or who are already on edge.\n",
    "extraInfo":[
      
    ]
  },
  {
    "id":18,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Black Light",
    "type":[
      {
        "arcana":1,
        "degree":3
      },
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Science, Brawl, Empathy",
      "undefined":"?"
    },
    "description":"The targeted shadow gains the properties of an energy selected upon casting. The strength of the energy is determined by the Potency of the spell on the energy chart on p. 146. The shadow could shine like a flashlight, burn like a torch or emit sound as loud as a gun.\n",
    "extraInfo":[
      
    ],
    "author":"Neros"
  },
  {
    "id":19,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cryo-Phasing",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Occult, Empathy, Intimidation",
      "undefined":"?"
    },
    "description":"This spell enhances any subject in Death-attuned Twilight to radiate cold into the material world. Every material object the subject phases through will find ice forming on it, this can cause surfaces to give the Ice Tilt. This is involuntary, the subject cannot choose to not freeze something.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject has more control and may now choose to not freeze anything she doesn't desire to."
      },
      {
        "title":"+1 Reach",
        "description":"The subject may now choose to radiate even higher levels of cold than before. This can give the area around the subject the Extreme Cold Tilt for so long as he stays there."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":20,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cursed Wounds",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Weaponry, Occult, Medicine",
      "undefined":"?"
    },
    "description":"The necromancer coats a weapon with venom of Death. For a number of attacks equal to Potency, wounds inflicted by the enchanted weapon are unable to be healed by natural healing or mundane medical attention. This includes any wound penalties, Personal Tilts, or Conditions tied to the wound. Supernatural healing works normally.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The wound resists even magical healing, provoking a Clash of Wills."
      },
      {
        "title":"+1 Reach",
        "description":"The weapon, in lieu of wounds that do not heal, inflicts the Agony Tilt instantly."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":21,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Disperse Wounds",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Survival, Empathy",
      "undefined":"?"
    },
    "description":"The necromancer calls forth entropy, but he may unwind it for those he favors. For each level of Potency, the mage may convert one point of lethal damage the subject suffers into two points of bashing damage. This spell does not work against lethal damage upgraded from accumulated bashing damage, including accumulation from this very spell. So, if a subject with 8 levels of Health had suffered 4 lethal damage, this spell may convert them into 1 lethal damage and 6 bashing damage at Potency 3, or 8 bashing damage at Potency 4. If that same subject had suffered 5 lethal damage instead, even at Potency 5 this spell would still leave him at 2 lethal damage and 6 bashing damage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell instead converts one point of lethal damage into one point of bashing damage per level of Potency."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For one point of Mana, the spell instead converts one point of aggravated damage into two points of lethal damage instead. The limit concerning damage accumulation applies as normal."
      },
      {
        "title":"Add Life ••",
        "description":"The spell also heals any Tilts connected to the Health box affected, even if the box is technically uncleared and thus the Tilt should remain."
      },
      {
        "title":"Add Time ••",
        "description":"The spell may also heal scars and physical Conditions related to the healed wounds. With the Temporal Sympathy Attainment, the spell may force persistent Conditions caused from past injuries into transient Conditions, so that they naturally heal over time."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":22,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"End Debate",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Expression, Persuasion, Socialize",
      "undefined":"?"
    },
    "description":"Upon casting this spell, pick a topic - the spell 'kills' it, setting the target's impression level towards anyone who attempts to change their opinion on the topic through Social Maneuvering to Hostile. In addition, any Social Maneuvering attempt that brings up the topic causes the subject to immediately close a Door before the other character makes their roll. If the subject has an Aspiration related to the topic, they can't take Beats from that Aspiration for the Duration of the spell - if you spend one mana when casting the spell, this also applies to Oblations.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The target also loses the drive to do anything about the 'killed' topic - any Extended Action they attempt related to the topic is treated like they have suffered a Dramatic Failure (which counts towards the number of rolls they may make)."
      },
      {
        "title":"+1 Reach",
        "description":"The target is immune to any attempt to change their stance on the topic - Supernatural powers instead trigger a Clash of Wills with this spell."
      }
    ],
    "author":"amechra"
  },
  {
    "id":23,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Ephemeral Touch",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Athletics, Expression, Occult",
      "undefined":"?"
    },
    "description":"The caster grants the subject ghost the ability to interact with the Material world, even when in a Manifestation that would normally not allow such. The subject experiences physical sensation when interacting with the Material that matches what a Material being would experience under identical circumstances.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject also gains the ability to perceive the material world clearly, even if not in a Manifestation that would normally allow them to do so."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":24,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Faces of Death",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Stealth, Subterfuge",
      "undefined":"?"
    },
    "description":"The mage may physically alter the subject corpse’s body in any way, within the confines of species and age. Rather than an illusion as with 'Corpse Mask', the transformation caused by this spell is entirely physical — subjects can be granted radically altered weight and fitness, and the apparent source of injuries, and nature of damage, may be altered, although they cannot be healed, and missing limbs cannot be regenerated.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The target may be one of the ‘living’ dead instead of a simple corpse - a Revenant or Vampire, or other undead being. The mage may rearrange up to the spell’s Potency in Physical Attribute dots, for example moving a dot of Strength to Stamina, but cannot change the total number of dots, bring any to 0, or raise them above the subject’s limit."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":25,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Fracture Soul",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Medicine, Occult, Empathy",
      "undefined":"?"
    },
    "description":"The caster attacks a Sleeping soul without severing it, causing it to bend unnaturally. The target suffers the Soul Shocked condition for the spell's Duration.\n",
    "extraInfo":[
      
    ],
    "author":"Frishman"
  },
  {
    "id":26,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Fester the People",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"?",
      "undefined":"?"
    },
    "description":"If you ever mess with a Death mage, remember to not be wounded, because if you are - better run, better run. With this spell the mage can bolster effects of the damage you received before. For the Duration of the spell, every point of Potency doubles the number of bashing wounds the target has but is not able to roll them over to lethals.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Damage can now be rolled over and upgraded."
      },
      {
        "title":"+2 Reach",
        "description":"The spell can now double lethal damage."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"The spell can now double aggravated damage."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":27,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Freezing Slash",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Science, Weaponry",
      "undefined":"?"
    },
    "description":"Infusing a weapon with the ability to inflict biting cold to its targets, this spell increases a weapon’s weapon damage by Potency to a maximum of 5. It has no effect on creatures unaffected by extreme temperature lows.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This spell may affect unarmed attacks and grapples. Without negatively harming the user with its cold."
      },
      {
        "title":"+1 Reach",
        "description":"The spell applies the Knocked Down Tilt."
      },
      {
        "title":"+1 Reach",
        "description":"The spell applies the Stunned Tilt."
      },
      {
        "title":"+2 Reach",
        "description":"The spell affects thrown weapons."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":28,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Great Equalizer",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Weaponry, Medicine, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The figure of the Grim Reaper has always reminded humanity that no matter who you are, people are all equal in the face of Death. This spell embraces this quality - any weapon targeted by it always deals at least Lethal Damage, ignoring (Potency) points of Armor, and ignoring qualities - supernatural or not - that would degrade the type of Damage. This means that this weapon will deal Lethal Damage to Vampires, for example.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"For each point of Potency assigned to the spell, you may increase Weapon Rating by one. This may not go beyond 5."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"As above, but you may go beyond 5 if you also spend a point of Mana."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"If you pay one Mana, trying to heal damage dealt by this Weapon using Supernatural means provokes a Clash of Will."
      }
    ],
    "author":"WHW"
  },
  {
    "id":29,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hasten End",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Brawl, Medicine, Survival",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"A subtle tweaking of the willworker's entropic shield, made possible by greater understanding, allows him to focus and direct the decay with his intent. For the spell's Duration, whenever he succeeds in causing damage to a target using the Brawl skill he converts a number of points of damage equal to the spell's Potency from bashing to lethal, as the focused decay causes bones to crack and skin to weaken.  \n",
    "extraInfo":[
      
    ],
    "author":"Frishman"
  },
  {
    "id":30,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"I Am Many",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"?",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Connects the target's live forces in such a way that damage dealt to any of them is divided among all of them evenly. Treat 1 lethal damage as 2 bashing and 1 aggravated as 3 bashing for the sake of dividing it. Round damage up.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Round damage down."
      },
      {
        "title":"+1 Reach",
        "description":"Targets can’t lose consciousness individually - when all their health boxes are filled they continue to function as long as at least one of the linked Targets still has one health box empty."
      },
      {
        "title":"+1 Reach",
        "description":"Targets can’t die individually - when all their Health boxes are filled with aggravated damage, they continue to live as long as at least one of the linked Targets still has a health box not filled with aggravated damage."
      },
      {
        "title":"+1 Reach",
        "description":"Caster can now prioritize Targets making one of them to take damage only when all others have their health boxes full of aggravated damage. This option must be taken separately for every excluded Target."
      },
      {
        "title":"+1 Reach",
        "description":"Spell can now include a mix of inanimate objects, corpses and generally everything that has the capacity to be damaged. One point of structure equals one point of lethal damage."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":31,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Invest Soul",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Empathy, Medicine, Occult",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The mage primes a living target to serve as a vessel of their Gnosis. The target, who must be a Sleepwalker with a Strong connection to a mage included in the Scale factor of this spell, may be made into a soul stone by any mage under the effects of the same spell (the caster does not require extra spell factors to be included).\nFor the Duration factor of this spell, a number of mages up to the Potency of this spell may imprint their Signature Nimbus on the target and spend a Willpower dot, ignoring the normal Size 2 limitation for soul stones. While the spell lasts, the subject counts as a soul stone for all purposes and gains a number of dots in the Banner-Bearer Merit equal to the number of mages using them as a soul stone (this may take them above the Merit's normal maximum rating of three dots, though dots above the fifth 'fall off' unless the caster spends a point of Mana at the time of casting).\nIf the subject is used as the basis for a Demesne, the Demesne persists only as long as they are alive and within the bounds of the location the Demesne was made in (e.g. a Demesne forged from a Sleepwalker acting as a soul stone for three members of a cabal will be disrupted if they leave their church Sanctum).\nWhile serving as a soul stone for a mage, the target is subject to the Nimbus Tilt of that mage for the Duration of the spell.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The target may be a Sleepwalker with a Medium connection to a mage included in the Scale factor of this spell."
      },
      {
        "title":"+1 Reach",
        "description":"The target is not subject to the Nimbus Tilt of a mage whose soul has been invested in them."
      },
      {
        "title":"+1 Reach",
        "description":"The target may treat the number of soul stones they serve as a Supernatural Tolerance Trait, adding to relevant contested rolls and allowing them to store up to the spell's Potency in Mana."
      },
      {
        "title":"+1 Reach",
        "description":"The target and any mage whose soul stone they serve as may share their senses as a reflexive action, much like a mage's familiar"
      },
      {
        "title":"+2 Reach",
        "description":"As above, but the target may serve as a relay for two or more mages to share their senses."
      },
      {
        "title":"+2 Reach",
        "description":"The target may remain a soul stone even after their death; as long as the spell's Duration persists, a portion of the dead subject up to Size 2 remains a soul stone."
      }
    ],
    "author":"Satchel"
  },
  {
    "id":32,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Kill Box",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Occult, Firearms, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"On this battlefield, no one wins. Anyone afflicted by damages in the Area of the Spell gains a number of bashing damage equal to potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Characters entering or already in the area gain the Shaken Tilt, as less than obvious cues - a raven's call, snapped twigs, frayed wires, a putrid smell - alert her of the danger of the area without revealing the source."
      },
      {
        "title":"+1 Reach",
        "description":"Additional damage is lethal instead of bashing"
      }
    ],
    "author":"MercSet"
  },
  {
    "id":33,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lay Your Weary Head to Rest",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Expression, Medicine, Crafts",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The willworker can now take someone whose mind is already reeling from fatigue or narcotic and give them the final push they need to go to the land of dreams. Against a target with the Drugged Condition (whether inflicted by other spells or by conventional consumption of alcohol or narcotics), this spell causes the target to fall asleep for the Spell’s Duration. This spell does not work on a target in combat.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage may apply this spell to a target in combat."
      }
    ],
    "author":"Frishman"
  },
  {
    "id":34,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lethal Weapon",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Crafts, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The mage can improve an object's ability to harm others. This bestows the 8-again quality on a weapon.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Instead the weapon gains the rote quality"
      },
      {
        "title":"+1 Reach",
        "description":"The mage improves the lethal qualities of a non-weapon object. This can increase a poison’s Toxicity or increase the amount of damage inflicted by for instance a fire or a electric circuit"
      },
      {
        "title":"+2 Reach",
        "description":"Used with the above effect, changes bashing damage done by the source to lethal damage."
      }
    ],
    "author":"Menace"
  },
  {
    "id":35,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mend Soul",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Occult, craft or medicine",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The soul can be damaged and harmed but as it can be harmed so can it be healed. This spell was designed for that very purpose, to heal what wounds or marks a soul. Often that is a persistent condition the person in question is suffering from and that can be seen when a mage investigates the Soul with the spell Soul Marks. One such ailment may be healed per Potency but the soul only remains in this new found state of health for the Spell’s Duration.\nA notable use of this spell is to heal an imperfect soul temporarily, to make a fragment of a soul equal to a whole soul and capable of its functions. However this is not an accomplishment that one can use to claim that they have truly created a soul because this mended soul can still be dispelled and if this mended soul were to be sundered again the result would not be half of a soul but a quarter and require two instances of this spell to be maintained for it to act as a whole soul.\n",
    "extraInfo":[
      {
        "title":"+2 reach and 1 Mana",
        "description":"the spell's Duration is Lasting."
      }
    ],
    "author":"Mr.F.I.X"
  },
  {
    "id":36,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mortal Frailty",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Weaponry, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This spell reasserts Death's claim on a subject, overcoming supernatural resilience. For the Duration of the spell, the subject suffers lethal damage from any source that would cause lethal damage to a normal human; a manifested spirit or ambulatory corpse finds that blades and guns are just as fearsome to them as to a flesh-and-blood mortal. This affects a number of injuries equal to the spell's Potency during the course of its Duration.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"All injuries during the spell's Duration are affected."
      },
      {
        "title":"+1 Reach and +1 Mana",
        "description":"The subject will suffer aggravated damage from sources that deal aggravated harm to normal humans."
      },
      {
        "title":"+1 Reach",
        "description":"Attacks against the subject gain the armor-piercing quality, rated at the spell's Potency."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":37,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Nihilism",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Persuasion, Socialize",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"As below, so above. The mage infuses the subject with the Underworld's tableaux of abject self-abuse. The subject of the spell gains the Wanton Condition.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject's Virtue and Vice are switched, as if they were in the Autochthonous Depths."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":38,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Soul Fire",
    "type":[
      {
        "arcana":1,
        "degree":3
      },
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Science, Stealth, Empathy",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The energy targeted by this spell no longer affects the physical world but instead harms the Ghoul. Fire won’t sear flesh, light won’t illuminate objects, ect. Mechanically, most effects are affected by how high people's Integrity is. Like the higher light illuminates better when it is high, damaging energy harms better the lower it is (crispy sins).\n",
    "extraInfo":[
      
    ],
    "author":"Neros"
  },
  {
    "id":39,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Stories Bones Tell",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Science, Survival",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Many Mages know how to summon and bind ghosts to learn the secrets of the deceased. Fewer mages have realized that the same thing can be accomplished if one has the remains of a dead person on hand, even if its ghost has long since departed. This spell animates a corpse, skeleton or even the ashes of a deceased human being. This undead creature can barely move, but has the power to speak, even though its voice often sounds nowhere near human. The corpse remains animated for the duration of the spell and can be conversed with normally. It possesses the knowledge and personality of its owner at the time of her death.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage can pose up to Potency questions that the animated corpse must answer completely and truthfully."
      },
      {
        "title":"+1 Reach",
        "description":"The corpse regains its ability to move around freely, though it is not particularly strong or agile. Treat all its physical attributes as 1."
      }
    ],
    "author":"Flinty "
  },
  {
    "id":40,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Touch of Sacrifice",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Medicine, Politics",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The necromancer pushes the shadows of Death looming over someone to another. She may transfer a number of bashing or lethal wounds equal to the spell's Potency from one target to another, both within the spell's Scale. If the mage does not increase the Scale factor, the spell automatically targets herself. When targeting multiple subjects, the mage may divide Potency among them. Any Tilts or Conditions connected to the wounds are also transferred.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may transfer the wound levels of one target to everyone else within the spell's Scale, divided as he sees fit. Alternatively, he may transfer the wound levels of everyone within the Scale into one target."
      },
      {
        "title":"+1 Reach",
        "description":"The spell extends to aggravated wounds."
      },
      {
        "title":"+1 Reach",
        "description":"The spell extends to ghosts and their Corpus levels, provided the mage can perceive them."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":41,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Undead Endurance",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Medicine, Occult, Athletics",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The necromancer infuses a living body with entropic energies, making it resistant against damage much like the undead. The subject downgrades all lethal damage from kinetic sources to bashing for a number of attacks equal to Potency. The subject also does not need to roll to stay conscious from damage, and does not bleed out when his Health is filled with lethal damage.\nAlso, the subject's biological functions are held in stasis. He does not need to breathe, eat, or sleep, and does not age. However, this means that he does not heal naturally, and time spent under this spell's effects do not count towards resolving physical Conditions.\nLastly, any Death spell designed to affect corpses, and similar supernatural powers affect the subject normally. If those powers are non-Lasting, they wear off automatically once the spell expires.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell also downgrades all aggravated damage from kinetic sources to lethal, for a number of attacks equal to Potency."
      },
      {
        "title":"+1 Reach",
        "description":"The subject does not suffer wound penalties, and Personal Tilts caused by non-aggravated damage."
      },
      {
        "title":"+1 Reach",
        "description":"The subject's wounds and physical Conditions heal naturally."
      },
      {
        "title":"+1 Reach",
        "description":"The spell grants the subject one dot of Strength or Stamina per Potency, divided as the mage sees fit."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":42,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Serenity of the Grave",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Expression, Occult, Medicine",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Many who walk the Path of the Leaden Coin speak of the tranquility that infuses the Kingdom of Crypts, as befitting a place of final rest. This spell draws on that serenity to bring others to their rest, granting the subjects the Fatigued condition with six hours of Progress for each point of Potency beyond the first. Subjects do not wake until the spell ends, and do not dream, gaining no willpower from the experience.\nNote: Attempting to step outside my normal Arcanum. I think I saw an attempt to create a spell thematically similar, using lines from Kansas's 'Carry on my Wayward Son' as spell names. Unfortunately, those spells used the drugged condition, since I think Fatigued came out later. Besides, I wanted to put non-vampires into torpor/suspended animation.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Reduce extreme environment tilts in the area of the spell or the effects of extreme environments on the subjects. The subject will experience no discomfort for uncomfortable resting conditions upon waking."
      },
      {
        "title":"+1 Reach",
        "description":"Subjects dream, gaining a point of Willpower for every eight hour of slumber."
      },
      {
        "title":"+1 Reach",
        "description":"Those who fall unconscious appear to be dead to mundane attempts to check vitals. The subject's bodily functions appear to cease, but instead slow to the absolute minimum possible. Subjects still heal at the normal rate. For an additional Reach, the subject takes bashing damage instead of lethal, allowing subjects to survive autopsies to determine the cause of death."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":43,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Shards of the Scutum",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Athletics, Crafts, Survival",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"A modification on how Mage Armor reacts to entropy, developed by the Arrow in order to minimize the time needed to recover from grievous injuries, especially those that are resilient to magical healing. By applying the principles similar to a tank's reactive armor, they are able to actively shatter layers of it to absorb part of the impact.\nWhile it remains in effect, whenever their mage armor is active and an attack it could defend them against hits, they can reduce the rating by 1 to degrade the damage type from aggravated to lethal, lethal to bashing or bashing to nothing.\n",
    "extraInfo":[
      {
        "title":"Example",
        "description":"A Prime armor of 5 fails to defend against an aggravated damage spell, therefore the caster chooses to reduce the mage armor's rating to 4 to reduce it to lethal. A second opponent hits them with a sniper shot, but since Prime armor does not affect mundane attacks, the reactive armor cannot be used."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":44,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Spell Rot",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Highest Arcanum rating of the subject spell’s caster used in casting the subject spell",
      "suggestedRoteSkills":"?",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Reduces the Primary Spell Factor of the subject spell by a number of steps equal to Potency (after accounting for Withstand, of course). No archmaster spells. No effect on Imbued Items. The caster must perceive the subject spell in Active Mage Sight. Ineffective against Duration for Indefinite Duration spells, but see the last Reach option below.\nStating the obvious, it's useless against spells with only one turn of Duration.\nCasting Spell Rot on another instance of Spell Rot instantly destroys the caster, her cabal, and the Storyteller.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Spell Rot may degrade the caster's choice of secondary spell factor rather than the primary. Ineffective against the Duration of Indefinite Duration spells, but see below."
      },
      {
        "title":"+1 Reach",
        "description":"Spell Rot also strips the Advanced quality from the spell factor it degrades (if applicable, otherwise no effect). Ineffective against Duration in the case of Indefinite Duration."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"Reduces an Indefinite Duration spell to Advanced Duration One Year if Spell Rot degrades Duration. The subject spell is still considered to have 5 steps on the Duration chart (the -10 dice penalty row)."
      },
      {
        "title":"None",
        "description":"After writing this up I feel like I'd rather say that it just doesn't work against Indefinite Duration at all, if I allow this spell. I also suspect this spell introduces some further mechanical awkwardness that I'm forgetting."
      }
    ],
    "author":"galivet"
  },
  {
    "id":45,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Deliquesce",
    "type":[
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Stamina (maybe there's a better way to manage this?)",
      "suggestedRoteSkills":"?",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The flesh of corpses subject to this spell immediately liquifies due to a dramatically accelerated process of decay. The spell is Withstood by the Stamina the corpse had while living. The resulting liquid tastes and smells like sewage and is liquified dead bodies, so gross; those who come into contact with it immediately suffer the Sick Tilt (moderate) and must succeed on a Stamina + Resolve roll modified by Severity 2 or contract gastroenteritis (a.k.a. stomach flu, a.k.a. diarrhea and vomiting for several days after a one day incubation time). Given a sufficient volume of subject corpses, drowning in the liquid is also a horrifying possibility (Flooded Tilt).\nThis spell works on animated corpses (zombies), but inflicts no damage (primarily because the mechanics of that seem too complicated in the context of this spell). So if applied to a zombie, you end up with a skeleton of equal effectiveness plus a volume of putrescent sludge.\n",
    "extraInfo":[
      
    ],
    "author":"galivet"
  },
  {
    "id":46,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Body of the Dead",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Occult, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This spell allows the mage to transition a subject’s flesh into an undead state, using Twilight as a medium for the transformation. While undead, the subject takes only bashing damage from many sources that would normally cause lethal damage, including most non-supernatural weapons, and is not rendered unconscious when her health track is filled with bashing damage, nor does she bleed out when her health track is full of lethal damage (although this may render her unconscious). Wounds take the form one would expect on a corpse. This spell does not allow the downgrading of aggravated damage, nor does it allow wounds to heal naturally.\nThis also protects against any need to eat or breathe, although the subject still requires periods of inactivity to remain in motion, requiring at least four hours of downtime every night, before beginning to suffer penalties from fatigue. This does not replenish Willpower. The subject’s appearance is that of a walking corpse, albeit one relatively free of decay.\nIf this spell wears off while the subject is suffering from wounds that would have been more severe on her living form, those wounds immediately upgrade to the appropriate level of damage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject no longer requires any downtime to continue functioning normally."
      },
      {
        "title":"+1 Reach",
        "description":"The subject may heal wounds naturally at her normal rate."
      },
      {
        "title":"+1 Reach",
        "description":"Mundane sources of aggravated damage are downgraded to lethal damage. This has no effect on supernatural sources of such damage."
      },
      {
        "title":"+1 Reach",
        "description":"The subject is not rendered unconscious when her right-most healthbox is filled with lethal damage."
      }
    ]
  },
  {
    "id":47,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Bomb Disposal",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Science, Firearms",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"In the latter parts of WWII, the British, in order to disarm German bombs started soaking them in liquid nitrogen. This froze the battery within until it couldn't pass a current and so the bomb could no longer trigger. With this spell the mage can perform the same trick, though instead of using liquid nitrogen, the mage simply drops the temperature directly with magic. Despite its name, this spell works on all types of batteries, not just those used in bombs.\n",
    "extraInfo":[
      {
        "title":"Drawback",
        "description":"The Germans didn't know the British were using this trick and thus developed no counter. Today's bomb makers do know however and may develop their bombs to either be immune or to go off when this trick is tried. Any mage would be wise to investigate before using this spell on any bomb."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":48,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cryonic Sleep",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Occult, Science",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The body is brought to a state close to death while low temperatures are used to preserve organic tissue. This allows the subject to be cryonically preserved to be revived at a later date. This is not perfect however and causes one Aggravated damage per year that cannot be healed until the subject has been revived. If the entire health track is filled with Aggravated damage revival is no longer possible.\n",
    "extraInfo":[
      {
        "title":"+2 Reach and 1 Mana",
        "description":"The preservation process has been perfected, the subject no longer suffers Aggravated damage and can be revived no matter how much time has passed."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":49,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Death Fetish",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Crafts, Occult, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This spell allows the mage to bind a hibernating ghost into a fetish, a kind of magical item. Fetishes work like an Imbued Items, save that a fetish is powered by Essence and, instead of holding a Supernal spell, it holds one of the bound ghost’s Influences and, possibly, some of its Numina.\nCreating a fetish requires that the spell have one Potency per dot of Influence the object will possess, plus one Potency per Numen. A fetish doesn’t have to host all of the ghost’s abilities. Activating the powers within the fetish is an instant action and uses the ghost’s dice pool.\nThe fetish has its slumbering ghost’s Essence pool and can recharge Essence when near one of the ghost’s Anchors. It also recharges Essence when the ghost contained within is remembered by the living. The fetish’s user can pay Essence out of the fetish’s pool to power its abilities. If the bound ghost ever acquires Essence equal to its Corpus, however, the spell ends immediately.\nTriggering the bound ghost’s Ban or Bane immediately destroys the fetish.\n",
    "extraInfo":[
      
    ],
    "author":"Inodiv"
  },
  {
    "id":50,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Destroy Wounds",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":11,
      "primaryFactor":"Potency",
      "withstand":"Rank",
      "suggestedRoteSkills":"Empathy, Medicine, Survival",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Adepts of Death can attack the marks Death leaves on still-living Patterns, undoing damage from lethal wounds as its influence is unraveled. Each level of Potency heals two lethal damage. Wounds healed in this way don’t leave scars, as the wounds are attacked on a direct metaphysical level instead of being traditionally ‘healed’.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The spell heals aggravated damage."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":51,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Don’t You Cry No More",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":11,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Expression, Medicine, Crafts",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Draining vitality and energy from the target, the Mage forces the target to go straight from 'awake' to 'asleep' without needing all those steps in between. The target sleeps for the spell’s Duration. Against a target undergoing an adrenaline rush, such as from being in combat or otherwise on edge, this spell merely applies the Drugged Condition.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell now unleashes its full effect on a target experiencing a rush of adrenaline."
      }
    ],
    "author":"Frishman"
  },
  {
    "id":52,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Echo to Echo",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resistance",
      "suggestedRoteSkills":"Occult, Medicine, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"By means of this spell the Mage transforms a ghost - the echo of a person - into a Soul Echo. The Soul Echo behaves like a pale imitation of a soul, allowing it to be attached to a person whose soul had been removed, in order to mitigate the seriousness of their situation.\nLike a regular soul, it can only be attached to people without a soul - under the Soulless, Enervated, or Thrall Conditions. Attaching the Soul Echo to a person without a soul does not resolve the Soulless, Enervated, nor Thrall Conditions, rather, the person gains the Almost Souled persistent Condition.\n",
    "extraInfo":[
      {
        "title":"Almost Souled (Persistent Condition)",
        "description":"The character has been implanted with a Soul Echo, halting their degradation from the lack of a soul. She does not regain Willpower from acting according to her Virtue or Vice. The Soul Echo functions as a soul replacement, and the character cannot regain her soul while under this Condition. Soulless, Enervated, and Thrall Conditions are suppressed while the character is under the Almost Souled Condition."
      },
      {
        "title":"Resolution",
        "description":"Lose the Soul Echo."
      },
      {
        "title":"Beat",
        "description":"Lose Wisdom or Integrity in a scene where you regain Willpower through surrender."
      }
    ],
    "author":"Aeryes"
  },
  {
    "id":53,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Ghost Fire",
    "type":[
      {
        "arcana":1,
        "degree":4
      },
      {
        "arcana":3,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Resistance",
      "suggestedRoteSkills":"Occult, Science, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"By combining the properties of death, cold and fire; cold flames are created. These flames function like normal fire, except that they do not radiate any heat at all, this does not prevent them from burning anything suitably flammable. Additionally, these flames cannot be put out by lowering the temperature or suffocating them. Only the running out of fuel or the use of Magic can end these flames.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For one Mana, the flames are particularly destructive and now deal Aggravated damage."
      },
      {
        "title":"+1 Reach",
        "description":"The flame burns the souls of those who touch it. This causes the Soul Shocked Condition."
      },
      {
        "title":"+1 Reach",
        "description":"When burning a souled being instead of dealing damage based on the size and 'heat' of the flame, deal damage solely based on the sins (Integrity) of the soul. A person with high Integrity could survive infernos, whereas a person with incredibly low Integrity might not even survive contact with a small candle."
      },
      {
        "title":"+2 Reach",
        "description":"Not even the lack of fuel stops these flames as they feed on the entropy that would normally end them. Only Magic or other supernatural means can end these flames now."
      }
    ]
  },
  {
    "id":54,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Kill Magic",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Arcanum rating of the subject spell’s caster",
      "suggestedRoteSkills":"Academics, Intimidation, Occult",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"All Awakened magic contains the capacity to end, to allow the Fallen World’s laws to reassert themselves. By Patterning these flaws into reality, the mage may temporarily suppress the spell — or even destroy it entirely. This spell is not potent enough to dispel an Archmage’s spells. A successful casting suppresses the spell for the Duration of Kill Magic. This spell has no effect on Indefinite effects.\n",
    "extraInfo":[
      
    ],
    "author":"Inodiv"
  },
  {
    "id":55,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Many Morbid Forms",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Animal Ken, Occult, Science",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The subject corpse can fully take on the form of another species, but remains a corpse - a dead human body can be physically changed into the body of a dead wolf, for example. While the spell can greatly transform its subject’s Size, changing into much larger forms is difficult. The Scale factor of the spell must cover the larger of the Size traits, before and after the transformation. The subject’s clothes and gear do not change.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The target may be one of the ‘living’ dead instead of a simple corpse - a Revenant or Vampire, or other undead being. Once transformed, they remain recognizably supernatural - a vampire transformed into an undead wolf may have unnaturally long canines, for example."
      },
      {
        "title":"Add Matter ••••",
        "description":"The subject’s gear changes to fit her new form."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":56,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Morbid Projection",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":11,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Medicine, Occult, Stealth",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The mage slackens the connection between the subject's self and their mortal form, causing them to become a deathlike projection - a living ghost. Their ephemeral form uses the rules for Dream Forms (Chapter six) and is present in (and tangible to) ghostly Twilight, leaving the body in a comatose state with no signs of life (as Suppress Life.) Anything carried on the body may be echoed in deathly ephemera if desired, but this morbid reflection dooms mortal objects - their material forms will be destroyed, leaving only ghostly echoes, at some point before the end of the story.\nIf the ephemeral projection is destroyed, the subject returns to their body with the Soul Shocked Condition.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The projection may be passed through an Avernian gate within range during its creation, causing the subject's consciousness to undergo a sojourn to the Underworld as a half-ghost."
      },
      {
        "title":"+1 Reach",
        "description":"As an instant action, the subject may sculpt and reshape their ephemeral body, as per Shape Ephemera. One shaping may be maintained at a time for each Potency of the spell; any shaping in excess of this replaces old ones."
      },
      {
        "title":"+1 Reach",
        "description":"The mage creates an ectoplasmic shell anchored to the projection. For the Duration of the spell the subject's ghostly form is effectively mirrored by this medium, allowing it to be perceived by non-ephemeral beings. It remains intangible, barring the use of other magic."
      },
      {
        "title":"+2 Reach and +1 Mana cost",
        "description":"As above, save that the projection is effectively Manifested through the ectoplasmic medium and may interact normally with material beings and objects."
      }
    ],
    "author":"Five Eyes "
  },
  {
    "id":57,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Rapid Claim",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Occult, Science",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"With this spell, a mage can greatly accelerate the rate at which a Ghost can merge as part of the Claim Manifestation. The speed of the merging process doubles for each level of Potency. When the spell expires, the effects quickly revert, reversing the merging process to the point it would have achieved naturally, unless the process has completed, in which case the effect is Lasting.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster may not only accelerate the process, but guide it - this allows them to choose what attributes are enhanced as part of the merging process."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":58,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Restore the Foundation",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Medicine, Occult, Empathy",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The Mage uses his Supernal knowledge and a bit of his own power to fill in the cracks in the soul of another. For the spell's Duration, the Mage may suppress one instance of the following Conditions: Madness, Broken, or Fugue.\n",
    "extraInfo":[
      
    ],
    "author":"Frishman"
  },
  {
    "id":59,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Shadow Golem",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Crafts, Expression, Occult",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The mage constructs a moving construct out of shadows, mimicking the capacity of Matter Adepts to create golems. The Potency of this spell is divided between the Durability and Retainer rating of the Golem. The golem is size 5 or lower, as the mage sees fit. The Shadow Golem is incapable of combat and has no Defense rating. Its Structure will determine its Health.\nThe shadow golem is in no way capable of decisión-making and can only obey short and simple commands given by the mage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may make the golem capable of defense, granting a Defense rating equal to the Potency of the spell."
      },
      {
        "title":"Add Spirit ••••",
        "description":"The mage installs a Spirit as a guiding intelligence, granting the Golem the capacity to use Numina."
      },
      {
        "title":"Add Mind ••••",
        "description":"The mage installs a synthetic mind as a crude guiding intelligence."
      }
    ],
    "author":"Aristarkos"
  },
  {
    "id":60,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Whispering in Silence",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Larceny, Stealth, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"A warrior must never grow complacent, they must adapt to not only win, but also be mindful of how they win. Unfortunately, sometimes one must sacrifice the plum tree to preserve the peach tree. In cases where a silent and deadly strike can be the only path to victory, this spell stands ready for use.\nIn much the same way that a caster may be transformed into shadows, they can go one step further to become ephemera. This allows the caster to Possess the target, allowing them to infiltrate their organizations. Some use it to move them somewhere they can be captured or eliminated.\nShould the target die or the spell end, the caster reappears beside them.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":61,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Spite of the Vardøger",
    "type":[
      {
        "arcana":1,
        "degree":4
      },
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Larceny, Stealth, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Every moment is accounted for, history is set to converge on the elected and the rest are to be swept along by the deluge of history, so the Prophet has decreed. But some key pieces are faulty, a selfless decision here, a measured response there and sometimes the mechanism starts to creak. The agents of the Horologian do not stand for these deviations and have created this to deprive the chosen of their defiance, making whatever corrections are required.\nSometimes called the Evil Twin spell, this displaces the soul of the target and transforms them into a living clone with a Rank 1 ghost's abilities, Anchored to their created body and obsessed with whatever task the caster set for them. In the case of Awakened victims, they gain the abilities of a ghost mage.\nIt is common for the hollow husk to be possessed by the caster, their soul and body merging into them with further spellwork. This allows the Seer to have the target \"be in two places at once\", doing whatever is required to set the course of history back on the path the Prophet prescribed. Other times they simply eliminate the original, so that even if the doppelganger fails, the chosen one causes no further damage, but this displays a lack of ability that is frowned upon.\nOnce duration ends, the doppelganger reverts to a free floating soul.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The being created has the abilities of a Rank 2 ghost."
      },
      {
        "title":"Observation",
        "description":"A lesser version of this spell could be made with Death 4 only. It would Materialize the ghost while giving the Mortal Mask Numen, but would probably have a much harder time passing for a living being when under any scrutiny."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":62,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Two Ghosts, One Shell",
    "type":[
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"While possessed by a ghost during the Duration of the spell, the subject retains full consciousness and sensory awareness rather than entering a coma-like state. The possessing ghost gains full control over the subject's body and physical actions as normal, while the subject remains free to execute simultaneous non-physical actions (anything she could normally do without moving her body). Moreover, the ghost may listen to the \"inner voice\" of the subject host in a manner similar to reading its host's memories via a Finesse roll.\nAdditionally, reduce the penalties for all rolls made by the possessing ghost to access the subject's memories and skills by Potency.\nThis spell enables the most intimate partnership possible between a necromancer and a ghost ally or familiar: the ghost manages the meat while the mage retains control of the mind and will.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject may resolve the Possessed or Open condition facilitating the possession as a reflexive action."
      }
    ],
    "author":"galivet"
  },
  {
    "id":63,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Create Zombie",
    "type":[
      {
        "arcana":1,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Crafts, Medicine, Occult",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The mage creates an animate corpse. She can fashion the zombie as a facsimile of another person, either alive or dead, though the zombie possesses none of the mental or social traits or features (ie, personality, knowledge) of the person it was modeled after. By default, the created construct functions as described in ‘Quicken Dead’, but has health equal to Size + Potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may create a zombie suitable for combat. It uses its dot-rating as a dice pool for attacks, and has a Defense 3, Initiative 1, and Speed 6."
      },
      {
        "title":"+2 Reach",
        "description":"The mage may spend a point of Mana to imbue the zombie with exceptional physical prowess. The zombie has Defense 5, Initiative 3, and Speed 8"
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":64,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Demonic Ice",
    "type":[
      {
        "arcana":1,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Survival, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Rather than creating a normal cold, this spell creates a cold filled with the power of entropy and death. Anybody who touches the ice this cold creates will find themselves in excruciating pain and feel terribly, terribly cold.\nMechanically, the victim suffers the Extreme Cold Environmental Tilt, however, this Tilt doesn't disappear until the spell expires. Until then no attempts to warm or heat the subject will have any effect, unless it's supernatural. In that case, it causes a Clash of Wills.\n",
    "extraInfo":[
      
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":65,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Final Seal",
    "type":[
      {
        "arcana":1,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Potency",
      "withstand":"Arcanum rating of the subject spell’s caster",
      "suggestedRoteSkills":"Academics, Intimidation, Occult",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"A Master of Death can create endings where none existed previously, and thus can end even the most persistent magical effects. This spell temporarily suppresses another spell - or destroys it entirely. This spell is not potent enough to dispel an archmage’s spells. A successful casting suppresses the spell for the Duration of Final Seal.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This may target other supernatural effects, which is Withstood by the same trait that would be added to Supernatural Tolerance in a Clash of Wills."
      },
      {
        "title":"+1 Reach",
        "description":"This spell also enforces an absence of magic. If cast over an area, newly cast spells within that area provoke a Clash of Wills to take form at all. If combined with the above Reach effect, this applies to all supernatural abilities."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"For one point of Mana, the dispellation effect is Lasting. If the effect’s original creator is still alive and has not relinquished the spell, and would otherwise be aware if the effect were to Clash, she knows one of her effects was destroyed."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":66,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Offering Table",
    "type":[
      {
        "arcana":1,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Potency",
      "withstand":"Arcanum rating of the subject spell’s caster",
      "suggestedRoteSkills":"Academics, Crafts, Socialize",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The Master of Death conjures up a feast for the departed. This spell creates a number of ephemeral goods equal to the spell's Scale; these objects usually take on the forms of things offered to the dead in various cultures: candy, bread, money, liquor, and so forth. The area of the offering gains the Resonant Condition for all ghosts, and any ghost who partakes of the offerings gains Essence equal to the spell's Potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The offering area gains the Open Condition for ghosts."
      },
      {
        "title":"+1 Reach",
        "description":"Mortals who partake of the feast become infused with the power of the Underworld, gaining the ability to see unmanifested ghosts for the spell's Duration."
      },
      {
        "title":"+1 Reach",
        "description":"As above, but instead, a feasting mortal gains the Open Condition for the spell's Duration."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":67,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Supernal Antimagic",
    "type":[
      {
        "arcana":1,
        "degree":5
      },
      {
        "arcana":7,
        "degree":1
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Dot rating of the target effect",
      "suggestedRoteSkills":"Intimidation, Occult, Politics",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The Supernal knows itself through the Prime Arcanum and is able to know the Fallen World as well, for they are intrinsically linked. This spell destroys all non-Supernal supernatural effects on the subject and destroys any further effects trying to take hold, causing a Clash of Wills on any attempts. It's common for highly dangerous Consilium to have specialists trained in this rote, deploying auras and infused items that impose Supernal order on an area, allowing them to fight vampires, werewolves and all matter of threats that may arise.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Entropy lashes out against those that violate the Supernal order, inflicting the Extreme Cold tilt."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":68,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Foreshadow",
    "type":[
      {
        "arcana":2,
        "degree":1
      }
    ],
    "properties":{
      "practice":2,
      "primaryFactor":"Potency",
      "withstand":"Dot rating of the target effect",
      "suggestedRoteSkills":"Academics, Expression, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"When a mage casts this spell, he chooses a destiny (or Destiny) of which he is aware. The spell causes the strings of fate to manifest one symbol per dot of Potency of that destiny between the time of casting and when the fated event occurs. For instance, if a Sleeper is destined to get into a car crash, the spell might cause her to see a commercial about auto insurance, or she might drive by the site of a car crash the day before. The effects of this spell are normally minor and subtle, but they can be useful for getting someone to believe in the power of fate and symbolism. Alternatively, the mage might wish to cause foreshadowing to manifest for particularly obscure destinies in order to analyze a mystery from a different point of view.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage chooses how the foreshadowing manifests."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":69,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Devil’s Whisper",
    "type":[
      {
        "arcana":2,
        "degree":2
      },
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Socialize, Streetwise, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This spell was originally created by a Claviclarius mage as a means to weed out prospective candidates to the Legacy. It takes the recipient's Vice and provides them with opportunities to fulfill it – at the most inopportune moments. A Lustful person will get hit on beautiful people of his preferred gender – but only when their partner is around. A Hostile salesman will have a meeting with an important, but mean customer. Fate will keep the wound fresh for the Duration of the spell, arranging similar events or merely providing reminders of the lost opportunity. The character gets the Tempted Condition until the spell expires.\n",
    "extraInfo":[
      {
        "title":"Condition",
        "description":"Tempted - Your character really wants to indulge their Vice despite the risk it poses. They get -2 to all rolls involving what they consider their obligation."
      },
      {
        "title":"Resolution",
        "description":"The Vice is indulged."
      }
    ],
    "author":"Gantolandon"
  },
  {
    "id":70,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"No Tomorrow",
    "type":[
      {
        "arcana":2,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Persuasion, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Every action, even the tiniest movement, has consequences. This spell renders its subject unable to perceive the long-term consequences of an action he contemplates taking. For example, a man on vacation fails to see the damage an affair could have on his marriage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may fabricate a false consequence the subject perceives to be the logical outcome of his actions. Said man might be made to think that having an affair be ultimately beneficial for his marriage."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"Short-term consequences are hidden as well. The subject can contemplate the act of jumping from a building, but is unable to perceive what the fall will do to him."
      }
    ],
    "author":"Flinty"
  },
  {
    "id":71,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Predetermination",
    "type":[
      {
        "arcana":2,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Science, Intimidation, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"A favorite among Seers that serve Ruin, this spell veils the fact that your own actions matter from the subject. The future seems to be set in stone: no matter what you do, it seems impossible for the subject to make a difference. Any attempt the subject makes to further a goal, defined by the mage upon casting the spell, costs 1 Willpower. Even then, dice pools are penalized by the spell's Potency.\n",
    "extraInfo":[
      
    ],
    "author":"Flinty"
  },
  {
    "id":72,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Silence of Harpocrates",
    "type":[
      {
        "arcana":2,
        "degree":2
      },
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Medicine, Stealth, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Sometimes all that is needed to guarantee an operation's success is for key witnesses to keep quiet. This curses the target to be unable to communicate. Sometimes they will lose their voice or bite their tongue, other times their hands will shake, rendering them unable to write or type, sometimes the idea or the specific words/signs simply 'slip their mind'. It is said this was originally used by the Arrow to quietly poison agents of the Seers.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster can specify up to [Potency] specific topics or means of communication and the spell will only target those."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":73,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Shining a Spotlight",
    "type":[
      {
        "arcana":2,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Expression, Intimidation, Persuasion",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The call of destiny can be a powerful and dangerous thing, fostering a drive that makes people tunnel to follow it at the expense of everything else. But a sagacious mage can leverage this against their foes.\nWhen cast on a target, it shifts all their intent towards a designated center of attention. The target is unable to take any actions not related to the target, whether to monitor, attack, go towards or converse with them. They cannot even master enough attention to process their allies' words or focus on anything else in combat, although they can still apply Defense. They also have a natural sense of the fate threads to follow in order to get to the focus of their attention, causing some to drop everything just to make their way to them.\nThis makes it an invaluable way to draw aggression to highly fortified targets or enable flanking attacks. In social circles, it's a great way to bring the focus of the key players to the mage, providing a way to create connections even amidst the busiest locales.\nWithout additional scale factors, the caster is the center of attention.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The attention of the target is utterly consumed by the spotlight, making it so that they cannot apply Defense against all other targets."
      },
      {
        "title":"+1 Reach",
        "description":"The target becomes utterly Obsessed by their focus of attention."
      },
      {
        "title":"+1 Reach",
        "description":"The target's center of attention seems like a majestic being, making them become Swooned."
      },
      {
        "title":"+1 Reach",
        "description":"The target sees their focus of attention as a great and terrible being, causing them to be Spooked."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":74,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mists of Avalon",
    "type":[
      {
        "arcana":2,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Manipulation, Stealth, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"An ancient spell traditionally employed by the Druids to guard themselves from malicious willworkers as they walk their trails. It allows them to obscure the destined interconnections around them, walking with trackless steps between the mist covered paths of legends. This allows them to gain [Potency] dots in Occultation for the duration. Should they already possess it, it can add [Potency] dots to it. The merit dots cannot exceed trait limits.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The amount of Occultation dots can exceed trait limits."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":75,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Demagogue's Downfall",
    "type":[
      {
        "arcana":2,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Empathy, Persuasion, Socialize",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"One of the most terrifying realities a diplomat must face is that communication is imperfect. Sometimes the right intentions worded poorly or in the wrong context can cause tragedies to occur. Some of the most devious orators among the théarchs have learned to leverage this to cripple a rival's rhetoric. This allows them to choose up to [Potency] interests, goals or intentions the target may have. Until this spell expires, every Door they would have opened via social maneuvering is instead closed as poor wording, contextual problems and other unexpected twists of fortune cause others to perceive their intentions as irrelevant or counterproductive to the goal. This rote was first developed to uncover a Scelestus infiltrator, one who would work Abyssal symbols into Cryptopolies, causing Sleepwalkers to open Abyssal Verges as they called the Void to them rather than travel to the Supernal.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Inauspicious coincidences twist every word, causing the target's intentions to be perceived as the exact opposite of their goal. Each Door is instead opened in the opposite direction. Successes in a peace summit roll would instead promote war, a negotiation to have a criminal surrender will instead convince them to lash out violently, etc."
      },
      {
        "title":"+1 Reach",
        "description":"Successful attempts to increase or decrease impressions levels (based on the caster's choice) instead have the opposite effect. This makes attempts to coerce end in ridicule and emotional appeals create furious rebukes."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":76,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Against the Odds",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Drive, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"One in a million chances happen in 9 cases out of 10 at least when you're an Adept of Fate. Under the effects of this spell, the subject can change Environmental penalties to rolls into Environmental bonuses up to the potency of the spell. This affects rolls up to equal to the Spell’s potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage can do the opposite and change bonuses into penalties."
      }
    ],
    "author":"Menace"
  },
  {
    "id":77,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Moral Dilemma",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Empathy. Politics",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This bizarre spell adds a touch of psychological cruelty to what would otherwise be a straightforward curse. This spell must be cast with exactly two targets - any more or less, and it immediately fails. Once cast, each target chooses either masochism or sadism as a Reflexive action. If they picked masochism, the spell imposes one Hex on them - if they choose sadism, the spell imposes two Hexes on the other target instead. The targets have a rough understanding of what each choice entails - hurt yourself, or hurt the other person more.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Each target that chooses sadism also receives a Boon - they are aware of this fact."
      },
      {
        "title":"Add Space •••",
        "description":"If there is a Sympathetic Tie between the two targets, each target that chose sadism reduces the strength of the tie by one step."
      }
    ],
    "author":"amechra"
  },
  {
    "id":78,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Oath of Friendship",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Socialize, Persuasion, Politics",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The spell sanctifies an existing bond of friendship, giving it supernatural depth. All subjects of the spell gain the benefits of The True friend with respect to each other. If a subject of the spell is turned against the others, they suffer a Hex.  As long as the spell is within spell control, the caster of the spell knows which of the subjects are benefitting from the spell, and which of their number has gotten a hex. When cast with exactly two participants that already have the true Friend merit, the spell grants the Loved merit. This variation is usually called 'True love'.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"If a subject enters the oath with false feelings of friendship, they suffer a Hex instead of the benefits of the spell."
      },
      {
        "title":"+1 Reach",
        "description":"The subjects of the spell also know which of their numbers have gotten a hex."
      },
      {
        "title":"+1 Reach",
        "description":"The subjects of the spell are aware if one of the participants dies."
      },
      {
        "title":"+1 Reach",
        "description":"The subjects may spend Willpower on behalf of each other."
      },
      {
        "title":"+1 Reach",
        "description":"Damage received by one subject is shared equally between the subjects of the spell."
      },
      {
        "title":"+1 Reach",
        "description":"Supernatural effects that would turn one subject against the others cause a clash of wills."
      }
    ],
    "author":"MovingMind"
  },
  {
    "id":79,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Outlaw Brand",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Intimidate, Subterfuge, Weaponry",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Sometimes in the course of your willworking, you just have to knock do-gooders down a peg. When this spell is cast, the mage chooses one promise the subject has made or law to which he his subject (such as by dint of citizenship in a certain country); for the spell's duration the subject is treated as though he had broken the stipulated promise or law. This does not fabricate evidence of crimes, but supernatural effects and bureaucratic systems will treat him properly, which may impose Conditions such as Notoriety or Hunted. This spell works on supernaturally sealed promises, such as those upheld by the Sworn Oaths spell or changeling pledgecraft, and for the duration the subject suffers the drawbacks for transgression, such as any hexes or Conditions.\n",
    "extraInfo":[
      {
        "title":"+2 Reach and 1 Mana",
        "description":"The spell's effects are Lasting."
      },
      {
        "title":"Add Mind 2",
        "description":"The spell can dispel the effects of a fae Contract."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":80,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Scribe Ariadne's Thread",
    "type":[
      {
        "arcana":2,
        "degree":3
      },
      {
        "arcana":7,
        "degree":1
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Total Arcanum dots used in the rote",
      "suggestedRoteSkills":"Streetwise, Occult, Survival",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The House of Ariadne, a Legacy specializing in studying the city's lines of divinatory resonances they call Ariadne's threads, use this spell to scribe rotes into the streets of a city. The very windings of the street become a Grimoire. Mages must walk randomly through and around the street-Grimoire in a meditative trance to access it.\nIf a mage learns how to sense Ariadne's thread, typically through the initiation ritual of the House of Ariadne, she may 'walk Ariadne's thread' as she invokes the Grimoire for a +2 equipment bonus to casting its spells.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may scribe the Grimoire directly onto an Ariadne's thread. Mages who can sense Threads can access the Grimoire from any part of the same city."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For a point of Mana, the spell is Lasting."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":81,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cul-de-Sac",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Streetwise, Politics, Investigation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Urban mages such as the House of Ariadne often weaponize the city itself, trapping enemies in dead ends and blind alleys.The subject of this spell becomes unable to escape the street, alley or similar space he is in for the Duration, as he is buffeted by coincidences that harass him whenever he tries to leave.\n",
    "extraInfo":[
      {
        "title":"Add Time •••",
        "description":"The subject experiences minor time dilation within the cul-de-sac; at an extreme, she might enter an alley at dusk then leave it at midnight."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":82,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Prince to Pauper",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Larceny, Politics, Socialize",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"So often destiny is determined by one's standing in the world, stemming from choices in which one has no say, subject to forces beyond any individual's control. By means of this spell, a Disciple of Fate can engage in a bout of coercive redistribution, transferring power from those born into wealth and privilege to the more unfortunate and needy. Alternatively, an avid mage might cast this spell to undermine another's hard work, stealing all the glory at the last moment.\nThis spell transfers dots in a Social Merit from one subject to another, up to a number of dots equal to the spell's Potency. Without increasing the Subjects Factor, the caster must be on one end or the other of the transfer. Merits transferred must be those connected to an external source, such as Allies, Status, or Resources. For the duration, the donor loses access to the transferred Merit dots, while the recipient gains such. Merits with scaling dot ratings may be split up, but those with fixed ratings cannot.\nIf cast on more than two subjects, the mage chooses one to be the donor, and determines which of the other recipients gains how much of the transferred Merit.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell can transfer multiple Merits from one subject to the other, with a total dot rating not exceeding Potency."
      },
      {
        "title":"+1 Reach",
        "description":"The mage can swap Merits between both subjects, trading Allies for Resources, for instance, with a total dot rating not exceeding Potency."
      },
      {
        "title":"Add Space ••",
        "description":"Any Sympathetic connections associated with the Merit are transferred as well."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":83,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Vow of Enmity",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Occult, Crafts",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Making a vow to bring one's foe down is a powerful thing, a declaration of intent that can drive one's tale and steel one's will to persevere through the most challenging moments. Although it can be a source of both great hope or terrible sorrow, harnessing its undeniable power can allow a ruthless mage to take down even the most implacable foe.\nIt is said this rote was invented by a Libertine called Belmont, who utilized it on multiple weapons to hunt down the vampires who killed his family. This rote remains inscribed in the handle of his famous whip, a weapon with as many battles under it as even some of the most veteran Arrows.\nThis spell swears a weapon to the mission of bringing down up to [Potency] named individuals, whether to justice or death is left up to the caster. Whenever attacking the named foes, the weapon deals damage of one tier higher than normal (such as lethal becoming aggravated). Should the vow require the target to live, fate conspires to allow so, allowing for a Pulling Blow to be applied regardless of the weapon type and at no penalty.\nShould the weapon already cause aggravated damage, such as an active blade of Dumanium, then a successful attack severs one limb of the wielder's choice entirely, inflicting an appropriate permanent condition such as Arm Wrack, Leg Wrack or Blinded. Exceptional successes sever two limbs instead.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The vow can be sworn upon a group, such as a cabal, a coterie, Order, company or even family line. This makes it a very popular bargaining chip with the Remade, especially the ones seeking to proactively hunt their creators."
      },
      {
        "title":"+2 Reach",
        "description":"Anyone who carries, touches, or uses the weapon against the named foes gains rote property on a number of mundane attacks of their choosing equal to [Potency]."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":84,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Into the Hedge",
    "type":[
      {
        "arcana":2,
        "degree":3
      },
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"none or Composure (see below)",
      "suggestedRoteSkills":"Persuasion, Occult, Survival",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The witch opens an existing, dormant Hedgeway, bypassing any Keys it may have had. The Hedgeway remains open for the spell's Duration, and when the spell expires becomes dormant once again. A Hedgeway's destination to and from the Hedge is predetermined.\n",
    "extraInfo":[
      {
        "title":"Add Space •••",
        "description":"The mage may freely reassign the Hedgeway's Key as she opens it. This does not affect a changeling's ability to 'portal' through them, but a non-changeling's Resolve + Composure roll to use the Key gains a (Potency) dice bonus."
      },
      {
        "title":"+1 Reach",
        "description":"Once the spell expires, the Hedgeway fades completely beyond dormancy as if a season had passed. Changelings, mages etc. can still establish the Hedgeway from scratch."
      },
      {
        "title":"+1 Reach and Add Mind ••",
        "description":"Instead of opening a dormant Hedgeway, the mage strengthens its temptations. For the Duration, when any being with a Vice indulges it within the Hedgeway's vicinity, the resulting reflexive Wits + Composure roll suffers a (Potency) dice penalty, and it cannot score an exceptional success."
      },
      {
        "title":"+1 Reach",
        "description":"When opening a Hedgeway to the Hedge, the witch may redirect its destination to a location he has visited. This does not take into account any Hedgespinning that may have occurred in-between, potentially leading the mage to a location he is still unfamiliar with. The Hedgeway reestablishes its original destination upon becoming dormant, but for 1 Mana point the redirection becomes Lasting."
      },
      {
        "title":"+2 Reach",
        "description":"The mage forcefully throws a victim into the Hedge via a dormant Hedgeway, without opening it. This way, the spell becomes Withstood by Composure."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":85,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cor Leonis",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"none or Composure (see below)",
      "suggestedRoteSkills":"Academics, Occult, Politics",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"A spell that acts as an exemplar of the Arrow's belief in the significance of oaths, empowering them and their Sleepwalker allies through devoted service. It enhances the ancient covenant between Sleepwalkers and Awakened, allowing them to retain spell control more easily and efficiently.\nLike all oaths, it must be willingly sworn by the Sleepwalker. This allows them to carry spell control for anyone specified by the terms of the agreement. Furthermore, the Sleepwalker can hold [Potency] additional spells for any contracted mage, up to the normal limit of two. Any [Potency] beyond this grants dots in the Banner-Bearer merit, up to its limit.\nWhen situations are truly dire, additional preparation spells or heavily augmented Sleepwalkers might be indispensable for victory. Masters of Fate tend to additionally enhance the power of those under this effect, allowing them to bear a far greater amount of Imagos. In truly desperate situations, their Sleeper contacts may be called upon to become Sleepwalkers and follow this process.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The Banner Bearer merit can exceed its limits."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":86,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Conditional Relinquishment",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Crafts, Larceny, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"By weaving a flaw into the casting of a spell, the mage connects it more intimately to the Fallen World. The next spell the subject casts will incorporate a particular circumstance that will cause the spell to immediately end. In exchange, the spell can be safely relinquished without spending a dot of Willpower. The Storyteller chooses the nature of the end condition: Initiate and Apprentice-level spells have rare or easily controllable end conditions, Disciple and Adept-level spells have uncommon conditions, and Master-level spells have relatively simple or inevitable means of banishment.\nA spell benefitting from both Conditional Relinquishment and the Conditional Duration Attainment effectively has two end conditions, which must be appreciably different circumstances.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster of Conditional Relinquishment chooses which of the subject's spells incorporates a flaw. They either decide when the spell is cast (assuming they know the spell is being cast), or designate a category of spell to be affected."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"For a point of Mana, the caster of Conditional Relinquishment decides the nature of the spell's end condition, following the aforementioned stipulations. If the subject casts a spell whose level is inappropriate to the nature of the end condition, the condition is reworked into a more fitting shape. (Example"
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":87,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Flash Mob",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Politics, Socialize, Stealth",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Crowds move in at-once chaotic and predictable patterns, and this spell allows the mage to direct their movements in a general way. This spell automatically uses Area for Scale. Choose one when casting this spell:\n- The mage ensures that people no fewer in number than Potency will occupy the area at some point in the next 24 hours and that the crowd will not be smaller than Potency for the Duration of the spell after that – although individuals may leave and be replaced by others. The spell can fail if the area is remote, inaccessible, or actively dangerous, but sometimes it still succeeds, albeit in unpredictable ways.\n- The mage ensures that the area will be entirely vacant at some point in the next 24 hours and that it will remain so for the spell’s Duration. This spell only affects Sleepers and Sleepwalkers whose Composure is lower than the spell’s Potency. This spell can fail if leaving the area is impossible (such as a prison cell or an island with no means off), although it sometimes still finds a way to succeed, although the results are unpredictable.\nIn either case, people don’t just appear or disappear; they simply find that their daily business brings them to the area (or carries them away from it) at a time convenient to the mage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The first effect instead attracts a number of people no fewer than Potency times Scale. If using Advanced Area for Scale, add 5 to the Scale factor before multiplying it by Potency."
      },
      {
        "title":"+1 Reach",
        "description":"With the first effect, the mage may determine the types of people who arrive or the behavior they exhibit (or both, with an additional +1 Reach). This carries a high risk of failure if the circumstances he describes is so specific or unlikely as to render them impossible, so it is usually safer to speak in generalities (“law enforcement” rather than “SWAT team”) or describe a likely scenario (“they sit in the audience and watch the show” rather than “they walk onto the stage and put on a play”). That said, sometimes strange and specific events do happen (often in unexpected ways, such as when an actual flash mob shows up to worship the animatronic dinosaur at the mall); they’re just less likely."
      },
      {
        "title":"+1 Reach",
        "description":"The second effect excludes Sleepwalkers."
      },
      {
        "title":"+1 Reach",
        "description":"The desired effect instead occurs within the next three hours. This is within the next 15 minutes at +2 Reach and within the next 3 minutes at +3 Reach. This can increase the risk that the spell will fail if a crowd of such a size can't be gathered or dispersed quickly enough."
      },
      {
        "title":"+2 Reach",
        "description":"The spell produces both effects in an order of the mage’s choosing. It can bring a group of people to the area, have them linger for a time, and then arrange for them to vacate it and stay away for a time (or vice versa). Duration is divided between the first and second phases, but the mage can split this unevenly. Conjunction spent to reduce the delays is doubled and divided between the phases as the mage prefers."
      }
    ],
    "author":"Eric Zawadzki"
  },
  {
    "id":88,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Marker of Horkos",
    "type":[
      {
        "arcana":2,
        "degree":3
      },
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Crafts, Politics, Socialize",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"In the Dread Domain of Horkus, Greek god of oaths, promises have a naturally binding power. This channels the Old Laws of the Domain to oversee a blood oath. It creates a small round metal, coin looking object indicating the debt of a blood oath between two individuals. Opening in the middle to reveal a divided surface, there also exists a small button on the side that makes a small needle pop up from the top. The debtor presses bloody thumbprint on one side of the divided surface to commit an oath is owed, while the debtee likewise presses their bloody thumb to the other side to indicate when an oath has been fulfilled. Its surface bears the latin words Quod Debitum Sanguine and the image of a skull.\nOaths can be left open (whoever holds the marker can call on it) or be keyed to only work for certain owners. It can also be left open for third parties to use. The coin is known to shift its images to show what the oath entails.\nOnce created, the spell safely relinquishes the Marker with no additional costs. Without Death 5, it normally requires the caster to be within the Dread Domain to create it. There is an exception, any of the two coins that a ghost carries can be made into one. The oath it holds, once signed, must be fulfilled before the spell's Duration expires (or before the oath's agreed time limit). If the marker was never signed before then, either it returns to normal (if made of the coin) or crumbles into ashes (if made in the Domain), with no further consequences. One that was signed and expired is considered to be unfulfilled.\nA Marker signed is registered by the Kerberos and enforced by its agents. While a blood oath must still be willingly signed, the Kerberos sees that it is carried through. Those that do not follow through with their oaths can expect a visit from its agents, the orkus. They seek to manipulate both sides to follow through or, should there be a breach of the oath, they mediate for compensation to be agreed upon.\nOathbreakers that refuse this offer receive much more serious consequences, for the Kerberos calls upon its own ancient oaths to bestow the Mantle of the Domain upon the Wild Hunt. Thus empowered, the Furies are set forth to inflict an appropriate karmic retribution upon them.\nThose that make multiple or especially egregious transgressions can expect the visit of a Keeper called Zeus Horkos. What happens to those that survive its trials is the stuff of legends, some whisper it grants an Attainment that makes manipulating oaths simpler (rote property on Clash of Wills involving them by spending a mana), others speak of them receiving an Artifact that can sever any oath and some rumors say they receive a copy of Horkus' ledger, where every oath is recorded.\nWhatever the case, it's a popular rote with Arrows, as it's considered a valuable teaching tool for a key corollary: Promise Only What You Would Have Others Promise in Your Place.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"The effect is Lasting."
      },
      {
        "title":"Note",
        "description":"This spell is inspired by John Wick, mixed with some Geist and a bit of Greek mythology."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":89,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Stunt Double",
    "type":[
      {
        "arcana":2,
        "degree":3
      },
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Stealth, Larceny, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"A spell created by a Libertine of Hollywood to invent twist endings for their movies. Unfortunately, their Obsession with directing pieces of supernatural found footage and making Sleepers believe in them soon drove them to Rapture. This rote was all that was found after the Consilium put down their final \"masterpiece\": leading the Wild Hunt on a heist upon an entire condo building of Sleepers, in order to \"compete in auditions to be sponsored by an agent from Arcadia\".\nThis swaps the results of up to the last [Potency] turns between targets (the caster can choose which \"takes\" remain unaltered), rewriting them by swapping their fates. A bullet might hit their clock instead of them, a hostile caster will have hit a \"stunt double\". The Rapt would often force their opponents to \"do their own stunts\", \"healing\" them while damaging their adversaries. A surprise twist might make a Door be opened by the caster rather than their rival or a gifted peacemaker might find themselves having pacified a potted plant as a berserk werewolf reaches for their throat. Without additional Scale factors, the caster must be one of the targets of the swap. When multiple targets are affected, the caster can create a \"director's cut\" by mixing and matching fates between them.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster can swap events the targets suffered one scene back. This can be taken multiple times."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":90,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Talking Killer",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Crafts, Empathy, Expression",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"A spell born in the studios of Hollywood, in the era when cheesy villains were the norm. Some savvy Acanthus saw the power of cursing their foes with this, allowing them ample time to sabotage their plans. This inflicts the target with the Evil Gloater Condition.\n",
    "extraInfo":[
      {
        "title":"Condition (Evil Gloater)",
        "description":"It creates the need in the target to demonstrate their superiority over their enemies, manifested in an all consuming drive to engineer Rube Goldberg plans or traps. The mere idea of a practical or mundane solution will always be turned down. They will always seem lacking, whether in artistry, finesse or satisfaction."
      },
      {
        "title":"Beats",
        "description":"They take a beat whenever they take the time to gloat and explain their plan to their enemies before setting the trap into motion. They may also take a beat when reacting with emphasis to the target of their machinations (such as cursing them for escaping a trap), to a degree where watchers would say they are \"chewing the scenery\"."
      },
      {
        "title":"Resolved",
        "description":"resolved after at least one of the target's enemies receives a powerful setback due to the plan succeeding."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":91,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Eye of Penance",
    "type":[
      {
        "arcana":2,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Empathy, Intimidation, Investigation",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The Guardians know that not only mages move the Diamond Wheel, its turning is the result of many beings pulling it in many directions. In order to ensure they don't impede the quick coming of the Hieromagus, some more devoted members have learned to defer to karma itself to judge the punishment upon their foes.\nThe target suffers damage equal to 10-their Morality stat. The reference point is always based on humanity. Mages suffer more damage at low Wisdom, vampires at low Humanity, Changelings at low Clarity, Prometheans at low Pilgrimage, Werewolves suffer more damage the closer their Harmony is towards spirit (100% towards flesh is the \"ideal\"), etc. This makes it a spell of choice when facing hubristic foes, the Enraptured and ancient vampires.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"If the target suffered any damage, they receive the Beaten Down condition as they instinctively understand why they suffered karmic backlash."
      },
      {
        "title":"Fate ••••",
        "description":"it does lethal damage, or aggravated for a Reach and a mana."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":92,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Adrasteia",
    "type":[
      {
        "arcana":2,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve (if desired)",
      "suggestedRoteSkills":"Academics, Athletics, Streetwise",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Fate often strikes ironically, dooming people in venues where they imagine themselves at their best. This spell gathers a cluster of misfortune around one Skill that the mage names during casting, causing the subject to suffer unexpected setbacks when they attempt to exercise it. The subject gains the Ordeal of [Trait] Persistent Condition keyed to the named Skill. While this can foil a skilled rival in a moment of crisis, mages also levy the curse on those that seek to improve a Skill, as the hardships will provide a more strenuous and rapid course of enrichment.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"During the spell's Duration, minor perturbations of Fate steer the subject into situations where they are obligated to use the marked Trait. This works as a malevolent version of Serendipity, forcing use of the Trait during one important roll of a different Trait from the same type (Skill, Attribute, etc.) and category (Mental, Social, Physical) in a given scene."
      },
      {
        "title":"+2 Reach",
        "description":"As above, but the marked Trait will substitute in for any Trait of the same type. A diplomat with Ordeal of [Firearms] would find their Socialize effort now hinges on small talk about military hardware, for instance."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may instead name an Attribute; the Condition will apply to this Trait."
      },
      {
        "title":"+2 Reach",
        "description":"The spell becomes Lasting; the Condition will persist until Resolved."
      },
      {
        "title":"Condition",
        "description":"Ordeal of [Trait] (Persistent) - Fate conspires to foil your efforts regarding a Skill or other Trait. The first time each scene that you roll a dice pool containing the Trait, circumstances turn against you, levying an equipment penalty equal to your dots in the Trait. A character with Medicine 3 discovers that some of their tools have been misplaced and the lighting has become unreliable, imposing a -3 penalty; if they had been less capable fate would have been less cruel, while a master surgeon might find themselves more deeply disadvantaged."
      },
      {
        "title":"Resolution",
        "description":"Increase your rating in the marked Trait or gain a Specialty or Merit that displays growth in that field."
      },
      {
        "title":"Beat",
        "description":"Suffer the penalty on a roll where the consequences of failure would represent a genuine setback or real hardship for you or those around you."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":93,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Erase Name",
    "type":[
      {
        "arcana":2,
        "degree":4
      }
    ],
    "properties":{
      "practice":11,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Politics, Streetwise",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"This spell disconnects a target from one of his identities. When cast, the mage chooses one name the target is known by: This can be his sympathetic name, a nickname, an online handle, special title, or the like. For the spell's duration, no one can make the connection between the target and that name. Reduce a social merit connected to the name (such as Fame, Status, or Alternate Identity) by the spell's Potency. For as long as the identity is suppressed, the name cannot be used as a Sympathetic Yantra to cast spells on the subject. If the subject's sympathetic name is erased, the Withstand rating of spells cast on him does not increase from not knowing it. This spell can erase Shadow Names and the Shadow Name merit, but requires a point of mana to do so.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage can split the spell's Potency among multiple social merits."
      },
      {
        "title":"+1 Reach",
        "description":"The subject also gains the Anonymity merit at a dot rating equal to the spell's Potency."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":94,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Reversal of Fortune",
    "type":[
      {
        "arcana":2,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Larceny, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Many cultures revere the Sacred Fool, a clownish figure that perverts many of society's mores and yet, in their contrary behavior, are able to access a sort of crazy wisdom that allows them to know things beyond their ken and perform miraculous feats. This archetype rings true in Supernal Arcadia, and the Fate Arcanum allows a mage to tap into this same wisdom, turning hindrances into blessings. The subject of this spell reverses the dice effects of any Conditions and Tilts which they are under, penalties becoming bonuses and vice versa.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The reversal only applies one way. Penalties become bonuses, but bonuses do not become penalties, for instance."
      }
    ],
    "author":"Ophidimancer"
  },
  {
    "id":95,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Briar Invasion",
    "type":[
      {
        "arcana":2,
        "degree":4
      },
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Occult, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Sometimes the best way to protect one's keep is to entangle it in a copse of thorns. This spell, which must be cast using the Area factor, causes its targeted location to be treated as part of the Hedge, allowing those with Glamour or magic to shape the surroundings through their actions. The mage chooses when casting whether the area is considered a trod, the Thorns, or regular Hedge. This enchantment brings with it the more insidious aspects of those border marches as well, such as penalties to Acts of Hubris and, most importantly, self-shaping. Landscapes warp in reflection of the thoughts of those within, trapping the fearful, tempting the greedy, abjuring the weak. Any changes wrought from Hedgespinning fade when the spell's duration ends.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may designate a theme for the area, such as 'moonlit desert' or 'information wants to be free.' Whenever the pseudo-Hedge shifts itself reactively, it always does so in alignment with the specified theme. Active Hedgespinning rolls that align with the theme gain bonus dice equal to the spell's Potency."
      },
      {
        "title":"Add Space ••••",
        "description":"Moving through the location also uses the rules for Hedge navigation. If the area is designated a trod, with the use of the Sympathetic Casting Attainment, the mage can also connect the area to another specified location. With an additional Reach, the mage treats their Gnosis as an equivalent Wyrd rating when navigating through the space."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":96,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Kingmaker",
    "type":[
      {
        "arcana":2,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Computer, Politics, Streetwise",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"With a wave of the magic wand, an Adept of Fate can grant your every wish. Make sure it's what you really want, though. The subject of this spell gains up to Potency dots in a Social Merit of the mage's choosing for the spell's duration. This must be a Merit connected to an external source, and at Storyteller discretion, can include Merits that while not technically Social in scope are still externalized in some way, such as Soul Stone or Library, although the spell cannot grant a unique, specific example of such (the soul stone of a particular mage, for instance). Fate conspires to bring the bounty to the subject as expediently as possible.\nCaveat emptor: Although this spell can grant a subject great power and prestige in the Fallen World, it does not confer any ability to use such power effectively. One might become the CEO of a corporation without a lick of knowledge of finance or business politics, which could spell ruin in the long run. Such lead-crowned monarchs rely heavily on delegation and can often be sussed out by the ring of advisors, viziers, and lackeys with which they surround themselves to keep their holding running smoothly. Furthermore, attempting to hijack the upper echelons of Sleeper governance is difficult, and generally ill-advised; our world's presidents, queens, popes, emperors, and firsts among equals are watched very carefully from myriad shadowed corners. On more than one occasion the unwise casting of this spell has led to the manifestation of an Ananke or worse, an Exarchal Ochema, to set things back to the way they were.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This spell may grant a number of different Merits with a total dot rating no greater than Potency."
      },
      {
        "title":"Add Space ••",
        "description":"The subject also gains any Sympathetic connections the Merit would entail."
      },
      {
        "title":"Add Time ••",
        "description":"The caster can dictate how exactly the subject gains access to the Merit. With Temporal Sympathy, the mage can grant a Merit retroactively through events in the subject's past (though having no effect until the present moment)."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":97,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Illogical Procession",
    "type":[
      {
        "arcana":2,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Computer, Intimidate, Persuasion",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The known universe is composed of a fractal, near-infinite, mindbogglingly complex series of if-then statements setting all things in perpetual and reciprocal cosmic motion, the greatest compilation of code ever to be written. An Adept of Fate can add in their own joiners and clauses as they see fit.\nThe mage chooses a specific condition, such as \"when the subject is struck by an arrow,\" \"when the door on the far side of the room closes,\" or \"when I speak the word for 'rainforest' in High Speech,\" as well as the outcome that the subject will perform, such as \"she will speak an uncomfortable truth about her brother,\" \"the window next to it will open,\" or \"the Rose of Neptune will bloom.\" Unless the condition involves the subject's being directly acted upon, the spell's Subjects factor must incorporate both actor and actee. The next time during the spell's Duration that the condition comes to pass, the subject will perform the action. A given action can have up to Potency in discrete components, though if not completed before the Duration expires, the subject is under no compulsion to continue (though sentiment or inertia may cause them to follow through anyway). In combat, the subject performs the action on their Initiative count. The subject must be capable of performing the action, though the realm of possibility should be interpreted widely here: A given window might not normally be able to open on its own, but the magic of the spell arranges events so that it does so this one time, for instance. In the same way, a subject can be made to reveal a fact that they might not otherwise consciously know, although they must still have some potential for knowing such.\nThe stated condition and outcome must be more or less comparable in probability: The mage speaking a word to make a dog bark, the subject winning a claw game to find a fifty-dollar bill, a meteor strike causing the subject to suffer a stroke.\nThis spell cannot kill a target without qualification, but any hazards introduced affect the subject as they normally would. Alternatively, this spell can function as an attack, dealing Potency in the mage's choice of bashing or lethal damage when the condition comes to pass, or instead impose a predesigned Hex or Boon on the subject.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The condition and outcome can be within one degree of probability of one another."
      },
      {
        "title":"+1 Reach",
        "description":"The outcome can be achieved a number of times equal to the spell's Potency during the Duration."
      },
      {
        "title":"+2 Reach",
        "description":"As above, but the mage can specify a number of individual/outcome sets equal to Potency."
      },
      {
        "title":"+2 Reach",
        "description":"The condition and outcome can be within two degrees of probability of one another."
      },
      {
        "title":"Add Arcanum 1",
        "description":"The subject may reveal information that could be learned by casting a Knowing spell of the included Arcanum. Traditionally, subjects of this spell where Time is included are referred to as Sybils, and a few censored Grimoires detail how to make this effect permanent and recurring, an Act of Hubris on par with creating a Servitor."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":98,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Schrodinger's Pearl",
    "type":[
      {
        "arcana":2,
        "degree":4
      },
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Crafts, Science, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"One of the most recent breakthroughs in quantum spellcasting and one of the masterpieces of the Libertine Caboose. Similarly to Hung Spell, it is cast upon a mage and captures an Imago as it enters the Fallen World. However, it also instills a state of quantum uncertainty upon it, leaving its targets decided and undecided at the same time.\nThis creates a pearl of possibility that captures the spell. While it can be moved, it is utterly insubstantial. Anyone who had one on their person would not feel its weight and trying to retrieve it from one's pocket would be difficult, as those without Peripheral Mage Sight would receive no tactile feedback.\nSimilar to Hung Spell, it captures up to [Potency] spells, the caster still needs to spend a point of mana per spell and build the Imago specifically for this purpose. Unlike it, the captured spells' targets are defined by the user, the pearl reading their intentions. The spell only takes effect once all targets have been decided, such as all the points of a Co-Location being chosen.\nThe caster can place up to [Potency] mundane keys to restrict possible users.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The condition can include things only perceivable by Mage Sight."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":99,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Downfall",
    "type":[
      {
        "arcana":2,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Crafts, Larceny, Persuasion",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"A Witch who wants you dead can do so much more than just blast you to smithereens. She can set up the entire world against you if she so chooses, and if you've crossed her bad enough. When the mage casts this spell, she chooses something the target will lose permanently, and by what means that will happen (uranium, wasps, true love's kiss, etc). For the spell's Duration, everything possible will converge to make the loss come about; rolls to help bring the target's downfall add the spell's Potency to the dice pool, while rolls to hinder the downfall are penalized by the same amount.\nWith this spell, a mage can kill a target, inflict a Persistent Condition or Tilt, or permanently remove access to a given merit (PCs targeted by this spell are still subject to the Sanctity of Merits, but cannot reallocate Experiences until the spell's duration expires). The means the mage chooses when casting the spell will play a pivotal role in the downfall: The target kisses the woman of his dreams, but it turns out he has a lethal allergy to a rare ingredient in her lipstick, or a calamitous misadventure involving a misplaced wasp nest leads to his impeachment from office.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"If the spell is meant to kill the target, the means of his death is treated as a Bane."
      },
      {
        "title":"+1 Reach e 1 Mana",
        "description":"Successful rolls to bring about the downfall are automatically exceptional successes; failed rolls to prevent the downfall are automatically dramatic failures."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":100,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Nobody",
    "type":[
      {
        "arcana":2,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Crafts, Larceny, Persuasion",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana"
    },
    "description":"Our lives are stories told by fate. We grow when we face the unexpected, either succeeding or failing. This spell breaks that and curses the target with an uneventful life. Unexpected things rarely happen to the subject, and when they do, he fails to confront them, his narrative destroyed by the magic. The subject of the spell can never gain Beats.\n",
    "extraInfo":[
      
    ],
    "author":"Menace"
  },
  {
    "id":101,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Valdemar's Gaol",
    "type":[
      {
        "arcana":2,
        "degree":5
      },
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Occult, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 mana"
    },
    "description":"This suspends the target in a state of quantum uncertainty, both alive and dead (or broken and unbroken for objects). The caster can then name up to [Potency] keys that resolve this state in a given way, ending the spell. For example, at Potency 3, the keys could be: solving a given riddle returns them alive, they would return dead if the answer is incorrect or alive if a given melody is played on a pan pipe. The keys must be something the caster could perceive if they were present with the target. The caster must also set a default resolution for when the spell ends, but it can be changed reflexively while he retains spell control.\nTargets cannot move, do not require food or sleep, do not age or suffer wounds. Can they perceive anything in that state ? Yes and no, most Mind mages who look into the answer find it hard to explain. Without conjunctional Mind 2, the harrowing experience provokes a breaking point when the spell ends.\n",
    "extraInfo":[
      {
        "title":"Add Mind ••••",
        "description":"The target retains the ability to speak for the duration and is compelled to answer up to [Potency] questions truthfully and without omission."
      },
      {
        "title":"+1 Reach",
        "description":"The caster gets a brief vision of the target when the resolution occurs."
      },
      {
        "title":"+1 Reach",
        "description":"The caster can track the target until the duration ends - not by location, but as a sense of a path that will take them to them."
      },
      {
        "title":"+1 Reach",
        "description":"The key can be something they could only perceive with Mage Sight."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":102,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Scrolls of Djhuty",
    "type":[
      {
        "arcana":2,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Occult, Expression",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 mana"
    },
    "description":"Supernal magic is wondrous and incredibly adaptable, however, only a foolish mage would dismiss it as the only type of willworking. Occultists and religious figures have developed rituals to harness the inherent supernatural powers of existence, refining them over the course of millennia into a form accessible to anyone. Some of the most potent ones leverage the symbolism of death to create powerful effects. This spell was created to furnish a mage with knowledge of these practices without spending extensive amounts of time learning them.\nThis grants a target [Potency] dots of Ceremonies for the duration. Trespassing cabals that were confident in their dispellers were turned away as the Black Cat's Crossing sapped the will of those uninvited to the Sanctum. The Lover's Telephone allows for reliable communication even in areas where sympathetic magic is warded and Death Watch has proven invaluable in keeping injured cabalmates alive until a healer can be found.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":103,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Seelie Mantle",
    "type":[
      {
        "arcana":2,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Expression, Persuasion",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 mana"
    },
    "description":"A mage with a powerful Shadow Name dons the mantle of the character he represents, he walks like it until the universe sees them as similar enough to invest him with the significance of its tale. When the legend then starts walking like the mage, a new interpretation is born. Some instead choose to create a new myth from scratch, leaving their own original contribution to the eternal play. This rote allows the mage to quickly assume the destiny of the role, strengthening and reshaping it to suit their needs.\nWhen cast upon an Awakened subject, it grants them [Potency] dots in Shadow Name, with the caster choosing its purview and symbolic correspondences. Should the subject already possess one, its power increases by [Potency] dots, with the caster being able to add or alter its symbolism as they wish.\nWhen cast upon multiple subjects, Potency may instead be allocated to grant a Cabal Theme of the caster's design. The merits can go above normal limits.\nWith conjunctional Mind 1, the subject can be granted the Shadow Self merit as well.\n",
    "extraInfo":[
      
    ],
    "author":"by KaiserAfini"
  },
  {
    "id":104,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Tear Down the Fences",
    "type":[
      {
        "arcana":2,
        "degree":5
      },
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"none or Resolve (see below)",
      "suggestedRoteSkills":"Persuasion, Expression, Intimidation",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The witch targets a closeable doorway (or similar apertures) she could fit through and turns it into a Hedgeway, just like changelings do via Glamour. This Hedgeway remains open for the Duration, and at the moment of casting the mage can choose whether it will become merely dormant or surely close when the Duration expires.\nAlso, the mage may ignore a portal's predetermined destination that it should lead to when it becomes a Hedgeway, instead dictating where it leads to among places she has visited. With Sympathetic Range, she may select locations she has a sympathetic connection with. This forced redirection remains so when the Hedgeway is dormant, but expires when it surely closes. However, for 1 Mana point the redirection becomes Lasting.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage assigns a Key to the new Hedgeway as he opens it. He himself automatically succeeds any rolls to use this Key."
      },
      {
        "title":"+1 Reach",
        "description":"The caster opens the Hedgway with no need for an existing pathway; in thin air, on a flat wall, or the floor someone is standing on. Scale determines Hedgeway's general size."
      },
      {
        "title":"Add Mind •••",
        "description":"Instead of a Vice, the mage may choose particular trains of thought or behavioral patterns that her newly created Hedgeway responds to when tempting people, including Aspirations and Obsessions. This way, the spell becomes Withstood by Resolve."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":105,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mark of the Forlorn",
    "type":[
      {
        "arcana":2,
        "degree":5
      },
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Stealth, Larceny, Subterfuge",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"A sinister spell that obliterates the target's sense of self completely. It annihilates all temporal sympathy they have, alongside their Aspirations and Obsessions. Their past, their bonds, the very light of purpose. None of them will have any meaning and they won't even care. Soon their personal history will be forgotten by the world as the target's memories grow hazy themselves.\nThe soul will naturally seek to fill this hollow, prompting them to redefine themselves, to seek new goals, building new Aspirations and Obsessions from scratch. This leaves the subject in a very vulnerable state, a fact that Seers and other Left-Handed magi who favor this rote count on.\nIts origins are murky at best. Some say it was developed by a Minister of Unity. Seers tend to become Enraptured more often, some say this was created to rehabilitate them by forcing them to rebuild Wisdom. Whether they managed or not was irrelevant, for a sagacious Seer knows they would either end up with the power of a new minion or the raw might of a magical savant in their pocket. Others say it was made as a way to tribute one of their enemy's identities to the Tyrant. Whatever the case, the subject turned on their new master and eliminated them.\nAnother theory says the first subject was a covert Sleepwalker agent of Geryon, whose slate was wiped clean between assignments. In the midst of one they heard the call of the Watchtower of Fallen Blood and set about wiping all servants of the Exarchs to avenge their usurped bloodline.\nA third hypothesis holds that it was used by a Nameless Order of mages to hunt a monstrous amalgamation of a True Fae and an Acamoth, manipulating themselves to fight its shards, for only a magus without a True Name can banish them.\nSome think it was an Awakened Doomed to always fall into the Ocean of Fragments. Each time emerging with a new identity stitched together from the random memories drifting in the water and the Admiral's surprising aid (some even speculate the mage is his son reincarnated)\nDozens of these theories exist, each extracted from different corpses of supernatural beings around the world. Each being used akin to a memory tablet, perhaps a diary or a confession. The only thing they all had in common was that they were inscribed with this rote and the message \"I am the Hollow Man, I am the Hollow Man. Many times have I died, many times risen again\".\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":106,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Grant Dekate",
    "type":[
      {
        "arcana":2,
        "degree":5
      },
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Larceny, Politics",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The creation of a Dedicated tool is no simple task. It requires the mage to actively use any intended tools in spellcasting, constantly choosing to channel their Nimbus through them over a long period of time. This spell simply completes the needed process in the blink of an eye.\nThe caster may dedicate up to [Potency] tools for the subject. These may be tools held by the caster or subject. The limits of Dedication remain in place. The caster can add a new Dedicated tool, overwrite or remove the power of an existing one. This is a Lasting effect and any tools that lose Dedication are simply left with an imprint of the subject's Signature Nimbus.\nThis rote was created out of necessity by a Mystagogue. In order to catch a plunderer of their Sanctum, first they created a scrying window, managing to get just enough power to view the thief. After a remote cast, the scoundrel would find themselves deprived of their Dedicated tool, all the while the Mystagogue held their two new ones in hand. The mage found the ability to bypass all sympathetic Withstands on the thief endlessly helpful when securing compensation.\n",
    "extraInfo":[
      {
        "title":"Observation",
        "description":"This spell can also be cast with a Making of Prime and Space."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":107,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Pythian Miasma",
    "type":[
      {
        "arcana":2,
        "degree":5
      },
      {
        "arcana":4,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Medicine, Occult, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The core doctrine of the Kyrian Ministery states that it is the duty of great men to lead history, it is their burden to crush any who dare defy their edicts. Naturally, these Seers see none more worthy than themselves and so created this rote to secure a stranglehold over power.\nThis creates a disease of [Potency] severity. To mundane science it is a persistent, far spreading, yet ultimately harmless symbiotic organism. Those attuned to such things know better, for it is a parasite that corrupts their very luck.\nThose unable to resist it are subject to two effects. First is that they eventually experience a twist of fortune that sets them to Aspire to serve the caster faithfully. Second is that no matter how badly they fail at this or how often others sabotage them, they are Doomed to push the caster's agenda forward.\nIt is said the Oracle of Delphos used to have this spell active in the incense used for divination, binding the fate of heroes to the Prophet's dictates.\nThe use of this spell is not done without a great deal of preparation, masquerading the effect so as to cast the blame on misfortune spirits, beings of the Hedge or rival Ministries. Should the truth be discovered before the Ministry seizes the city, it would be prudent to flee quickly, rather than face the endless creativity of an entire city of Awakened with a vendetta.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":108,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Blind Man's Eyes",
    "type":[
      {
        "arcana":3,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Science, Athletics, Socialize",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Unveiling the visual spectrum to the subject, the mage allows the blind to see once more. For the Duration of the spell the subject ignores the effects of the blinded tilt and condition. A similar spell takes care of deafness.\n",
    "extraInfo":[
      
    ],
    "author":"Flinty"
  },
  {
    "id":109,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Electronic Awareness",
    "type":[
      {
        "arcana":3,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Crafts, Investigation, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"This Spell reveals all electronic devices to the subject’s senses by highlighting the electrical currents and voltages. The subject can see the flow of electrons, hear the buzz of power and smell a faint whiff of ozone in the presence of electronic devices.\n",
    "extraInfo":[
      
    ],
    "author":"Flinty"
  },
  {
    "id":110,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lightwarden",
    "type":[
      {
        "arcana":3,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Investigation, Science, Survival",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Where there is light, an initiate of Forces can see, even if the light never reaches his eyes. This spell shows the caster the photons emitted and reflected from the subject or area that is the target of the spell.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"When targeting a large area this spell can overwhelm the mage's senses with a flash flood of light, this reach allows the mage to compensate for sensory overload."
      }
    ],
    "author":"Flinty"
  },
  {
    "id":111,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Magnetoreception",
    "type":[
      {
        "arcana":3,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Science, Survival, Animal Ken",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The earth's magnetic field has a strength of 0.5 Gauss (Unit) and animals use it to orient themselves. But this presents a paradox, for the strength of these fields is many orders less than an elementary chemical act. As well as not being strong enough to generate appreciable heating of tissue or cause irritation. So, how do animals sense it? Who knows? I don't! But with this spell the mage can sense and use the earth's fields just as an animal.\nThis spell gives the mage the benefit of the Direction Sense Merit, but only so long as the earth's magnetic field can be detected and isn't being altered by any strong magnetic forces in the area.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"In addition to the earth's magnetic fields the mage can sense electric fields in general. This can be used to locate living beings, in the same way as some sharks do. These sharks can locate prey even when said prey has buried itself, the mage now has the same ability."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":112,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sense Vibrations",
    "type":[
      {
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Mages can become invisible, but thought going completely silent don't happen to many of them, because sight is the most important human sense. This spell exploits this error, listening closely to vibrations in the area and telling mage of their location.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage knows Size and approximate mass of being who is entering the area."
      },
      {
        "title":"+1 Reach",
        "description":"The mage can closely listen to being who is entering the area, if he chooses to."
      }
    ]
  },
  {
    "id":113,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Copy and Paste",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Science, Larceny, Streetwise",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Just knowing is never enough. With this spell, information can be transferred from one digital device to another.\n",
    "extraInfo":[
      
    ],
    "author":"Flinty"
  },
  {
    "id":114,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Gravitic Ward",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Gravity is just another Force, and while a proficient Mage may seek to redirect it as he desires, there may come times when you will simply want protection from any harm it might occasion.\nFor the Duration of the spell, the subject is immune to all Bashing damage suffered from gravitic forces and decreases all Lethal damage from these sources by the spell's Potency.\nThis is primarily falling damage and the damage from objects falling on you, and does not include non-gravitic damage, such as pneumatic crushing engines, or rock physically thrown downwards by someone (though it will protect against any further kinetic energy imparted to that rock by gravity).\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"The subject is immune to Bashing and Lethal damage from gravitic forces, and decreases all Aggravated damage from such sources by the spell's Potency."
      }
    ],
    "author":"HerbertIsBertBert"
  },
  {
    "id":115,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Helion Shield",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Occult, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage shields the target from the deleterious effects of sunlight. For most subjects, this will simply protect from sunburns, cancer risk, and other similar concerns. For beings that take damage when exposed to sunlight, this provides more explicit protection. They gain immunity to bashing damage inflicted by sunlight, and reduce lethal damage from sunlight by the spell’s Potency. The spell has no effect on aggravated damage.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"The subject is immune to bashing and lethal damage from sunlight, and reduces any aggravated damage from sunlight by the spell’s Potency."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":116,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mirage",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Science, Survival",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"This spell manipulates atmospheric conditions to create a mirage, an image of a far-distant object that anyone can see. It can be an inferior mirage, a superior mirage, or a Fata Morgana. This is not obvious magic, as mirages are quite real and normal phenomena, though often very striking and provoking of amazement. The Scale parameter determines the Area over which conditions are right for the mirage to be seen; most castings involve advanced Scale.\n",
    "extraInfo":[
      
    ],
    "author":"LadyLens"
  },
  {
    "id":117,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Invisible Air",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Weaponry, Science, Larceny",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The thaumaturge gathers wind and light around a melee weapon, replacing its true form with a hazy figure. The weapon's exact reach is concealed, imposing a Defense penalty equal to Potency on all opponents attempting to engage with its wielder. This advantage does not apply to opponents who do not rely on sight in combat.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The melee weapon pulses with powerful wind and light, allowing its wielder to apply the Knocked Down Tilt for a number of attacks equal to Potency."
      },
      {
        "title":"+1 Reach",
        "description":"The sheath of wind expands to a shield of air, repelling harmful gasses and projectiles slow enough for the wielder to apply Defense against."
      },
      {
        "title":"+1 Reach",
        "description":"The wind boosts movement, granting a bonus equal to Potency on Dodge rolls."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":118,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Pyre Ward",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Occult, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The caster creates a shield that protects her subject from fire. Mundane flame has no effect on the subject, even if they would normally suffer increased damage for any reason (such as having fire as a Bane) - the subject’s Pattern won’t interact with fire in any way. This also renders the subject unable to benefit from the warmth generated by fire. Supernatural flames provoke a Clash of Wills to affect the subject.\n",
    "extraInfo":[
      
    ],
    "author":"Inodiv"
  },
  {
    "id":119,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Spark",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Larceny, Science, Firearms",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage can concentrate heat on a subject to create an instantaneous spark that might light a particularly flammable object, like gasoline fumes or a match (anything that could be lit on fire by a single spark) on fire.\n",
    "extraInfo":[
      
    ],
    "author":"Menace"
  },
  {
    "id":120,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Stay Down",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"?",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"A nice way to eliminate someone from a fight is to make him stay down. This spell veils gravitic forces from the target making it unable to maintain vertical position. As long as the spell is in effect the target can’t stand up.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Rapid changes in apparent gravity gives penalty to actions that require focus equal to potency."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":121,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Surestep",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"?",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage manipulates gravity and friction in such a way that allows the subject to walk on any surface able to support his weight be it slippery ice or a rope stretched between two buildings. Ignore any relevant Tilts or Conditions.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"The subject can also freely walk on vertical surfaces."
      }
    ],
    "author":"Menace"
  },
  {
    "id":122,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Shape Fundamental Interactions",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Academics, Occult, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"While the Sleeper concept of the four fundamental forces is a pale mockery of the True interaction of Forces, this theory does reveal the growing capability of Sleepers to understand the interconnectivity of reality. This spell allows the mage to redirect and shape these fundamental forces irrespective of each other. At the base level, the mage may only shape one fundamental force at a time (and can not shape the strong interaction without Matter). The mage can choose between: gravity, weak interaction (radiation decay), and electromagnetism (but only one form of electromagnetism). While this spell allows you to manipulate Forces that are covered by other Initiate and Apprentice level spells, this spell is more focused on the shape of these fields. Wanting to increase or decrease the strength of any of these forces requires a different spell.\nThe interaction chosen determines the effect of the spell. For example:\n- Gravity: Replicates the Control Gravity spell;\n- Radiation: Bend radiation to shape an Extreme Environment or block radio transmission.\n- Magnetism: Shape a magnetic field to only affect a certain space.\nParticularly intricate shapes may require a reflexive Wits + Science rolls, at the Storyteller’s discretion.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and add Matter••",
        "description":"The mage may now manipulate the strong interactions found in the nuclei of atoms. The mage may use this to reshape the mass of an object and in turn, move the center of gravity of the object. This can be used to impose penalties on equipment and vehicles equal to the spell’s Potency. However, this spell can also be used to provide bonuses to pushing over heavy objects as the center of gravity is moved to a more advantageous point for leverage."
      },
      {
        "title":"+1 Reach, Matter•• and Life••",
        "description":"The has a similar effect as the above spell, but it is instead directed at a living being. This imposes a penalty to all physical actions equal to the spell’s Potency as the target struggles to navigate their altered balance."
      },
      {
        "title":"+2 Reach",
        "description":"The mage can create an appropriate Environmental Tilt, such as Extreme Heat, Extreme Cold, Poor Light, and Shock Current (Homebrew Tilt to represent when an individual closes a circuit while near a live wire or ground fault)."
      }
    ],
    "author":"lladas (Even more Legacies, updated to 2E)"
  },
  {
    "id":123,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hymn",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Expression, Science, Academics",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"It is said that the voice Seraphim singing the praises over the Majesty of the Supernal can bring even the most dour to tears. This spell is a variant of Control Sound, but instead of broadly manipulating sound, the spell focuses and clears the subject's Voice. This aids in Persuasion and Intimidation rolls relating to voice, but its primary use is as an aid to Song. The subject may be able to reach pitch and volume that they could never achieve otherwise. rolls mainly relying on the quality of the Voice of the subject gain a bonus equal to Potency and the Subject receives no penalty for being untrained.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Rolls primarily relying on the quality of Voice of the subject gains 9-again, for another Reach it becomes 8-again."
      },
      {
        "title":"+1 Reach",
        "description":"The subject may use their voice for duration with the minimal amount of strain."
      },
      {
        "title":"Add Prime •",
        "description":"The subject may roll Expression while using High Speech without penalty. If the subject has Fluent High Speech merit, the dice bonus of the merit may be extended to Expression rolls using High Speech."
      },
      {
        "title":"+1 Reach and Add Prime ••",
        "description":"If the subject sings in High Speech for the full length of a Supernal Summoning, they may apply 9-again to the Arcanum + Gnosis rolls. For another reach, they may apply 8-again. These dice tricks also apply to rolls relying on the quality of the subject's Voice."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":124,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Firewall",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Computer, Subterfuge",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"A shielding spell knows what harms its subject and prevents it. Much like how a Matter shielding spell can protect the mage from a caustic atmosphere and yet allow a normal one. So too does this spell prevent any harmful software and traffic from reaching its technological subjects while still allowing the harmless. Supernatural attempts to cause digital harm provoke a Clash of Wills.\n",
    "extraInfo":[
      
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":125,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Pilgrim’s Balance",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Survival, Science, Academics",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Every journey has its challenges and difficulties, and not every road is well paved. This spell makes every step of its subject certain, allowing one to cross things that would normally support the subject’s weight without issue or penalty. One may run across a tight rope or a slippery floor as surely as one would cross a broad paved road. Even unstable terrain, if it could possibly bear the weight of the subject, does so.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject's step becomes even surer. The subject may stand on surfaces that could never support their weight, like snow, glass or even water. The subject leaves no foot trail from their passage. For an additional reach, the subject may walk in defiance of Gravity, up or down as they please with no additional difficulty, as long as there is a surface they can scale. One may even hang from the ceiling."
      },
      {
        "title":"+1 Reach",
        "description":"The subject may walk across actively dangerous terrain without concern. A bed of nails, or a road of embers pose no challenge to the subject. Hazards not directly relating to where one steps are not ignored, nor are caustic or toxic hazards."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":126,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Rewrite System",
    "type":[
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Computer, Expression",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"With this spell a mage can change a system’s programming. This means she can rewrite existing programs or install wholly new ones. This can be used to create handy applications or to instantly give systems a virus or spyware. Changes are not instant. The spell gives the system all the information and commands needed to make the changes, but the system still needs time to install/apply these. The effects of this spell are Lasting which means that the changes made can be noticed.\nIf the mage makes only subtle changes however apply the following rules for discovery by any users:\n- A knowledgeable user,  either about this specific system or about systems of this type in general, may make a reflexive Intelligence + Computer roll penalized by the mage's Computer Skill to discover any changes the mage made.\n- If the user is not familiar with the system, or failed the reflexive roll, but still suspects tampering they may make an extended Intelligence + Computer penalized by the Mage's Computer Skill to discover it.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The effects of this spell take place instantly."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":127,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Blazing Light",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Occult, Science, [one more]",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The light in the target area becomes blinding. Affected characters take a penalty to all rolls dependent on vision equal to the spell's Potency, and a -1 to all other actions due to pain and distraction.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"You can't dodge what you can't see. Subjects inside the affected area lose half their Defense."
      }
    ],
    "author":"Justin Sane"
  },
  {
    "id":128,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Form Blazing Sword",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Athletics, Weaponry, Expression",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage shapes and contains a source of energy into a melee weapon of elemental force; a campfire becomes a blade of flame, a concert provides a literal hammer of sound, or the mage enters a vampire's den armed with a spear of sunlight. The spell maintains the weapon's form and partially contains its energies, though the bearer suffers the full effects of continuous exposure. If the weapon is used to strike, it releases its stored energy into the target, as if they had spent a turn exposed to the source. The Potency of the effect determines how much energy may be contained in the weapon (as per the chart under Transform Energy), and each discharge reduces the remaining Potency of the effect by one, making future strikes less vicious or negating the spell altogether. The user's passive exposure does not reduce the spell's efficacy, however.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The containment of the weapon is improved, and the user is no longer subject to its effects while bearing it."
      },
      {
        "title":"+2 Reach",
        "description":"Strikes do not reduce the Potency of the spell."
      },
      {
        "title":"+1 Reach",
        "description":"The weapon acquires a 'core' of kinetic energy that gains heft when swung. If the weapon is used in a Weaponry attack and strikes the target, this buffeting force inflicts bashing damage equal to the attack successes, in addition to the effects of exposure to the stored energy. Armor can reduce this impact damage, but generally does not help against the energy."
      },
      {
        "title":"+2 Reach",
        "description":"As above, and the core is more refined in shape; the weapon acquires the traits (equipment/initiative modifiers, Size, Strength requirement, etc.) of a weapon with a maximum equipment modifier of [Half Potency, round up.] While it still inflicts only bashing damage (including the weapon's modifier), it is in all other ways treated as the form copied - a flaming chain has the Grapple property, a flaming spear improves Defense and requires two hands to wield, and so on. As an instant action the mage may, if in range of the weapon, reconfigure it into another form within these limits."
      },
      {
        "title":"+1 Reach",
        "description":"The weapon may be thrown; it has range bands of (Potency x 10/Potency x 20/Potency x 40) and is aimed with Dexterity + Athletics - the target's Defense. A successful throw inflicts damage as a strike. If the weapon has a kinetic element (as above), a throw inflicts additional bashing damage on a successful hit. The 'thrown' energy splits off from the original weapon and dissipates upon impact, leaving the weapon itself still in the user's grasp."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":129,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lei Gong's Raiment",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Politics, Athletics, Intimidation",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage harnesses a nearby source of electricity to wrap a subject in a crackling corona of lightning. While the spell anchors the aura and prevents an immediate discharge into the surroundings, anyone that moves or interacts with the subject after the aura is set suffers harm as if they'd come into contact with the power source. Unless they are shielded, this threatens the subject as well, who must remain still to avoid harm. The Potency of the effect determines how much charge can be settled into the aura (as per the chart under Transform Energy), and each discharge reduces the remaining Potency of the effect by one, making future strikes less vicious or negating the aura altogether.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"Strikes do not reduce the Potency of the spell."
      },
      {
        "title":"+1 Reach",
        "description":"The subject and aura's innate forces are harmonized to one another; the subject may move without harm. As a beneficial side effect, the subject is shielded from other sources of electricity, reducing their effective intensity by the Potency of the spell."
      },
      {
        "title":"+2 Reach",
        "description":"As above, and the aura exerts a modest 'lift' on the subject. As long as the spell's Potency (treated as Strength) is sufficient to lift the subject's weight, they may, as an instant action, jump-float at a Speed of (Gnosis + Potency)."
      },
      {
        "title":"+1 Reach",
        "description":"The subject may 'throw' the aura; it has range bands of (Potency x 10/Potency x 20/Potency x 40) and is aimed with Dexterity + Athletics - the target's Defense. A successful throw inflicts damage as a strike. If the subject is not protected in some way, they will be injured upon moving as usual. If the subject is being lifted by the aura (as in the +2 Reach option above), they may opt to 'ride' a throw to its destination, the lightning carrying them to a new position."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":130,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Future Is Now",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Computer, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"This spell allows computer hardware to go far beyond its limits. For every level of Potency double the hardware’s performance. For example, Potency 3 would be eight times the performance.\nThis spell increases a computer's equipment bonus. For personal computers, this bonus is equal to Availability and normally ranges from +1 to +4. This spell doubles the bonus per level of Potency to a maximum of +4.\nDie bonuses for anything beyond the scale of PCs and similar devices are ST fiat. This includes things like supercomputers.\nFor supercomputers, as a rule of thumb assume that they are about 10.000 times faster at the calculations they were designed for than your average pc. So, you’d need Potency 11 to bring an average PC up to supercomputer level. Using this spell on a supercomputer would probably result in record breaking performance.\n",
    "extraInfo":[
      
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":131,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lightning Javelin",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Streetwise, Crafts, Firearms",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Grasp firmly the spear of lightning, and let it sunder your foes just surely. With this spell you can pull a charge of electricity out of a source and hold onto it. You can make a thrown attack while holding this charge. A success allows you to release any amount of that charge as damage. Any remainder stays in your grasp for another attack, unless you let go of it or the spell ends.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Half Potency rounded up is added as bonus dice for the throwing attack."
      }
    ],
    "author":"Yelesom"
  },
  {
    "id":132,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Myopia",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Science, Firearms, Crafts",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Many people suffer from myopia, and with his spell mage can add his enemies to this list by disrupting light patterns near the enemy. This spell places a Myopic Condition on the enemy: -1 to all vision-related rolls per dot of Potency. Note that while his Defense suffers from this penalty, he still can use his full Defense for Dodge.\n",
    "extraInfo":[
      
    ],
    "author":"Dark Archon"
  },
  {
    "id":133,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Strongman",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Science, Athletics, Brawl",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage may improve the strength of the kinetic forces used by the subject's body. This improves the subject’s Strength by Potency. This increase affects any Advantages or other traits derived from the Attribute’s level. The effects are subtle, though observers can detect subtle hints of changes to balance or strength of the body. Strength cannot be raised above the subject’s maximum (5 for normal human beings).\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"By spending a point of Mana, the mage may raise Strength above the maximum rating for the subject."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":134,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sunstone",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Occult, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"A Disciple of Forces can shape and harden sunlight into solid, three-dimensional forms. Sunstone has Durability 2, and a Weapon Rating/General Armor Rating/Equipment Bonus of 2. Sunstone reflects all forms of light incredibly brightly, appearing to radiate in even dimly lit rooms, but does not actually emit light on its own and provides no illumination. Sunstone counts as real sunlight for all purposes.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster may create a sunstone out of any form of light. This functions as described above, including counting as real sunlight."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":135,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Superstimulus",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Computer, Expression, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"With this spell the mage uses light, sounds and other such stimuli to affect the perceptions and brain processes of the subject, producing a superstimulus powerful enough to override the will of the subject. This does not work on anything without a physical brain, so only humans and animals may be targeted. This cannot give fine mental manipulation but rather floods the target with a very strong stimulus that is hard to shake off or ignore. A raging animal can be made to flee by triggering its instincts to flight, a spider may weave its web in an inadequate environment or a rabbit may approach food despite obvious dangers. Only beings with a physical brain may be affected, and all supernatural creatures are unaffected.\nLast but not least, this spell only shapes stimuli to allow this manipulation to happen (in other words, it only provides the tool) but the mage herself has to do the actual manipulating. This might require a Manipulation + Empathy roll for affecting humans and Manipulation + Animal Ken to affect animals.\n",
    "extraInfo":[
      
    ],
    "author":"Aristarkos"
  },
  {
    "id":136,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Luminescence",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Computer, Expression, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The thaumaturge weaves light into an inanimate object, making it emit light without heat for the Duration. For the light's candescence, use the chart for 'Transform Energy,' with Potency equalling Level.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The light has heat. The degree of heat is also determined by the chart for 'Transform Energy,' but Level equals Potency minus one."
      },
      {
        "title":"+1 Reach",
        "description":"The light is visible only to certain observers, chosen by the caster. The spell's Scale must cover both the subjects to glow and the subjects to see the glow. Without investing Scale, the caster is the only one who can see the glow."
      },
      {
        "title":"Add Life •••",
        "description":"The mage can cast the spell on living subjects, granting bioluminescence. Unwilling subjects Withstand with Stamina."
      },
      {
        "title":"Add Spirit, Death, or Mind •",
        "description":"The light reveals nearby spirits, ghosts, or Goetia that are in Twilight, depending on Arcanum. Entities using concealment powers provoke a Clash of Wills."
      },
      {
        "title":"+1 Reach",
        "description":"The light reveals all ephemeral entities, regardless of Twilight types. Entities using concealment powers provoke a Clash of Wills."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":137,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Exquisite Repository",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Computer, Academics, Expression",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"A thaumaturge hears history in the winds, and writes codices into digital signals. This spell collects and compiles information memorized by or accessible-at-the-moment to the caster into a medium broadly falling under Forces' purview (a computer, a bonfire, a neon sign, a wind chime, etc), instantly building a Repository as per the Building Equipment system (Chronicles of Darkness, etc). It has a +(Potency) equipment bonus, and breaks down after Duration expires. Built-In Penalties do not apply, and the Fragile and Volatile tags are ignored unless the mage includes them.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Anyone accessing the Repository benefits from a variant of the Eidetic Memory Merit (Chronicles of Darkness), gaining a +2 bonus to recall minute pieces of information from the Repository, and a perfect memory over experiences of applying the Repository's information. Once the spell expires, the former effect ceases immediately, and the latter effect gives way to normal degradations of memory."
      },
      {
        "title":"Add Prime ••",
        "description":"The caster may draw Resonance from a ley line or Node and compile it into the Repository. Users' perceptions are thus colored by the Resonance; a cooking recipe Resonant with 'Murder' may feel like a cannibal's poetic memoir, and a case file detailing brutal tortures may feel oddly refreshing when made Resonant with 'Serenity'."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":138,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"With a Fiery Sword",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Weaponry, Crafts, Academics",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"It is said that Powers guard the gates of Aether with True Forms and Fire. This spell infuses the force of the subject’s blows with the heat of divine fire. Divide Potency between Size and Heat. Exposure to the blow counts as exposure to fire of that size and heat. The spell fire's size can be no higher than the size of the weapon, or ammunition,\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The size of the Fire can be greater than the size of the weapon or ammunition."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":139,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Tide of Sorrows",
    "type":[
      {
        "arcana":3,
        "degree":3
      },
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Science, Survival",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"It is said the concept for this rote was conceived by an Arrow in a moment of pure awe and inspiration, an epiphany derived from a treacherous journey through the Ocean of Fragments. It would become feared as a tool the Ungula Draconis wields with one objective alone: the absolute annihilation of their opponents.\nThis creates acid rain in an area with suitable atmospheric conditions. This comes into effect within minutes and imposes the Heavy Rain tilt with [Potency] severity, up to a maximum of 4. The water and acid are perfected, making them able to instantly corrode and dissolve anything in the area not made of Perfected materials. Flesh and bone melt before terrified targets, marvels of engineering are unmade and the very landscape is reduced to nothing more than a crater filled with a highly combustible sludge.\nWhen these waters of oblivions have done their work, it is customary to call a lightning strike upon them. This sets off the perfected acid, creating an explosion of [Potency] intensity. It's a final honor playing on the Orders's symbolism as the hand that grasps lightning, a funeral pyre sending off their opponents.\nWhen the duration ends, the acid rain loses its perfected state and the downpour stops. Due to the enormous potential for collateral damage, additional spellwork is usually done to isolate the affected area or guide the waters.\nIt is said entire spirit courts have been swept by them, armies of the walking dead silenced and factories of techno horrors destroyed. Therefore, to be granted this rote is a symbol of the Order's great trust in the mage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This can be used in an area with no suitable atmospheric conditions."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":140,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Promiscuous Flame",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Angels of flame are by nature selective in choosing the objects of their affection, hence the Fallen World property of \"flammability.\" Paper and cloth easily seduce such angels, while materials such as concrete and steel incite no passion. By means of this spell, a Thaumaturge commands licentiousness of one of the Burning Host: it will wantonly consume any material it touches.\nThis spell forces a volume of fire to use any material as fuel regardless of the material's natural combustibility. Subsequent spells may modify the size and intensity of the flame, but this enhancement operates only within this spell's Scale. At the end of the spell's Duration, the flame no longer burns non-flammable material and may extinguish or diminish. The fire may naturally spread to other flammable materials within the Scale of the spell (and onward from there).\nMaterials consumed by flame enhanced with this spell leave behind no material by-products such as ash or gasses, as those too are consumed by the flame.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The flame may also burn in the absence of oxygen or other appropriate gasses (e.g. hydrogen)."
      },
      {
        "title":"Note",
        "description":"In case it's not obvious, fire that burns anything and everything is super dangerous. To avoid killing yourself with this spell, cast it on an area at range and then dip a source of flame into the affected area. Barring the use of another spell like Control Fire, the flame will rapidly spread through whatever matter occupies that space (even the air) and start burning it all."
      }
    ],
    "author":"galivet"
  },
  {
    "id":141,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hologram",
    "type":[
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Science, Larceny, Expression",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The Mage weaves ambient light and sound to create a static illusion. The illusion can contain whatever visual and audio elements the Mage can imagine (limited by the spell’s Scale factor), though this spell alone is not sufficient to create Tilts, and the Storyteller may require a Skill roll for particularly complex illusions (for instance, to accurately recreate the interior of a circuit board).\nBy default, the illusion is static (i.e. it will not appear to move, and can only emit a single continuous noise), but so long as the spell remains under the Mage’s control, he may concentrate as an Instant action to “animate” the illusion for a turn, or even completely change it’s nature within the bounds of the spell’s Factors. The illusion’s point of origin may move at a Speed equal to the Size of the Scale Factor plus Potency.\nThe illusions are “real” in the sense that they are formed from actual photons and soundwaves, and the Mage adds the spell’s Potency as a bonus to any rolls made to deceive observers with the illusion.\n",
    "extraInfo":[
      {
        "title":"Add Matter •",
        "description":"The Mage can also add taste or olfactory qualities to the illusion."
      },
      {
        "title":"Add Mind •",
        "description":"The Mage can delegate control of the illusion to his subconsciousness, allowing it to be dynamic, e.g. illusory flames will flicker, a human will appear to breathe. However, the illusion will merely repeat the basic movements specified by the mage, and cannot change in response to its surroundings."
      },
      {
        "title":"+1 Reach",
        "description":"By subtle manipulation of kinetic forces, the illusion acquires a tactile element. When interacted with, it will “feel” real, though it cannot actually exert much appreciable force on anything."
      },
      {
        "title":"+1 Reach and Mind •",
        "description":"The Mage may define the illusion’s behavior in general terms, and it will act and react as appropriate for its environment without any conscious input from the mage."
      }
    ],
    "author":"Scriptorian"
  },
  {
    "id":142,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"From the Ethers",
    "type":[
      {
        "arcana":3,
        "degree":3
      },
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Computers, Occult, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"\"Want to summon a powerful being from the Supernal ? There is an app for that\". This has been the tagline technomancers of the Free Council use to promote this rote. By transmitting summoning rituals via electronic data (often heavily protected by magical passwords), they have made it possible for others to quickly and conveniently access the powers and insights not native to their Watchtower's Supernal Realm.\nBy having the burden of summoning be done by someone else, this allows less experienced mages to engage in more ambitious experiments or execute grander acts against the followers of the Lie.\nVeteran casters see it as another way to gain revenue or major boons for their own projects. Reactions vary for each Order, but Guardians tend to look at this rote in sheer horror of the potential misuse, especially since anyone can use them (changelings, deviants, Sleepwalkers, etc) and it allows the inexperienced to meddle with forces they cannot begin to comprehend. Arrows tend to see it as a potent new addition to their toolkit.\nThis spell is cast upon a mage. The next time they summon a Supernal Entity, they may spend a mana to store the ritual as electronic data within an electronic device in sensory range. It can be used and transmitted like any app, with the device holding it acting as the summoning circle. The burden of entreating the Entity lies entirely with the user, yet the app's interface can be used to end the summoning. If the duration expires before it is used, so does the summoning.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":143,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Burning Corpse",
    "type":[
      {
        "arcana":3,
        "degree":4
      },
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Weaponry, Intimidation",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"This spell turns something dead into scorching flames. Usually used to form dangerous zombies, they will function as normal except they will be burning with a strength equal to the spells Potency. The type of energy the subject is turned into does not have to be fire though.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"When the zombie dies it explodes. The size of the explosion is equal to the spells Potency in yards x2 and the damage is the same as the damage of the energy."
      }
    ],
    "author":"Neros"
  },
  {
    "id":144,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Digital Citizen",
    "type":[
      {
        "arcana":3,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Computer, Intimidation, Persuasion",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"With this spell the mage can temporarily make digital systems aid the subject regardless of the subject's actual skill in interacting with such devices. Systems will try to consider the subject's intentions rather than only following his physical inputs into the system. This spell doesn't actually increase the subject's knowledge, but effectively increases the subject's Computer Skill by Potency up to the normal maximum.\n",
    "extraInfo":[
      {
        "title":"+2 Reach and 1 Mana",
        "description":"By spending a point of Mana, the Computer Skill may be raised above the normal maximum."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":145,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hologram",
    "type":[
      {
        "arcana":3,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Craft, Science, Expression",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage can bend light fields to create holograms. These holograms look like the real thing for all intents and purposes. But make no sound and any attempt to touch them will reveal they are not real but holograms.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The holograms can now also create sound."
      },
      {
        "title":"Add Death 3",
        "description":"If a ghost is included in the spell's subjects, the ghost may control the holograms."
      },
      {
        "title":"Add Mind 3",
        "description":"If a goetia is included in the spell's subjects, the goetia may control the holograms."
      },
      {
        "title":"Add Spirit 3",
        "description":"If a spirit is included in the spell's subjects, the spirit may control the holograms."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":146,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Human Torch",
    "type":[
      {
        "arcana":3,
        "degree":4
      },
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Medicine, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage transmutes his flesh into fire, trusting his knowledge of Forces to keep the heat from burning vulnerable internal organs. Striking an opponent with a limb has an equivalent size (and base damage) of a torch (1), while grappling increases the amount of exposure to that of a bonfire (2). Each level of Potency increases the heat of the flames, to a maximum intensity of +3 (equivalent to molten metal). If the mage grapples an opponent (or is grappled) for two consecutive turns, the opponent ignites and is subject to the Burning Tilt. The mage is immune to heat and fire of equivalent or lesser intensity, including the Burning and Extreme Heat Tilts.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The planes of force shielding you from the harmful effects of your own fire become more refined, protecting your worn armor and other equipment."
      },
      {
        "title":"+1 Reach",
        "description":"You can 'flare' your fiery nimbus into a column of superheated air, with explosive results. As an instant action, you can attack at short range with Dexterity + Athletics, using a weapon modifier equal to Potency. Opponents apply Defense, but the 'spread' of your attack is difficult to avoid, not unlike a shotgun; your roll benefits from 9-Again. Alternatively, you can use the explosive burst for propulsion, making a Strength + Athletics roll to jump and multiplying your successes by Potency."
      }
    ],
    "author":"AmusedByIrony"
  },
  {
    "id":147,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mass Distortion",
    "type":[
      {
        "arcana":3,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Science, Firearms, ?",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Cube-square law is a Lie. Yet Force mage can use this lie to his own advantage by making the mass of his enemy so huge that his own muscles and bones crush under the titanic weight of his body. This spell deals bashing damage equal to its Potency. This damage ignores all kinds of armor, including most Mage armor, with exception of Prime Armor. The damage also depends on a Size of a subject: -1 per unit of Size below 5, +1 per unit of Size above 5. This spell won't work on enemies who do not have any weight, including spirits, ghosts, immaterial Abyssal intruders, etc.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"Mage increases the mass even further, literally collapsing the target with its own weight. The spell deals lethal damage."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":148,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Megacryometeor",
    "type":[
      {
        "arcana":3,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Science, Firearms, Survival",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"With this spell the mage changes the weather to cause a very large chunk of ice, a megacryometeor, to impact the current location of a chosen target. Megacryometeors are an actual real-life phenomenon. They weigh between 0.5 kilograms (1.1 lb.) to several tens of kilograms.\nThe meteor will form in several minutes, the target location is set however. The meteor is thus easily avoided by moving around. Impact by the meteor deals 10 Lethal damage but can be reduced by Armor. When impacting objects the damage is (10 - Durability) in Structure.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"A megacryometeor in Brazil has been recorded to weigh in at more than 50 kilograms (110 lb.) and one in Scotland was reportedly 2 meters (6 ft. 7 in.) in size. Your meteor is now in the same class as these and can now deal even greater damage. 15 instead of 10."
      },
      {
        "title":"Add Fate ••",
        "description":"The impact location is no longer set. And will instead try to impact whatever target the mage desires. A roof or other such cover might still save the target however."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":149,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Illusion",
    "type":[
      {
        "arcana":3,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage manipulates light to create an mirage. The spell’s Scale factor determines the size of the mirage, while the mage can create one illusion per dot of Potency. It is fully sight dependent and static unless the caster actively spends a turn concentrating and controlling it.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The illusion also has audible effects."
      },
      {
        "title":"+1 Reach",
        "description":"The mage can program the illusion to change and move in a predetermined way."
      },
      {
        "title":"+2 Reach, Add Mind •••",
        "description":"Not only is the illusion mobile, but it is capable of reacting to what's happening around it in a basic way the same way something it represents would react. For instance, an illusion of a person might bleed when shot or an illusion of a cat might flee if someone approaches."
      }
    ],
    "author":"Menace"
  },
  {
    "id":150,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Technostress",
    "type":[
      {
        "arcana":3,
        "degree":4
      }
    ],
    "properties":{
      "practice":11,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Computer, Stealth, Subterfuge",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"In the face of ever more ubiquitous recording devices and a greater ability for people to communicate with one another, the Guardians often have a difficult time protecting the Veil. But the Guardians have ways of denying people these advantages, such as this spell.\nWith this spell the mage can temporarily make digital systems oppose the subject. Every system and device that the subject uses will start having problems or otherwise do anything but what the subject requires.\nThis prevents the subject from gaining any aid from electronic devices whatsoever.\n",
    "extraInfo":[
      
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":151,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Transportation",
    "type":[
      {
        "arcana":3,
        "degree":4
      },
      {
        "arcana":5,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Durability",
      "suggestedRoteSkills":"Science, Crafts, Occult",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"By understanding that all matter is but energy bundled together and bound in a physical form, the Mage can turn Matter into a data stream which can then be transmitted to another point to be re-materialized.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage can store the data stream to be used later."
      },
      {
        "title":"+1 Reach",
        "description":"The Mage can use free-floating energy (such as light, heat, etc.) to Replicate objects."
      },
      {
        "title":"+2 Reach",
        "description":"The Mage can now use this spell to Replicate food as per the previous reach option."
      },
      {
        "title":"+3 Reach and Add Life ••••",
        "description":"This Spell can also be used to Transport living beings (Withstood by Stamina)."
      }
    ],
    "author":"HTaiji"
  },
  {
    "id":152,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Neo-Luddite",
    "type":[
      {
        "arcana":3,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Durability",
      "suggestedRoteSkills":"Occult, Science, Survival",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Within the area of the spell the mage destroys all manifestations of electromagnetic forces that are commonly used in technology. Electric currents, wireless transmissions, lasers, etc.\nThis spell is used in a process called 'rewildening' by a Free Council anarcho-primitivist philosophy that supposes that technology is purely an instrument of the Lie and that the future Atlantis will be ruled by magic utterly without technology.\n",
    "extraInfo":[
      {
        "title":"Add Matter •••••",
        "description":"This spell also destroys any manifestation of advanced materials. This could be plastics as well as any alloy more advanced than bronze. Although the specifics depend on the mage casting the spell."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":153,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Social Engineering",
    "type":[
      {
        "arcana":3,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Potency",
      "withstand":"Durability",
      "suggestedRoteSkills":"Politics, Socialize, Subterfuge",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"Social media facilitates the creation and sharing of information and ideas, with this spell the mage creates social networks where none existed before. The mage chooses a target organization or group and fabricates a favorable digital history between the mage and the target. How this history looks is entirely up to the mage, maybe records show the mage has worked there, that he is an important customer or that he has an appointment at three. None of this history actually happened of course and people won't recognize the mage. But so long as the mage pretends it did, and nobody calls his bluff, they may make use of these organizations as the Merits Allies, Contact, Status or even Resources. For each level of Potency, the subject gains one dot in one of the following Merits: Allies, Contacts, Status or Resources.\n",
    "extraInfo":[
      {
        "title":"Drawback",
        "description":"This spell takes advantage of the fact that in large organizations nobody can know everybody. Consequently, this spell cannot be used effectively on smaller groups as they are far more likely to see through your ruse."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":154,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Ølrunar ‘Ale-runes’",
    "type":[
      {
        "arcana":4,
        "degree":1
      }
    ],
    "properties":{
      "practice":2,
      "primaryFactor":"Duration",
      "withstand":"Durability",
      "suggestedRoteSkills":"Craft, Survival, Science",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"This spell allows the mage to exert control over the microorganisms involved in the process of fermentation and thus exert an incredible level of control over the entire process. The name is taken from old poems about runes enchanting ales, but it works on anything that is created by the fermentation of organic materials. This spell must be cast before beginning the process, and as long as it is still active once the process is successfully finished, add this spell’s Potency to the finished product’s die bonus and Availability rating.\n",
    "extraInfo":[
      
    ],
    "author":"EW-Mathias"
  },
  {
    "id":155,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sense Life",
    "type":[
      {
        "arcana":4,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Durability",
      "suggestedRoteSkills":"?",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"The hunter knows the jungle by sight, hearing, and smell. This spell goes further and detects the very feeling of being alive: heartbeat, breathing and desire to be alive. This spell tells the mage, if something alive enters the area of the spell and gives the location of it.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage knows the general well being of the person who enters the area - it's Health and Conditions like Tired, Poisoned, etc."
      },
      {
        "title":"+1 Reach",
        "description":"The mage knows the amount of dots in Physical attributes of the person who is entering the area."
      },
      {
        "title":"+1 Reach",
        "description":"The mage knows the specific amount of dots in one Physical attribute of the person who is entering the area."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":156,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Spider Sense",
    "type":[
      {
        "arcana":4,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Durability",
      "suggestedRoteSkills":"Medicine, Survival, Animal Ken",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"By keeping tap on the adrenalin levels in living beings around her, the subject becomes more aware of those who would bring her harm. The subject gains a bonus to notice dangers like ambushes or someone feeling highly aggressive, equal to the spell's Potency. Logically, this spell won’t alert the subject when the beings aren't alive.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"When a fight breaks out, the subject is able to get that extra advantage. If a fight starts while this spell is active, the subject also gains a bonus to Initiative equal to the spell's Potency."
      }
    ],
    "author":"Neros"
  },
  {
    "id":157,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Stabilize",
    "type":[
      {
        "arcana":4,
        "degree":1
      }
    ],
    "properties":{
      "practice":2,
      "primaryFactor":"Potency",
      "withstand":"Durability",
      "suggestedRoteSkills":"Medicine, Athletics, Survival",
      "undefined":"Intimidation, Larceny, Computer",
      "cost":"1 Mana (optional)"
    },
    "description":"If a character is gravely wounded ,they might undergo surgery under Sleeper care to stabilize (If bleeding out) or simply help them recover. The roll is an extended Medicine + Intelligence roll once per hour with successes equal to boxes of damage (See WoD p.96) Potency of this spell counts as successes already gained on this roll greatly increasing the chances of such an action succeeding within the time limit.\nIt's subtle enough to not be noticed even under direct scrutiny of sleepers, Rates of bleeding from major arteries slow but don't heal, organs continue to function with diminished blood where they might otherwise shut-down.\n",
    "extraInfo":[
      
    ],
    "author":"Pebbles"
  },
  {
    "id":158,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Apparent Juggernaut",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Athletics, Survival",
      "undefined":"Athletics, Brawl, Weaponry",
      "cost":"1 Mana (optional)"
    },
    "description":"The target of this spell appears to be immune to damage. Attacks that strike the target seem like they leave no injury. Enveloping all the senses, someone swinging, and hitting with a sword would feel the impact of the blow and hear the cry of his target, but wouldn't perceive the defender being wounded or impaired by the strike. The actual attack is resolved normally despite the perception of it. Likewise blood splatter from injuries is veiled until either the spell ends or end of scene, whichever happens first. If the blood pools cause Environmental Tilts due to slipperiness, attempts to resist those tilts must be rolled twice, taking the lower of the two rolls. Note perception of clothing and armor is unaffected by this spell.\nThis spell doesn't fool the one actually getting attacked (the target of the attack still knows, and feels, the full damage of the attack).\n",
    "extraInfo":[
      {
        "title":"+1 reach",
        "description":"The caster can now reflexively decide if an attack looks like a miss or a hit."
      },
      {
        "title":"+1 reach",
        "description":"This spell fools even the one getting attacked and they don't suffer Wound Penalties ( the ST should keep his Health Boxes a secret )."
      }
    ],
    "author":"Pale_Crusader"
  },
  {
    "id":159,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Beta Consilium",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Science, Persuasion",
      "undefined":"Athletics, Brawl, Weaponry",
      "cost":"1 Mana (optional)"
    },
    "description":"This spell interferes with the subject’s reproductive system, preventing conception when used prior to copulation. This must be cast before the act to take effect, and the Duration must cover the entirety of the pairing. This may be cast on either participating party; it’s not necessary to cast this on both. When cast over an exceedingly long Duration, this can be used to render a subject effectively infertile - voluntarily or otherwise.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This may be cast anytime in a scene immediately following a pairing, instead of before, though in this case it only functions on a female participant. This inflicts the Nausea condition on the subject, which remains until resolved."
      },
      {
        "title":"+2 Reach",
        "description":"As above, but the subject does not gain the Nausea condition."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":160,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Biological Invisibility",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Stealth, Subterfuge",
      "undefined":"Athletics, Brawl, Weaponry",
      "cost":"1 Mana (optional)"
    },
    "description":"By means of this spell, the mage blinds the eyes, ears, and other senses of living creatures to her subject’s presence: no living creature can perceive her through any of the mundane senses. Supernatural senses employed by living beings provoke a Clash of Wills.\n",
    "extraInfo":[
      
    ],
    "author":"Inodiv"
  },
  {
    "id":161,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Deaden Nerves",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Empathy, Medicine, Occult.",
      "undefined":"Athletics, Brawl, Weaponry",
      "cost":"1 Mana (optional)"
    },
    "description":"Pain travels along the nervous system and into the brain. You can stop the subject from feeling pain in several different ways. One of the most efficient ways is to deaden the nerves and thus stopping the pain at the source. This spell does just that. It deadens the nerve, preventing the impulses from reaching the brain. The subject ignores a dice of wound penalties for each Potency. Also, he suffers a penalty equal to Potency for any physical action from reduced feedback.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Alternatively, the subject may ignore one physical Tilt for each Potency."
      },
      {
        "title":"+1 Reach",
        "description":"The mage can exert greater control over which nerve feedback it numbs, allowing him to either numb pain without losing tactile feedback, or vice versa."
      }
    ],
    "author":"EW-Mathias"
  },
  {
    "id":162,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"False Health",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Empathy, Medicine, Occult.",
      "undefined":"Medicine, Brawl, Subterfuge",
      "cost":"1 Mana (optional)"
    },
    "description":"The subject's health seems to be fine even if it is actually suffering from wounds, diseases or toxins. If it is already suffering from wounds, these seem to cover up and bruises fade. If the subject is bleeding out (Health full of lethal), this power does not prevent the bleeding. ​You may also instead seem hurt, even though you are not.\nIf the subject contains any toxins and is tested with mundane means or with Matter; the toxins can be detected (unless Matter 2 is also used in casting of this Rote), but the subject's body will still seem fine. Supernatural senses that can scan the subject's health triggers a Clash of Will as normal.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject can seem much healthier than it looks. Add the spell's potency as fake bonus Stamina. No bonus is gained from this extra Stamina."
      }
    ],
    "author":"Neros"
  },
  {
    "id":163,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Gladiator's Glare",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Empathy, Medicine, Occult.",
      "undefined":"Athletics, Brawl, Firearms",
      "cost":"1 Mana (optional)"
    },
    "description":"The Potency of this spell is applied as a bonus to your next physical roll provided you aim for a turn sacrificing your defense beforehand. Similar to Perfect Timing but in this case it's tuning your senses (including your kinesthetic sense) alongside your reflexes, adrenaline, and any other subtle bodily processes to the task.\n",
    "extraInfo":[
      
    ],
    "author":"Arduras"
  },
  {
    "id":164,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hibernation",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Science, Persuasion",
      "undefined":"Athletics, Brawl, Firearms",
      "cost":"1 Mana (optional)"
    },
    "description":"This spell causes the living subject to immediately fall into a deep sleep, and prevents them from being roused for the Duration. Subjects that do not normally need to sleep are not affected by this spell. If the target sleeps for long enough to recover willpower under normal rules, then they recover it normally. Supernatural attempts to rouse the subject provoke a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"For each point of Potency, the subject halves the amount of rest they require for all purposes while slumbering, including Willpower recovery. Additionally, the subject may recover multiple points of Willpower while sleeping due to this spell."
      },
      {
        "title":"+1 Reach",
        "description":"This spell may affect living subjects that do not normally require sleep."
      },
      {
        "title":"+2 Reach",
        "description":"The subject does not require food or water, or any other sustenance, while hibernating."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":165,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Invisible Fence",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Animal Ken, Survival, Intimidation",
      "undefined":"Athletics, Brawl, Firearms",
      "cost":"1 Mana (optional)"
    },
    "description":"You can make an area or perimeter feel unwelcome on a primal level. The instincts flare and the need to flee overcomes the desire to progress. Living creatures can’t enter the area, or cross a boundary, affected by this spell, if they don’t on a Composure + Supernatural Tolerance roll penalized by the spell's Potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"A failed check imposes the Spooked Condition on the creature."
      },
      {
        "title":"Add Fate •",
        "description":"The mage can select a number of subjects, based on scale, that may pass unhindered."
      }
    ],
    "author":"Yelesom"
  },
  {
    "id":166,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Predator’s Cloak",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Science, Stealth, Streetwise",
      "undefined":"Athletics, Brawl, Firearms",
      "cost":"1 Mana (optional)"
    },
    "description":"The best way to move among the Sleeping masses is to not be seen at all. The subject is shrouded from being noticed by living beings and Life magic. Any supernatural effect that would detect her provokes a Clash of Wills.\nThis spell does not prevent those around her from noticing the effects of the subject’s passing, like speaking, stepping on grass, etc. Which in the case of Sleepers, could trigger Dissonance.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The target of the spell leaves no scent trail."
      }
    ],
    "author":"Neros"
  },
  {
    "id":167,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Transplant",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Animal Ken, Survival",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"Regrowing lost limbs and organs is moderately difficult with Magic but with the advent of modern transplantology it wasn't long till Mages found an easier way. This spell allows to transplant a part of a body from one person to another. The magic used in the spell means that unlike mundane transplants you don't have to worry about rejection, immunosuppressants or rehab, the 'new' part is fully functional from the get go. Parts must be taken from still living subjects.\n",
    "extraInfo":[
      {
        "title":"+ 1 Reach",
        "description":"Parts can be taken from a recently dead person."
      },
      {
        "title":"+ 2 Reach",
        "description":"Parts might come from a different species, for instance the Mage can implant a predator’s claw in place of the subject's hand. For specific effects this might grant, check the spell 'Transform Life' (MtAw Core pg.150)."
      }
    ],
    "author":"Menace"
  },
  {
    "id":168,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Warden of Life",
    "type":[
      {
        "arcana":4,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Academics, Brawl, Expression",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"The body isn’t just meat and bones; it is a vessel for the soul. With this spell a mage can protect the subject’s living pattern, or the pattern of living beings in the area, from being tampered with by the Life Arcana. Any attempt to alter the subject’s living pattern must succeed at a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Magic and powers from other supernatural beings that would alter the living pattern of the subject are likewise affected."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may specify a Key that allows the subject's pattern to be altered."
      },
      {
        "title":"+2 Reach",
        "description":"The protection afforded by this spell extends to physical attacks from living beings, where the attacker suffers the potency of the spell as a penalty. This protection doesn't work if inanimate objects are used, like swords, clubs, ect."
      }
    ],
    "author":"Neros"
  },
  {
    "id":169,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Addictive Fluids",
    "type":[
      {
        "arcana":4,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Survival, Persuasion",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage turns a bodily fluid (e.g. saliva, blood) into an extremely addictive substance. When another subject consumes the substance, they risk getting addicted to it. Only bodily fluids enchanted with this spell will quell the subject's needs.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"In Social Maneuvering the source of the enchanted fluid will automatically remove Potency doors against someone addicted to her."
      }
    ],
    "author":"Flinty, in 'Flintys Homebrew Hub 2e' "
  },
  {
    "id":170,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Analgesia",
    "type":[
      {
        "arcana":4,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Survival, Empathy",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"The caster enhances the rewiring of the subject’s nervous system, rendering them unable to feel pain. The subject ignores all wound penalties, and ignores all other effects of pain. Supernatural attempts to inflict pain directly provoke a Clash of Wills.\n",
    "extraInfo":[
      
    ],
    "author":"Inodiv"
  },
  {
    "id":171,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Battle Body",
    "type":[
      {
        "arcana":4,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Athletics, Intimidation",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"The subject’s body becomes better at withstanding attempts to hamper or harm its functionality. Attempts to inflict most physical Tilts must overcome the usual resistance (usually Stamina) + the spell’s Potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject becomes more resistant to cruder attempts to harm it. Add the spell's Potency to its Health."
      },
      {
        "title":"+2 Reach",
        "description":"The subject’s senses and reflexes become enhanced to such a degree that it allows them to land precise blows and react to opportunities. It gains a dice bonus to Brawl rolls equal to the spells Potency. This is not a weapon bonus."
      }
    ],
    "author":"Neros"
  },
  {
    "id":172,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Blunt Blessing",
    "type":[
      {
        "arcana":4,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"?",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"Gain Potency as temporary health for the duration of the spell. Not the same as granting attribute dots or anything drastic, just increasing a trait for a while that might buy you some precious time between you and the great beyond. Likely requires 1 reach and 1 mana to even use since your health is by nature at its 'cap'.\n",
    "extraInfo":[
      
    ],
    "author":"Arduras"
  },
  {
    "id":173,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Channel Vitae",
    "type":[
      {
        "arcana":4,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure (or Resistance for Strix)",
      "suggestedRoteSkills":"Intimidation, Occult, Survival",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"This spell allows the mage to draw Vitae into her Pattern from a collection of Vitae (such as Vitae infused blood or shadow), or from her Pattern to a vampire, Strix, or suitable receptacle. The mage may transfer an amount of Vitae equal to the spell’s Potency. However, she cannot channel more Vitae per turn than her Gnosis-derived Mana per turn rate.\nVitae stored within the mage’s Pattern remains even after the Duration expires; however, she can only hold a combined amount of Mana and Vitae equal to her Gnosis-derived maximum Mana.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may ignore her Mana per turn limit, channeling as much Vitae as she desires as an instant action."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may siphon Vitae directly from a vampire or Strix, though they may Withstand the spell with Stamina or Resistance respectively. The Vitae channeled comes in the form it is bound in; blood for vampires and smoke-like shadow matter for Strix, and as such cannot be directly drawn into the mage's Pattern without additional Potency or a second application of this spell."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may spend Vitae to heal herself or another living subject of two points of bashing or one point of lethal per Vitae."
      }
    ],
    "author":"Tessie"
  },
  {
    "id":174,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Channel Vitae II",
    "type":[
      {
        "arcana":4,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Stamina (or Resistance)",
      "suggestedRoteSkills":"Intimidation, Occult, Survival",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"The mage is able to channel Vitae between herself and vampires, strix, ghouls, other living targets, or inanimate receptacles.The spell allows the mage to move a quantity of Vitae up to the spell's Potency between one or more vessels she can touch, including herself, vampires, ghouls, strix, other living targets, or physical containers. Transferring the vitae into a subject forces the effects of Vitae consumption upon it: vampires gain more Vitae, living targets may become ghouls, and so forth. If the Vitae is transferred into a container, it maintains its nature as Vitae for the Duration of the spell before reverting to normal blood.\nThe mage may channel a number of points of Vitae per turn equal to her Gnosis-derived Mana per turn limit.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may channel as much Vitae as she wants in one turn, ignoring her Gnosis-derived Mana per turn limit."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"When the Vitae is transferred into a subject, the effects of the Vitae are suppressed for the Duration of the spell. This effect suppresses the effects of Vitae for one subject, and can be applied multiple times."
      }
    ],
    "author":"projectmoon "
  },
  {
    "id":175,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Feral Grit",
    "type":[
      {
        "arcana":4,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina (or Resistance)",
      "suggestedRoteSkills":"Athletics, Brawl, Survival",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"Normally your defense is reduced by 1 per attack after the first. Add the potency of this spell to the number of attacks before you suffer a penalty as you manipulate your reflexes and senses to respond with the speed of an animal, impulsive and unhindered by slow, rational assessment.\n",
    "extraInfo":[
      
    ],
    "author":"Arduras"
  },
  {
    "id":176,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Societal Adaptation",
    "type":[
      {
        "arcana":4,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Stamina (or Resistance)",
      "suggestedRoteSkills":"Medicine, Socialize, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"All of human interaction is underwritten by a constant stream of instinctual responses and unconscious ticks - our society is as much a product of our biology as it is a product of the mind. A Disciple of Life can enhance the social instincts that drive her subject, making her keenly (and consciously) aware of the subtle body language that drives human interaction. This spell provides its subject a bonus on all social rolls to detect a living human’s intentions equal to Potency, for a number of rolls equal to Potency. This also applies to rolls to detect lies.\n",
    "extraInfo":[
      
    ],
    "author":"Inodiv"
  },
  {
    "id":177,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Stop the Biological Clock",
    "type":[
      {
        "arcana":4,
        "degree":3
      },
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Stamina (or Resistance)",
      "suggestedRoteSkills":"Medicine, Occult, Science",
      "undefined":"Duration",
      "cost":"1 Mana (optional)"
    },
    "description":"The Mage alters the functionality of the target's biological patterning, ensuring that while all normal biological functions are performed as normal, cells replicate perfectly, avoiding the ravaging effects of time, and ensuring that the biological aging process is halted. The practical upshot of this is that while the Mage's body otherwise functions exactly as it normally would, she does not biologically age. This will not halt the effects of cancers, diseases, poisons or other maladies of the form, nor will it stop the psychological effects of aging, however it will work to counteract certain mental afflictions with a physical aspect, such as dementia.\nThis spell is a quick and easy, albeit risky way to embrace the path of Lichdom. Its use is not considered quite as inherently threatening as the other forms of Lichdom, due to their inherently inhuman nature. However it is seen as something of a gateway-spell to those later paths, as the Mage grows older and starts to obsess over the threat of untimely death. As such, while some merely use it to enhance their quality of life for as long as reasonable, you can never truly trust them not to start body snatching or resorting to more permanent, and less dispellable methods. What's more, should the spell be dispelled, the cumulative weight of all of those years of time come crashing down upon the Mage.\nFor this reason, some Mage have developed their own Legacies based on this spell, to avoid such eventualities. Such Mages are almost uniformly declared as Liches. This does not however stop them from accumulating small cults of worshippers, enchanted by the possibility of eternal life, willing to bind themselves forever to the desires of their Master, only to later realize that he could render them crippled or dead with but a thought, as he removes his blessing.\n",
    "extraInfo":[
      
    ]
  },
  {
    "id":178,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Boneitis",
    "type":[
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Athletics, Intimidation",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"By causing muscles to tug and tense as hard as they can in all sorts of directions, you can get the human body to crush its own bones in a twisted dance of snapping and popping. This applies the Arm Wrack or Leg Wrack Conditions to your subject at intervals determined by your Gnosis-based casting time. Additionally it causes one point of Lethal damage each time a Condition should be applied.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The bones get in on the action and start to tear at other body tissues with their own volition. This spell does an additional point of Lethal each time a Condition should be applied."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For one point of Mana, you make the effects of this spell supernaturally contagious. Others within the vicinity of the subject when a Condition should be applied resist infection with Stamina + Supernatural Tolerance vs the spell's Potency(?). An Exceptional Success on a roll to resist grants immunity for the remaining Duration of the spell."
      }
    ],
    "author":"Yelesom"
  },
  {
    "id":179,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Gestalt form",
    "type":[
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Occult, Science",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"This spell allows two or more living beings to fuse into one, creating a fused life form. The minds of the subjects fuse together forming a new merged personality with access to all the memories, knowledge and Skills of the subjects. The mage may determine which Attributes and appropriate Merits the being inherits. No Attribute can be higher than the highest level of that Attribute found among the subjects.\nIf the subjects are all of the same supernatural template, then this template remains preserved after the fusion. The mage must determine what abilities the fused being has, again, no ability can be higher than the highest among the subjects. If the subjects are of differing templates then the mage determines which one template the fused being becomes, only the abilities specific to that template can be inherited.\nA mage can only have so many spells active, when fusing mages determine which spells will be under the new entity's spell control.\nOnce the Duration ends the subjects return to normal and any damage sustained is split equally among all subjects regardless of how much damage they had before. Willpower values are unchanged from their pre-merger values.\nMemories of the time spent fused will seem distant and hazy, dreamlike, but the subjects will remember the experience to some degree.\n",
    "extraInfo":[
      {
        "title":"Add Mind 4 ••••",
        "description":"The mage may determine to which of the subjects' memories, knowledge and Skills the fused being has access to."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":180,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Vampirism",
    "type":[
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Stamina (or Resistance)",
      "suggestedRoteSkills":"Brawl, Intimidation, Persuasion",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The mage patterns the blood of a living subject into vampiric Vitae and draws it from the victim.The Vitae drawn is usually in the form of blood oozing from wounds, but can be a more exotic substance, depending on the method the mage uses to 'feed' on the subject. This spell generates one Vitae per Potency and deals 1 Lethal damage per Potency to the subject. The Vitae created is treated as if it came from the subject.\nThe Vitae remains supernatural until the Duration of the spell expires, at which point it turns back into regular substance, unless it has been consumed. The use of this spell is an affront to the vampiric Curse, and damns the mage: the mage takes 1 resistant Lethal damage per Potency of the spell.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may explicitly specify the properties of the created Vitae, such as quality, addictiveness, and whether or not the Vitae can form blood bonds. Any effects dependent on another subject (such as blood bonds) require that subject to be included as a target in the spell."
      },
      {
        "title":"+1 Reach",
        "description":"The created Vitae violates its own nature. This effect allows the mage to specify paradoxical properties, such as animal-quality Vitae of human origin, or allows the Vitae to form a blood bond with a living target (including the mage themselves)."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may somewhat bypass the debt of the Curse. The damage inflicted to the mage is Bashing, instead of Lethal. Additionally, for one Mana, the damage inflicted to the mage is non-Resistant."
      },
      {
        "title":"Add Death, Mind, or Spirit ••••",
        "description":"The Mage may draw from ghosts (Death), goetia (mind), or spirits (Spirit)."
      },
      {
        "title":"Add Prime ••••",
        "description":"The Mage can convert the Vitae into tass in a form of her choosing. The tass functions both as Vitae and Mana, and if ingestible, can be consumed by Vampires. The tass created has the resonance keyword of 'vampirism'."
      }
    ],
    "author":"projectmoon"
  },
  {
    "id":181,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Vitae Drain",
    "type":[
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":11,
      "primaryFactor":"Potency",
      "withstand":"Stamina (or Resistance)",
      "suggestedRoteSkills":"Brawl, Intimidation, Persuasion",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The mage drains the very life energies that sustain a living Pattern. This involves rending that Pattern, causing horribly painful internal wounds and nonspecific tissue damage. This is an attack spell, inflicting lethal damage equal to its Potency. In addition the spell generates an amount of Vitae equal to the damage inflicted, drawing it into her Pattern, however, she can only hold a combined amount of Mana and Vitae equal to her Gnosis-derived maximum Mana.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage draws Vitae from the target in physical form. The damage inflicted is due to blood loss as the victim hemorrhages Vitae-filled blood that seeps from a wound or orifice of the mage's choice, instead of being drawn into the mage's Pattern. Can only be used on living victims."
      },
      {
        "title":"+1 Reach and add Death ••",
        "description":"The mage draws Vitae from the target in shadow form. The damage inflicted causes internal wounds and unspecified tissue damage as Vitae-filled shadowy smoke flows from a wound or orifice of the mage's choice, instead of being drawn into the mage's Pattern. Can only be used on living victims."
      },
      {
        "title":"+1 Reach",
        "description":"By carefully unraveling the victim's Pattern the mage causes two points of bashing damage per Potency instead of lethal."
      },
      {
        "title":"Add Arcanum ••••",
        "description":"the mage can cast this spell on ephemeral, supernal or nonliving beings under the Arcanum's purview. For example Death for ghosts, vampires and Strix, Mind for goetia, Spirit for spirits and werewolves, and Prime for supernal entities."
      }
    ],
    "author":"Tessie"
  },
  {
    "id":182,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Wrack",
    "type":[
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Athletics, Intimidation",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"By causing muscles to tug and tense as hard as they can in all sorts of directions, you can get the human body to crush its own bones in a twisted dance of snapping and popping. This applies the Arm Wrack or Leg Wrack Tilts to your subject at intervals determined by your Gnosis-based casting time. Additionally it causes one point of Lethal damage each interval.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The bones get in on the action and start to tear at other body tissues with their own volition. This spell does an extra point of Lethal each interval."
      },
      {
        "title":"+1 Reach",
        "description":"Treat the casting mage's Gnosis as 2 higher for the purposes of ritual interval for this spell."
      }
    ],
    "author":"Yelesom"
  },
  {
    "id":183,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Theriaca Magica",
    "type":[
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Medicine, Athletics, Intimidation",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"An ecstatic can release the potential of an animal body's magic into the Fallen World. This spell converts an animal body part freshly separated for no longer than a few minutes into a minor magical item, instantly building a Mystical Equipment as per the Building Equipment system (Chronicles of Darkness, etc). It has a +(Potency) equipment bonus, and breaks down after Duration expires. Built-In Penalties do not apply, and the Fragile and Volatile tags are ignored unless the mage includes them.\nMystical Equipment conjured by this spell must have a symbolic link between its material and its function; a bezoar stone could offer a +1 to resist poisons and diseases, a fox's tail could offer a +2 to Social rolls to sexually seduce someone, and so on. Mystical Equipment may have non-dice effects, such as a turtle's shell helping resist infirmity, but ideally they should not approximate actual supernatural powers (especially Enhanced Items, Imbued Items, etc).\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster may enchant a body part while it is still on the animal's living body. Depending on the effect, anyone in the animal's vicinity could benefit from the dice bonus, or they might have to interact with the animal in some way to do so. Alternatively, the caster can draw symbolic power from the entire animal itself; a white-furred dog could help banishing ghosts, a black cat aids sabotage and slipping of poisons, and so on."
      },
      {
        "title":"Add Spirit •••",
        "description":"The Mystical Equipment becomes a channel for spiritual powers. Any spirit can benefit from its dice bonus when using Influences, Manifestations, and Numina. It also offers a +1 tool Yantra to any Spirit spells that target it."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":184,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Craft Immortal Jade",
    "type":[
      {
        "arcana":4,
        "degree":4
      },
      {
        "arcana":7,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Medicine, Occult",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Carrying resources as one explores the Tapestry can be cumbersome. Tass can take just about any form, not always a portable or discrete one. Meanwhile, mana batteries can take a long time to replenish. In order to address this issue and inspired by tales of spirit stones that house potent Chi, this rote was developed by a cabal of Nameless students of the Dao of Alchemy.\nWhen cast upon tass or a living being, it transforms them into a crystalline form halfway between the platonic ideals of a living being and a mana battery. It does not require food, water, air or rest. But it can still use normal healing time to \"self repair\". The user can spend an action to scour their Pattern once a day, transferring the mana either to themselves or the battery, with any excess being lost. They also have a mana capacity of [Potency]. Pigs, rats and fishes made for popular materials.\nIt would only be later that a Left Handed mage would discover one of its more distressing properties. When transforming a mage, their mana capacity is added to the battery. Furthermore, they can be scoured as many times as the target's Gnosis allows.\nTargets are still aware of the world around them. Normally this isn't an issue, but mages are still capable of casting while transformed. Because of this, additional spellwork is normally employed to \"alchemically refine the will into a suitable form\". A few Banishers have been known to use them to build up their arsenal of weapons and defenses.\nSome whisper that this rote was developed in parallel in Europe. Mysterium scholars suspect that the famous Philosopher's Stone of Nicholas Flamel might be an immortal jade, some even accuse Paris' mythical immortal of being a thaumavoric lich that remains active to this day.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The immortal jade automatically scours itself whenever its reservoirs are not full, replenishing the battery."
      },
      {
        "title":"+1 Reach",
        "description":"Rather than losing the extra mana, it instead flows into any mage holding it at the time."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":185,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Create Vitae",
    "type":[
      {
        "arcana":4,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Potency",
      "withstand":"Blood Potency, Stamina, or Resistance (depending on target)",
      "suggestedRoteSkills":"Empathy, Medicine, Occult",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The spell creates an amount of pure, inert Vitae equal to Potency in the subject, which may be a vampire, strix, living target, or container. If created outside of an animate subject, the mage chooses the form the Vitae takes (and must have a way to contain the resulting Vitae), and the spell is Withstood by the mage's own Stamina.\nVitae created by this spell is not addictive. Furthermore, the vitae created by this spell can sustain a vampire of any Blood Potency. The Vitae created by this spell becomes a normal substance after the Duration expires, unless it has been consumed. As always, the vampiric curse takes its debt: the mage suffers 1 resistant Lethal damage per point of Potency of the spell.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may explicitly specify the properties of the created Vitae, such as quality. With the proper knowledge, the mage can duplicate Vitae that originates from a specific person or vampire."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may somewhat bypass the debt of the Curse. The damage inflicted to the mage is Bashing, instead of Lethal."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The mage may bypass the debt of the Curse by substituting Mana for suffering. The damage inflicted to the mage is non-Resistant."
      },
      {
        "title":"Add Prime •••••",
        "description":"The Mage can create the Vitae as tass in a form of her choosing. The tass functions both as Vitae and Mana, and if ingestible, can be consumed by Vampires. The tass created has the resonance keyword of 'vampirism.'"
      }
    ],
    "author":"projectmoon"
  },
  {
    "id":186,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Vitae Fountain",
    "type":[
      {
        "arcana":4,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Potency",
      "withstand":"Blood Potency, Stamina, or Resistance (depending on target)",
      "suggestedRoteSkills":"Empathy, Medicine, Occult",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"This spell generates a quantity of Vitae equal to the spell’s Potency within the subject’s Pattern.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This spell generates the Vitae in physical form. Instead of forming inside the subject's Pattern the Vitae forms a pool of thick blood. When the spell’s Duration expires, so does the created Vitae."
      },
      {
        "title":"+1 Reach and add Death ••",
        "description":"This spell generates the Vitae in shadow form. Instead of forming inside the subject's Pattern the Vitae forms a cloud of shadowy smoke. When the spell’s Duration expires, so does the created Vitae."
      }
    ],
    "author":"Tessie"
  },
  {
    "id":187,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mana Vine",
    "type":[
      {
        "arcana":4,
        "degree":5
      },
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Blood Potency, Stamina, or Resistance (depending on target)",
      "suggestedRoteSkills":"Medicine, Science, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Highly valued for producing wine, pastries, jams, or eating out of hand, the cultivation of this plant is a large source of income in more rural Consilium. It's important enough that most are willing to turn a blind eye to the troublesome nature of the plant. The spell creates an infestation of thick thorny vines which grow outwards until they've completely encircled a Hallow. Afterwards the plant absorbs Potency points of Mana per day up to the limits of the Hallow. The plant produces a single fleshy fist sized fruit pod per day which can be consumed to restore mana equivalent to the amount absorbed. Harvesting the fruit will most likely require additional magic as the plant will violently defend itself from harvest or destruction. If the Hallow goes inactive the plant will wither and die.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The plant is fertile and will spread its seeds to other nearby Hallows."
      },
      {
        "title":"+2 Reach",
        "description":"The spell is Lasting."
      }
    ],
    "author":"Enlightened_Milkman"
  },
  {
    "id":188,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cultivate Lotus of the Palace",
    "type":[
      {
        "arcana":4,
        "degree":5
      },
      {
        "arcana":7,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Blood Potency, Stamina, or Resistance (depending on target)",
      "suggestedRoteSkills":"Expression, Medicine, Science",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"A spell that creates a flower of singular beauty that only grows in Hallows and ley lines, feeding on the energy, concentrating it and shining with an inner light perceivable only by Mage Sight. They are resilient like olive trees, reproduce quickly like fungus, grow expediently like rats and are edible tass. Potency can be allocated on a one to one basis to increase the number each spawn per day or the amount of mana each is worth. It takes a day after they are planted before they store enough energy to act as tass, attaining their full capacity (they are treated as zero mana tass once created).\nIt is also highly nutritious, each providing the nourishment of a full meal. Their flavor is so exquisite and the consumption gives such a feeling of wellness that it grants the Addicted condition to any who partake, even when no other physically debilitating effect happens.\nThis rote was first invented by the Geryon Ministry, who cultivated entire gardens of \"the lotuses from the Nemesis' palace\" to trap Sleepers and Awakened alike in cages of content ignorance. This lotus eater cattle would be all too happy to be harvested by vampires or experimented upon by the Pylons.\nEven those who were rescued tended to seek out the Seers once more, betraying anyone or sacrificing anything to experience its wonders once more.\nThus did the Arrow and Guardians seal this rote in the Censorea, despite it containing no magical taint. But a few abandoned Sanctums of the fallen Ministry may hold a Grimmoire containing it or the journal notes of past Seers may recall it. Maybe the tides of Pancryptia are waiting for just the right time, to part before a devotee of the Nemesis with something to prove. Some whisper one already unearthed it, with the Seer quietly setting up a bakery and using lotus paste to create its famous mooncakes.\n",
    "extraInfo":[
      {
        "title":"Add Mind •••••",
        "description":"it also produces a powerful toxin that grants blissful dreams, freed from maladies such as Nightmares or Insomnia. However, the caster can specify up to [Potency] types of memories that are wiped out, once per flower consumed, the next time the eater sleeps (the toxin's severity is equal to Potency)."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":189,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sense Pressure",
    "type":[
      {
        "arcana":5,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Blood Potency, Stamina, or Resistance (depending on target)",
      "suggestedRoteSkills":"?",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"This spell is different from others in regard that it isn't cast on an Area, but on the Structure of the target object; the mage can feel pressure on structure material and detect location of creatures who move inside of it.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage knows Size and approximate mass of being who is entering the area."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":190,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Steel Windows",
    "type":[
      {
        "arcana":5,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Blood Potency, Stamina, or Resistance (depending on target)",
      "suggestedRoteSkills":"Science, Subterfuge, Larceny",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"Even the thickest wall of steel cannot hinder the sight of an alchemist. For the spell's Duration, its subject may see through a solid object within his range of vision as if it were transparent by focusing his sight upon it. If the object is multi-layered, like a matryoshka doll or a building with many walls and rooms, the subject can only see through the outermost layer on his end. Trying to see through layers of particularly intricate objects, as some machines are, may require a Wits + relevant Skill roll. As the spell does not increase its subject's visual field, sufficiently large obstacles such as a mountain may only appear transparent up to a certain point.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject may see through multiple layers, each layer beyond the first requiring a turn of concentration. This still does not allow her to see entirely past huge obstacles beyond his normal sight."
      },
      {
        "title":"+1 Reach and add Life •",
        "description":"The spell can be used to see through living creatures, revealing their insides. He may adjust how much he can see through, choosing to examine someone's muscles or analyze her organs. Understanding what he is seeing may require an Intelligence + Medicine roll, while searching for specific organs or tissues may require a Wits + Medicine roll."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":191,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Acolyte's Cheat",
    "type":[
      {
        "arcana":5,
        "degree":1
      }
    ],
    "properties":{
      "practice":2,
      "primaryFactor":"Duration",
      "withstand":"Durability",
      "suggestedRoteSkills":"Larceny, Science, Streetwise",
      "undefined":"Potency",
      "cost":"1 mana"
    },
    "description":"Every order has some variant of this spell, but it sees the most use by the butler-apprentices of the Silver Ladder. Calling down the Supernal Ideals of cleanliness and polish, this spell causes the subject to become conceptually \"clean\"; dirt sloughs off, grease and oil congeals and falls away, scuffed surfaces polish to a fresh shine. This can be used on individuals, but only removes matter that is considered \"foreign\". This spell is resisted by the durability of the \"foreign\" matter, which will rarely rise above zero without outside interference.\n",
    "extraInfo":[
      {
        "title":"Add Life •",
        "description":"living individuals can be affected as if they had bathed thoroughly, scraping away sweat, purging plaque, and ushering out unpleasant odors."
      }
    ],
    "author":"Cauthon"
  },
  {
    "id":192,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Bath Time",
    "type":[
      {
        "arcana":5,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Durability",
      "suggestedRoteSkills":"Medicine, Occult, Survival",
      "undefined":"Potency",
      "cost":"1 mana"
    },
    "description":"Exactly what it says on the tin. This spell forces all dirt, grime, etc. on the subject's body to fall away. The spell makes no attempt to distinguish, for example, makeup from dried mud: if it's not alive, it goes away. Note that hair and skin are part of a living being's Pattern, and thus unaffected. It is recommended the subject be unclad unless a need to visit a laundry should also be desirable. The target is now as clean as if she had just taken a very thorough shower and brushed her teeth completely. Larger-than-human targets require increased Size. The resulting clean state lasts as long as it normally would.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell can be used to selectively remove or not remove particular things."
      }
    ],
    "author":"LadyLens"
  },
  {
    "id":193,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Clothes Make the Man",
    "type":[
      {
        "arcana":5,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Crafts, Stealth, Subterfuge",
      "undefined":"Potency",
      "cost":"1 mana"
    },
    "description":"All tools carry within them the symbols of their purpose, and all clothing carries with it the symbolic purpose of expressing a certain persona. By drawing upon that symbology and bringing it to the forefront, the Mage can let their clothing speak for them. So long as the spell’s Potency exceeds the Composure of any witness, any wearer of the subject article/suit of clothing cannot be identified by any others in a persona that does not naturally accommodate the subject article/suit.\nIn such a way, while a person in a police officer’s uniform may act completely out of character for a police officer, any witnesses who do not Withstand the spell will merely see the subject as being horribly unprofessional, rather than being duplicitous about his identity. This is not flawless however, as symbolism can be interpreted in different ways. Where one law-abiding citizen might see a police officer as a symbol of benevolent authority, another might see them as a corrupt pillar of a tyrannical organization. In addition, at its base, this does not provide any benefit to social interaction beyond that which would be provided by acknowledgement of the individual’s identity.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This spell can accommodate for ‘imperfections’ in the appearance of a suit of clothing. The dirty, unwashed nature of a subject’s suit may be disregarded, or the ‘fake’ police uniform of a kissogram or entertainer might be looked past by any witness who cannot Withstand the spell's Potency."
      },
      {
        "title":"+1 Reach",
        "description":"When undertaking a social action against individuals who have not seen past the symbology of the subject’s clothing, the subject gains a bonus to all social tests in keeping with that symbolism equal to the spell’s Potency (based on how much it exceeds their Composure)."
      },
      {
        "title":"+2 Reach",
        "description":"When casting the spell, the caster may specify a single aspect of the subject’s symbolism to enhance above all others. In this way, rather than being seen as an authority figure, or as a suspicious entity, the wearer of the classic 90s black suit and shades combo might be ignored as merely another faceless drone."
      }
    ],
    "author":"HerbertIsBestBert"
  },
  {
    "id":194,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cool Water",
    "type":[
      {
        "arcana":5,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Science, Survival",
      "undefined":"Potency",
      "cost":"1 mana"
    },
    "description":"Water is everywhere, often in places one would not expect. This spell draws water from the very air, condensing vapor into a usable liquid. Each point of Potency yields enough water for one person for one day, assuming it's kept in a suitable container. This effect is Lasting.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage can draw water from the extremely dry air of cold deserts, such as glaciers and the polar regions. Contrary to popular belief, hot desert air typically holds a very great deal of water."
      }
    ],
    "author":"Lady Lens"
  },
  {
    "id":195,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Copying",
    "type":[
      {
        "arcana":5,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Crafts, Expression, Occult",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"By means of this spell, the mage can copy the item he is seeing with materials that are suitable to its composition. Many Mysterium apprentices make copies of precious books from just stashes of ink and paper by this spell.\nWhen the spell’s Duration expires, the original items return to their original form.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"For one point of Mana, the spell’s Duration is Lasting."
      },
      {
        "title":"+1 Reach",
        "description":"For copying complex mechanisms."
      },
      {
        "title":"Add Prime •",
        "description":"Mage can copy also any Rote found in the original Grimoire, like with ‘Scribe Grimoire’ Prime • spell."
      }
    ],
    "author":"wyrdhamster"
  },
  {
    "id":196,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Grease or Glue",
    "type":[
      {
        "arcana":5,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Scale",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Crafts, Brawl, Survival",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The easy way to turn the tide of physical combat and make those damn wheels spin, those spells changes the properties of matter it cast upon, causing the following Environmental Tilts:\nGrease creates Ice Tilt in the area it's cast upon.\nGlue creates Glue Tilt in the Area it’s cast upon: -4 to Speed, Dramatic Failure causes Immobilized Condition.\n",
    "extraInfo":[
      
    ]
  },
  {
    "id":197,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Defy Artifice",
    "type":[
      {
        "arcana":5,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Potency",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Brawl, Survival, Athletics",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"All worked Matter can change back to dust, and humanity's beloved tools are no exception. Bullets are crunched into scrap metal, swords fail to penetrate skin, and even random non-weapon objects lose their strength. The subject is immune to any bashing damage from man-made objects, while downgrading lethal damage equal to Potency to bashing. Aggravated damage is unaffected.\nObjects that have not been worked by human hands, such as a normal rock or a hunting knife forged by a werewolf, bypass the protection. Barehanded assault is also an option, as are natural materials and substances wielded by a human.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell extends to natural objects that are used by a human as a weapon."
      },
      {
        "title":"+2 Reach",
        "description":"The subject is immune to both bashing and lethal damage from artificial objects, and downgrades aggravated damage equal to Potency to lethal."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":198,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Master Tinkerer",
    "type":[
      {
        "arcana":5,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Crafts, Expression, Survival",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Sometimes, what an alchemist really needs is a way to get things done normally, albeit with a subtle boost. For its Duration, this spell augments the caster's Build Equipment action (including repairs, etc) when building a Physical Object as per the Building Equipment system (Chronicles of Darkness, etc), such that any Built-In Penalties are negated by Potency. Scale is used to determine the number and the size or volume of Physical Objects the caster may craft or tinker with.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Potency may be directly added to the Physical Object's equipment bonus, beyond negating penalties. With 1 Mana, said bonus may exceed +5."
      },
      {
        "title":"Add Death ••",
        "description":"The subject may tamper with a Physical Object such that it gains the Fragile or Volatile tag. Alternatively, he may prematurely trigger them such that a Fragile item immediately breaks down, or the Volatile item immediately blows up and gains a -2 reduction."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":199,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Alter Flammability",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Survival, Larceny, Firearms",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The subject can be made flammable or non-flammable. A subject made flammable will be as easy to light on fire as dry wood.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject can be made extremely flammable or even explosive."
      }
    ],
    "author":"Menace"
  },
  {
    "id":200,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Brew Potion",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Crafts, Occult, Survival",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Magical potions and unguents are widely recognized as part of the wizard’s trade. This spell prepares a material compound to hold a supernal charge. A mage may then cast another spell into the potion, specifically shaping their Imago and spending a point of Mana. The potion may contain up to its Potency in spells, but using the compound triggers all of them. While within the potion, a spell counts against the caster’s spell control, but its Duration is held.\nPotions come with certain limitations. Whomever imbibes the potion becomes the subject of its spells, although a cream or oil might be spread or splattered. If Brew Potion’s Duration runs out while it still contains spells, the held spells are lost and the potion visibly spoils.\nUsually this spell is cast on a liquid that resonates with the spell effect, but it could also be cast on a piece of fruit to be eaten, a powder to be inhaled, a breakable object to be tossed like a grenade, etc. 'Ingredients' act as Sacrament Yantras.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may add a Key to the activation of the potion. Perhaps it will only work once a certain reagent is mixed in, or it only has an effect on a certain person."
      },
      {
        "title":"+1 Reach",
        "description":"The potion’s ingredients lose any effect they may have had on an imbiber; so an Acceleration potion of quicksilver won’t inflict mercury poisoning."
      },
      {
        "title":"+1 Reach",
        "description":"The potion may contain multiple doses. If the same spell is cast into it multiple times, each adds an additional use to the potion."
      }
    ],
    "author":"Magic Swordsman"
  },
  {
    "id":201,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Close Enough",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Crafts, Occult, Science",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This spell transforms one substance into another, as long as both are conceptually related. A glass of water can be turned into wine, lead can be turned into gold, and so on.\n",
    "extraInfo":[
      
    ],
    "author":"Justin Sane"
  },
  {
    "id":202,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Devouring the Fallen",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Durability",
      "suggestedRoteSkills":"Craft, Expression, Science",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The mage may pull energy from his target's decay into himself. The target must have at least one less point of Structure than it would when perfectly preserved or properly repaired. For each level of Potency, he may Scour the target's Pattern for one point of Mana, decreasing Structure by one in the process, causing damage through decay. Using this spell counts towards the limit of times per day a mage can gain Mana through Scouring.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may affect a target that is fully preserved and/or in perfect shape instead of one that is damaged."
      },
      {
        "title":"+1 Reach",
        "description":"The spell does not count toward the limit of times per day a mage can gain Mana through Scouring."
      }
    ],
    "author":"Aeryes"
  },
  {
    "id":203,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Form Follows Function",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Durability",
      "suggestedRoteSkills":"Crafts, Expression, Persuasion",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The Mage transcribes a Supernal blueprint onto a collection of discrete but homogenous pieces, forcing them to take that shape and its associated function for a time. The willworker could use this spell to draw a sword from the sand, a bottle from broken glass, a shield from smoke or any other simple item with no moving parts from disparate pieces of the same material. The only limitation is that he needs to have enough of the material to create the item within the Scale of the spell, and thus the Scale may need to be enhanced in order to create items out of air or smoke. If the item created is a weapon, it gains a weapon bonus of 2; if armor, an armor rating of 2; and if another type of item an equipment bonus of +2.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"the Mage can use this spell to create complex items, ones with a number of moving parts equal to the spell's Potency. A revolver, for example, could be created using a spell of Potency 3 (though you would have to provide your own ammunition)."
      }
    ],
    "author":"Frishman"
  },
  {
    "id":204,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Freezing-point Depression",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Durability",
      "suggestedRoteSkills":"Science, Survival, Persuasion",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Lower a material's freezing point. This can be used to melt ice and snow, removing the Ice Tilt and reducing the Blizzard Tilt to an Extreme Cold and/or Heavy Winds Tilts.\n",
    "extraInfo":[
      
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":205,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Knight of the Willow Branch",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Durability",
      "suggestedRoteSkills":"Weaponry, Brawl, Survival",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The alchemist unlocks the hidden potential of violence hidden within everyday objects. When the spell's subject is used as an improvised weapon by the caster, she does not suffer the -1 penalty when attacking, and the weapon does not take damage upon successful attacks. Also, she subtracts Potency from the object's Size for the purpose of determining its Initiative penalty and Strength requirement.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Potency is added to the improvised weapon's damage rating."
      },
      {
        "title":"Add Prime •••",
        "description":"Attacks made with the weapon are considered supernatural, for creatures vulnerable to such distinctions."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":206,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Leaden Feathers",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "primaryFactor":"Potency",
      "withstand":"Durability",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The Mage alters the weight of an object, each point of potency either doubling or halving the subject's weight.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The object becomes lighter than air causing it to float up."
      }
    ],
    "author":"Menace"
  },
  {
    "id":207,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Printing",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Like in ‘Copying’ spell, only any solid material will be good for copy.\nReach and Prime options are the same.\n",
    "extraInfo":[
      
    ],
    "author":"wyrdhamster"
  },
  {
    "id":208,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Transparency",
    "type":[
      {
        "arcana":5,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Crafts, Stealth, Subterfuge",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"One of the best ways to hide something is to make it invisible. One possible way to do this is to manipulate Forces, forcing light to go through objects; the other possible way is to make everybody unsee it with Mind. This spell uses Matter for that effect - it simply makes the matter of the object completely transparent. This does not change mass, density or other properties of an object, though if it has functions which depend on the ability to block light (solar panels, for example), then it can't function anymore. You can wear armor and weapons in this way, and nobody will notice unless you go through a scanner or be searched physically.\n",
    "extraInfo":[
      
    ],
    "author":"Dark Archon"
  },
  {
    "id":209,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Colossus",
    "type":[
      {
        "arcana":5,
        "degree":4
      },
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Athletics, Crafts, Medicine",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The mage transmutes entire portions of his anatomy into living wood, stone, or metal. The mage's skin, muscle, and bone become a material with Durability equal to Potency, to a maximum of 5 (equivalent to multiple reinforced layers of steel). This Durability is added to the mage's Health and Armor; per the normal rules for Objects, this additional Armor does not apply against aggravated damage. The mage's unarmed attacks are now lethal weapons with damage rating [Durability]. Unless an attack deals aggravated damage, the mage is immune to the Arm Wrack and Leg Wrack tilts.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The transmutation turns inward, magic replacing cardiovascular, digestive, nervous, and respiratory functions. For the Duration of the spell, the mage no longer needs to breathe or eat, does not suffer wound penalties, and is immune to the Bleeding, Drugged, Poisoned, Sick, and Stunned Tilts."
      },
      {
        "title":"+1 Reach",
        "description":"The mage's metal flesh can mimic the alchemical properties of a rare or precious material, such as silver."
      }
    ],
    "author":"AmusedByIrony"
  },
  {
    "id":210,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Dress Code",
    "type":[
      {
        "arcana":5,
        "degree":4
      },
      {
        "arcana":9,
        "degree":1
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Crafts, Survival, Socialize",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This spell gauges the Resonance of the subject's current location and/or social context and modifies the subject's garb to be appropriate for that setting -- even if the mage (or subject) doesn't have a clue what the appropriate garb would be. Add Potency to the mage's social rolls while in the setting. For determining First Impression as part of a social maneuver, consider the subject to have met the criteria for a Good impression.\n",
    "extraInfo":[
      
    ],
    "author":"galivet"
  },
  {
    "id":211,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Duplicate",
    "type":[
      {
        "arcana":5,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Durability of original item",
      "suggestedRoteSkills":"Crafts, Expression, Occult",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Like in ‘Copying’ spell, only the mage can conjure copy out of thin air. In reality, he is making it out of air. To any witness, the item just comes in two exactly the same things, like a cell is dividing itself. Reach and Prime option are the same like in ‘Copying’ spell.\n",
    "extraInfo":[
      
    ],
    "author":"wyrdhamster"
  },
  {
    "id":212,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Petrification",
    "type":[
      {
        "arcana":5,
        "degree":4
      },
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Intimidation, Subterfuge, Occult",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Calling on the legendary power of the Gorgons, the Mage turns flesh to stone with their terrible gaze. The target turns into a statue of themselves, with Structure and Durability as appropriate for a solid stone object of their size and composition (marble is very different from granite, for example).\nTargets turned to stone are not dead, but they aren't 'alive' either; the target is rendered unconscious and unaware for the Duration of the spell, during which they do not age or hunger. If the statue is damaged in any way, the target receives comparative wounds when turned back to flesh, but is otherwise unaware of any harm done to them. If the damage is repaired before this time, no harm occurs. If sufficient damage is dealt to reduce the statue to Structure 0, the target dies, and reconstructing the statue does nothing to restore them.\nPetrified targets, despite their quiescent state, can be communicated with. Mind spells that allow the reading of minds or telepathic contact can interact with the victim as they would any mortal. The target experiences this as a panicked, dream-like state, though sufficient communications in this manner may allow them to become aware of their situation. If they have any magical abilities, such powers are available to them in these moments.\n",
    "extraInfo":[
      
    ]
  },
  {
    "id":213,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Pykrete",
    "type":[
      {
        "arcana":5,
        "degree":4
      },
      {
        "arcana":1,
        "degree":3
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Crafts, Science, Survival",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"During World War II, Geoffrey Pyke proposed pykrete as a candidate material for a supersized aircraft carrier for the British Royal Navy. Pykrete features unusual properties, like only being usable in cold temperatures, having a relatively slow melting rate due to its low thermal conductivity, as well as being equal in strength and toughness to concrete.\nWith this spell the mage patterns matter into pykrete. Death is used to create it with the cold temperatures required, but without a cold environment or further cooling, it will heat up and start to sag. Pykrete has a Durability of 3 and a Structure of 9.\n",
    "extraInfo":[
      {
        "title":"Add Matter 5",
        "description":"Create the material out of nothing."
      },
      {
        "title":"Add Death 5",
        "description":"The material maintains its own cold temperature."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":214,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Terminator",
    "type":[
      {
        "arcana":5,
        "degree":4
      },
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Science, Computer, Medicine",
      "undefined":"Potency",
      "cost":"+1 Reach and 1 Mana (for Temporal Sympathy)"
    },
    "description":"The mage builds a servant (see the Golem spell) using the materials at a location or subject substance or object in the past. Use the rules of Temporal Sympathy to determine how far back in Time the Golem can be created. The servant can perform changes to the past while the spell is active. When the spell's Duration elapses, the servant crumbles and any changes it has performed become Lasting. The servant can only perform simple tasks related to its chosen field.\n",
    "extraInfo":[
      {
        "title":"Add Mind •••••",
        "description":"The mage can provide the servant with a full mind (see Psychic Genesis) to help it with its tasks and allow it to better improvise. This can be a copy of the mage's own mind."
      },
      {
        "title":"Add Life ••",
        "description":"The servant can be disguised as a living being."
      },
      {
        "title":"+2 Reach",
        "description":"The servant can be made of liquid metal."
      }
    ],
    "author":"arthexis"
  },
  {
    "id":215,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Create Food",
    "type":[
      {
        "arcana":5,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Survival, Persuasion, Medicine",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"While the alchemist is far from creating life from raw Matter, she can learn to sustain it. The mage targets a portion of food, and the spell creates a number of copies of it equal to Potency. She can scale the spell to as she needs it - the spell may duplicate separate apples in a bag, or the entire bag of apples, but the total volume of resultant food including the original must fit within the spell's Scale. All the created food is nutritionally identical to the original, and sustains living organisms normally.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may create food from nothing. He is limited to creating food that he remembers having eaten in the past."
      },
      {
        "title":"+1 Reach and add Mind ••",
        "description":"The mage may create non-existent food out of her imagination. Trying to create foods of particularly intricate recipes and presentation may require a Dexterity + Crafts roll, and modifying their nutritional qualities might call for a Intelligence + Medicine roll."
      },
      {
        "title":"Add Prime •••••",
        "description":"The mage may infuse the created foods with Mana, making them into tass."
      },
      {
        "title":"Add Life ••",
        "description":"The created food is supernaturally filling, and invigorates the living body. Everyone who consumes them is considered to have received a full night's rest, and enjoys a doubled natural healing rate for a period of time equal to the spell's Duration."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":216,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"A Bug",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Survival, Persuasion, Medicine",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"This spell nests itself on the subject's mind and leaks information in the real time. Pick a topic that this spell keeps eye on to get a descriptive output. It should be moderately precise - work life, commuting, sports competition, news. Whenever something that falls under this topic occurs the caster(or anyone that he chose at the time of casting) gets a description of the event.\nExample: If the topic is 'commute' the caster gets '...at the corner, right behind the butcher shop he turns left and goes straight down the street to the town hall…'. It won't reveal that he met his girlfriend on the way since it’s not the topic. It might however tell that he stopped and asked someone for advice on how to get there. When you choose 'imago', it will describe the spell that she craft when she crafts it '...she burns the tiger-monster-thing and Brian with the winds of Aether…' or reveals the conversation she has with her mentor '...she asks how harmful for the soul is to kill with magic and the master says that it depends on…'. Descriptions should be a little vague, unless the caster specifies a narrowed topic with a Reach option below. \nST should apply a penalty ranging from -1 to -3 when mage for example actively listens to 'soap operas' while trying to read a book on his own.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Pick another topic. Can be taken multiple times."
      },
      {
        "title":"+1 Reach",
        "description":"The topic may be more precise - 'spying' can now become 'spying on a member of the Black Lotus organization' but it will only work on situations where the target thinks the Black Lotus is involved."
      },
      {
        "title":"+1 Reach",
        "description":"Even thoughts can betray the target giving away what he thinks at the moment about the topic. Now you know what the target will do before he does it, at the moment of its decision."
      },
      {
        "title":"+2 Reach",
        "description":"As above but when making an opposed check, pertaining the topic, against the subject of the spell you may add potency as bonus equipment. It can’t go above 5. Example"
      },
      {
        "title":"+1 Reach",
        "description":"The mage can tap in and out as an instant action. It’s a safety switch since the surveillance can be distracting at times."
      },
      {
        "title":"+2 Reach",
        "description":"Mage can tap in and out as a reflexive action."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":217,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Method Man",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":2,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Investigation, Athletics, Socialize",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"It is said that a wise man wins first, and only then enters the battle, while the fool first enters the battle and only then tries to win it. It is also said that no plan survives contact with the enemy. This spell tries to rectify the latter by bolstering the subject's ability to think on the fly, expanding his mental capacity to allow him to handle small minutiae on the fly, without cutting in the precious attention that is often sorely needed to handle more pressing tasks of the moment.\nFor the Duration of the spell, the subject could modify any Plan-type equipment he has as per gear modification rules, treating each significant part of the plan that needs to be changed as a separate 'feature' to be added.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell also speeds up the decision-making process considerably, allowing to make changes in the plans at the same time as performing another, separate instant or extended task."
      },
      {
        "title":"+2 Reach",
        "description":"Perception of the subject is sharpened to a needle point, as the world around slows to a seeming crawl. He can create a whole new plan on the spot rather than modifying an existing one while the spell is in effect at the same time as performing another instant or extended task."
      }
    ],
    "author":"Altasaire"
  },
  {
    "id":218,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Read Potential",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Occult, Empathy",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"By scrutinizing her subject, the caster can determine the subject’s current amount of unspent Experiences, expressed as their current potential, or the amount of personal growth they’ve recently seen.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may also determine amounts of other forms of Experiences the subject possesses, such as the Arcane Experiences of fellow Mages or the Vitriol Experiences of Prometheans."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":219,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sense Thoughts",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"The spell listens to thoughts and emotions of being inside of an area, telling the mage of their location. This spell can be very taxing on the psyche of the mage who cast it if location is happens to be in area with high human traffic.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage knows the amount of dots in Mental or Social attributes of the person who is entering the area."
      },
      {
        "title":"+1 Reach",
        "description":"The mage knows a specific amount of dots in one Mental or Social attribute of the person who is entering the area."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":220,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Reveal Enigmas",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Investigation, Science, Academics",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"The psychonaut heightens her mental acuity in face of puzzles and mysteries, dissecting their patterns to discover the solution. Simple puzzles require no more than a glance to solve. In case of more complex mysteries represented by an Investigation effort (as per Chronicles of Darkness), this spell adds its Potency to a Clue's number of elements. Scale may be increased to target multiple Clues, which requires the mage to divide Potency between them. Such additional elements last only for the spell's Duration.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell grants inspective insight, allowing the mage to double-check established leads. The spell can be used to remove the Incomplete or Tainted tags from a Clue for a level of Potency, instead of providing extra elements."
      },
      {
        "title":"Add Forces •",
        "description":"The mage can now solve 'puzzles' in the form of computer codes and digital ciphers."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":221,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Display Thoughts",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Investigation, Science, Academics",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"Sometimes a picture can be worth more than a thousand words. Whether providing explanations about a complex subject, retelling a riveting tale or concisely presenting a plan of action, a mage well versed in the Mind Arcanum can easily build visualizations of their ideas.\nThis allows the caster to project a hologram of their thoughts to the subject, allowing them to recall and neatly organize the data being projected. While it is clearly an illusion, the audio and visual aid can be a powerful method to convey one's vision. This allows them to add [Potency] to any social rolls regarding what is being shown.\nArrow strategists use it to show elaborate battle plans, with troop movement, terrain and contingencies clearly laid out. Mysterium and Libertine researchers employ it to show visuals of uncovered ruins, inscriptions, tablets, Artifacts, tests or the result of their expeditions. Théarchs utilize it alongside computer yantras to improvise stunning 'slides presentations' for their Cryptopolies and Guardians use it to drive home the danger of certain secrets. Seers of the Chancellor are especially fond of this rote, using it to show people's dreams come true and tempt them into signing terrible bargains.\nWith conjunctional Prime 2, the illusions look realistic.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":222,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Telepathic Listening",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Empathy, Investigation, Occult",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"Mental communication is one of the stealthiest, most secure and efficient ways a cabal can communicate. This spell is one of the fundamental monitoring techniques the Guardians employ, allowing them to listen in to any telepathic conversations within sensory range. It is said those proficient in extending their senses via Forces or Space magic are able to listen to every telepathic whisper in the area of their cabal's Sanctum.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":223,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Drama Queen",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Empathy, Subterfuge, Stealth",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"This spell permits the mage to detect attention directed towards its subject. The mage knows whenever someone within the sensory range of the subject is paying attention to it, and where the attention is coming from (e.g the man sitting behind the counter). If the mage is the subject of this spell, they are nearly impossible to ambush or surprise – any attempts while in sensory range of the mage are reduced to a chance die.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and Add Space •",
        "description":"The mage can also detect attention from remote observation – through cameras, scrying windows etc."
      },
      {
        "title":"+1 Reach",
        "description":"The mage also learns the general emotional overtones of the attention – malicious, lustful, vigilant etc."
      }
    ],
    "author":"TakWrote"
  },
  {
    "id":224,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Decypher Symbolism",
    "type":[
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Crafts, Occult",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"A general purpose spell for archeomancers, which allows them to understand the symbolic meaning of objects they find. This can be used to understand things like designations of sacred sites (such as shimenawa or torii gates), the meaning/intent of paintings and frescos, the purpose of a tradition (such as warding off ghosts by leaving a lit candle on the porch on moonless nights), social queues, luck glyphs, warding runes, tapestries and more (although translation is beyond its scope). It's often used when exploring ruins, Emanations or Sanctums of very ancient mages. However, certain Silver Ladder diplomats also rely on it to help establish a baseline of etiquette when amongst unfamiliar cultures.\nWhen analyzing Abyssal symbols, the Mind variation of this spell produces a jumbled mess of contradicting and nonsense explanations, but can identify dangerous memetic or similar phenomena. The Prime version simply identifies the taint and its key triggers, but cannot analyze more than that. Utilizing both Arcana allows for a concise and accurate study of the symbol, or at least as far as a mortal mind can safely parse.\nWhen cast using Mind 3, it can be used to analyze any memory containing symbols or the symbolism of a dream the subject has experienced (this variation can be Withstood via Resolve).\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":225,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Beast Master",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Animal Ken, Empathy, Survival",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"Gain a number of dots in an animal training fighting style (such as Falconry or K-9) equal to Potency for the Duration of this spell.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Including an animal as a Subject of this spell circumvents the training period required to benefit from the Merit. If the Subjects do not share the Bonded Condition (or another fitting Condition such as Familiar) they both gain the Bonded Condition for the Duration of the spell."
      }
    ],
    "author":"Tessie"
  },
  {
    "id":226,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Dead Mind",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Medicine, Stealth, Subterfuge",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"Your thoughts freeze; your mind is still. You can act, but you don't think about it; you just act. This spell makes it much harder to read your thoughts, intentions or mental presence. Apply the spell’s Potency as a penalty to relevant Skill rolls (such as Empathy or Subterfuge) between the subjects. You may not reduce Skill rolls below their default - your penalty can only cancel bonuses from telepathy, ability to read emotions and so on.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"You may also apply the spell’s Potency as a bonus to Withstand any attempts to locate you with Mind magic."
      },
      {
        "title":"+1 Reach",
        "description":"You may also apply the spell’s Potency as a bonus to Withstand any attempts to inflict Mental Condition or Tilt on you."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":227,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Honed Will",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"The mage grants the subject the 9-again quality on mundane dice rolls where the subject spends Willpower, up to a number of rolls equal to Potency during the spell's Duration.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The benefit becomes 8-again."
      },
      {
        "title":"+2 Reach",
        "description":"The benefit extends to spellcasting rolls."
      }
    ],
    "author":"Caladriu"
  },
  {
    "id":228,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Inescapable Question",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Persuasion, Investigation, Computer",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"Change begins by challenging assumptions, which in turn begins with a simple question. As the spell is cast, the mage asks her subject a question fitting the situation. Provided the subject can hear and understand her, the question takes root in his mind for the spell's Duration. Depending on context this replicates one of the Guilty, Shaken, or Spooked Conditions, but without implying the same degree of mental trauma. The Question itself can be delivered through telepathic methods, such as the 'Psychic Domination' or 'Telepathy' spells and similar effects.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage doesn't need to speak, not even telepathically. An action, a gesture, even a look instills aporia in his subject. This also allows him to deliver the Question with methods that normally transmit only emotions and images, such as the 'Emotional Urging' spell and similar effects."
      },
      {
        "title":"+1 Reach",
        "description":"The spell instills the Obsession Condition instead."
      },
      {
        "title":"+1 Reach",
        "description":"When the subject resolves the Condition imposed by the spell, depending on the method she immediately gains either the Inspired or Steadfast Condition."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":229,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Just a Flesh Wound",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Stealth, Subterfuge",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"The target of this ability believes that his attacks have the opposite outcomes. Attacks that strike the target seem like they missed, attacks that missed seem like they hit. Enveloping all the senses, someone swinging, and hitting with a sword p.e., wouldn't feel the impact of the blow nor hear the cry of his target, but instead would 'see' the defender dodging out of the way. Similarly, someone throwing a fireball, and missing, would instead see, and smell, his opponent being charred to 'really wounded, but not quite dead' state. The actual attack is resolved normally despite the perception of it (so you swing a sword and hit, you think you missed, the opponent seems healthy, but in reality he does take, and note the damage and/or associated penalties).\nThis spell doesn't fool the one actually getting attacked (the target of the attack still knows, and feels, the full burn of the attack). This spell is not limited to 'attack roll' actions, but instead is applied to everything the 'attacker' thinks is an attack (so even social slander and etc, or sensory spells).\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster can now reflexively decide if an attack looks like a miss or a hit."
      },
      {
        "title":"+1 Reach",
        "description":"This spell fools even the one getting attacked (The ST should keep his Health total a secret)."
      }
    ],
    "author":"Shroudb"
  },
  {
    "id":230,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Stoke the Flames",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"The Mage can urge a given subject towards accomplishing a particular goal of his choosing, This grants him the Inspired Condition for the Duration of the spell, or until he chooses to resolve it earlier.\n",
    "extraInfo":[
      {
        "title":"+2 Reach and 1 Mana",
        "description":"By spending a point of Mana, the Mage allows a subject to avail of the Condition a number of times equal to the spell's Potency before it's resolved."
      }
    ],
    "author":"Deionscribe"
  },
  {
    "id":231,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Rashomon Effect",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Subterfuge, Investigation, Persuasion",
      "undefined":"Potency",
      "cost":"1 or more Mana (variable)"
    },
    "description":"The human mind and memories are not infallible as many believe, and are subject to distorting events in their own perspectives and self-interests. Those who witness the subject within the spell's Duration will remember a highly subjective version of it, giving different accounts to anyone who should come asking. Using supernatural means of observation or memory-reading provokes a Clash of Wills. Mage Sight always reveals the truth without a Clash.\nWhile this spell does not befuddle supernatural events caused by or transpired around the subject, most people already have flimsy memories regarding such matters.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell extends to supernatural witnesses. One may remember the man across the street spontaneously bursting into flame, while another may remember the same man attacked with a molotov cocktail."
      },
      {
        "title":"+1 Reach",
        "description":"The spell provokes a Clash of Wills against Mage Sight, and on success befuddles even the Awakened senses. Supernatural phenomena appear to belong to unrelated Arcana, and Nimbuses are likewise confused for someone else's or an entirely made-up one."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":232,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Subtle Occlusion",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Subterfuge, Stealth",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The psychonaut may veil a subject under a psychic shroud, away from prodding eyes and meddlesome influences. The subject of the spell is granted dots in the Occultation Merit equal to Potency, even if he is not Awakened. If the subject is a mage who already has the Merit, her rating in it is increased by Potency. In both cases, the Occultation Merit's rating may be raised up to five dots, exceeding its normal limit. If the subject has the Fame Merit, its effects are suppressed until the spell expires. \n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"By spending one point of Mana, the Occultation Merit may be raised above five dots, as much as Potency allows it."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"By spending one point of Mana, the mage may make his non-Awakened subjects eligible for purchasing the Occultation Merit."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":233,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Tend the Flames",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Empathy, Intimidation, Socialize",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The mage urges the subject towards accomplishing certain goals or douses their enthusiasm. This spell bestows a number of Conditions (such as Deprived, Inspired, Obsession, Shaken or Steadfast) or Tilts (such as Beaten Down, or Insane) on the subject equal to Potency for the Duration of the Spell. The subject may Withstand negative effects with Composure.\nNote that beneficial Conditions don't grant Beats when the subject resolves them unless the caster achieved an exceptional success in the casting.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"The Conditions and Tilts can affect spellcasting roll."
      }
    ],
    "author":"Tessie"
  },
  {
    "id":234,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"That Which Doesn’t Kill You",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The Mage imposes the Tension condition on the target. This condition may be resolved at any time by automatically failing any action in lieu of rolling, and causes the subject to become frustrated by her own success. For every successful action the subject takes while this Condition is in effect, tension builds, and the subject takes a cumulative -1 penalty to all future actions, until the Condition is resolved. This penalty cannot exceed five dice.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Tension condition becomes Persistent, granting Beats every time an action is voluntarily failed. This doesn’t resolve the Condition until a number of actions have been voluntarily failed equal to Potency."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For a point of Mana, the penalty imposed on actions may reach above five dice - but still starts at zero."
      },
      {
        "title":"Tension",
        "description":"Your character is incredibly tense, and magic forces her own successes to cause that tension to grow instead of providing relief. For every successful action the subject takes while this Condition is in effect, tension builds, and the subject takes a cumulative -1 penalty to all future actions, until the Condition is resolved. This penalty cannot exceed five dice."
      },
      {
        "title":"Resolution",
        "description":"Opt to fail any roll with meaningful consequences."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":235,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Under the Bushel",
    "type":[
      {
        "arcana":6,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This spell hides the will of the subject from others making it impossible to be aware of Clash of Wills against them. Others also can't spend Willpower on the test. ST makes a hidden roll of Power Stat + Power for an unaware participant.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"By blurring the edges of the subject’s will, the spell assures victory in uncertain circumstances. In the case of a draw, the subject wins or rather the opponent loses by giving up too early."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":236,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Akashic Repository",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Socialize, Academics, Science",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Though the Akashic Records are inaccessible as far as any willworker knows, a Mage can turn himself into a smaller repository of knowledge. This spell allows all of its subjects to share a number of the mage's of a number of skills. Choose a number of Skills equal to the spell’s Potency. Whenever one subject needs to make a roll involving one of the chosen Skills, they can use the mage's dot rating. This doesn't affect rolls to activate supernatural powers such as rotes or supernatural abilities.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subjects share the use of skill with each other not only with the mage."
      },
      {
        "title":"+2 Reach",
        "description":"The subjects share all skills, not just the chosen ones."
      },
      {
        "title":"+1 Reach",
        "description":"The mage can also choose a single mental Merit to share"
      }
    ],
    "author":"Menace"
  },
  {
    "id":237,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Astral Invitation",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Empathy, Occult, Socialize",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"A subject of this spell may choose to enter the Oneiros of another subject when meditating into the Astral. The ‘host’ subject must be determined at the time the spell is cast, by the caster.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Instead of a single host, all subjects may enter the Oneiros of any other subject."
      },
      {
        "title":"+1 Reach",
        "description":"This effect extends to any time a subject would enter their Oneiros (including backtracking from the Temenos), and not just the initial Meditation into the Astral."
      },
      {
        "title":"+1 Reach",
        "description":"When entering the same Oneiros, all the entry points of all subjects are within the same general area, requiring no more than a few seconds of travel to traverse the distance between them."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":238,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Blur the Past",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academia, Stealth, Subterfuge",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The mage can change a memory without the need to read the subject’s mind, as long as it is a memory he knows the subject has. Either the mage experienced it himself, saw a video or a photo with an accurate description. The changed memory must still be within the same context of the original memory. The number of changes that can be made is equal to Potency.\nOnce the Duration expires, the subject instantly reverts to its original memory. Memories of the time spent 'blurred' will seem distant and hazy, dreamlike, but the subject will remember the altered perspective at least to some degree. But if the memory that is changed is very trivial to the subject and the Duration is long enough, the subject may have naturally forgotten the change as time passes, even when the spell ends.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"A Willworker can completely rework what the subject can remember. One memory per Potency can be changed to anything the mage wishes."
      },
      {
        "title":"+2 Reach",
        "description":"The effect is lasting."
      }
    ],
    "author":"Neros"
  },
  {
    "id":239,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Burning Bright",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The Mage can bless a subject so that a given action he exerts great effort on has a higher chance of success. When he spends Willpower to bolster an action, he may add the spell's Potency as the bonus, instead of the usual +3.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject may apply the benefits of the spell an additional number of times equal to Reach spent."
      }
    ],
    "author":"Deionscribe"
  },
  {
    "id":240,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Enlightened Will",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The mage grants the subject an additional Vice, as the Vice-Ridden Merit: 'Succeeding on invested actions.' This means the first significant success towards an Aspiration or Obsession in a scene restores a point of willpower. Of course, these are not the only investments a mind makes; any roll on which the character spends Willpower counts, as well. \n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For a point of Mana, mundane actions where the subject spends Willpower have the rote quality."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"For a point of Mana, the subject automatically succeeds on uncontested mundane actions where they spend Willpower. On contested mundane actions, they add effective successes equal to Potency if they rolled at least one success."
      }
    ],
    "author":"Caladriu "
  },
  {
    "id":241,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Expert System",
    "type":[
      {
        "arcana":6,
        "degree":3
      },
      {
        "arcana":3,
        "degree":2
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Computer, Expression",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This spell modifies a computing device by adding a program to it that provides the functionality of an expert system for any skill chosen by the caster. For the Duration of the spell, if the device's user is able to use the device as a tool when rolling the relevant skill, the device provides a bonus to the roll equal to Potency. The device's user must have at least one dot in the skill to benefit from the expert system. At the end of the spell's Duration, the expert system 'uninstalls' itself from the device.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may provide an additional expert system that benefits another skill for each additional reach, subdividing Potency among them."
      }
    ],
    "author":"galivet "
  },
  {
    "id":242,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"False Fame",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Persuasion, Socialize, Streetwise",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The psychonaut weaves the subject's psychic presence into a whirlpool, drawing in attention and recognition. The subject gains the Fame Merit at a rating equal to the spell's effective Potency, up to the Merit's normal 3-dot limit.\nWhat the subject is famous for is left vague. People will 'know' she is famous, but unable to pinpoint for what and make assumptions. If the subject fails a Social roll on which the Fame's dice bonus was applied, it becomes a dramatic failure where she draws unnecessary attention and suspicion.\nAs this Merit is a mere psychic illusion, it does not grant the minimum Withstand rating. Also, beings using supernatural means of identifying the subject, as well as those with a general defense against psychic suggestions, may pierce the spell with a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The vagueness of the hollow fame is removed, as each onlookers' minds convince themselves. The subject no longer risks automatic dramatic failure upon a failed Social roll."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"With a point of Mana, the illusory Fame may rise beyond 3 dots."
      },
      {
        "title":"Add Space •••",
        "description":"The web of sympathies around the subject change to fit her new station. The spell's Fame now grants the minimum Withstand rating against spells targeting the subject."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":243,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Forgetfulness",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Resolve",
      "cost":"1 Mana"
    },
    "description":"This spell allows the mage to alter the subject’s thoughts that it possesses in the moment, hiding them from the subject’s consciousness: it makes every action harder to focus on because the subject needs to force its will to remember her own thoughts. This spell gives the subject a penalty equal to Potency on her next action.\n",
    "extraInfo":[
      
    ],
    "author":"Poseur"
  },
  {
    "id":244,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Golden Years, Tarnished Black",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Empathy, Intimidate, Occult",
      "undefined":"Resolve",
      "cost":"1 Mana"
    },
    "description":"Memories are fickle and changeable - exploiting this, the subject has one of their happy memories stripped of all of its positive aspects. They suffer the False Memories (VtR: B&S) condition with regards to that memory.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"You are no longer restricted to only affecting happy memories. When this spell is used to worsen unhappy memories, the subject suffers the Fugue condition with regards to that memory instead."
      },
      {
        "title":"+1 Reach",
        "description":"You can use this spell to make a memory happier, rather than worsening it. When the False Memories condition caused by this spell is resolved, the subject takes a Condition as if this spell was used to worsen that memory instead."
      },
      {
        "title":"+1 Reach",
        "description":"The subject gains the Addicted condition in relation to an element of that memory instead of the False Memories condition. Nostalgia can be a bitch."
      }
    ],
    "author":"amechra"
  },
  {
    "id":245,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Goetic insertion",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure/Rank",
      "suggestedRoteSkills":"Expression, Persuasion, Larceny",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The casting mage can insert a free floating Goetia into the subject’s mind. Unless the mage targets himself with the spell, this requires taking additional spell factors.The goetic becomes an inherent part of the subject’s psyche. This might cause the subject to gain an additional Virtue, Vice or Aspiration. However as a person's psyche can only hold so much the Goetia in her fight for domination so after a time the new element of his psyche fades or replaces some other one of the same type.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Goetia can coexist indefinitely with other parts of the target’s personality."
      },
      {
        "title":"+2 Reach",
        "description":"The effect is Lasting (but see above"
      }
    ],
    "author":"Menace"
  },
  {
    "id":246,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"I Know Kung Fu",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Composure/Rank",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Movie nights at the Lorehouse can, sometimes, lead to some interesting developments. It is said the first Rote version included a 'come hither' gesture among its Mudras. This spell allows the mage to access a Fighting Merit with dots equal to potency for the Duration. The subject must fulfill the requirements as usual since the spell only provides the knowledge and muscle memory for the merit, but doesn't do anything to improve the capabilities of the mage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Mental or social attributes or skills can be enhanced in order to fulfill the requirements for a merit. Each point of potency spent this way nets one point."
      },
      {
        "title":"Add Life •••",
        "description":"Allow the same with physical attributes."
      }
    ],
    "author":"Ehkesoyo"
  },
  {
    "id":247,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Power Through Slavery",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Intimidation, Occult, Persuasion",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"A distressingly popular spell amongst both the Adamantine Arrow and the Seers of the Throne (though for very different reasons). Upon casting this spell, choose another person to be your target's 'master' - your target receives Obedience to [Master's Name] as a second Vice, and takes a Beat whenever they fulfill that Vice.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The target may take an Arcane Beat instead of a normal Beat whenever they would fulfill their secondary Vice. They may also treat 'following my master's orders' as an Oblation."
      },
      {
        "title":"+1 Reach",
        "description":"The master you choose may be an organization rather than a single person - the target's second Vice becomes Obedience to Members of [Organization Name]."
      },
      {
        "title":"+1 Reach",
        "description":"The master you choose gains the benefits of the Loved merit with regards to the Target."
      },
      {
        "title":"Add Prime ••",
        "description":"The target does not suffer Breaking Points due to their master's spells - they still suffer from all the other effects of the Sleeping Curse."
      },
      {
        "title":"Add Death •••",
        "description":"The target suffers from the Soulless condition for the Duration of the spell."
      }
    ],
    "author":"amechra"
  },
  {
    "id":248,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Psychic Violation",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Intimidation, Academics, Empathy",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"A mind is concrete as any other Pattern to practitioners of the Mind Arcanum, and an Adept can pull at its loose threads to unravel its structure. This spell saps its subject of Willpower points equal to Potency. Subjects who have zero Willpower suffer half of remaining Potency, rounded down, as bashing damage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Instead of sapping Willpower points, the spell now decreases the subject's Willpower dots. Unlike the normal effect, this lasts only for the spell's Duration."
      },
      {
        "title":"+1 Reach",
        "description":"Instead of sapping Willpower, the spell inflicts the Soul Shocked Condition."
      },
      {
        "title":"+1 Reach",
        "description":"The victim suffers the Beaten Down Tilt, in addition to the other effects. This ignores being immune to the Tilt via being accustomed to violence."
      },
      {
        "title":"Add Death •••",
        "description":"The trauma forces the victim to roll for an Integrity or Wisdom breaking point, in addition to the other effects. Supernatural entities with other Integrity substitutes may be affected at Storyteller discretion."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":249,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Snake Within",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Politics, Empathy, Streetwise",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The next time during this spell's Duration that its subject would recover Willpower from indulging their Vice, they recover a number of points equal to the spell's Potency, instead of the usual one. If this value exceeds their Resolve, they will develop a Condition related to the rush of the experience, such as Addicted, Guilty, or Obsession.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 mana",
        "description":"The subject may recover Willpower from their Vice under the auspices of this spell even if they have already indulged their Vice in that scene."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":250,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Unfaltering",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Athletics, Occult",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The mage bolsters the subject's Resolve, allowing them to remain conscious even when their body is ready to collapse. Stamina rolls to remain conscious due to damage are considered to automatically succeed, and supernatural effects that knock the subject unconscious provoke a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This spell can revive someone who is currently unconscious."
      },
      {
        "title":"+1 Reach",
        "description":"This spell allows the subject to ignore wound penalties equal to Potency."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":251,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Will Of Fire",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Empathy, Expression, Persuasion",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Fiery rhetoric can bolster human spirits. And with the right words, a Mage can give a group of friends and followers the will to succeed above and beyond their own capacity. The spell grants one Willpower point to the subject equal to its Potency. These Willpower points can only be used for actions related to the purpose of the spell, and cannot be regained once used.\n",
    "extraInfo":[
      {
        "title":"+ 2 Reach",
        "description":"The Willpower gained from this spell may now be spent without any restriction."
      }
    ],
    "author":"Deionscribe"
  },
  {
    "id":252,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Reserve of Will",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Occult, Subterfuge",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"A focused mind can make the supernatural yield more easily before a mage, therefore having greater stores available will be able to accomplish greater feats. This spell allows an item to hold Willpower, allowing mages to resist supernatural effects longer or focus their will more often into difficult spells.\nThe item can hold up to [Potency] points of Willpower and a user can replenish from its stores by touching it. Alternatively, they can expend Willpower points from its reserve while touching it. Refilling its stores requires a Weaving of Mind.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":253,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Projected Status",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Highest Composure within the group at the scene",
      "suggestedRoteSkills":"Politics, Subterfuge, Expression",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"A leader in any one field is dignified in a way that people of other fields respect, and the Psychonaut emulates that. For the Duration, she can apply her Status in a group to groups she does not belong in. The spell is Withstood by groups that are too far removed from the mage's own, or are particularly unwelcome to outsiders.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage now may outright fabricate Status. He may divert Potency to increasing existing Status or creating non-existent Status."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":254,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Thrawn's Insight",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Highest Composure within the group at the scene",
      "suggestedRoteSkills":"Academics, Investigation, Subterfuge",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Concentration, awareness, long-term thinking- those are vital qualities that separate an efficient ace from a mere flailing thug. Yet neither the most difficult challenges nor the most complex causes will yield victory without solidly conceived operations leading towards a grander goal. The greatest masters of the Arrow are not just ones that use their spells creatively and precisely. Rather they understand how to optimize logistics, coordinate their allies and plan grand strategies, maximizing the efficiency of their spellwork. This rote was invented to hone the strategist's craft to sublime heights.\nIt elevates the subject's ability to plan and strategize, granting an additional [Potency] dice to any rolls for creating plans, capped by trait limits. However, developing plans as a team requires all participants to be under its effect.\nIn addition, it also fosters focus and a methodical approach. Should time be plentiful and the subject chooses to build a plan as an extended action, it increases the number of rolls that can be made by [Potency].\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject makes the most of every second, planning with greater efficiency. They gain the Good Time Management merit or, should they already have it, it grants 9-again for [Potency] planing rolls or 8-again for another Reach."
      },
      {
        "title":"+1 Reach and a mana",
        "description":"The bonus can exceed trait limits. More complex plans can be constructed, exceeding the trait limit by [Potency]. The greatest practitioners are able to devize Xanatos Gambits with consummate ease."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":255,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Concentrated Effort",
    "type":[
      {
        "arcana":6,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Highest Composure within the group at the scene",
      "suggestedRoteSkills":"Empathy, Expression, Socialize",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This spell imbues its target with supernatural determination and dedication to complete any task. When the target of this spell spends a point of Willpower to add a +3 die bonus to a dice pool or +2 to a Resistance trait, the bonus applies to all dice pools or to that Resistance trait for a number of rolls equal to the spell Potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Spending a point of Willpower will both add the +3 die bonus and +2 to a Resistance trait."
      },
      {
        "title":"+1 Reach",
        "description":"Spending a point of Willpower to add +2 to a Resistance trait will instead add +2 to all Resistance traits."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"Spend a point of Mana. The mage can cast this spell as a reflexive action."
      }
    ],
    "author":"Redzone"
  },
  {
    "id":256,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Beneath Your Skin",
    "type":[
      {
        "arcana":6,
        "degree":4
      },
      {
        "arcana":1,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Highest Composure within the group at the scene",
      "suggestedRoteSkills":"Stealth, Occult, Subterfuge.",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The Mage possesses a target, as per the Mind 4 spell 'Possession', with the added twist of transforming their dormant body into a shadow, as per the Death 4 spell 'Shadow Flesh', and pinning the shadow unto the possessed target's own. In this form you gain the Physical Attributes of the subject, and retain your Mental Attributes, as well as your ability to cast spells. As a standard action, you may touch another subject and 'jump' into them, also instantly pinning your own shadow-body without any conscious effort. However, this does cause the previously possessed to come out of it under a state of malaise, potentially drawing suspicion, if only for a moment.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage can alternate between controlling the possessed body, or moving the shadow-body independently of it as a reflexive action, though you can only control one by default."
      },
      {
        "title":"+1 Reach",
        "description":"The Mage can possess another subject via Sensory Range, not just Touch."
      },
      {
        "title":"+1 Reach",
        "description":"The Mage may, as a Standard action, take an item originally transformed on their person at the time of spellcasting, and bring it into normal form again for use."
      }
    ],
    "author":"Zombiecakes"
  },
  {
    "id":257,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Crab-Brain",
    "type":[
      {
        "arcana":6,
        "degree":4
      },
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Animal Ken, Crafts, Empathy",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"I don't really know why you'd cast this spell, but here we are. The mage who decides to do this sort of thing transforms one of the subject's thought-patterns into a living organism. This can turn a Mental Condition into an animal; the subject no longer suffers from the Condition's effects. This can also transform a memory, dream, or passing thought. To affect a Persistent Condition or fundamental part of the subject's personality requires a point of Mana. This spell can be cast with an animal symbolic of the affected thought in mind, but this is not necessary; depression can be transformed into a giraffe, and reality won't really care.\nWhen the spell's Duration ends, the animal disappears and the Condition remanifests; if the animal is killed in the meantime, the Condition is permanently removed, but the subject gains no Beat for the excisement.\n",
    "extraInfo":[
      
    ],
    "author":"espritdecalmar"
  },
  {
    "id":258,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Communion",
    "type":[
      {
        "arcana":6,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Occult, Persuasion",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"Verbal communication is such a crude thing, words a poor vehicle for meaning, a direct mind-to-mind link is superior in almost every aspect. That is precisely what this spell achieves, linking the minds of its subjects on an intimate level. Not merely are they capable of reading each other’s thoughts and memories, but instead they experience them as if they were their own. This can allow a rapid communication of nuanced concepts otherwise impossible to express through language. A single discussion held amongst such individuals might not be able to be transcribed in an entire library’s worth of books.\nIn addition, this permits each individual insight into each other participant’s memories, feelings, perspectives, as well as their current sensory information. Effectively allowing each participant to exist as a combination of multiple people for the Duration of the spell. Due to the potential for disagreement and conflict in perspectives, as well as the potentially addictive rush of such sensations, extended or strenuous usage may inflict conditions upon subjects.\nWhen this spell ends, each subject is left with mere memories of what he experienced, unless he immediately spends Experiences to have learned a copy of what was shared with him. Some Mages use this spell to quickly and easily teach Rotes to one another.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Subjects may share the use of each other’s skills."
      },
      {
        "title":"+1 Reach",
        "description":"Subjects may share the use of each other’s mental merits."
      },
      {
        "title":"+1 Reach",
        "description":"Only desired information is shared between subjects, the limits of which may be expressly changed at any time, and may be subconsciously decided upon, rather than explicitly stated."
      },
      {
        "title":"+1 Reach",
        "description":"The spell cannot impose negative Conditions upon its subjects."
      },
      {
        "title":"Add Prime •",
        "description":"Subjects may share the use of each other’s Rotes, and may utilize each other’s Mage Sight (but must spend Mana to activate it, if not a Ruling Arcana)."
      },
      {
        "title":"Add Prime •••",
        "description":"Subjects may perform cooperative, ritual spellcasting, utilizing a combination of the Arcana of the participants, so long as each has each requisite Arcana at least one dot. E.g. To cast a Prime 4, Matter 3, Mind 5 spell, all participants would need Prime 1, Matter 1, and Mind 1, but the levels of Prime 4, Matter 3, and Mind 5 could be contributed by separate Mages."
      },
      {
        "title":"Add Prime ••••",
        "description":"As above, except each participant need not have at least 1 dot in each requisite Arcanum."
      },
      {
        "title":"Add Space ••",
        "description":"Subjects may share use of Sympathetic Links."
      },
      {
        "title":"Add Fate ••••",
        "description":"Subjects may share use of the Destiny Merit."
      },
      {
        "title":"Add Time •••",
        "description":"Such is the speed at which communication is achieved that all attempts at social interaction between subjects are performed as instant actions."
      }
    ],
    "author":"HerbertIsBertBert"
  },
  {
    "id":259,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Unlock Potential",
    "type":[
      {
        "arcana":6,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Occult, Persuasion",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"The mortal Mind is not quite so frail as many mages would believe, indeed those who investigate such things find it has incredible power hidden within, just waiting to be unlocked.\nWith this spell, the mage can short-cut the Sleeper or Sleepwalker's mind to access these powers, stepping around whatever inherent blocks stop them from accessing them. For the Duration of the spell, the subject gains dots in a 'mental' Supernatural Merit equal to the spell's Potency. These can include such merits as Psychometry, Telekinesis, and Telepathy. Due to the Supernatural nature of these merits for the Duration of the spell the subject counts as a Sleepwalker, and does not trigger Paradox or Dissonance until the spell ends.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage may grant the subject an additional psychic Merit, dividing Potency between them, this Reach option may be taken additional times."
      },
      {
        "title":"+2 Reach",
        "description":"The Psychic Merits do not have their normal Drawbacks."
      },
      {
        "title":"Add Arcanum 2",
        "description":"The Mage may grant other supernatural merits which relate to phenomenon other than the mind alone, requiring the appropriate Arcanum at 2 dots. e.g. Forces 2 for Pyrokinesis, and Fate 2 for Thief of Fate."
      }
    ],
    "author":"HerbertIsBertBert"
  },
  {
    "id":260,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Wake the Beast",
    "type":[
      {
        "arcana":6,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Medicine, Survival, Persuasion",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"The mage levies a powerful curse upon an enemy, creating a 'Beast' in the back of his mind, similar to that of a Kindred. As the mage is creating the beast for the character he can endow it with a number of Frenzy triggers equal to the potency of the spell, defining the response of the beast (fight or flight) to the trigger as well. A mage frenzying does not gain any of the bonuses a vampire would.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"If the subject successfully resists frenzy, he gains the 'Tempted' condition as a vampire would."
      },
      {
        "title":"+1 Reach",
        "description":"The Frenzy becomes cathartic to the subject, causing it to regain a point of Willpower after a Frenzy ends."
      }
    ],
    "author":"Flinty, in 'Flintys Homebrew Hub 2e'"
  },
  {
    "id":261,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Fortress of the Mind",
    "type":[
      {
        "arcana":6,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Craft, Occult",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"A persistent problem of being a member of the Mysterium is that there will always be someone who tries to bypass the cost of knowledge. Some prefer to steal it from the mage's Oneiros, others to convince their subconscious, but the end result is theft all the same. This rote was made to shore up the mental defenses of knowledge keepers, creating a dedicated mental defense processing center for the brain.\nIt reconfigures the mind to secure it from intruders, making it more difficult to breach. Grants [Potency] in the Mental Fortification merit, up to trait limits.\nThis merit makes any travel into or outside the Oneiros without the owner's permission suffer a [Potency] penalty to the rolls. In addition, the mindscape facilitates the action of the owner and anyone they recognize as an ally, adding a bonus of [Potency] to initiative. Lastly, the caster can set up traps within the Oneiros, dealing up to [Potency] bashing or lethal dream health damage when triggered, distributed amongsts a given number of traps. With Potency 3, for example, a single trap worth 3 lethal can be placed or one inflicting 2 and one 1 lethal or 3 traps inflicting 1 lethal. Intruders avoid them with Power + Finesse, penalized by Mental Fortification dots.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and a mana",
        "description":"The merit can go beyond trait limits."
      },
      {
        "title":"+1 Reach and a mana",
        "description":"The damage done is aggravated."
      }
    ],
    "author":"serAfini"
  },
  {
    "id":262,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Closing The Chapter",
    "type":[
      {
        "arcana":6,
        "degree":5
      },
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Empathy, Expression, Investigation",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"A spell created with the purpose of granting a sense of closure to those in mourning. It creates a Rank 1 goetia with an exact copy of the subject's mind at a given point in time. Without temporal sympathy, this can only affect Unchanged subjects.\nThe spell permits the option of updating the mind to the present, by speculating how they would behave should they have lived.\nThe goetia is made fully aware of the situation and knows that its consciousness will drift back to the Supernal upon the spell's end, avoiding possible existential dread.\nWhile normally used to allow mages to share some final moments with their loved ones without pursuing the dangerous Mysteries of resurrection, other uses have been recorded. The Adamantine Arrow uses it to preserve their most brilliant mentors, trainers and strategists. The Mysterium and Free Council employ it to make sure their most innovative researchers are never lost.\n",
    "extraInfo":[
      {
        "title":"Death •••• or Spirit ••••",
        "description":"the goetia is able to Manifest physically for the duration."
      },
      {
        "title":"Prime ••••",
        "description":"the goetia remembers up to [Potency] rotes it knew in life (their most used ones should the caster not specify any) and is able to teach, but not use them."
      },
      {
        "title":"+1 Reach",
        "description":"The goetia is instead Rank 2"
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":263,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Ariadne",
    "type":[
      {
        "arcana":7,
        "degree":1
      }
    ],
    "properties":{
      "practice":2,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"?",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"The traveling willworker uncoils behind a thread that allows to find a way back in even the harshest of conditions. The thread can only be seen with Active Mage Sight, but tests to find it are not penalized by Environmental Tilts.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Irises can't be closed entirely if the thread was guided through them. They always leave a mark that can be later reopened with appropriate Arcanum and spell."
      },
      {
        "title":"+1 Reach",
        "description":"The thread is visible even without Active Mage Sight."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":264,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Ideolect",
    "type":[
      {
        "arcana":7,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Politics, Socialize, Streetwise",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"Culture is just a collection of symbols, combined this way. While under the effects of this spell, the subject becomes capable of intuitively 'sensing' the appropriate symbols of a specific local subculture - reducing any penalties to social rolls they suffer due to being an outsider by this spell's Potency.\n",
    "extraInfo":[
      
    ],
    "author":"amechra"
  },
  {
    "id":265,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Peripheral Enhancement",
    "type":[
      {
        "arcana":7,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Subterfuge, Investigation",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"Peripheral Mage Sight can help tell a Mage that something nearby might be a Mystery worth studying, but oftentimes utilizing Active Mage Sight or Unveiling Magic can be a bit distracting. When this spell is cast on a Mage, however, it provides a bit more information to the subject. Whenever their Peripheral Sight is activated, they may immediately use an instant action, representing a few seconds 'attuning' to the sensation, to get a flash of insight that reveals the anything to them that a turn of watching the offending supernal power or phenomenon with Active Mage Sight might provide, as if only the character's Ruling Arcana were used.\nFor instance, if a ghost in Twilight utilized a Numina, a Moros benefiting from this spell would get a flash of insight telling them a Numina was used and approximately where (though without the Death 2 attainment, they wouldn't get a sense of the ghost responsible if not already visible). A Thyrsus might get a flash of insight if a Werewolf nearby spent Essence to speed their regeneration, showing them the individual and letting them know spiritual energy was used to reduce their injuries.\nNote that by default, this does not allow a Mage to use their 1 dot Counterspell attainment, as the information is still only learned when Peripheral Sight is triggered.\nWhen used on an unAwakened character, the target benefits from typical Peripheral Mage Sight for the Duration, but gains no further benefit.\n",
    "extraInfo":[
      {
        "title":"Add Any Arcanum • and 1 Mana",
        "description":"By spending 1 Mana and utilizing another Arcana, information can be provided from that Arcanum in addition to the target's Ruling Arcana."
      },
      {
        "title":"+1 Reach",
        "description":"The information provided by the spell is reflexive and can provide an Awakened character with enough notice of a spell to use Counterspell even without Active Mage Sight active. They gain knowledge of the Arcana used and a sort of sixth sense of the character's Nimbus, rather than seeing it directly."
      }
    ],
    "author":"falco1029"
  },
  {
    "id":266,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sense Magic",
    "type":[
      {
        "arcana":7,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Subterfuge, Investigation",
      "undefined":"?",
      "cost":"None or 1 Mana"
    },
    "description":"Most mages prefer for their sanctums to be devoid of alien magic. This spell tells mage if somebody tries to use magic inside of an area and telling mage of their location.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage knows the exact Arcana – as well as their rating in dots – of the person who tries to use magic inside the area."
      },
      {
        "title":"+1 Reach",
        "description":"The mage knows the exact spell which is used inside the area."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":267,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Supernal Attendance",
    "type":[
      {
        "arcana":7,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Investigation, Survival, Streetwise",
      "undefined":"?",
      "cost":"None or 1 Mana"
    },
    "description":"This spell will instantly tell the caster how many Sleepwalkers or Mages or Proximi may be in the area designed by this spell. Each level of Potency allows the Mage to select a different type of subject to be detected by this spell. Those protected by a veiling spell invoke a Clash of Wills with the target along with any other type of spell/effect that might conceal a target from detection.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage knows the independent numbers of subjects instead of just a lump sum."
      },
      {
        "title":"Add Matter ●",
        "description":"The spell will reveal imbued items, enchanted items, and artifacts"
      }
    ],
    "author":"Taldorblackfire"
  },
  {
    "id":268,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Detect Wonders",
    "type":[
      {
        "arcana":7,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Investigation, Academics",
      "undefined":"?",
      "cost":"None or 1 Mana"
    },
    "description":"The theurgist learns to appreciate theophanic objects near her. She chooses (Potency) subjects among the following categories; Artifacts, Imbued Items, soul stones (including daimonomika), tass, and Mana constructs such as those from the 'Platonic Form' spell. For the Duration, she is automatically aware of the objects' presence and location within the spell's Scale. She may broaden or narrow the category freely (e.g. 'all Supernal items,' 'only Artifacts,' 'only Eidoforms,' 'only Artifacts from the Aether').\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may also detect places of Supernal might; nodes, Hallows, Verges, Manteions, and even symbolic places that serve as Environmental Yantras. This can only detect places of power that are currently manifest; a Verge that only opens under the new moon will not be detected by a mage stumbling upon it in broad daylight."
      },
      {
        "title":"Add Any Other Arcanum •",
        "description":"The mage can detect magical objects and locations of non-Supernal origins that correspond with the added Arcanum. The wonder's category and the added Arcanum need not match one-to-one; a spirit Fetish that conjures flames may be detected with either Spirit or Forces, and two Vessels containing different Pillars (as Mummy) each will require different Subtle Arcana to detect."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":269,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Abyssal Lure",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Larceny, Occult.",
      "undefined":"Resolve",
      "cost":"None or 1 Mana"
    },
    "description":"Whoever first thought of this spell was a dick. It doesn't do anything on its own - instead, it’s designed to sit on the soul of a Banisher or Sleeper, aggravating their personal shards of the Abyss. This spell gives the subject 9-again on any Dissonance or Paradox rolls they make. This spell only affects targets with the Integrity advantage.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The lump of magic metastasises like a really good cancer - the Sleeper gets 8-again on the Dissonance or Paradox rolls instead."
      },
      {
        "title":"+1 Reach",
        "description":"The Sleeper also gains the Lie merit."
      },
      {
        "title":"+1 Reach",
        "description":"The mage managed to cage a sliver of the Abyss in the imago of this spell (or some managed to slip in) - whenever the subject of the spell makes a Dissonance roll, they also roll a chance die as a Paradox Backlash on this spell, modified as normal. The subject of the spell is considered to be of Understanding Wisdom for the purposes of the Duration of Paradox effects."
      },
      {
        "title":"Invite Paradox into the Spell",
        "description":"If the mage has already spent Reach to provoke Paradox Backlashes, they may funnel any Reach they take control of into those dice pools, increasing the number of dice the subject rolls by one for each Reach funneled into it."
      }
    ],
    "author":"amechra"
  },
  {
    "id":270,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Abyssal Ward",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Potency",
      "withstand":"Resolve (unwilling subjects only)",
      "suggestedRoteSkills":"Manipulation, Empathy, Occult",
      "undefined":"Resolve",
      "cost":"None or 1 Mana"
    },
    "description":"This spell wards the subject from creatures of the Abyss, meaning they gain general armor dots equal to their Prime dots against Abyssal Creature attacks and Numina as the Truth shields the subject from the Lie. Each successful use of a Numina or attack by an Abyssal creature reduces the Potency of this spell by 1 point.\n",
    "extraInfo":[
      
    ],
    "author":"Taldorblackfire"
  },
  {
    "id":271,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Aphasia",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Socialize, Subterfuge",
      "undefined":"Resolve",
      "cost":"None or 1 Mana"
    },
    "description":"Language is rooted in the mind's ability to decipher symbols - and this spell renders a specific set of symbols indecipherable. Within this spell's Area, a particular language becomes gibberish - it can't be spoken, read, or written, and anyone inside the Area finds that they cannot understand it if they somehow hear a sample.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Rather than targeting a particular language, the spell can instead suppress the symbols of a particular subculture. In that case, any meaningful communication regarding that subculture is doomed to failure; and, as a side effect, any Yantra rooted in that subculture is unusable within the area."
      }
    ],
    "author":"amechra"
  },
  {
    "id":272,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Brand of the Deceiver",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Empathy, Socialize",
      "undefined":"Resolve",
      "cost":"None or 1 Mana"
    },
    "description":"The world listens when an arbiter of Truth proclaims the guilt of a deceiver. An Apprentice of Prime is capable of placing a Rune, visible only to those with Mage Sight, on a subject with the Guilty Condition that clearly marks them as a liar or a traitor. What’s more, although non-Mages cannot see the rune, its Supernal Truth leaks into the subject’s pattern regardless, causing them to start any social maneuvering attempt at one impression level lower than they normally would.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell may be replaced on a subject without the Guilty Condition, so long as the caster knows they have lied about something within the current scene. Note that it has to be a lie - simply being factually incorrect won’t allow the use of this Reach effect."
      },
      {
        "title":"+2 Reach",
        "description":"As the above Reach effect, but the subject also gains the Guilty Condition."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":273,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cassandra's Curse",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Politics, Subterfuge, Occult",
      "undefined":"Resolve",
      "cost":"None or 1 Mana"
    },
    "description":"Just like the prophet who always spoke the truth but was cursed so that no one believed her, the mage conceals all truth the subject speaks. Everyone who listens to her words is left with the impression that she's either lying, ignorant, or confused. If the spell adds a tinge of falsehood to statements that Sleeper witnesses are absolutely certain is true, those Sleepers may suffer Quiescence if they think about the contradiction too much.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Listeners perceive the subject to not just be confused or mistaken, but outright lying."
      },
      {
        "title":"+1 Reach",
        "description":"The spell affects all forms of communication the subject engages in."
      },
      {
        "title":"+1 Reach",
        "description":"The mage can restrict the curse to apply only to particular facts or categories. (e.g. 'My company's illegal financial dealings', 'The secret tunnels underneath my house', 'Statements made while performing as a fortune teller')."
      }
    ],
    "author":"Strill"
  },
  {
    "id":274,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Control Nimbus",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Larceny, Persuasion, Occult",
      "undefined":"Resolve",
      "cost":"None or 1 Mana"
    },
    "description":"The mage manipulates the subject’s Nimbus. For the spell’s Duration, the mage can cause the Nimbus to flare when it would not, or to fail to flare when it otherwise would. The spell may also cause it to continuously flare, applying its Nimbus Tilt to those who see it for as long as they continue to see it flare.\nIf the Nimbus has been detached from its owner, such as with the Sever Nimbus spell, this spell also allows the mage to move the Nimbus around within sensory range.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and add Fate •",
        "description":"The mage may cause the subject's Nimbus to flare towards specific targets, applying the Nimbus Tilt to them if they can see it, but not to others."
      },
      {
        "title":"1 Mana",
        "description":"The mage may reveal the subject’s Nimbus to the Fallen World, affecting even those not using Mage Sight. Sleepers suffer Quiescence after the Tilt ends."
      },
      {
        "title":"1 Mana",
        "description":"The mage imprints the target's Signature Nimbus on a single object, place, or person. (See Signature Nimbus p.90)."
      }
    ],
    "author":"Strill"
  },
  {
    "id":275,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cult Leader",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Persuasion, Intimidation",
      "undefined":"Resolve",
      "cost":"None or 1 Mana"
    },
    "description":"This spell causes the very air around the subject to be filled with what sparse mystical and magical potential is still present in the Fallen World, a reflection of the Aether itself. As a result, people feel as though they are in the presence of some sort of great authority, some might even mistakenly believe the subject is an angel or some other form of divine agent. During Social Maneuvering, this removes Doors equal to Potency.\n",
    "extraInfo":[
      
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":276,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Liar's Mark",
    "type":[
      {
        "arcana":7,
        "degree":2
      },
      {
        "arcana":4,
        "degree":1
      }
    ],
    "properties":{
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Medicine, Empathy, Survival",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"By linking his mind to the estatic truth of the Primal Wilds, the subject’s eyes are more alert of the telltale signs of lies and he is more quick to catch up on body language. The subject gains the Informed condition for the purpose of determining what are the reasons of a person for lying to him.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage removes social doors equal to the potency of the spells as his body is in tune with his victim in a primal level."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The mage knows his victims lies and imposes the Guilty or Leveraged condition."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The mage brands the subject with an invisible rune marking the victim as a liar, thus lowering by one impression level of the victim by level of potency."
      }
    ],
    "author":"Emerick"
  },
  {
    "id":277,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Magic Shield",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Athletics, Expression",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"This simple and tried spell is commonplace in Awakened society; even mages who don't study Prime do try to at least have an Imbued Item with this spell. It simply protects the user against any and all spells being cast on him; the other caster needs to win Clash of Wills with spell caster to affect the subject of Magic Shield. Moving to Advanced Potency gives +1 die per Potency in this Clash of Wills, and Duration gives its usual benefits.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster can temporarily suppress this spell to allow a friendly mage to work his magic on him any time he wants to do that."
      },
      {
        "title":"+1 Reach and add Space ••",
        "description":"The mage may act as 'shield-bearer', using his own shield to cover an ally he has a sympathetic connection with. The spell needs to use Sympathetic Yantra at casting to allow this effect; the mage needs a separate Yantra for each mage he wants to cover up in that way."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":278,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"OotS Reference",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Crafts, Intimidation",
      "undefined":"Duration",
      "cost":"None or 1 Mana"
    },
    "description":"This spell alters the function of a set of High Speech runes. When the runes are invoked as a yantra during the creation of an Imago, in addition to providing the usual dice benefit, they will 'contain' the spell anchored to them. If the Potency of this spell meets or exceeds that of the anchored spell, the anchored effect does not take place, remaining ineffectual until OotS Reference is dispelled or lapses. If cast upon an active set of runes that are already anchoring a spell, OotS Reference can temporarily suppress an anchored effect (Potency permitting.)\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"If the runes are marred or defaced, OotS Reference will end and the anchored effect will be released instead of being disrupted, taking effect on whatever the runes were inscribed upon for the rest of its Duration."
      },
      {
        "title":"+2 Reach",
        "description":"As above, but the released effect will instead turn upon the person or object that damaged the runes, if they are a valid target."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":279,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Reinforce Pattern",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"None or 1 Mana"
    },
    "description":"This spell allows the Mage to infuse the subject with Mana, restoring Health or Structure up to a maximum equal to potency. It takes 3 mana to restore a point of lethal or bashing damage or Structure. Alternatively, 3 mana can be spent to remove a single physical Tilt or mental condition.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 3 Mana",
        "description":"For 3 mana the subject gains a single dot in a physical attribute."
      }
    ],
    "author":"Menace"
  },
  {
    "id":280,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sum of All Parts",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Craft, Stealth, Subterfuge",
      "undefined":"Potency",
      "cost":"None or 1 Mana"
    },
    "description":"The spell masks the connection of an item with its Supernal idea, which makes recognizing its purpose impossible. A table becomes a flat surface raised on four legs; a car is perceived as a metal contraption on wheels. Other people can still try to improvise and deduce properties of the occluded item: if something has wheels, for example, it almost certainly can be pushed around. Using it effectively, however, is nearly impossible - a fencer may still wield a sword as an improvised cutting weapon, but it doesn’t give him more advantage than a sharp piece of metal would.\nThis provides an opportunity to hide a weapon in plain sight or make a piece of contraband pass a casual search. This still carries a risk - the airport security guard may still react with suspicion, seeing someone with a steel cylindrical implement in their hands. A careful examination of an item (which may require dismantling) lets someone sufficiently curious determine what the item actually is. For a Sleeper, this almost always triggers Disbelief. Seeing the veiled tool actually work as intended may have the same effect.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell also connects the object with the Supernal idea of decoration. This lets the mage blend the item with their clothes or home appliances - a bomb displayed proudly on the table is just a weird-looking knick-knack."
      },
      {
        "title":"+2 Reach",
        "description":"Allows an object to pass for another one. E.g"
      }
    ],
    "author":"Gantolandon"
  },
  {
    "id":281,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Understand the Platonic Form",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Crafts, Expression",
      "undefined":"Potency",
      "cost":"None or 1 Mana"
    },
    "description":"The Aether is where the platonic forms exist, and fallen objects are mere flawed versions of perfect symbols. However, objects are still these symbols given flawed form in Fallen reality and this spell allows the mage to perceive its true symbolism and align the object more closely to its symbol and by doing so getting a clearer understanding of the use of the object. This spell gives the user of the object the 9-again quality for rolls to use the object for a number of rolls equal to Potency for the Duration.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"gets the 8-again quality."
      },
      {
        "title":"+1 Reach",
        "description":"the user gets the Informed condition about the use and function of the item."
      }
    ],
    "author":"Poseur"
  },
  {
    "id":282,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Claim Cloister",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Politics, Occult",
      "undefined":"Potency",
      "cost":"None or 1 Mana"
    },
    "description":"A cabal's Demesne is where they are at their strongest, allowing them to prepare and experiment extensively, unhindered by the Lie. The easiest way to combat them is with a well warded Sleeper shock troop, but this is normally loud and messy. A cabal going in unaware risks a very deadly encounter. In order to provide a more tactically sound approach, the Arrow have devised this as a way to usurp control of these magical bunkers.\nWhen cast upon all the soul stones creating a Demesne or within the entire area they are in, it allows them to specify the conditions necessary to access its benefits. The caster may specify up [Potency] conditions necessary to receive the benefit, as well as whether some or all need to be fulfilled in order to qualify. Possible conditions include being of a certain Path, specific Nimbus signatures, Legacies, Shadow Name, yantra type or theme (including Cabal Theme) .\nSeers are fond of setting specific yantras as Keys, using this to tempt invading Pentacle mages to use their patron's symbols. A few others prefer to use it as a political statement, forcing visiting Pylons to pay homage to their Exarchs.\nWhenever facing highly defended Sanctums, this spell is usually utilized as part of the opening salvo. While the mages inside deal with containing spells that suddenly risk Paradox and summons being corroded by Fallen exposure, the edge of the battle can be seized.\nThere have even been cabals that use temporal pockets alongside this spell to create, on the fly, Demesnes only they can use, rapidly overwhelming the opposition.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":283,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Serpent's Tongue",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Subterfuge, Persuasion, Politics",
      "undefined":"Potency",
      "cost":"None or 1 Mana"
    },
    "description":"While it is said that the Angels of the Aether cannot lie, the inhabitants of the Fallen World are far more fallible. This spell hides the falsehood in the lies its subject speaks. Any mundane methods of detecting deception fail. Supernatural attempts trigger a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"All forms of falsehood are hidden, including physical disguises, while the Duration Lasts."
      },
      {
        "title":"+1 Reach",
        "description":"The subject gains Potency bonus dice to mundane rolls to deceive another while the Duration lasts."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":284,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Ground Paradox",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The Mage targets a spell with Released Paradox and guides the Paradox into themself to ground it out in their own Wisdom. This spell affects a number of released Paradox up to Potency, the Mage casting then rolls their own Wisdom to prevent the Paradox from affecting the spell, suffering any consequences as normal. If cast as an Instant action this spell can be used out of turn order. If additional targets are added then the Mage can distribute the Paradox across the targets but the spell is Withstood by Resolve (subtract the highest Resolve from the amount of Paradox affected).\nA useful spell for Guardians and a good way to show that you're seeking the path of Wisdom, this spell can also teach Hubristic Mages a lesson or be used to prevent a Scelestus from empowering their spells with more Paradox.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"the Mage gains 9-again on the Wisdom roll."
      },
      {
        "title":"+2 Reach",
        "description":"as above, but 8-again."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"this spell can be used Reflexively for an additional point of Mana."
      }
    ],
    "author":"proindrakenzol"
  },
  {
    "id":285,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lies Like Truth",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Larceny, Subterfuge",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Is a lie the absence of Truth, or just a Truth in the wrong place at the wrong time? To the Scelestus who developed this Rote, this is a pointless question: it's all a Lie anyway.\nThis spell alters the expression of untruths and illusions. It does not matter whether the deception is supernatural or mundane, innocuous or malicious, though it cannot change the basic form that the lie takes. For example, if the subject of the spell has dyed hair, the Mage could change the color of the subject's hair to any other color, but could not change the subject's hair into a duck. Forged documents could be rewritten to give different (equally false) information, but must concern the same basic subject matter. If the subject of the spell is an illusion of supernatural origin, and the Mage succeeds in a Clash of Wills against the owner of the effect, they can modify details of the illusion (e.g. change an illusory person to look like a different person) but cannot change the illusion's basic form.\nThe only known Rote of this spell is befouled. It may be that this effect is not possible without antinomiam sorcery.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage may specify, in advance, the expression of lies the subject makes, one per Potency. If the subject does not make any applicable lies during the spell's Duration, the spell has no effect."
      }
    ],
    "author":"Scriptorian"
  },
  {
    "id":286,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Red Herring",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This spell serves a complimentary role to deceptive magical effects. Whenever the subject of Red Herring wins a Clash of Wills to prevent any deception she is perpetrating from being uncovered, she may further deceive the loser of the Clash by making the loser believe they won the Clash but directing them to some other object -- the red herring -- as the deception. This effect may occur a number of times during the Duration of Red Herring equal to Potency.\nThis spell helps tricky mages get around the annoying fact that even if one of their magical deceptions holds up to scrutiny, an opponent using Pierce Deception will always be more suspicious due to the mere occurrence of a Clash of Wills, win or lose. It can be used to pass a consequential deception off as a trivial one, or to send an opponent on a wild goose chase by convincing them that something which is true is actually a lie.\n",
    "extraInfo":[
      
    ],
    "author":"galivet"
  },
  {
    "id":287,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Illusory Imagos",
    "type":[
      {
        "arcana":7,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Display of Power and Mage Sight reveal things about spell imagos, but this spell can deceive those means of perception. When the subject of Illusory Imagos casts any spell, she may disguise its imago to appear like that of any other spell that utilizes the same Arcana. If the subject of Pierce Deception can see a disguised imago, they may penetrate the illusion by winning a Clash of Wills and perceive the true imago.\nSpells so disguised are more difficult to counter; the caster gets a bonus on the Clash of Wills roll equal to Potency.\nIllusory Imagos also prevents correct identification of spells made visible by Display of Power.\n",
    "extraInfo":[
      
    ],
    "author":"galivet"
  },
  {
    "id":288,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Bend to the Winds",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Occult, Science",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This spell allows the mage to redirect an aimed Supernal spell or Legacy attainment that is directly targeting her. When a mage could use her Defense against an aimed spell, she may use this spell instead to redirect it as an instant action. If cast with a prolonged Duration, the mage may take a Dodge action each turn and use this spell instead of receiving the normal benefits for Dodging. The spell allows the mage to turn a number of aimed spells directed at her up to this spell’s Potency. She does not have fine control over where each spell is deflected, and the spell cannot make spells reverse direction entirely, only veer off target. By default, the Storyteller determines a random direction for the spell to travel when redirected.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage can use Bend to the Winds’ effect as a reflexive action instead."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may control where the spell is redirected to, as long as it is within 90 degrees of the original arc in any direction."
      },
      {
        "title":"+1 Reach and Add Time • ",
        "description":"The mage can turn spells too fast for her to gain Defense against them."
      },
      {
        "title":"+1 Reach and Add any Other Arcanum • ",
        "description":"By adding the relevant Arcanum, a mage can turn truly magical effects by other sources of power — Spirit to turn a Blast Numina, Fate to deflect a Changeling’s Contract, and so on. This would not work against a Werewolf’s claws or car thrown with a Promethean’s prodigious strength."
      },
      {
        "title":"+2 Reach",
        "description":"The spell is fully reversed and targets their user."
      }
    ],
    "author":"Iladas"
  },
  {
    "id":289,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Clarification",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"When Focusing his Mage Sight and attempting Revelation, the subject can ignore the penalty caused by Opacity, up to this spell's Potency.\n",
    "extraInfo":[
      
    ],
    "author":"Justin Sane"
  },
  {
    "id":290,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Empower Nimbus",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Intimidation, Persuasion, Occult",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The mage can strengthen the subject’s Nimbus, making their Nimbus Tilt more powerful. Choose an Attribute or Skill which the subject’s Nimbus Tilt affects. If the Nimbus tilt applies a bonus to that trait, the bonus increases by the spell’s potency. If a penalty, the penalty worsens by the spell’s potency.\nIf the mage targets himself with this spell, this spell affects its own Nimbus Flare as well.\nThis spell also improves the Nimbus’ ability to contest the auras of other supernatural creatures. Add the spell’s Potency to any contested roll between the subject’s aura and another creature’s aura.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell affects an additional Attribute or Skill covered by the subject’s Nimbus tilt. Divide the spell’s Potency between both. This effect may be applied multiple times."
      }
    ],
    "author":"Strill"
  },
  {
    "id":291,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Palimpsest",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Crafts, Expression",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This effect allows additional spells to be anchored to a single set of High Speech runes. Casting an additional spell into the runes requires the expenditure of one mana during formation of its Imago. The secondary spell may make use of the yantra bonus of the runes (without having to take a ritual interval to inscribe them) and is also disrupted if the runes are erased or defaced.\nThe Palimpsest can hold a number of spells equal to its Potency (in addition to the first spell.) If the Palimpsest is dispelled or its Duration lapses, the secondary spell is lost.\n",
    "extraInfo":[
      
    ],
    "author":"Five Eyes"
  },
  {
    "id":292,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Phantasm",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Crafts, Subterfuge",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"This spell creates an inanimate phantasm, a construct woven of Mana threads. Such a creation possesses a degree of substance and appears to be a normal object of its type to Sleeping eyes, but is in reality a solidified illusion. The mage can create books, knives, chairs, stones or any other lifeless, inanimate objects she can think of. These objects do not and cannot possess qualities such as conductivity, magnetism or the like, because they aren't matter in the magical sense of this word.\nThe spell creates an object of Size 5 or less. The phantasm has one point of Durability. It is fragile and breaks easily. The mage cannot create functional tools, weapons or armor at this level. To create a convincing illusion, a reflexive Intelligence + appropriate Skill roll is required, and excess successes on the casting add one die each to this roll. To simulate an animal, use Animal Ken. For an object, use Crafts. For a person, use Medicine or perhaps Empathy.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage creates a more sturdy phantasm, which can be a functional tool, weapon or armor. Weapons created in this way deal lethal damage, and armor works as normal armor."
      },
      {
        "title":"+1 Reach",
        "description":"Created object has simultaneously Ephemeral Enchantment casted on it."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"The mage imbues phantasm with celestial power, creating a short-timed magical item. Weapons, created in this way, deal aggravated damage, and armor works as Prime Armor in addition to being normal armor at the same time. Cost"
      }
    ],
    "author":"Dark Archon "
  },
  {
    "id":293,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Power Glows",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Medicine, Occult, Expression",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"Mana is normally invisible and intangible. Under Mage Sight it may appear as a fiery, fluid energy of pure white or a prismatic color. With this spell the mage condenses the Mana in his pattern into a more concentrated form.The benefit of this is that the mage's pattern can contain more of this condensed Mana than regular Mana, increasing the mage's Mana capacity by Potency. However, the drawback to this is that the condensed Mana is visible to all and causes the mage's body to emit a faint light. At high Potency the mage's veins may even start to glow up and light may emit from the eyes and throat. If the spell expires, any Mana beyond the mage's capacity is lost.\n",
    "extraInfo":[
      {
        "title":"Add Any Other Arcanum •",
        "description":"By using the relevant Arcanum/Arcana the mage may now condense the mystical energy (Essence, Vitae, etc) of other supernatural entities as well. This will carry the same drawback of making that energy visible in some way for all to see."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":294,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Road Less Traveled",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"?",
      "undefined":"Potency",
      "cost":"1 Mana"
    },
    "description":"The Mage can impose his personal symbolism on a Tool Yantra, making it resonate with his Path.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage can impose the symbolism of a different Tool. For example, he can cause a simple stick to have the symbolism of a Coin."
      }
    ],
    "author":"Justin Sane"
  },
  {
    "id":295,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sanctify Space",
    "type":[
      {
        "arcana":7,
        "degree":3
      },
      {
        "arcana":8,
        "degree":2
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Safe Place",
      "suggestedRoteSkills":"Occult, Persuasion, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"For the willworker on the go, this spell aligns a location with the mage's mystical practice, granting the Sanctum Merit at a dot rating equal to Potency (to a maximum of five). The spell is Withstood if the affected area encompasses or is part of an existing Safe Place that does not belong to the mage.\n",
    "extraInfo":[
      
    ],
    "author":"espritdecalmar"
  },
  {
    "id":296,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Souvenir",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Safe Place",
      "suggestedRoteSkills":"Academics, Occult, Larceny",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"This spell invests an object with the significance of an Environment. The object can be used as a Tool Yantra in situations where the location's symbolism would be relevant, providing the usual +1 bonus. It may be evoked in this fashion up to once per level of Potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The spell may invest an object with a Verge or Demesne's symbolism. The Tool provides a +2 die bonus and, while it cannot totally negate Paradox, does act as a Dedicated Tool."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":297,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Suffer Not The Witch",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Intimidation, Medicine, Occult",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"An old 'favorite' amongst Banishers, this spell messily purges mana from a Pattern. The target must immediately spend Mana equal to the spell's potency on absolutely nothing - if this would exceed their limit on mana spent each turn, they continue wasting mana until they have either spent a total amount of Mana equal to the spell's potency or the spell ends. As a side effect, any Mage targeted by this spell immediately flares a warped version of their Nimbus - it lasts for the full Duration of the spell, though it doesn't impose their Nimbus Tilt.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The victim of the spell also suffers from the Nausea tilt - this is not considered part of the spell's effects, and therefore doesn't end when the spell does."
      },
      {
        "title":"+1 Reach",
        "description":"If the victim was under the effects of Active Mage Sight or Mage Armor, they immediately end. For the Duration of the spell, reactivating either effect costs an additional point of Mana."
      },
      {
        "title":"+1 Reach",
        "description":"The victim must immediately scour their Pattern - doing so doesn't grant them additional Mana (or whatever other benefit they would receive from the scouring)."
      }
    ],
    "author":"amechra"
  },
  {
    "id":298,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Supernal Disconnect",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Gnosis",
      "suggestedRoteSkills":"Occult, Larceny, Intimidation",
      "undefined":"Duration",
      "cost":"Varies (See Below)"
    },
    "description":"A mage can reduce the Supernal Connection a person possesses, making it harder for them to use magical tools with a connection to the Supernal World. Any attempt to use a magical item by the subject of this spell suffers a penalty equal to Potency on a number of uses equal to Potency.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"This spell inflicts a penalty equal to Potency on all spells cast by the subject for a number of rolls equal to Potency."
      },
      {
        "title":"+1 Reach",
        "description":"This spell can affect Focused Mage Sight acting as a penalty equal to Potency on a number of Scrutiny Rolls equal to the Potency."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"This spell can reduce the number of merit dots equal to Potency available to Sleepwalkers involving their connection to the Supernal Realms (Banner-Bearer, Relic Attuned, etc)."
      }
    ],
    "author":"Taldorblackfyre "
  },
  {
    "id":299,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Unlocking the Brighter Road",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Gnosis",
      "suggestedRoteSkills":"Craft, Survival, Occult",
      "undefined":"Duration",
      "cost":"Varies (See Below)"
    },
    "description":"This spell reinforce the supernal connection between the mage and his tower, thus providing a safer route to bring forth Supernal entities. It grants [Potency] extra rolls to the extended action required to Summon one.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"the extra rolls are extra safe so there can't be an abyssal incursion."
      },
      {
        "title":"+1 Reach",
        "description":"the extra rolls get 9-again."
      }
    ],
    "author":"Sir Bardiel"
  },
  {
    "id":300,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Words Unbound",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Gnosis",
      "suggestedRoteSkills":"Expression, Academics",
      "undefined":"Duration",
      "cost":"Varies (See Below)"
    },
    "description":"Although God twisted human tongues for the sin of constructing a tower to heaven, all languages are still a way of transfering truth between people. The mage can bolster that truth making it pierce through the barrier of words and phrases. The subject is understood by anyone present regardless of any language she is speaking. He may even speak gibberish and others will still understand the meaning behind his words.\n",
    "extraInfo":[
      
    ],
    "author":"Menace"
  },
  {
    "id":301,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Crown of Confidence",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Gnosis",
      "suggestedRoteSkills":"Expression, Politics, Athletics",
      "undefined":"Duration",
      "cost":"Varies (See Below)"
    },
    "description":"People rally to the faithful and confident, marking them as their leader. For the Duration, the truth of the subject's presence is strengthened, granting a (Potency) bonus on their rolls to assume leadership and command others. Alternatively, the spell may impose a (Potency) penalty on any rolls to legally or rhetorically oppose and restrict the subject.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell grants both effects."
      },
      {
        "title":"+1 Reach",
        "description":"The protection against legal restriction extends to spells that would physically or mentally bind the subject, adding Potency to their Withstand."
      },
      {
        "title":"Add Mind ••",
        "description":"The subject gains the 'Leadership' Specialty for either the Politics or Persuasion Skill."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":302,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Gird the Faithful",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Gnosis",
      "suggestedRoteSkills":"Weaponry, Expression, Crafts",
      "undefined":"Duration",
      "cost":"Varies (See Below)"
    },
    "description":"The theurgist projects her faith and integrity outwards. For the Duration, the caster downgrades the damage of (Potency) attacks by one level; bashing damage is nullified. She may increase Scale to protect subjects other than herself. This spell only works against directed attacks; environmental damage such as an open fire or poisonous fumes is not affected, unless it was created or controlled by an attacker.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The protection extends to psychic harm. Apply Potency as armor against attacks that sap Willpower or Mana points."
      },
      {
        "title":"+1 Reach",
        "description":"The faithful flock is spiritually girded. Sleeper and Sleepwalker subjects gain a (Potency) bonus to breaking point rolls regardless of source."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":303,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Create Tass",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Gnosis",
      "suggestedRoteSkills":"Academics, Craft, Occult",
      "undefined":"Duration",
      "cost":"Varies (See Below)"
    },
    "description":"With this spell, a mage can channel Mana (normally a cabal-mate's) into a tangible form, such as water in a sports bottle, creating Tass. This Tass is subject to the normal rules concerning its use. Each point of Potency creates approximately 120ml of drinkable liquid Tass, 100 grams of edible solid Tass, or 100 grams of non-edible Tass. Edible or drinkable Tass are the most common forms. By way of reference, 120ml is effectively a third of a typical soft drink can, and 100 grams is the mass of a large sausage roll or a small orange.\n",
    "extraInfo":[
      {
        "title":"+2 Reach",
        "description":"The effect is Lasting."
      }
    ],
    "author":"LadyLens"
  },
  {
    "id":304,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Resonance Cascade",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Gnosis",
      "suggestedRoteSkills":"Expression, Occult, Academics",
      "undefined":"Duration",
      "cost":"Varies (See Below)"
    },
    "description":"Resonance forms the backbone of much of the supernatural of the Fallen World. Moreover, Resonance subtly affects the Fallen World, attempting to reinforce its theme, even without spiritual activity. This spell enhances the potency of Resonance, causing its self reinforcing nature to overgrow. If possible, examples of the theme will flock to the subject. Characters exposed to the Cascade will find conversation and thoughts turning towards the Theme. Those making decisions will choose towards promoting the theme significantly more often. Prolonged exposure tends to cause Intrusive thoughts, even after the exposure stops, and Long Term exposure possibly alters Aspirations and Obsessions into promoting and spreading the Resonance Theme.\nMages can use the Resonance of a Cascade as a +2 yantra to spells relating to the Resonance.\nAll This is without the influence of ephemeral entities, who are often driven to a frenzy by the cascade. Those entities benefiting from the resonant condition gain Potency more essence from staying near the Resonance, and Spirits may add Potency to rolls to feed off the Resonance, even through the Gauntlet.\nNote: This spell was inspired by a line on pg 241 which states that ley line resonance of violence increases the murder rate. I wanted the spell not to actually affect the physical word without some reach. If you want a different version of the spell that does affect the physical, the spell would be a weaving that works like a nimbus by increasing dice rolls relating to the theme and penalizing rolls opposed to the theme.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Treat exposure to the Cascade like the Urged condition."
      },
      {
        "title":"+2 Reach",
        "description":"Those rolls relating to the Theme gain 9-again, things relating to the Theme with prolonged exposure grow stronger and healthier, as a narrative effect. Add an additional reach for 8-again."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":305,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Tainted Source",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Hallow Rating",
      "suggestedRoteSkills":"Weaponry, Intimidation, Subterfuge",
      "undefined":"Duration",
      "cost":"Varies (See Below)"
    },
    "description":"Hallows are sacred to the Awakened, and many draw upon them for strength. Poison them, and weaken the Awakened as a whole, making this spell a favorite among Banishers and Scelesti. Technically, this rote can be used for positive means, but far too many have been hurt, and too many Hallows lost for this rote to have anything but a sinister reputation. The subject for this spell must be Hallow. The spell adds a Hallow feature. If this rote is Befouled, the Hallow becomes a Nigissu.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell may include another Hallow feature. This reach can be used multiple times."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":306,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Produce Tass",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Hallow Rating",
      "suggestedRoteSkills":"Occult, Crafts, Socialize",
      "undefined":"Duration",
      "cost":"1 Mana per subject"
    },
    "description":"This rote is an older variant of the more well known Mana Battery, that has fallen into disuse. The spell imbues its subject with one point of Mana, that can be extracted by symbolically consuming the subject. If the Duration runs out and the Mana hasn't been absorbed, then it detaches from the Subject and and fades away, presumably to the nearest Hallow.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may select a Hallow Feature to imbue the created tass with."
      },
      {
        "title":"+2 Reach",
        "description":"The effect is lasting."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":307,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Display Halo",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Occult, Academics",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"To the uninitiated, it is for good reason that the inhabitants of the Aether often say \"do not be afraid\", for the burning Truth evident in their holy radiance rattles lesser souls. This spell emulates the glory and terror of the Angel's Halos by empowering a subject's Nimbus Flare into a Nova. When the spell is cast, the subject's Nimbus is drawn out in a spectacular manner, and add Potency success to the Gnosis roll for the Nimbus strength. The Nimbus continuously flares until the spell ends.\nSuch a bright light burns deeper, and those subject to the Nimbus Tilt gain an appropriate condition relating to the Nimbus, such as Awestruck, Swooned, Inspired or Shaken. They also become valid subjects for the Mage's Long-Term Nimbus to affect.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The conditions resulting from being subjected to the Nimbus Tilt may change based on context of who the Mage is. A Thyrsus's aura of being hunted by predators may inspire allies who know that the Thyrsus is on their side."
      }
    ],
    "author":"TempleBuilder"
  },
  {
    "id":308,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Supernal Vyuha",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Stealth, Subterfuge, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Another creation of Subutai, improvised amidst an invasion of the city by spirits corrupted by an Idigam. It allowed him to dynamically reconfigure his defenses, providing quick and efficient responses to an ever more chaotic battlefield. It was named after a type of strategic positioning that simultaneously blunted the opponent's offensive and increased the threat level of one's own troops.\nWhen cast upon a subject, it allows them to select up to [Potency] area of effect spells under their control. Once per turn, the selected spell's center can be moved anywhere within its affected area (such as moving a spell that affects a campus to the edge of it and moving it to another campus' worth of space the next turn). Selecting a spell costs 1 Mana.\n",
    "extraInfo":[
      {
        "title":"Observation",
        "description":"The wording is intentionally written in such a way as to allow a Sleepwalker holding spell control and equipped with a mana battery to move the spell, which has all sorts of interesting strategic applications."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":309,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Payment in Power",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Crafts, Occult",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The methodical experimentation required to comprehend Magic is dangerous at the best of times. Exploring ancient ruins, dealing with unknown beings, traversing new dimensions are only a few. Being mindful of their own safety, as well as their own aides', the Eyes of Ein Sof developed this rote to allow for robust safety precautions to be placed upon their expeditions and laboratories.\nWhenever cast upon an Awakened, the subject can choose up to [Potency] spells that can be safely relinquished upon spreading an amount of mana. Selecting a spell costs a point of mana.\nAfter a spell is selected, after each Ritual interval, the mage must pay a minimum of a mana and up to [Potency] points of mana. If they are unable to pay, this spell ends. Whenever the total mana paid equals twice the total Arcanum rating, the spell is safely relinquished.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":310,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Suppress Intuition",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Brawl, Intimidation, Politics",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"By means of fraying a willworker's Gnosis, the mage disrupts the ability to cast Praxes. Choose a single spell when casting: The subject may not cast the chosen spell as a Praxis for the Duration, and instead must rely on improvised magic or rotes if she wishes to cast it at all. The mage must figure out what spells the subject knows as Praxes by other means.\n",
    "extraInfo":[
      {
        "title":"Add Fate ••",
        "description":"The mage can instead describe a general type of spell to be suppressed (\"The strongest Matter spell she knows,\" \"A Time Unveiling spell,\" \"A spell that could kill me,\" etc). One qualifying spell known by the subject as a Praxis is affected."
      },
      {
        "title":"Add Mind ••",
        "description":"This spell can suppress a Rote instead. For an additional Reach, this includes casting the named spell from a Grimoire."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":311,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Investiture of Power",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Crafts, Expression, Occult",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Magical objects are tantalizing to mages as both Mysteries and prizes within themselves. Utilizing their power, however, can sometimes be a frustrating experience when confronted with their limitations. Naturally, a way was found to surpass them.\nThis spell can be cast on either an Imbued Item or an Artifact. When cast on an Imbued Item, it grants the subject an effective Gnosis rating equal to the spell's Potency. An Awakened user must calculate the spell's dice pool using this Gnosis rather than their own, which also determines Paradox dice for overreaching. When cast on an Artifact, the spell adds its Potency to the object's dot rating for the purposes of its effective Gnosis. Casting this spell on an Artifact is an Act of Hubris against Enlightened Wisdom: Who are you to say a Supernal treasure is too weak?\n",
    "extraInfo":[
      {
        "title":"+1 Reach, +1 Mana, Add Appropriate Arcana",
        "description":"The mage can instead imbue an Artifact with an additional spell that the object could potentially cast whose highest required Arcanum is equal to this spell's Potency. The spell must be one the mage himself is capable of casting, and also fall within the Artifact's effective Arcanum ratings. For example, to grant an Artifact the spell Exceptional Luck, both the mage and the Artifact must have at least two dots in Fate. This effect cannot be applied to Imbued Items."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":312,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hallow Bond",
    "type":[
      {
        "arcana":7,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Hallow’s dot rating.",
      "suggestedRoteSkills":"Occult, Persuasion, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The mage creates a mystical connection with a Hallow, allowing him to place restrictions on those who can harvest Mana from it. When casting this spell, the mage chooses one target – that could be himself or a cabal mate or, using the Scale factor, the entire cabal – to be allowed to use the Hallow. Anybody else trying to harvest mana from the Hallow provokes a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"Add Death 2",
        "description":"the requirement to harvest mana without a Clash of Wills is to Scour your own pattern."
      },
      {
        "title":"Add Fate 2",
        "description":"the mage names a particular oblation as a requirement to harvest the mana from that Hallow. Anyone performing the chosen oblation can harvest mana without provoking a Clash of Wills."
      },
      {
        "title":"Add Space 2",
        "description":"only the mage and those with a Strong sympathetic connection with the Hallow can harvest the mana from it without provoking a Clash of Wills."
      },
      {
        "title":"Add Spirit 2",
        "description":"to harvest mana without a Clash of Wills, one must offer at least 1 Essence of the same Resonance of the Hallow."
      },
      {
        "title":"Add Time 2",
        "description":"the mage chooses a moment of the day – like noon, dawn or dusk. Any attempt to harvest mana from the Hallow outside the chosen moment provokes a Clash of Wills."
      },
      {
        "title":"+1 Reach",
        "description":"the restrictions imposed by the spell apply to the tass produced by the Hallow as well."
      },
      {
        "title":"Note",
        "description":"This spell is an adaptation from the homonymous spell presented in Sanctum and Sigil (page 94). Feedback is always appreciated."
      }
    ],
    "author":"Redzone"
  },
  {
    "id":313,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Manifest Truth",
    "type":[
      {
        "arcana":7,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Hallow’s dot rating.",
      "suggestedRoteSkills":"Occult, Persuasion, Survival",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Taking a lesson from the Ascended who leave behind bodies of crystallized Resonance, a Mage with Prime can cause other sources of Resonance to similarly crystallize. The Resonance always takes a form that's appropriate to the Resonance's flavor, for instance Life Resonance might take the form of a crystalline flower. Unlike the artifacts left behind by the Ascended, these objects have no artifact-like powers. They do however serve as +1 Persona Yantra on an applicable spell like a Mage drawing on the power of a Ley Line or Node. They also count as Resonant to appropriate ephemeral creatures.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The Mage can choose the appropriately themed form that the Resonance takes."
      },
      {
        "title":"Add another Arcana ••••",
        "description":"The crystallized Resonance doesn't have to adhere to a crystalline structure. Fire Resonance burns and Flower Resonance can be planted and bloom in its season."
      }
    ],
    "author":"Mrmdubois"
  },
  {
    "id":314,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Scribe Schematic",
    "type":[
      {
        "arcana":7,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Total Arcanum dots of all Arcana used in the spell being scribed.",
      "suggestedRoteSkills":"Crafts, Science, Occult",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"By means of this spell, the mage encodes a Rote in a way that makes it easier to create Imbued items of that Rote. This spell can be used in two different ways: to copy an existing Schematic or to inscribe a Rote the Mage knows into a Schematic.\nOnly a single Rote can be inscribed per casting of this spell, but a given Schematic may hold multiple Rotes at a time. When this spell's Duration expires, the inscribed Rotes fade and cannot be recovered.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For one point of Mana, the spell's Duration is Lasting."
      },
      {
        "title":"Schematic (• to •••••)",
        "description":"Schematics are Grimoire like objects designed to aid in the creation of Imbued items. Originally created by the ancient Forge Masters to ease in the Imbuing of common items, a similar process using more modern notation was created by the Thaumatech Engineers for the same reason; the Thaumatech Engineers claim independent creation based on logical extrapolation from Grimoires, whereas many in the Forge Masters claim theft of proprietary secrets of their Legacy.Regardless of which version of this process is learned (or if it's developed independently) the results are the same, crafting an Imbued item while following a schematic doubles the interval required for Imbuement, but grants the rote action quality to the Imbuement rolls.Each dot in this Merit allows for the Schematic to contain one ote of any Arcanum rating."
      }
    ],
    "author":"proindrakenzol"
  },
  {
    "id":315,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Spell Steal",
    "type":[
      {
        "arcana":7,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Arcanum Rating of target spell",
      "suggestedRoteSkills":"?",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana (Not sure about this)"
    },
    "description":"Instead of merely Dispelling a spell, the mage takes control of an active spell as though they were the one to cast it. (i.e. takes up spell control slots). The mage must be able to perceive the spell either through active Mage Sight or other means.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Alternatively, the mage can use the spell to switch the targets of an active spell or a spell being cast (e.g. a spell that drains the life of everyone in the area will instead funnel the life of the original caster towards everyone in the area)."
      },
      {
        "title":"+2 Reach, 1 Mana and Time ••",
        "description":"The spell can be cast reflexively."
      },
      {
        "title":"Spirit ••, Mind ••, Death ••",
        "description":"The spell can now steal Numina from the relevant ephemeral entity (Withstand changes to Rank. Cannot be used on Rank 6+)."
      }
    ],
    "author":"Enlightened_Milkman"
  },
  {
    "id":316,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Bestow Attainment",
    "type":[
      {
        "arcana":7,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Arcanum Rating of target spell",
      "suggestedRoteSkills":"Occult, Persuasion, Socialize",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The student sometimes requires a taste of enlightenment to continue down a path of tribulation. The subject of this spell, who must be a mage, gains access to one of the caster's chosen Arcanum Attainments for the duration. The subject pays all costs associated with activating the Attainment, and uses their actual Arcanum rating for calculating dice pools and effects. This spell cannot bestow Legacy Attainments.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject uses the caster's Arcanum rating at time of casting for calculating dice pools and effects."
      },
      {
        "title":"+1 Reach",
        "description":"If the Create Rote Attainment is bestowed, any rotes the subject makes from it will register as having been created by the caster rather than the subject."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":317,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Words of Deception",
    "type":[
      {
        "arcana":7,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Persuasion, Socialize",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"This spell functions exactly as Words of Truth, including the Reach effect, but with one key difference: It operates indiscriminately on both true and untrue statements, giving even outright lies the veneer of incontestable honesty. Naïve mages who experience this spell's effect and are familiar with Words of Truth are likely to mistake this spell for its honest cousin unless they take additional precautions.\n",
    "extraInfo":[
      {
        "title":"Note",
        "description":"that Words of Deception and Words of Truth do not Clash -- Words of Deception merely expands upon the effect of Words of Truth."
      }
    ],
    "author":"galivet"
  },
  {
    "id":318,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Gordian Blade",
    "type":[
      {
        "arcana":7,
        "degree":4
      }
    ],
    "properties":{
      "practice":11,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Brawl, Firearms, Weaponry",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"When Alexander cut the Gordian Knot, he demonstrated that some problems are best solved with straightforward methods. While they strive to capture targets alive, Sentinels have long learned to appreciate the simple effectiveness of smashing the quarry's magical defenses and damaging them in one swift motion.\nSo it stands that more dangerous Consilia have taken to providing a weapon enchanted with this rote as a badge of office. Some have a specific Order procure it (the Forge Masters of the Arrow and Libertines are especially popular), as a cooperative gesture of all Orders or even as an inheritance, having each new Sentinel improve upon it as a rite of initiation. Consilia with a lesser care for tradition or with more resilient foes tend to favor using it on a simple, yet effective tool: bundles of dynamite.\nThis enchants a weapon so that it is able to cut through magic, applying its damage modifier as the potency of a Supernal Dispellation, which suppresses the spell for the duration. The user must actively attack the source of the magic to do so.\nWhen cutting through AoE spells, an attack in any point of it will do, but this spell must have the appropriate Scale factor to affect it.\n",
    "extraInfo":[
      {
        "title":"Add Fate •",
        "description":"spells can be selectively suppressed."
      },
      {
        "title":"Add any Arcanum •",
        "description":"it can cut through their respective phenomena (ghost Numina, werewolf Gifts, etc)."
      },
      {
        "title":"+2 Reach",
        "description":"The effects of the dispellation are Lasting."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":319,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sublimate Essence",
    "type":[
      {
        "arcana":7,
        "degree":4
      },
      {
        "arcana":9,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Occult, Science",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"This spell allows a willworker to sublimate Essence into Mana, converting an amount of Essence into Mana equal to half the spell Potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"the converted Mana solidifies into tass."
      },
      {
        "title":"+1 Reach",
        "description":"the spell effect is reversed, converting 1 Mana into 2 Essence per Potency instead."
      }
    ],
    "author":"Redzone"
  },
  {
    "id":320,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sublimate Pain",
    "type":[
      {
        "arcana":7,
        "degree":4
      },
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Empathy, Medicine, Survival",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"This spell allows a mage to restore the pattern of a living being by converting his wounds into Mana. Each level of Potency heals two levels of bashing or one level of lethal damage. If at least one level of damage was healed this way, the spell produces 1 Mana.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"the produced Mana solidifies into tass."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The spell heals aggravated damage."
      }
    ],
    "author":"Redzone"
  },
  {
    "id":321,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Heretical Law",
    "type":[
      {
        "arcana":7,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Rank",
      "suggestedRoteSkills":"Occult, Intimidation, Expression",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The mage inflicts blasphemy towards the Supernal by destroying its being's connection to it. For the Duration of this spell, any Supernal being affected by this spell is always considered to be outside of their summoning circle, and suffers additional Corpus damage equal to Potency above its rank for every 30 minutes. Also, when it 'dies' from anything other than taking damage from Paradox, which will be taken by the Abyss as normal, its 'body' will remain in the Fallen World for as long as the spell's Duration. When the spell ends, the body is then instantly taken to the Abyss. If this spell is inflicted on an Area, any attempt at Supernal summoning in this Area will fail and will instead summon an Abyssal being.\n",
    "extraInfo":[
      
    ],
    "author":"backtoback"
  },
  {
    "id":322,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Line in the Sand",
    "type":[
      {
        "arcana":7,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Occult, Academics, Streetwise",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"A Mage may create a ley line from nothing and determine its Resonance. The ley line can only extend as far as the Scale of the spell permits. This sends mystical shockwaves throughout the affected area similar to the creation of a new Hallow.\n",
    "extraInfo":[
      
    ],
    "author":"Mrmdubois"
  },
  {
    "id":323,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Shatter Symbolism",
    "type":[
      {
        "arcana":7,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Rank",
      "suggestedRoteSkills":"?",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"This Spell weakens supernal symbolism in the area. Within the area, Yantras rated less than Potency are nullified.\n",
    "extraInfo":[
      
    ],
    "author":"Custos Tenebrarum"
  },
  {
    "id":324,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"House Whisperer",
    "type":[
      {
        "arcana":8,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Potency",
      "withstand":"Rank",
      "suggestedRoteSkills":"Crafts, Streetwise, Survival",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The mage tunes into a location to learn its secrets. With an instant action, the mage can ask a number of the following questions equal to the spell's Potency:\n- What is the purpose of this location?\n- How is the location demarcated?\n- Where are the entrances and exits?\n- What is the location's dot rating in Safe Place/Sanctum/Haven/etc?\n- What is the nature of the location's inhabitants?\n- Are there any Irises within the location?\n- What is one of the location's flaws?\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"When asking about Irises, the mage also learns the location of one Iris (if there are any) and a general idea of where it leads."
      },
      {
        "title":"Add Death •",
        "description":"The mage can ask if there are any anchors in the location, or if the location itself is an anchor."
      },
      {
        "title":"Add Forces •",
        "description":"The mage can ask for the location for a source of energy within the location, or if the location is under the effects of an Extreme Environment."
      },
      {
        "title":"Add Spirit •",
        "description":"The mage can ask for one of the location's Resonant Conditions, or if the space is a Locus."
      },
      {
        "title":"Add Time •",
        "description":"The mage can ask how the location has changed since a given time or event. Temporal Sympathy applies."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":325,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Never Lost",
    "type":[
      {
        "arcana":8,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"?",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"A mage with a basic understanding of Space is never lost. This spell allows the subject to instinctively locate known places. He can determine the direction in which he'll find any one place per dot of Potency he has visited. Alternatively, for one dot of Potency he can know which way is North.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject can determine his general location ( 'Jakarta', 'Saharan desert', 'the Amazonian Jungle')."
      },
      {
        "title":"+2 Reach",
        "description":"The subject knows his specific locations ('apartment 5, Baker Street 29, Mysteryville')."
      }
    ],
    "author":"Menace"
  },
  {
    "id":326,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Nothing Between",
    "type":[
      {
        "arcana":8,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Potency",
      "withstand":"Rank",
      "suggestedRoteSkills":"Investigation, Science, Empathy",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"If Space is a lie, it must follow that distance is a lie. By means of this spell, a Mage may examine objects much farther than normally possible: reading small print on the other side of the room or counting hairs on someone's head as though they were right next to it.\nMultiply the distance at which the subject can see before suffering penalties by this spell's Potency. Atmospheric conditions may impact this vision, as it effectively creates a telescope.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This spell allows the subject to see out to a distance of Space miles."
      },
      {
        "title":"+1 Reach",
        "description":"This spell applies to hearing as well as sight."
      },
      {
        "title":"+1 Reach",
        "description":"This spell can ignore intervening atmospheric conditions."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":327,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sense Bending",
    "type":[
      {
        "arcana":8,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"?",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Space magic is a great way to enter locations by making your own entrances and exits; naturally there is a desire to detect such intruders. This spell tells if some person tried to bend space inside the area (with purpose of move; spells using Sympathy and alike don't get noticed) and tells location of that person to the caster.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage knows the level of Space of the person who tried to bend space inside the area."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":328,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Spatial Map",
    "type":[
      {
        "arcana":8,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Firearms, Investigation, Occult",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Allows Space Mage to use Space Arcana to 'see' surroundings and negate penalties due to range as well as darkness and similar poor visibility. Only works in the 'Sensory' range, and, unlike Outward and Inward Eye, cannot be used to perceive things from all directions.\n",
    "extraInfo":[
      
    ],
    "author":"Aquatica1000"
  },
  {
    "id":329,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Doorway Effect",
    "type":[
      {
        "arcana":8,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academia, Survival, Expression",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The Doorway Effect is what happens when you leave a room and forget why you left it. This spell however ensures that the effect happens, making the subject forget the reason they left a room. This can happen a number of times equal to the spell's Potency and only non-threatening or urgent reasons can’t be forgotten.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Even something threatening and urgent will be forgotten. However, if the danger or the urgency is still there, it would remind the subject."
      }
    ],
    "author":"Neros"
  },
  {
    "id":330,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hand of Benediction",
    "type":[
      {
        "arcana":8,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Subterfuge, Athletics, Medicine",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"This spell allows its caster to interact physically on a simple basis (e.g. Touch) within sensory range. Number of possible interactions equals potency, while the spell is active. Everything the caster touches or works with has its full effect on her, e.g. interacting with a flame causes burns and blisters upon her hand, as if she physically touched the fire. Touching a moving object requires the usual test (Dexterity + Athletics / Brawl / Firearms).\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Subjects of the spell may perform more complicated tasks, like fixing a mechanism or writing on a keyboard."
      },
      {
        "title":"+1 Reach",
        "description":"Subjects of the spell may perform extended mundane tasks, each interval counting towards the total number of interactions granted by potency."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"Tasks may be done remotely. (e.g. through Scrying spell)."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":331,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Iron Chains",
    "type":[
      {
        "arcana":8,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Socialize, Politics, Empathy",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"This spell targets a Sympathetic connection. As long as the spell endures, this link cannot be altered in strength or quality by mundane events: he'll remain in the friendzone, she'll never manage to get a divorce, this kid will never get bored of his favorite toy.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell can take two targets not connected by a sympathetic link. It prevents any meaningful relationship to develop, maintaining their sympathy null."
      },
      {
        "title":"+1 Reach",
        "description":"Even the supernatural can't break the Iron Chain. Any attempt to alter the sympathetic connection provokes a Clash of Will."
      }
    ],
    "author":"Nepher"
  },
  {
    "id":332,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Pythagorean's Razor",
    "type":[
      {
        "arcana":8,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Firearms, Academics",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Essentially 'Quantum Flux' but with Space - pinching it, bending it, calculating ranges and angles, calculating away deleterious factors, instead of any mundane actions it's specifically actions that could benefit from having the distance of travel reduced or the vector nudged to 'slightly unnatural' accuracy. Mainly for ranged attacks.\n",
    "extraInfo":[
      
    ],
    "author":"Arduras"
  },
  {
    "id":333,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Secret Identity",
    "type":[
      {
        "arcana":8,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Investigation, Politics, Subterfuge",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"This spell enhances the Shadow Name Merit's ability to hide one's mundane identity. Any investigation to uncover the subject's mundane identity that uses evidence created while in their Shadow persona automatically fails.\nAny attempt to use any Sympathy or Temporal Sympathy created while the subject is in their Shadow persona to identify their mundane persona provokes a Clash of Wills.\nThis spell has no effect on those that already know that both the subject's Shadow and mundane persona are one person.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Rather than a Clash of Wills, any Sympathy or Temporal Sympathy created in the subject's Shadow persona cannot be used at all while in their mundane persona. Any attempt to do so will only tell the scrying mage that the target 'does not exist'."
      },
      {
        "title":"+1 Reach",
        "description":"The spell can now affect any mage with a Shadow name regardless of whether they have the Shadow Name Merit or not."
      },
      {
        "title":"+2 Reach",
        "description":"The spell can now affect anybody with the Alternate Identity Merit."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":334,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Broken Heartstrings",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Sympathy (Connection)",
      "suggestedRoteSkills":"Occult, Empathy, Politics",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"This nasty little spell was designed by a Mastigos Banisher - it's designed to hurt, not kill. Broken Heartstrings reduces the Sympathetic Strength of the link by one step for each dot of Potency; reducing it to 0 suppresses the link for the Duration of the spell. This spell cannot affect Connected links.\n",
    "extraInfo":[
      
    ],
    "author":"amechra"
  },
  {
    "id":335,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Define Unity",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "primaryFactor":"Duration",
      "withstand":"Sympathy (Connection)",
      "suggestedRoteSkills":"Craft, Science, Socialize",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Which is two can be made one. This spell takes two or more targets (determined by Scale) in contact, and ties them magically together with a Strength equal to the spell's Potency, for the spell Duration. If the bond is broken, the mage must recast Define Unity to create a new bond.\nIn the reverse, the spell can loosen a bond between two targets (which may be by ropes, electromagnets, glue, screws...), reducing the Strength of the connection by the spell's Potency. Once the bond is broken, new bonds are treated normally.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"If the bond created by this spell is broken, it reasserts itself when the targets are in contact again during the spell Duration."
      },
      {
        "title":"+1 Reach",
        "description":"Once the frayed bond is broken, if another bond, whatever its nature, is put in place between the targets during the spell Duration, it's also reduced."
      }
    ],
    "author":"Nepher"
  },
  {
    "id":336,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Interpose",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Sympathy (Connection)",
      "suggestedRoteSkills":"?",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Take damage in place of another at the caster's choice a number of times up to Potency while the spell lasts by manipulating space between the 'supposed point of impact' and the subject. This only works for melee and ranged combat. Spells cast for direct damage can't have their wounds redirected.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and Prime  ••• ",
        "description":"You can redirect damage spells."
      },
      {
        "title":"+2 Reach",
        "description":"cast this spell reflexively."
      }
    ],
    "author":"Arduras"
  },
  {
    "id":337,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lock Portal",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Duration",
      "withstand":"Sympathy (Connection)",
      "suggestedRoteSkills":"Survival, Crafts, Subterfuge",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Where a mundane portal or an Iris is already established, this spell makes passage through it impossible for the Duration. Doors lock, passcodes fail, trails end. Archways and otherwise open portals 'brick up' the space : material around the space fills in the area.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The sympathy connections of the portal are likewise suppressed. People conveniently forget the passageway in favor of other means, or know the area beyond but can't remember how to get there."
      }
    ],
    "author":"MercSet"
  },
  {
    "id":338,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Principle of Contagion",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Connection",
      "suggestedRoteSkills":"Survival, Crafts, Subterfuge",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The mage spins a web of occult connections around themselves or another mage, which incorporates itself into a spell they release. As that magic unfolds, it leaps from target to target, following along the threads of sympathy. The subject must be a mage, who may adopt the web's symbolism into their Imago and expend one Mana during casting to make one spell 'contagious.' A contagious spell affects the original target as usual, but may also spread beyond them. When the target meaningfully interacts with a sympathetic link, the contagious spell will attempt to affect that individual. The contagious spell continues to affect new targets until it ends, it reaches the limit of its Scale factor, or until the Duration of the web elapses, whichever comes first.\nThe Potency of this spell determines how remote a sympathetic connection the contagion may use to affect other targets. Secondary targets are not themselves contagious.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Up to one spell per level of Potency cast by the subject may be rendered contagious."
      },
      {
        "title":"+1 Reach",
        "description":"Targets beyond the first are contagious. The chain of contagion can be up to (Potency) steps beyond the initial target (so a Potency 3 contagious spell might affect the target, their spouse, their spouse's co-worker, and the co-worker's dogs.) This does not change the Scale limit on total targets."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may specify a general category of sympathetic connections, such as 'family members' or 'co-conspirators'. Contagious spells will only be transferred across that variety of connection."
      },
      {
        "title":"+1 Reach and Fate •",
        "description":"The mage may specify something that must occur during interaction to cause contagion, such as discussing a forbidden subject, or which will prevent it, such as performing a warding gesture or wearing a certain color."
      },
      {
        "title":"Add Fate ••",
        "description":"The original target is exempted from the effects of the contagious spell; they are merely a carrier for it."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":339,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Surveillance Station",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Connection",
      "suggestedRoteSkills":"Computers, Occult, Subterfuge",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The mage weaves disparate locations together so that they may watch over all of them simultaneously. The mage can link together one location per Potency of the spell, and any locations outside of sensory range require the use of a sympathetic Yantra. The resulting scrying window allows the mage to perceive with perfect clarity what is happening at every location simultaneously, although an action may only affect a single place at once. For example, the mage cannot use one action to remotely cast a spell at targets in multiple locations through the window.\nAdditionally, as long as they observe the scrying window, the mage is immediately aware of any person in the surveilled locations starting to act against that location's intended purpose. For example, the mage will immediately become aware of someone attempting to rob a bank as soon as they start their heist (although not before).\n",
    "extraInfo":[
      {
        "title":"Add Mind ••",
        "description":"The mage becomes aware of the intentions of people in the observed areas, if those intentions are not in line with the location's intended purpose. The mage becomes aware of the intentions a number of turns equal to Potency before the action would be committed, if possible. Quick, impulsive decisions may leave less time for the mage to react."
      },
      {
        "title":"+1 Reach",
        "description":"The mage instills a strong sense of 'being watched' at the observed locations. People in the affected locations must spend a point of Willpower to obviously act against the intended purpose of the location. For example, the bank robber would have to spend Willpower to overcome his nervousness to start the heist."
      },
      {
        "title":"+ 1 Reach",
        "description":"The mage is alerted if anything out of the ordinary happens at one of the locations under surveillance, even if they are not observing the scrying window. This does not tell the mage what happened, just that something did happen. By adding Fate • when casting the spell, the mage also learns the exact nature of the event."
      }
    ],
    "author":"projectmoon"
  },
  {
    "id":340,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Swallow Cutting",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Connection",
      "suggestedRoteSkills":"Weaponry, Subterfuge, Brawl",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"By making the subject's attacks come from multiple angles, the enemy finds it harder to defend and attack. For the Duration of the spell, any attacks made by the subject inflicts Potency penalty to the opponent's Defense before the attack was made and lasts for a turn, while the subject ignores Potency penalties to her Defense. This can only affect melee attacks.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell can now affect ranged attacks."
      }
    ],
    "author":"backtoback"
  },
  {
    "id":341,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Traverse",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Connection",
      "suggestedRoteSkills":"?",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Distance is an Illusion, so is the path between two points. Designate starting and ending points of which both must be inside of the area affected by spell. If cast on a bended ‘road’ (Area encompassing a few corners) it straightens it in such a way that its ends ‘see’ each other. Everything around the road twists to accommodate the new shape, but the effect can be seen only from the ‘road’.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Choose only one direction from which the road straightens, the other one is unaffected. You can e.g. observe and shoot at your foes without cover penalties, they can’t see you back."
      },
      {
        "title":"+1 Reach",
        "description":"Key the road to determine the condition at which the new shape can be seen. E.g. looking with one eye closed."
      },
      {
        "title":"+1 Reach",
        "description":"If the road is straight, add a number of new bends equal to Potency."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":342,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Twist Link",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Sympathy (Connection)",
      "suggestedRoteSkills":"Empathy, Politics, Subterfuge",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Relationships are fragile, weak things - easily twisted and turned and placed on their head. Twist Link allows the mage to redefine the context of a sympathetic link; they could redefine a business rivalry as a childhood friendship, or a pair of lovers as a pair of enemies. The mage only defines the new relationship in general terms - much like creating or destroying a link, this spell doesn't guarantee outcomes or force reactions. This effect is Lasting, but normal interactions can restore the original link context over time. Much like other weaker sympathy-changing magic, Twist Link cannot affect Connected links.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Place the Embarrassing Secret Condition on the subjects, regarding the original context of the relationship on the link."
      },
      {
        "title":"+1 Reach",
        "description":"Place the Swooning condition on the link."
      }
    ],
    "author":"amechra"
  },
  {
    "id":343,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Voodoo Doll",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Sympathy (Connection)",
      "suggestedRoteSkills":"Brawl, Weaponry, Occult/Intimidate?",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The Disciple grants themselves or another the ability to harm a target at range as if they were standing next to the victim. While this spell is active, the bearer of the spell may make Weaponry or Brawl attacks on a target within line of sight by expending a point of Mana and damaging a symbolic representation of the target. These attacks ignore Defense, but Armor and Cover apply as if the attack were Ranged and total Cover between the bearer and the target renders the attack ineffective.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The bearer of this spell may attack targets at Sympathetic range by spending an additional point of Mana (2 per attack, total). Cover no longer applies penalties, nor does total Cover render the assault ineffective, but the attack is penalized by the degree of Sympathy between the representation and the target. In addition, this use of the spell opens a Sympathetic conduit between the attacker and the victim."
      },
      {
        "title":"+2 Reach and Add Forces ••",
        "description":"The bearer of the spell may apply non-physical damage to the target of their attacks (such as fire, electricity, sunlight, etc.) by applying the appropriate type of damage to the target's representation."
      }
    ],
    "author":"Raikirah ('2e Mage Combat-Thought Experiments')"
  },
  {
    "id":344,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Locked Sympathy",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Connection",
      "suggestedRoteSkills":"Subterfuge, Occult, Medicine",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Sympathetic connections wax and wane, but a warlock can hold them tight. For the Duration, the targeted sympathetic connection does not change in mystic strength or emotional context. It cannot be weakened, removed, altered, transferred, or even strengthened. Magical attempts provoke a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may dictate one 'direction' the connection can change to. A connection might be condemned to stasis and atrophy, or be promised safeguard and renewal."
      },
      {
        "title":"Substitute Time •••",
        "description":"The mage can lock temporal sympathy instead."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":345,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Long-Armed",
    "type":[
      {
        "arcana":8,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Connection",
      "suggestedRoteSkills":"Weaponry, Drive, Occult",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The god Lugh of the Tuath Dé has many names, of which 'Lámfada' is often interpreted as the power to strike enemies from afar. This spell harnesses some of that legendary power, granting its subject the ability to strike true even at a range. Until the spell's Duration ends, its subject may make a number of melee attacks equal to Potency from a distance as if he was using ranged weapons. The attacks' range band follows the same rules for aimed spells, counting the Gnosis of non-Awakened subjects as 1 for this purpose. As the attacks aren't actual ranged attacks, the dice pool does not use Athletics. The enemy also applies their Defense as normal.\n",
    "extraInfo":[
      
    ],
    "author":"21C Hermit (Even more Legacies, updated to 2E)"
  },
  {
    "id":346,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Change of Heart",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Connection",
      "suggestedRoteSkills":"Persuasion, Subterfuge, Empathy",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Enemies of yesterday may become friends of today, and lovers of today may become the nemesis of tomorrow. This spell changes the emotional context of a sympathetic connection, but not its intensity. Old foes may find common ground to work together as trusted friends for a brief moment, and life-long lovers may tear each other apart before confessing their love again to each other tomorrow. The feelings are mutual for the parties involved, and while they may feel the sudden change they are not compelled to act according to it. Sympathetic connections of Connected strength cannot be affected by this spell.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The emotional change occurs slowly so that the subjects may not notice oddities. If the spell expires before the changes fully set in, the emotions revert back instantly."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may selectively change emotions, leaving one end unchanged or changing both subjects' emotions to new ones."
      },
      {
        "title":"+2 Reach",
        "description":"The changes become Lasting. However, given enough time old emotions may reassert themselves, or entirely new relationships may emerge."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":347,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Inhabit Name",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Occult, Investigation, Computer",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"The mage transforms the subject's body and all her personal possessions into an embodiment of her Sympathetic Name. The subject has no physical presence, even in Twilight- she is actually not anywhere in particular. She exists only within her Name, and can only interact with the world by means of spells like Scrying. This is an incredibly disturbing experience for subjects who cannot use remote spellcasting, akin to absolute sensory deprivation.\nProlonged exposure to this spell (more than an hour per dot of the subject’s Composure) may provoke breaking points or adverse Conditions like Shaken or Spooked. This spell cannot be used on subjects that, for whatever reason, lack a Sympathetic Name. If the subject loses her Sympathetic Name while the spell is active, the spell's Duration ends immediately.\nThe subject retains all her Attributes and Skills, but may not take any Physical actions, including oblations or using yantras that require touch or speech, though she can still cast spells. This usually means that without some means of remote viewing, she may only cast spells on herself, through her Familiar or a soul stone, or on a subject whose Sympathetic Name she concentrates on for one turn. She is immune to attacks or damage, but not supernatural powers that can perceive her, while inhabiting her Sympathetic Name. She can be targeted sympathetically as normal. Mages who wish to remain in their Name for an extended time often use spells like Possession to act in the physical world. When the spell's Duration ends, she returns to the point she disappeared from.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"By using the Sympathetic Range Attainment tied to a destination, the spell brings the subject back at that destination rather than at the point she left."
      }
    ],
    "author":"Caladriu"
  },
  {
    "id":348,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"In Two Places at Once",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Science, Crafts, Subterfuge",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"Many people are aware of the Banach-Tarski paradox: you can decompose a ball in a certain way into unmeasurable parts and reconstruct two balls from these parts, which are in all ways identical to the original one. This idea inspired you to do the same; however, in your spell these parts are still connected with each other, and every change in one part is causing identical change in another one (any attempts to get rid of this caused Paradox whenever spell Duration ended and two different conditions clashed in one object).\nYour spell creates an identical copy of the subject (or object) in the place you want. Those copies are, in a way, one object - destruction of one will correspond with destruction of another, and so on. Because of that, copy is absolute for all means and purposes. When Duration of the spell ends, the created copy disappears. You can create a copy of a living being, but because you aren't creating two different minds to control two bodies, this leads only to confusion of this being (unless it can multitask naturally or with Mind spell). As with inanimate objects, any change in one 'copy' leads to similar change in another one. With addition of Time you can delay these changes in another copy until the end of spell.\n",
    "extraInfo":[
      
    ],
    "author":"Dark Archon"
  },
  {
    "id":349,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Phasing",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Science, Brawl, Stealth",
      "undefined":"Occult, Craft, Expression",
      "cost":"1 Mana"
    },
    "description":"You are here; but at the same time, you aren't. By carefully manipulating the space your body occupies, you are protected against all physical attacks - they just pass through your body. People are still able to see, hear and smell you; mental and magical attacks work as normal. Liquids and gasses don't affect you, but you are still able to be blinded, deafened and so on.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"By passing the light through the body to the other side, you are invisible as well."
      },
      {
        "title":"+1 Reach",
        "description":"You can manipulate objects, carry items and physically attack your enemies."
      },
      {
        "title":"+1 Reach",
        "description":"Aimed spells won't work on you - enemy needs to attack your Pattern directly to harm you."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":350,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Stolen Face",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Subterfuge, Stealth, Occult",
      "undefined":"Composure",
      "cost":"1 Mana"
    },
    "description":"The mage steals someone's place in the world by stealing his social connections to the world. For the spell's Duration, the mage's sympathetic connections become identical to that of the spell's subject, while her own ones are concealed and suppressed. Additionally, everyone who interacts with the mage finds themselves placing her in the same emotional context as the subject. While people do realize that the mage and the subject are indeed different persons, they can't help but feel the same way towards both of them. If the Scale factor is increased, the mage can steal the social identities of multiple people. Connected sympathies cannot be stolen by this spell, and magically strengthened sympathies trigger a Clash of Wills. Supernatural methods of discerning true identities or observing sympathetic connections also trigger a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject's sympathetic connections are concealed and suppressed for the spell's Duration."
      },
      {
        "title":"+1 Reach",
        "description":"The mage can now 'benefit' another person, as long as that person is also included in the spell's Targets."
      },
      {
        "title":"+1 Reach",
        "description":"The mage can copy even Connected sympathies she is aware of by spending one point of Mana per each."
      },
      {
        "title":"Add Life •••",
        "description":"The mage's physical appearance is also transformed to become identical to the subject's.This includes any biological identifiers, such as blood type, fingerprints, genes, the corneas and such."
      },
      {
        "title":"Add Mind ••",
        "description":"While interacting with the mage, people 'remember' hazy memories that justify why they would feel what they feel now. These fake memories dissipate shortly after the mage, leaving only dream-like recollections that are forgotten later."
      },
      {
        "title":"Add Prime ••",
        "description":"If the spell's subject is another mage, the spell also copies his Nimbus."
      },
      {
        "title":"Add Time ••",
        "description":"The mage steals the past identity of the subject. While this is usually limited to the subject's Unchanged past, the Temporal Sympathy Attainment allows access to further pasts."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":351,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Stuck on You",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Persuasion, Subterfuge",
      "undefined":"Composure",
      "cost":"1 Mana"
    },
    "description":"This spell requires at least two subjects who have some sympathetic connection to each other. This connection becomes a kind of tether--albeit an intangible and imperceptible one--making it impossible for the subjects to move any further from each other than they were at the time of the casting. Any attempt to move beyond that distance by either party turns into a tug-of-war, with the winner pulling the loser along as she goes.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The tether grows shorter if the subjects move toward each other."
      }
    ],
    "author":"Fortunatus"
  },
  {
    "id":352,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Suspension",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Persuasion, Subterfuge",
      "undefined":"Occult, Science, Intimidation",
      "cost":"1 Mana"
    },
    "description":"The caster alters the fabric of space around his subject such that it is static. This prevents the subject from moving, though internal systems caught within the spell are not affected (blood and electricity still flow, engines still run, light still shines, air still moves so a living subject isn't asphyxiated). While this spell does not prevent spellcasting, it does prevent the motion necessary to make the mudras for rote spells.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Create a key that bypassses the effect."
      },
      {
        "title":"Add •• in Mind, Death, or Spirit",
        "description":"Affect the appropriate twilight phase."
      },
      {
        "title":"Add •• Forces or Matter",
        "description":"Prevent motion of subjects under their purview (light stops, air doesn't move, electricity doesn't flow, etc)."
      }
    ],
    "author":"Falcon777"
  },
  {
    "id":353,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Till Death Do Us Part",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":11,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Empathy, Intimidation, Weaponry",
      "undefined":"Occult, Science, Intimidation",
      "cost":"1 Mana"
    },
    "description":"While some say our attachments shackle us, the more twisted warlocks can turn them into razor wires. This spell inflicts lethal damage equal to the strength of the sympathetic Connection between the mage and the victim. Magically altered sympathies do count, with spells like 'Web-Weaver' increasing damage and 'Borrow Threads' allowing the mage to attack with sympathies that are not her own. Magic that reduces sympathetic strength merely decreases the damage, but magic that conceals sympathies provokes a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"With every attack, the sympathetic connection used is weakened by one step. The spell becomes Withstood by Connection strength, and it cannot weaken Connected sympathies."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For a point of Mana, the spell inflicts aggravated damage instead."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":354,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Uncanny Organizer",
    "type":[
      {
        "arcana":8,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Persuasion, Politics, Socialize",
      "undefined":"Occult, Science, Intimidation",
      "cost":"1 Mana"
    },
    "description":"A deft warlock can always find people willing to lend a hand. This spell convinces people within Scale that the mage is a likable person in need of help, instantly building an Organization as per the Building Equipment system (Chronicles of Darkness, etc). It has a +(Potency) equipment bonus, and breaks down after Duration expires. Built-In Penalties do not apply, and the Fragile and Volatile tags are ignored unless the mage includes them.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The Organization doubles as the Staff Merit (Chronicles of Darkness). Divide Potency between the Organization's equipment bonus and dots in Staff; for each of the latter, the Organization has one Skill on which it grants 1 automatic success on non-contested rolls."
      },
      {
        "title":"Add Mind •••",
        "description":"The helpers are confused into perceiving the mage and each other as casual acquaintances. Magic smoothes over fine details and memories both during and after the act, until an outsider calls out the oddities."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":355,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Know the Half-Wolf",
    "type":[
      {
        "arcana":9,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Athletics, Socialize",
      "undefined":"Occult, Science, Intimidation",
      "cost":"1 Mana"
    },
    "description":"This spell allows the mage to determine what purely Spiritual Tells and Auspice/Tribal Merits the subject Wolf-Blooded character possesses. It conveys the name of all Tells and appropriate Merits the subject possesses, as well as giving a general idea of how each functions.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell conveys the mechanical specifics of a number of Tells or Merits equal to Potency, not just general functions."
      },
      {
        "title":"+1 Reach",
        "description":"The spell also reveals the subject’s Tension rating."
      },
      {
        "title":"Add Life •",
        "description":"This spell can reveal information about any Tell the subject possesses, instead of only Spiritual ones."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":356,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Protect the Balance",
    "type":[
      {
        "arcana":9,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Science, Animal Ken",
      "undefined":"Occult, Science, Intimidation",
      "cost":"1 Mana"
    },
    "description":"With this spell, the user can see the interaction between flesh and Shadow and thereby the natural order of things, or at least what is natural for a given locale, and anything that would disturb it.\nThis allows the subject to see the Resonance of an area, and so figure out what spirits would be attracted to it.\nThe subject can now tell which Choirs are the most Dominant in the area.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject’s ability to sense Resonance is enhanced. The subject can now detect which Descants are the most Dominant in the area."
      },
      {
        "title":"+1 Reach",
        "description":"The subject’s senses are now particularly attuned to the Resonance of human sin. This allows the subject to know if any Immundi inhabit the area."
      }
    ],
    "author":"BeyondTheGrave "
  },
  {
    "id":357,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Read Imprint",
    "type":[
      {
        "arcana":9,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Investigation, Occult, Empathy",
      "undefined":"Occult, Science, Intimidation",
      "cost":"1 Mana"
    },
    "description":"The Shadow is a reflection of the phenomenal world, built from Essence strongly colored in its Resonance by human action and emotion. A savvy shaman can use this fact to learn of the origin of strong Resonance, calling upon supernal knowledge to recreate the events leading to the formation of the Resonance in question. Performing this spell on a resonant area, object or person will reveal a number of events that reinforced or created the Resonance equal to the Potency of the spell. As the spell draws upon the warped perspective of the Shadow, this knowledge often needs further interpretation.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"If the Essence spawned from the source produces a Spirit which since then has become active, the mage becomes aware of this fact."
      },
      {
        "title":"+2 Reach",
        "description":"If a Spirit was spawned the mage may, in place of the normal effect, substitute the effects of the spell 'Know Spirit' (withstood by the newly created Spirits rank as normal). Treat the spell as if it was cast on the Spirit at the moment it became active, even if the Spirit has since then changed."
      }
    ],
    "author":"Flinty"
  },
  {
    "id":358,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sense Spirits",
    "type":[
      {
        "arcana":9,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Investigation, Occult, Empathy",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Denizens of the Shadow aren't bound by physical obstacles, and naturally can't be seen or felt by human senses. This spell tells the mage, if some spirit enters the area of the spell and gives the location of it.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage knows the Rank and Influence of spirit who is entering the area."
      },
      {
        "title":"+1 Reach",
        "description":"The mage knows the amount of dots in attributes of the spirit who is entering the area."
      }
    ],
    "author":"Dark Archon"
  },
  {
    "id":359,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Translucent Barrier",
    "type":[
      {
        "arcana":9,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"Gauntlet Strength",
      "suggestedRoteSkills":"Occult, Survival, Streetwise",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Looking across the Gauntlet is a key ability in every Shaman’s life. This spell allows the subject to perceive what is on the other side of the Gauntlet without having to cross it. All of the subject's senses, except for touch, is cast to the other side so the subject will be unaware of things around its body. The subject cannot interact with the spirit world with spell, only observe.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject's senses are split and it can perceive both the Shadow and the material realm at the same time with no ill effect."
      }
    ],
    "author":"Neros"
  },
  {
    "id":360,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hiding Ban and Bane",
    "type":[
      {
        "arcana":9,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Rank",
      "suggestedRoteSkills":"Subterfuge, Occult, Survival",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Another tool that a Mage can use when negotiating with Spirits is to offer protection of their secrets from their enemies. The mage hides the mystical ban, banes, influences or Numina of the subject amongst other information. The spell obscures up to one piece of information per Potency. This doesn't actually do anything to remove or mitigate their effects. Any attempt to discern those qualities either through mundane research is reduced to a chance die. Supernatural powers that may uncover the information cause a clash of wills.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage can provide false results for each piece of information hidden by the spell. If the mage wins the Clash of Wills or the mundane research rolls fail, the false information is provided instead of the truth."
      }
    ],
    "author":"arthexis"
  },
  {
    "id":361,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Anima",
    "type":[
      {
        "arcana":9,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Survival, Empathy, Expression",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"There is a symbiotic relationship between the Shadow and Material world, for example, if there is a Barren in the Shadow then on the physical side plants will wither and people will feel passionless and apathetic.\nWith this spell the mage improves the beneficial effects of this relationship for the subject. Plants and animals will have improved health and people will feel more alive and creative. If the subject is human, and already has one dot in Expression, then increase Expression by Potency.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The mage may raise Expression above the maximum rating for the subject."
      },
      {
        "title":"+1 Reach",
        "description":"If the other side of the Gauntlet is a Barren then this spell will negate any penalties to spiritual powers that it would normally generate for the subject."
      }
    ],
    "author":"BeyondTheGrave"
  },
  {
    "id":362,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Bind in Flesh",
    "type":[
      {
        "arcana":9,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Expression, Occult, Survival",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This spell tears a spirit out of Twilight and into the material world. For the Duration of the spell, the spirit is modified as follows:\n- The spirit is naturally material, and cannot enter Twilight or the Shadow.\n- The spirit can scour its Pattern as if it were a Mage with Gnosis equal to twice its Rank - it cannot naturally recover Essence through other means.\n- The spirit gains the benefit of Spirit Armor as if it had a number of dots in Spirit equal to its Rank.\n- The spirit loses Essence at twice the normal rate.\nIf the spirit is forced to return to Twilight or the Shadow, this spell immediately ends. There is a related version of this spell under the Death Arcana, which targets ghosts instead of spirits.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spirit generates appropriate Resonant conditions as if it were a natural denizen of the material. This is usually sufficient to prevent them from suffering the accelerated Essence bleed due to being outside of a Resonant area."
      },
      {
        "title":"Add Life •••",
        "description":"The spirit's body is reconfigured to work like a living creature - it no longer downgrades damage (due to having organs now, however strange they might happen to be). As some Mages have discovered, this also renders the spirit fertile - a spirit bound to flesh in this way can mate with any creature related to its Influences, creating strange half-spirit hybrids."
      }
    ],
    "author":"amechra"
  },
  {
    "id":363,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Degrade Spirit",
    "type":[
      {
        "arcana":9,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Rank",
      "suggestedRoteSkills":"Occult, Survival, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Just as a Disciple of Spirit can bolster the power of a native to the Shadow, so too can they weaken it. Each level of Potency inflicts a point of bashing damage to the subject Spirit.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"In lieu of dealing damage, the mage may expend one Potency to decrease one of the spirit’s Attributes by 1 for the Duration of the spell, to a minimum of one dot in each Attribute."
      },
      {
        "title":"+2 Reach",
        "description":"The mage may spend one Mana to decrease the spirit’s Rank by 1, decreasing its maximum Attribute levels and Essence pool, as well as stripping it of at least one Numen, one level of Influence, and one Manifestation effect."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":364,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hungry Flame",
    "type":[
      {
        "arcana":9,
        "degree":3
      },
      {
        "arcana":3,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Gauntlet Strength",
      "suggestedRoteSkills":"Science, Survival, Animal Ken",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The mage renders the substance of a flame fluid and mobile and stokes the awareness and power of the slumbering mote within. This spell must be performed in an area Resonant to flames or burning; one sufficient for such a mote to have formed. Once enacted, it temporarily elevates the mote into a Rank 1 spirit and invests it into a body of flames for the Duration of the spell. Divide the spell's Potency to provide the spirit with its Attribute dots (subject to the normal maximums.) Its fiery body effectively exhibits the Fire Elemental Dread Power (WtF, p.210), but it has no other Influences, Manifestations, or Numina. It is not bound to obey the mage and will instead pursue its natural inclination - to create as large a fire as possible and feed on the resulting flow of essence.\nThe Potency of this spell limits how large a fiery 'body' the spirit may be invested into (as per Transform Energy), provided one is available. Flames outside of the spirit's control act normally.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage can 'steer' the spirit's path, providing a one-or-two-word suggestion for what the spirit might burn first - 'those men' or 'that building'. Once this mission has been accomplished or becomes impractical or impossible, the spirit carries on as it sees fit."
      },
      {
        "title":"+1 Reach",
        "description":"The spell can enhance the ferocity of the flames the spirit is invested into. Levels of Potency can be spent (at a one-to-one rate) increasing the heat or size of the fire instead of providing Attribute dots to the spirit. When the spell ends the fire returns to its normal form."
      },
      {
        "title":"Death ••• instead of Spirit",
        "description":"By replacing Spirit with Death, a mage can invest the flame with a Ghost associated with an arson or death by burning into the fire; it will generally seek to burn things or people linked to the event that created the deathly imprint in the first place, or to re-enact that moment."
      }
    ],
    "author":"Five Eyes"
  },
  {
    "id":365,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Vent Essence",
    "type":[
      {
        "arcana":9,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Rank or Resolve",
      "suggestedRoteSkills":"Occult, Survival, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Sometimes it isn’t enough to move Essence from one vessel to another - sometimes it must be released back into the Shadow, or even the physical world, by force. This spell forces a Spirit or another container for Essence (such as werewolves, or Mages holding Essence in their patterns) to release that Essence back into the world, where it can be reabsorbed normally. The amount of Essence forced from the subject’s Pattern is equal to the Potency of this spell, though its rate of release is limited by the normal expenditure limits of the subject.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The caster may force the subject to bypass their normal limits for Essence expenditure, forcing out an amount of Essence equal to Potency instantly. For each point of Essence expelled above the subject’s normal expenditure limit, the subject suffers one point of lethal damage."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":366,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Craft Talen",
    "type":[
      {
        "arcana":9,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Occult, Crafts, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This spell siphons off a spirit's power and imbues it into a bauble to create a talen, a limited-use magical item similar to a fetish. Like fetishes, talens host an empowering spirit's Influence. Unlike fetishes, talens do not usually host hibernating spirits, cannot contain Numina, and does not have an Essence pool.\nCasting this spell on a spirit inflicts Corpus damage equal to Potency after Withstand, which in turn equals the number of dots of Influence the talen will contain. The damage inflicted cannot exceed the Influence dots granted. A single talen can contain only one Influence, at 5 dots maximum. Drawing from multiple Influences from one or multiple spirits, or imbuing multiple baubles with Influences, requires increased Scale.\nActivating a talen's Influence is an instant action using the spirit's Power + Finesse dice. Afterwards, the talen is destroyed regardless of Duration. The physical object may be spent or damaged depending on its form and the Influence it held.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spirit does not lose Corpus, feeling only a faint sense of aching."
      },
      {
        "title":"+1 Reach",
        "description":"The caster may draw power directly from Resonance, granting relevant Influences. This usage works on ley lines and Nodes, as well as any environmental instances of the Resonant Condition."
      },
      {
        "title":"+1 Reach",
        "description":"The talen can be used multiple times for the spell's Duration, but any use after the first requires Essence as spirits do. Essence can be paid out of the talen's user's own pool, or any channeled into the talen."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":367,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Avatar",
    "type":[
      {
        "arcana":9,
        "degree":4
      },
      {
        "arcana":4,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Occult, Empathy, Expression",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"With this spell, a mage can transform a living being into an entity only one step removed from a Spirit. The effect of this transformation is dependent on whether or not the subject possesses Honorary Rank. While in this form, entities capable of detecting or identifying Spirits (including Spirits themselves) will register the subject as being like a Spirit, but different.\nFor a subject without Honorary Rank, they become an Ephemeral Entity with attribute ratings equal to their lowest attribute in each category (Power, Finesse, Resistance). These ratings determine the Rank of the resultant entity.\nFor a subject with Honorary Rank, they become an Ephemeral Entity with attribute ratings equal to their lowest attribute in each category (Power, Finesse, Resistance), however their Rank is equivalent to their Honorary Rank. They receive a number of additional Attribute Dots to be distributed by the caster equal to the difference between their current total attributes and the minimum for their new Rank.\nIn either case, they receive a number of Manifestations and Influences as well as the minimum number of Numina, as appropriate to Rank, assigned by the caster. The subject gains an Essence pool appropriate to Rank, though this pool begins empty, and also gains a Ban & a Bane determined by the Storyteller. Subjects must also contend with powerful, alien instincts in the Spirit form. When confronted by circumstances that would trigger a strong instinctive response, such as an opportunity to create or feed on Resonant Essence, she must roll Resistance reflexively to avoid acting on these impulses. Failure means that she gives in to the alien urges until they’re satisfied. Mages add Gnosis to this roll, and other supernatural beings add their own Tolerance Traits.\nPotency may be assigned to increase attributes on a 1:1 basis, or to grant additional Numina, though attributes may not be raised above the individual or total cap for the subject’s new Rank, nor may they be granted more Numina than the maximum for a Spirit of their Rank.\nWhile under the effect of this spell, the subjects may be targeted by any effect that can normally target Spirits, with the exception of Spirit magic, which requires the Life Arcanum added to the casting at an equal level. The subject follows other rules for Ephemeral beings for the Duration, including Discorporation when full of lethal or aggravated damage.\nThe subject retains any supernatural abilities they possess, and all of their skills. They may use the higher of their native Supernatural Tolerance or their Rank to determine Supernatural Tolerance in this form. Abilities granted by this form use Rank + Influence in Clash of Wills, while other abilities Clash with their usual Clash of Wills dice pool.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject’s new attributes are determined by the highest attribute they possess in each category, instead of the lowest."
      },
      {
        "title":"+1 Reach",
        "description":"The subject retains full control of her reason and doesn’t have to fight instinctive urges."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"For a point of Mana, attributes may be raised above their individual cap, but not above the total cap for the subject’s new Rank."
      },
      {
        "title":"Substitute Mind ••••",
        "description":"The subject’s new form is similar to a Goetia instead of a Spirit. Subjects with Honorary Rank no longer benefit from it when determining the capabilities of the new form, unless that rank also applies to Goetia."
      },
      {
        "title":"Substitute Death ••••",
        "description":"The subject’s new form is similar to a Ghost instead of a Spirit. Subjects with Honorary Rank no longer benefit from it when determining the capabilities of the new form, unless that rank also applies to Ghosts."
      },
      {
        "title":"Add Prime ••••",
        "description":"The subject may access Angelic Incepts and Numina. When using Angelic Numina, or any ability enhanced by an Incept, any rolled failures are considered Dramatic Failures and apply the Hunted Condition to the subject. Rolled exceptional successes apply the Surveilled Condition to the subject, but otherwise function normally. For the purposes of the Surveilled Condition, consider the subject to have Cover equal to 5 – Rank."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":368,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Infernal Summons",
    "type":[
      {
        "arcana":9,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Occult, Expression, Persuasion",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"Those few mages that traffic with the infernal and live to tell the tale frequently develop methods to shortcut the usual summoning process. With this spell, the mage can alter a number of Spirit Manifestation Conditions on a subject, tagging them to an Immundi instead. This frequently provokes a Clash of Wills between the caster and the Spirit that created the initial Conditions. The caster can shift the Resonance in a general manner, causing the likely appearance of a single non-specific demon, or, if she knows the summoning ritual required for a specific demon, she may alter the Manifestation Conditions to exactly reflect those that would be created by performing the ritual. This spell shifts a single Manifestation Condition per point of Potency. This does not force the appearance of an Immundi, but - especially in the cases of a specific summoning - demons rarely forego an opportunity to enter the world of flesh.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Any demon that manifests using the manipulated Conditions must succeed on a Clash of Wills to make any direct attempt to harm the caster, or any other subject included in the Scale factor of the spell."
      },
      {
        "title":"Note",
        "description":"the usual -5 for using Awakened Magic to summon Infernal entities still applies to this."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":369,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Live the Other Side",
    "type":[
      {
        "arcana":4,
        "degree":4
      },
      {
        "arcana":9,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve/Rank",
      "suggestedRoteSkills":"Medicine, Athletics, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This Spell allows turning a living subject into a Rank 1 Spirit following all the rules of beings of the Shadow: Essence Bleed in the material world, use of Essence for sustenance, needs payment for its help, etc. Conversely, it may turn a Spirit into a mortal, giving it a human body.\nLiving Beings transmuted into Spirits:\n- ​Power: Highest of Intelligence, Strength or Presence;\n- Finesse: Highest of Wits, Dexterity or Manipulation;\n- Resistance: Highest of Resolve, Stamina or Composure;\n- Influence: The target gains one Influence chosen by the mage;\n- Numina: The target gains one Numina chosen by the mage;\n- Manifestations: The target gains the Twilight Form Manifestation along with one more Manifestation chosen by the mage.\n- Ban & Bane: The Ban and Bane of the subject becomes something appropriate to their personality, wants and fears.\n- Skills: Living beings lose their skills and use Power + Finesse instead. If the action they are taking doesn’t match with their 'spirit type', the ST may add penalties.\n- Resonant Essence for the subject is dependent on its nature. A human subject is Resonant with humans and mages are Resonant with magic (ST’s discretion).\n- A mage that transforms into a spirit loses access to his magic for the Duration of the spell.\nSpirits transmuted into humans:\n- Attributes: Divide the spirit's Power, Finesse and Resistance among the appropriate Attributes (See above), adding to those that would fit the spirit's nature.\n- Skills: The spirit gains skills fitting to its nature, where those that suit it most are around 3 or more dots.\n- If a spirit is killed while being 'alive', they simply turn back into a spirit when the spell ends.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject gains one additional Numina/Potency."
      },
      {
        "title":"+1 Reach",
        "description":"The subject gains one additional Influence."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"The Mage may turn the subject into a Rank 2 spirit and the target adds the Spell’s Potency as a bonus to Power, Finesse and Resistance. The target also gains an additional dot of Influence."
      },
      {
        "title":"Add Prime ●●●",
        "description":"if the mage is a subject, she will still have access to her Arcana’s, however, she is unable to spend Mana."
      }
    ],
    "author":"Neros"
  },
  {
    "id":370,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Mother Wolf’s Blessing",
    "type":[
      {
        "arcana":9,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Resolve/Rank",
      "suggestedRoteSkills":"Medicine, Survival, Empathy",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"With this spell, the caster can bestow one of The People with a great gift - infusing their Essence with purity and potency, greatly aiding their regeneration. By doing so, she upgrades the type of wound the werewolf can heal by spending Essence by one level - if he can normally regenerate two points of lethal damage in a turn by spending Essence, he may instead regenerate two aggravated damage per turn. Each point of Potency enhances one point of Essence (allowing one turn of enhanced regeneration), and the subject may not choose when to use this effect - it is automatically activated any time the subject spends Essence to regenerate, until the spell’s Duration runs out, or the full Potency is expended. If the subject has no aggravated damage, any lethal damage is regenerated normally, though this still ‘expends’ a point of Potency.\n",
    "extraInfo":[
      {
        "title":"Add Life ••••",
        "description":"This also enhances the natural regeneration of the subject, causing his per-turn healing rate to heal lethal damage, instead of just bashing. Bashing damage still regenerates first, however."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":371,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Safety Between",
    "type":[
      {
        "arcana":9,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Gauntlet Strength",
      "suggestedRoteSkills":"Science, Larceny, Empathy",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The subject becomes wrapped into the very fabric of the Gauntlet, existing neither in the material world nor the Shadow. When inside the Gauntlet, the subject is kept in stasis until the spell ends. This means the subject cannot take any actions or be further affected by Conditions or Tilts it is currently suffering from.\nWhen the spell ends or the mage wishes to dispel it as usual, the subject reappears where they entered the Gauntlet. If a large object is in the way when they reappear, the subject will end up Knocked Down at the object's closest edge from the exit point.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"the mage can choose that the subject doesn’t have to reappear on the side it entered."
      },
      {
        "title":"+2 Reach",
        "description":"the subject can take mental actions like thinking and casting spells. These spells however will first take effect when the subject leaves the Gauntlet, but Paradoxes can still occur. For 1 Mana, the subject may take physical actions at a -2 penalty and move around at a speed equal to their Gnosis within the Gauntlet. If the subject moves, it will reappear where it has walked to."
      }
    ],
    "author":"Neros"
  },
  {
    "id":372,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Spirit Marriage",
    "type":[
      {
        "arcana":9,
        "degree":0
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Rank",
      "suggestedRoteSkills":"Politics, Persuasion, Socialize",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The mage invites (or forces) a spirit to cohabit her body and bequeath their strength to the mage. For every dot of Potency, the mage can gain one of the following:\n- One dot of Influence that the spirit has. The roll to activate the Influence is Gnosis + Spirit and if it costs Essence the mage may opt to use Mana instead. The mage cannot gain more Influence dots than what the spirit has.\n- One Numen that the spirit has. The roll to activate the Numen is Gnosis + Spirit and if it costs Essence the mage may opt to use Mana instead. The mage cannot gain more Numen than what the spirit has.\n- One of the mage’s Attribute dots may be boosted by the Attribute dots of the spirit on a 1-1 basis. The spirit’s Power dots can boost Intelligence, Strength and Presence. Finesse dots can boost Wits, Dexterity and Manipulation. Resistance dots can boost Resolve, Stamina and Composure. No Attribute can be boosted beyond the allowed maximum of the Mage.\nThis spell has a slight cosmetic effect as well, depending on what type of spirit is cohabiting the mage’s body. A fire spirit may make the mage smell like smoke and have a slight orange tint to their eyes, while a leech spirit makes the mage much paler than normal. These cosmetic effects are usually more noticeable for higher rank spirits.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The cosmetic alteration is ignored, making the mage look just like they did before the spell."
      },
      {
        "title":"+1 Reach",
        "description":"The mage may boost one Attribute beyond the mage’s natural maximum."
      }
    ],
    "author":"Aristarkos"
  },
  {
    "id":373,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Totem",
    "type":[
      {
        "arcana":9,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Rank or Composure",
      "suggestedRoteSkills":"Occult, Survival, Expression",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The caster forges a Totem bond between a subject Spirit and other subjects of the spell. The Spirit gains the Resonant Condition towards all other subjects of the spell, and its Aspiration serves as the Totem Aspiration for all other subjects. The Spirit is reborn, and then rebuilt according to the rules for constructing a Totem of a werewolf Pack. All non-Spirit subjects gain the Totem merit at a number of dots equal to Potency, though they must qualify for this merit normally.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Non-Spirit subjects do not need to meet the prerequisites for the Totem merit, and are granted it at the same level as those that do. This would allow a normal human, or a vampire, to be bound to the subject Spirit in the same manner as a werewolf."
      },
      {
        "title":"Add Mind ••••",
        "description":"The totem may be a Goetia instead of a Spirit. It is still built using the normal Totem rules to determine its Traits."
      },
      {
        "title":"Add Death ••••",
        "description":"The totem may be a Ghost instead of a Spirit. It is still built using the normal Totem rules to determine its Traits."
      },
      {
        "title":"Add Prime ••••",
        "description":"The totem may be an Angel of the God-Machine. It retains its original traits and abilities, though Totem points provide Pack advantages as normal. Its Aspirations are determined by the Mission assigned by its Creator."
      },
      {
        "title":"Add Fate ••••",
        "description":"The totem may be Fae. It retains its original traits and abilities, though Totem points provide Pack advantages as normal."
      }
    ],
    "author":"Inodiv"
  },
  {
    "id":374,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Vicious Gauntlet",
    "type":[
      {
        "arcana":9,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Gauntlet’s Strength",
      "suggestedRoteSkills":"Survival, Stealth, Brawl",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"This spell alters the nature of the gauntlet, adding biting fangs, snarling thorns and vicious claws to its 'surface'. The subject of this spell is the gauntlet itself as it covers the Area affected by the spell. While the alteration lasts, whenever an entity attempts to cross it, roll Gauntlet Strength x 2, resisted by the entity's Stamina (or Resistance if a Spirit or similar entity). Each success causes a point of lethal damage to the crossing entity. Once the gauntlet has performed a number of attacks equal to the spell's Potency, the spell ends.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The gauntlet deals aggravated damage instead of lethal."
      },
      {
        "title":"+1 Reach",
        "description":"The gauntlet may be altered by the spell in one direction only."
      },
      {
        "title":"+1 Reach",
        "description":"You may designate a Key that prevents the gauntlet from attacking its holder."
      }
    ],
    "author":"Arthexis"
  },
  {
    "id":375,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Timekeeper",
    "type":[
      {
        "arcana":10,
        "degree":1
      }
    ],
    "properties":{
      "practice":3,
      "primaryFactor":"Duration",
      "withstand":"None",
      "suggestedRoteSkills":"Survival, Stealth, Brawl",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"By use of this spell, the subject becomes aware of their absolute time, as well as the relative time between events. For instance, they could measure exactly how many seconds it takes for someone to run a lap without the use of a stopwatch. The subject not only detects when time has been sped up or slowed down, but they become aware of how much time 'should' have passed.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"By measuring the passage of moments, the subject may look upon a project that has been undertaken and know exactly when it’ll be complete. They could tell you exactly how long until a Kettle boils, the exact second a pregnant woman will give birth, or when a cathedral would be completed under present circumstances. Large scale projects that will be completed far in advance will return a likely range. When an Extended Action is evaluated, it returns how long it’ll take to complete on average and how long each interval is."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":376,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Temporal Index",
    "type":[
      {
        "arcana":10,
        "degree":1
      }
    ],
    "properties":{
      "practice":1,
      "primaryFactor":"Potency",
      "withstand":"None",
      "suggestedRoteSkills":"Academics, Crafts, Science",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"A fundamental spell in the Querent's methodology, key in answering one of the most basic questions about an investigated site: when. The caster is able to ask [Potency] questions about the subject, receiving the precise date and time of the most recent instance said event happened to them. Potency can be allocated on a one to one basis to instead ask about the [Potency] most recent instances. Only events that the caster could have perceived in person can be dated.\nWith Potency 3, for example, a subject can ask when blood was last spilled on a carpet, then allocate the last two to know the 2 most recent times a spell was cast on it.\n",
    "extraInfo":[
      {
        "title":"Add Prime • or Fate ••",
        "description":"events perceivable only by Mage Sight can be dated."
      },
      {
        "title":"+1 Reach",
        "description":"The caster also learns the strength of the temporal sympathy between the subject and the events dated."
      },
      {
        "title":"+2 Reach",
        "description":"Events that were temporarily rewritten can be dated, being marked out (eg \"October 21st 1732 [REDACTED]\"). The effects of aponoia and Imperial level practices cannot be read in this way and normally create backlash in the form of minor discomfort for the caster (such as splitting headaches)."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":377,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Dead-Eye",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Firearms, Crafts, Intimidation",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The mage slows time while aiming their weapon or alternatively speeds it up on someone aiming theirs. For the Duration the next (Potency) of shots gain a dice as though the mage spent a turn aiming. Alternatively, the spell can double the amount of time a target needs to gain an aiming bonus (e.g. two turns instead of one for a +1 bonus). The spell doesn't provide a benefit to auto fire weapons.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell applies the maximum aim bonus or nullifies the target's aim bonus."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The spell works with autofire weapons."
      }
    ],
    "author":"Enlightened_Milkman"
  },
  {
    "id":378,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Dusty Trails",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Investigation, Stealth, Subterfuge",
      "undefined":"?",
      "cost":"1 Mana"
    },
    "description":"The subject appears completely distinct from one event in their past per Potency. Any mundane attempt to link them to their occluded past through physical or circumstantial evidence fails, and supernatural attempts to link the subject to their past provokes a Clash of Wills. This spell has no effect on memories. Without the aid of Temporal Sympathy, only events in the unchanged past may be occluded.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject can not be tracked as their link to their own footsteps fades."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":379,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Falsify Timeline",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Larceny, Occult, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"For the Duration of this spell the Mage can falsify the subject’s action within the Timeline. If someone tries to view the subjects past it provokes a Clash of Wills. If they fail the Clash of Wills, the Caster of this spell can send an altered image of events to the onlooker. This does not alter what really happened, just what the onlooker perceives happened.\nIf the onlooker records this Falsified Timeline, in any fashion, the effects become lasting in that the recorded history remains even after the spell ends.\n",
    "extraInfo":[
      {
        "title":"Add Mind ••",
        "description":"The Falsified Timeline becomes contagious. The onlooker believes the visions so completely that anyone they communicate the Falsified visions to also believes it."
      },
      {
        "title":"Add Prime ••",
        "description":"The effects stand up to any form of lie detection, be it mundane or supernatural."
      }
    ],
    "author":"Hardwire99"
  },
  {
    "id":380,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Five O'Clock Shadow",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"None",
      "suggestedRoteSkills":"Politics, Survival, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"This spell allows a Mage to alter the subject's apparent age, or to make them rapidly progress or regress through time: someone could be made to appear older or younger; a seed could become a plant, or a plant could become a seed; a plant could be made to bear fruit or wither away as though it were winter; hair and nails could be lengthened and shortened; a kettle could be made to boil or cool. The changes brought on by this spell are illusionary, and some supernatural powers (including Time Mage Sight) may see through them with a successful Clash of Wills\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"This spell may cause the subject to detect as being from another time entirely, or to detect as moving faster or slower through time, or any other number of temporal anomalies with a Clash of Wills."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":381,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Fog of Ages",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Larceny, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"By means of this spell, an Apprentice of Time can hide the past from the subject. One consecutive Scene per Potency of the spell is obscured, meaning the subject can not remember it or acknowledge the results of it. \n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The scenes obscured by this spell no longer need to be consecutive."
      },
      {
        "title":"+1 Reach",
        "description":"Instead of obscuring entire scenes, this spell can obscure specific events within a scene while leaving the rest of the event unchanged."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":382,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lying Clocks",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Larceny, Science",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"This spell twists the subject's sense of time. For the Duration, the subject is unable to notice the passage of time except as intended by the mage and even looking at clocks or other methods to know the time is uneffective. When casting this spell the mage can decide if the subject thinks they have 'a lot of free time', 'really late' or 'just in time' for an event or just as a general feeling.\n",
    "extraInfo":[
      
    ],
    "author":"arthexis"
  },
  {
    "id":383,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Procrastination",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Occult, Socialize, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Sure, the subject might have just been hit by a truck or eaten by a grue, and yes a Disciple of Time has to deal with the fact that actually happened… but… they’ll get around to it later. This spell protects the subject’s pattern from being changed by what is going on in the present. Up to one Condition, Tilt, or instance of Damage may be suspended per point of Potency. When Damage is suspended, you only suspend a number of health levels equal to Potency. Directly supernatural changes require a Clash of Wills to suspend. When this spell’s Duration wears off, all suspended events affect the subject instantly.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Once the spell ends, suspended effects happen at a rate of one per turn."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":384,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Veil Finality",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Temporal Sympathy",
      "suggestedRoteSkills":"Politics, Stealth, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The mage creates an illusion of the self that draws from the self's own past. The subject appears to be in the state they were at the specified point in time. The subject's physical appearance and surface mental state appear to be as they were at the given point in time, although actual Attributes and Skills are not masked. This spell cannot hide supernatural attributes, such as the state of the subject's soul or any ongoing magical effects. It also cannot hide transformations like a mage's Awakening or a vampire's Embrace. By default, the spell can only access the subject's Unchanged history, but by adding Temporal Sympathy, the spell can reach into any point in the subject's past. Attempts to supernaturally pierce the illusion trigger a Clash of Wills.\n",
    "extraInfo":[
      {
        "title":"Add Life ••",
        "description":"The subject's Physical Attributes and Skills are also hidden, appearing to be what they were at the given point in time."
      },
      {
        "title":"Add Mind ••",
        "description":"The subject's Mental and Social Attributes and Skills are also hidden, appearing to be what they were at the given point in time."
      },
      {
        "title":"+1 Reach",
        "description":"The spell hides supernatural attributes, such as the state of the subject's Soul or ongoing spells."
      },
      {
        "title":"+1 Reach",
        "description":"The spell also hides drastic supernatural transformations, such as mage's Awakening or a vampire's Embrace."
      }
    ],
    "author":"projectmoon"
  },
  {
    "id":385,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Your Worst Day",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Intimidation, Empathy, Investigation",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Good days and bad days are more than just memories, they're inscribed in Time. By pulling tight on the strings of Temporal Sympathy, the mage can conjure the low points and happy moments of the past into the present. The mage can apply a single non-persistent mental Condition that the subject has previously experienced, such as Guilty, Shaken, Swooned, or Inspired. This spell is not powerful enough to apply persistent Conditions such as Broken or Madness, and it can only apply Conditions that the subject experienced within the same day. If the Temporal Sympathy Attainment is incorporated, the spell can apply an older non-persistent Condition, although the mage must have a specific idea of what moment in the subject's timeline they are drawing on.\n",
    "extraInfo":[
      
    ],
    "author":"Caladrium"
  },
  {
    "id":386,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Time Salts All Wounds",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":4,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Brawl, Firearms, Melee",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"A fundamental rote in Arrow battle doctrine, created to allow even the slightest wound to have devastating effect. Each level of Potency halves the time needed for negative effects to affect the subject. Poison and disease strike more often, but it's deadliest capacity is to make foes bleed out more quickly.\nA variation of this rote is a favorite of many a veteran Arrow, who are fond of Weaving it into their weapons. Stories abound of werewolves exploding into red mist when hit by a single lunargent bullet or powerful changelings reduced to dust with a glancing cut of a siderite blade.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Each level of Potency reduces the interval to a quarter."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":387,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Banish the Sun",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Potency",
      "withstand":"Temporal Sympathy",
      "suggestedRoteSkills":"?",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Sometimes a mage needs to hide her activities after the fact. With this spell, the Awakened cloaks an event or time in the subject’s past. Witnesses will recall the effects of a hidden subject’s actions, but not their cause. For instance, if the subject picked up a vase in a room and left with it, witnesses will remember that the vase was there one moment, then gone the next.\n",
    "extraInfo":[
      
    ],
    "author":"espritdecalmar"
  },
  {
    "id":388,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Always Already",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Temporal Sympathy",
      "suggestedRoteSkills":"?",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The mage grants the subject the illusion of stability and permanence. Anyone who perceives the subject will believe that it has always existed in its current state, and will always exist that way. Magic that shows the subject’s future or past shows the subject as it is in the present, regardless of context or circumstances.\n",
    "extraInfo":[
      
    ],
    "author":"espritdecalmar"
  },
  {
    "id":389,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Cascade Veil",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":5,
      "primaryFactor":"Duration",
      "withstand":"Temporal Sympathy",
      "suggestedRoteSkills":"?",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The mage twists past and future around a subject, hiding it from the present. The subject can move through the world unperceived, although magic that shows the future or past will reveal its presence before or after the fact. In addition, if it occurs to them at a later time, witnesses can attempt to recall the subject with a roll of Intelligence + Composure, penalized by Potency.\n",
    "extraInfo":[
      
    ],
    "author":"espritdecalmar"
  },
  {
    "id":390,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Tantalize Respite",
    "type":[
      {
        "arcana":10,
        "degree":2
      }
    ],
    "properties":{
      "practice":6,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Academics, Medicine, Science",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"A spell employed by the Guardians when facing extremely dangerous foes, utilizing a combination of the mounting stress and exhaustion to break the psyche of their enemies entirely. It suspends any beneficial effects of advancing time upon the subject for the duration. Negative conditions do not elapse, positive conditions are suspended and new ones cannot be imposed, any supernatural attempts at doing so causing a Clash of Wills. Wounds do not heal naturally, food and water do not provide sustenance, rest does not reduce fatigue, they cannot recover Willpower or mana. Supernatural healing can be employed with no issue.\nThis rote has also proven popular when hunting vampires, forcing them to remain in torpor even as they are staked and set ablaze.\n",
    "extraInfo":[
      {
        "title":"Observation",
        "description":"The main difference is that this spell only affects beneficial effects that happen over time. So this spell can keep poisons and diseases affecting an individual, but cannot prevent direct action. Erosion of Eternity has no such restrictions, being able to outright deny things such as medicine rolls to stabilize or treat someone."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":391,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Anime Combat Conversation",
    "type":[
      {
        "arcana":10,
        "degree":3
      },
      {
        "arcana":6,
        "degree":1
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Stamina",
      "suggestedRoteSkills":"?",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Every Subject of this spell can communicate (say and hear) through elaborate speeches as a reflexive action. Each of these reflexive actions may contain a number of simple sentences equal to potency of the spell.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"Subjects of the spell may, instead of speaking sentences, use High Speech Yantra as a reflexive action, even if it is not primary yantra."
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"As above, but the subject may use High Speech Yantra instead of speaking one of the sentences."
      },
      {
        "title":"Add Space ••",
        "description":"Multiply distance at which characters can communicate by Potency. This does not allow for talking through obstacles."
      }
    ],
    "author":"Moinen"
  },
  {
    "id":392,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Changing the Clock Face",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Stealth, Persuasion",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"This spell allows a mage to cause the subject to rapidly progress or regress through time up to one year per Potency. Unlike Five O'Clock Shadow, these changes are real. However, they produce no mechanical benefit or hindrance, but they may have cosmetic and some narrative impact. For instance, someone made older by this spell would look and feel different, but they would have the same traits and they would live the same length of time after this spell.\n",
    "extraInfo":[
      
    ],
    "author":"SoulGambit"
  },
  {
    "id":393,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Feast of Goibnui",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Crafts, Medicine, Science",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Speeding up time for something as complex as a living being is difficult, but doing so to complete a predictable procedure is far easier. This allows any autonomous process on a non-living target to be sped up by up to [Potency] days. Images that would take days to process forensically can be completed instantly, food that must spend hours in an oven can be done in moments, medicine that takes days to synthesize can be made quickly available, etc.\nThis rote is fairly common for mages with a gastronomic or scientific focus. But it was originally created by the Libertines after the flu plague of 1918, as a way to accelerate research and rapidly stock vaccine banks, especially when faced with any other initiatives of the Raptor's servants.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Potency instead speeds up the process by months of time."
      },
      {
        "title":"+2 Reach",
        "description":"it instead does so by Potency years, allowing for things like wine and miso to be quickly made."
      },
      {
        "title":"+3 Reach",
        "description":"it speeds up the process by any amount of time the mage wishes, but damaging objects requires a different spell."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":394,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hasten Symbolism",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Expression, Occult",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The mage enhances the target's ability to conceptualize the symbols of magical power, condensing what would take multiple moments into a single, graceful movement. The next time the target casts a spell during this spell's Duration, the target may utilize an additional number of Yantras equal to this spell's Potency in the same reflexive action. This does not affect Yantras that normally require more than a reflexive action to employ (such as High Speech or Runes), nor does it increase the Gnosis-derived number of Yantras the target may access.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The target can use the High Speech Yantra as a reflexive action."
      },
      {
        "title":"+1 Reach",
        "description":"Add this spell's Potency to the target's Gnosis for the purpose of determining how long it takes to draw runes."
      },
      {
        "title":"+1 Reach and +1 Mana",
        "description":"The target benefits from this spell's effects on a number of spells equal to Potency."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":395,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Long Day",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Stamina",
      "suggestedRoteSkills":"Academics, Socialize, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"This spell makes the subject profoundly feel every moment they’ve been awake, even if they’ve just awoken. They gain the Lethargic Condition as though they have been awake for six hours per point of Potency and must make an immediate roll to stay awake. At the ST’s discretion, subjects who don’t feel fatigue may be immune to this spell.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject takes 1 Bashing Damage per point of Potency which can not be healed so long as the subject has the Lethargic Condition."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":396,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Lost Time",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Academics, Socialize",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"People get lost in the moment--they are having fun, or hard at work, and suddenly it’s a few hours later and they are left wondering where the time went? This spell allows the Mage to degrade the subject’s ability to change with the progression of time, inflicting the Insensate Tilt. If they were engaged in a reasonably inane task that requires little important decision making (such as reading, playing a game, watching TV, etc) they will continue to do it.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject becomes unaware of their surroundings for the Duration of the Spell."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":397,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sequel",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Persuasion, Science, Survival",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"With this spell, a Mage can force someone to relive past trials and victories. The subject gains one mundane Condition or Tilt per dot of the spell’s Potency that they have experienced in the past. The mage can select conditions they know about, or simply seek out conditions that match broad criteria (in which case the subject’s player chooses something appropriate). Without the Temporal Sympathy Attainment, this spell can only cause someone to be affected by Conditions and Tilts experienced in the Unchanged past.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Persistent Conditions may be re-applied by means of this spell."
      },
      {
        "title":"+2 Reach",
        "description":"You may add a supernatural Condition or Tilt so long as you have another Arcana related to your choice rated at ••• or higher."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":398,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Time Renews",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Larceny, Medicine, Socialize",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"By accelerating the healing process, the Mage may allow for someone to recover from wounds. The subject recovers 2 Bashing per point of Potency so long as they could naturally recover from the injury. \n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Potency can be spent to recover 1 Lethal instead of 2 Bashing."
      },
      {
        "title":"+1 Reach",
        "description":"One condition per Potency that fades naturally over time is made to fade instantly. Supernatural Conditions provoke a Clash of Wills."
      },
      {
        "title":"+1 Reach",
        "description":"This spell reproduces the effects of a full night’s rest, including recovering a point of Willpower if applicable."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":399,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Expert Planner",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Investigation, Science",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Even without directly manipulating time, an enchanter is never caught without a working plan. This spell projects the caster's thoughts into the future, instantly building a Plan as per the Building Equipment system (Chronicles of Darkness, etc). It has a +(Potency) equipment bonus, and breaks down after Duration expires. Built-In Penalties do not apply, and the Fragile and Volatile tags are ignored unless the mage includes them.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"A number of (Scale; Subject) actors benefit from the Good Time Management Merit (Chronicles of Darkness), halving the interval for extended actions. Without increased Scale, the caster herself benefits."
      },
      {
        "title":"Add Fate ••",
        "description":"When adding the Fragile or Volatile tags to the Plan, the mage may designate them to affect only certain users. The designation may be as broad as 'anyone other than myself,' or as narrow as 'the last person to hack into my account'."
      }
    ],
    "author":"21C Hermit (New 2E Legacies, expanded)"
  },
  {
    "id":400,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Nostalgia",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Duration",
      "withstand":"Connection",
      "suggestedRoteSkills":"Expression, Persuasion, Empathy",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Enchanters can send someone's heart back in time to relive the moment. For the Duration, the targeted temporal sympathy is strengthened by Potency after overcoming Withstand. Connection can be strengthened to Unchanged, and trying to directly remove it still requires Unmaking, but dispelling this spell reverts the sympathy as usual.\nThis spell does inversely affect the sympathy's Withstand level for purposes of the Temporal Sympathy Attainment; a strengthened sympathy is easier to cast spells through.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may selectively strengthen the connection, improving its own Withstand against manipulation but leaving it hard to use the Temporal Attainment Attainment through, or vice-versa. Either way, its owner feels stronger emotions for the past self."
      }
    ],
    "author":"21C Hermit"
  },
  {
    "id":401,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Otherly Nostalgia",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Connection",
      "suggestedRoteSkills":"Empathy, Investigation, Larceny",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The future is tangled and the past woven, but a skilled enchanter may fudge the two to feel what it would be like to have lived as another. This spell transfers a number of temporal sympathies equal to its Potency between its caster and subjects. The mage can either steal links from her subjects, or give her own to them. If transferring a link to someone who already has a history with the same thing, the new link overwrites the old one for the spell's Duration. The mage must be aware of a temporal sympathy to manipulate it.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The mage may directly swap temporal sympathies between her subjects."
      },
      {
        "title":"+1 Reach",
        "description":"Instead of transferring temporal sympathies, the mage may copy them."
      },
      {
        "title":"Add Forces •",
        "description":"The mage can now solve 'puzzles' in the form of computer codes and digital ciphers."
      }
    ],
    "author":"21C Hermit (Even more Legacies, updated to 2E)"
  },
  {
    "id":402,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Gatling Assault",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":9,
      "primaryFactor":"Potency",
      "withstand":"Connection",
      "suggestedRoteSkills":"Athletics, Brawl, Weaponry",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"Created by a martial-minded enchanter, this spell grants its subject the ability to launch a barrage of attacks on his enemies. Until the spell's Duration ends, its subject may make a number of melee attacks equal to Potency with short burst autofire as if he was using automatic weapons. While the attacks aren't true firearms attacks and thus does not use Firearms in their dice pools, they are as fast as bullets and thus deny the enemy their Defense unless they can already apply Defense versus firearms.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject may attack in melee as medium burst autofire."
      },
      {
        "title":"+2 Reach",
        "description":"The subject may attack in melee as long burst autofire."
      }
    ],
    "author":"21C Hermit (Even more Legacies, updated to 2E)"
  },
  {
    "id":403,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Sharka's Alacrity",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Connection",
      "suggestedRoteSkills":"Crafts, Firearms, Athletics",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"When combat is upon a mage, the ability to react quickly and with the least amount of wasted moves is what opens the path to victory. It is the way of the Arrow to teach that magic alone will not solve everything, sometimes a mundane weapon can be far more practical. Utilizing one approach to reinforce the other, however, is devastatingly powerful.\nA weapon enchanted with this spell can fire quicker and be readied with astounding celerity. It becomes capable of being reloaded reflexively and firing using all types of autofire.\nThis rote has been known to be adapted by combatants both overt and stealthy. Shotguns and missile launchers that outclass the firing speed of assault rifles, hails of throwing daggers silently taking out unwary foes and crossbow shots simultaneously incapacitating multiple enemies are some of the most common applications.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The user is able to quickly find the optimal position to fire in combat, reducing any initiative penalty by [Potency], to a minimum of zero. For another Reach, Potency instead becomes a bonus to initiative."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":404,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Clockwork Spellworks",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Connection",
      "suggestedRoteSkills":"Computer, Crafts, Science",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"A rote developed as a cross Order research initiative between the Guardians and Arrows, as well as one of the secrets they are most loathe to share with outsiders. By binding the existence of their Imagos to more specific times, they are able to firmly ground them to the Fallen World, allowing for safe relinquishment.\nThe subject may choose up to [Potency] spells under their control. For every spell chosen, the subject may designate up to [Potency] days of the year within which the spell will be bound to. It will only exist during those days and its duration will only be counted within them. A spell with a month-long duration bound to the 4th of August, for example, will only take effect during that day, but this phenomenon will continue to repeat for 30 years. Should it be bound to the 6th of January as well, the spell will last for 15 years instead.\nWithin the given interval, the subject is able to specify temporal conditions as broad or specific as they wish. Within some of the most well guarded Censorea, those that hold world ending threats, it's not uncommon to restrict spells to manifest at specific hours of the chosen day. Some go as far as using formulas to determine which spell will take effect, such as a specific defense only being used in years that are a modulo of two and at hours that are multiples of 7.\nUtilizing this method, layers of interlocking and precisely timed defenses can be created. Intruders attempting to breach these vaults will find wards, puzzles and challenges that are new each time, creating formidable magical fortresses.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject can instead specify [Potency] months in which the spell will be bound to."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":405,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Temporal Phasing",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Duration",
      "withstand":"Connection",
      "suggestedRoteSkills":"Science, Stealth, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"A spell that redefines how one interacts with the timeline. This allows the caster to dictate up to [Potency] temporal conditions that allow others to interact with the subject, such as being from a few moments from the future, using Active Time Sight or having one's personal time hastened. Anyone that does not meet at least one of these conditions cannot interact or indeed even perceive the target. The target can move normally, continues to perceive the timeline and simply phases through things not in the same temporal frequency, allowing them to walk through walls or down through floors. Some combative mages utilize it to hide enhanced or imbued items, setting a conditional duration so they are equipped in case of an emergency.\n",
    "extraInfo":[
      {
        "title":"Add Fate •",
        "description":"the subject can selectively decide who can or cannot interact with them without having to meet the conditions. Whether this permits a one way or two way interaction is decided by the subject."
      },
      {
        "title":"+1 Reach",
        "description":"The caster can choose to leave a temporal echo behind that mimics the subject, perceivable by anyone who fulfills one of [Potency] conditions. It is intangible and can produce sound, yet is visually indistinguishable from the real subject. Some mages use it to cultivate an image of invincibility. There are others that use it to simulate holographic/co-located communication, hiding in plain sight."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":406,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Quantic Watchdog",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":7,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Intimidation, Science, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"While being hunted by a Horologian agent called Moebius, the Mystagogue Raziel was backet into a corner. Knowing that completely arresting the flow of time from a being was a difficult task, he instead chose to alter the conditions upon which they may interact with the timestream. The result was so successful that not only did he return to the Consilium with his life, but he did so while bringing a Seer that could only act when there were no Pentacle mages nearby. This earned him a major boon and the rote has been a staple in his expeditions ever since.\nThis allows the caster to define up to [Potency] conditions necessary for the subject to act in the timestream. The subject is afflicted with the Immobilized condition during any turn where all conditions are missing.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":407,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Desynchronize",
    "type":[
      {
        "arcana":10,
        "degree":3
      }
    ],
    "properties":{
      "practice":8,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Athletics, Computer, Drive",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The mage slows the subject's causality. For the duration of the spell, when an effect would happen to the subject, it is delayed by a number of minutes (turns in action scenes) equal to the spell's Potency. For instance, if the subject were struck with a weapon, they would only take damage Potency turns later. The same goes for Tilts suffered, Doors opened, and so forth. This applies to spells cast on the subject as well, though non-lasting effects have their duration equally delayed. Modern outside observers might compare the effects to lag in an online game or video buffering.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The spell's effects apply to the subject's own actions as well"
      },
      {
        "title":"+2 Reach and 1 Mana",
        "description":"For a point of Mana, spell durations that affect the subject are not delayed, meaning that if the duration expires before the spell actually takes effect, the subject experiences nothing. In this way, the subject could quickly make their way through an area-range spell without succumbing to deleterious magics."
      }
    ],
    "author":"espritdecalmar"
  },
  {
    "id":408,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Haste",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Science, Athletics, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"The Mage weaves the flow of Time around their target, increasing the pace at which they can act. For the duration of this spell, whoever is affected is able to take one extra Instant action per turn, a total number of times equal to the spell's Potency. The target may not use their bonus Instant action to cast a spell if the first action had already been used to do so.\n",
    "extraInfo":[
      {
        "title":"+2 Reach and 1 Mana",
        "description":"If the target casts a spell during their first turn, they can use their second turn to cast another spell."
      }
    ],
    "author":"Lorekeeper"
  },
  {
    "id":409,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Co-Temperus",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Larceny, Politics, Subterfuge",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"By making the present as indeterminable as the future, this spell can allow the subject to participate in multiple ‘potential presents’ simultaneously. The subject splits into one additional version of themselves per Potency. This is not a true division of the subject, but instead is the subject existing in multiple timelines. They share a single Willpower and Mana pool, but are otherwise treated as separate. At the beginning of the subject’s turn, each version of themselves may perform their actions as normal. However, apply the results of only one version of the subject on the world around them, and each version of the subject completely ignores what the others do (sometimes even occupying the same space).\nFor instance, if one version of the subject opens a door and goes through it, all other versions of the subject still have to open the door and walk through it. If, at the end of the turn, the subject chooses to apply the changes of another version of themselves who did not open the door on the world, then the door would be closed at the end of the turn (having never been opened). Any supernatural powers that affect one or more versions of the subject affects all of them.\nWhen the spell ends or is canceled, only one version of the subject sticks around, and that version suffers all of the damage, conditions and tilts suffered by all other versions of themselves, but also gains all knowledge and experiences from the discarded versions of themselves.\n",
    "extraInfo":[
      {
        "title":"Add Mind ••",
        "description":"The different versions of the subject may communicate telepathically."
      },
      {
        "title":"+1 Reach",
        "description":"The different versions of the subject are more insulated from each other. When one or more of them is affected by a supernatural power, then they may roll a Clash of Wills to keep all other versions of themselves from being equally affected."
      },
      {
        "title":"+1 Reach",
        "description":"The version of the subject that remains after the spell expires gains the worst damage from all versions of themselves, instead of all of it."
      },
      {
        "title":"+3 Reach",
        "description":"When the spell expires, any damage, Condition or Tilt from the discarded versions of the subject is not applied to the subject."
      }
    ],
    "author":"lGambit"
  },
  {
    "id":410,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Encore",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Expression, Science",
      "undefined":"Duration",
      "cost":"1 Mana"
    },
    "description":"By means of this spell, a Disciple of Time can cause someone to repeat the actions of the past. Without the Temporal Sympathy attainment, the Disciple of Time chooses one instant action the subject performed in the unchanged past. The subject performs that same action on their next turn. They perform the same motions and thoughts they did, without regards to their surroundings. This makes interacting with a changing world imprecise (i.e. striking an opponent who has moved would cause them to strike at the same spot).\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"Instead of an instant action, the subject will repeat an entire Scene. This reach may be selected multiple times, causing the subject to repeat more than one scene’s worth of actions."
      },
      {
        "title":"+1 Reach",
        "description":"The subject will adjust their motions to try and produce the same result as their prior actions. Someone who reads a book will pick up that same book to read if it is handy. Someone who threw a punch would throw a punch at the same target if they are nearby. If the subject can’t achieve the same result with only minor adjustments, they will mime the action normally."
      },
      {
        "title":"+3 Reach",
        "description":"As above, but the Mage may select new targets for the subject’s actions. The decision for what replaces the old target is made when the spell is cast, and that decision persists for the Duration of the spell."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":411,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Parachronistic Artifice",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Stealth, Subterfuge",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"Perhaps one of the oldest unsolved Mysteries is the Count of Saint Germaine. This legendary occultist has been spotted in multiple European courts and Concilia across the ages, wearing different faces, Nimbus and following different Paths, yet always having a consistent array of lost knowledge, memories and resources no one else should have possessed.\nA few whisper they are mobile carriers of a lost Mysterium Athaneum, waiting for someone to pay the right price for their knowledge. Some say that they are the apprentices of a Guardian Exemplar, creating a Nameless Order that creates Labyrinths for the Threshold Seeking itself. Whatever the truth may be, it is this rote that has allowed multiple mages to assume the role throughout the ages, composing Germaine's current incarnation from a vault of plundered and bartered histories.\nThis spell binds a part of the subject's history to a target item, transferring it entirely to whoever wears it. The caster is able to transfer up to [Potency] dots of skills, merits or parts of the target's life (their family life, career, relationship, criminal past, etc) into the item. Whoever wears the item receives that part of the subject's life. A user can only acquire merits that are compatible with their template.\nWithout additional scale factors, the caster's history is transferred by default. The user acquires all the knowledge, experience, status (or infamy) and physical components associated with the history. A user that takes the knowledge of a master sword fighter might find themselves plagued by occasional pain from a knee injury and taking the Status of a company president might mean potential kidnappers now focus on them.\nWhen the item is not being worn, that history is effectively phased out of the timeline. Depending on the caster's choice, either other people would have performed the actions or they never having happened at all. Memories of the stored time grow hazy and distant to all involved.\nSometimes Saint Germaine has used this rote to claim membership in different Orders. In a few cases, they have joined cabals and helped them build their reputation, only to store their historical contributions to their Sanctum in a trinket, making the cabal unknowingly defend the temporary rewritten site. A few times they have plundered the resources of entire cabals, gaining access to libraries, imbued items and Sanctums that they can call upon on the fly. Indeed some theorize certain stores, office complexes and apartments buildings could be potential highly defended troves of lost knowledge, waiting to be activated by a bauble from Saint Germaine's collection.\nSome even say they have amassed histories dating back hundreds of years, passing on a cornucopia of life pieces from one generation to the next, perhaps explaining the extensive yet often confusing results of investigating the Count with Time magic.\n",
    "extraInfo":[
      {
        "title":"Add Mind •",
        "description":"the user also receives the emotional context of the history."
      },
      {
        "title":"+1 Reach",
        "description":"The caster takes the history violently from the subject, leaving such a powerful gap in their chronology that it inflicts the Amnesia condition regarding the stolen history."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":412,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Hung Action",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Medicine, Subterfuge",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"One mundane instant action performed by the subject while this spell is active becomes 'hung' in time. Resolve the effects of the action then, but instead of performing that action the subject merely passes their turn. When this spell’s Duration ends or it is canceled, the suspended action affects the world. Many mages use the Fate two-dots Attainment ‘Conditional Duration’ on Hung Action, so it releases its action under set circumstances.\n",
    "extraInfo":[
      {
        "title":"Add Fate ••",
        "description":"Instead of suspending an action entirely, the Mage may suspend only their success. The suspended action appears to happen, yet it looks like a failure (or, at the subject’s option, a dramatic failure--this does not grant a beat). When the spell ends, it turns out the action was a success the entire time."
      },
      {
        "title":"+1 Reach",
        "description":"The subject may hang one additional mundane action while this spell is active. This Reach may be selected multiple times."
      },
      {
        "title":"+2 Reach",
        "description":"This spell may apply to Extended Actions as well as Instant Actions."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":413,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Takt of Heroes",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Crafts, Occult",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"Every person has a story to tell, a legend to forge, a play to enact. Sometimes life is unkind and the tale is cut short. But just because some pages are left blank doesn't mean they cannot be put to better use, especially if one is able to seize the book in time.\nWhen the subject dies, the beneficiary is able to harness up to [Potency] charges of potential futures, up to the combined number of Aspirations and Obsessions the target had. A charge can be used reflexively when the beneficiary receives damage, dies or suffers a condition to deny them entirely, as the misfortune is shunted into the captured timeline and allowed to fade.\nTalons have been known to employ this rote in situations where survival is uncertain, using its power to enact otherwise suicidal plans. In so doing, they use the shouldered hope of their fallen allies to rout their enemies, dedicating victory to their memory.\nWithout additional scale factors, the caster is automatically the beneficiary of this effect.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":414,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Recruit Understudy",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Expression, Stealth, Subterfuge",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"When staging a play, it is vital to have understudies ready to assume the main role should the lead become incapacitated. Inspired by those principles, this rote was created to protect mages in the most hostile of scenarios.\nThis spell allows the caster to designate a subject to be the main actor and all others to be understudies. The subjects become temporarily entangled so only one may exist at a time and the active actor becomes their anchor to the present. Once per turn, the main actor can swap places with any of the understudies, who can act freely. Understudies experience this as temporary stuttering from their last stage appearance to the current scene. The main actor is always aware of the sensory input of the understudies and chooses who from the actor pool is active at the time of casting. Should the caster maintain spell control, they can make the swap instead.\nWhenever an understudy dies or breaks, another member of the actor pool of the main actor's choice takes its place. When the spell ends, all actors appear in the nearest space to the active actor.\nSome users apply this spell to their guns, choosing the optimal bullet for every situation. A few others make traps and explosives into their understudies, allowing them to take down a cadre of foes with no risk. Stealth inclined mages infiltrate sanctums by making their foes' friends into understudies, being invited into their Sanctums. Some cabals use it to escort important charges, minimizing risk of exposure while allowing the flexibility to choose the optimal cabalmate to meet each challenge.\nWith conjunctional Fate ••, up to [Potency] keys can be assigned to switch to a specific actor. For a Reach, the keys can be things detectable only by Mage Sight. For a Reach, Potency can be assigned to designate keys that lock the ability to switch the current actor, unlock the ability to switch the current actor or forcibly switch the current actor to a designated one and locks the ability to switch it.\nAdd Mind ••••: the current actor is Possessed by the main actor.\nNote: Here is a spell inspired by the theater and the Possession ability from Dishonored. It is designed to synergize with the Takt of Heroes spell, allowing a ruthless mage to create a death cheating buffer.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The current actor can be switched twice per turn."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":415,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Inverse Causality",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Composure",
      "suggestedRoteSkills":"Academics, Computers, Science",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"The linear progression of events is one of the most basic ways we experience the flow of time in the Fallen World. However, sometimes even causality must yield to the needs of the moment.\nThis spell allows the subject to invert the relationship between cause and effect, allowing results to occur immediately for actions that have yet to happen. Within its duration, it allows the subject to reflexively perform up to [Potency] actions in addition to the current one, each being taken from a turn in the future. However, this locks them into performing the motions for the action in the next immediate turns. Should the spell's duration run out before they can perform the cause of an action, the effect is undone, a fact which Banishers leverage to break the will of their captives.\nAn enemy could be hit by a gunshot suddenly materializing, but the subject would need to fire the gun in the next turn. Similarly, they could cast a spell that takes up to [Potency] turns to prepare, paying all costs beforehand, then run away the next few turns as they focus on the yantras for that spell. Some even use it to open locks that would require multiple people to act simultaneously. However, this spell does not affect extended actions.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":416,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Time Heals Everything",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Athletics, Empathy, Medicine",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"With time and care, even the most grievous wounds can be recovered. So long as the target would eventually recover naturally, this spell advances the target to that point in time. Each Potency of the spell can cause the subject to recover 2 Lethal.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"One condition per Potency that fades naturally over time is made to fade instantly. Supernatural Conditions provoke a Clash of Wills."
      },
      {
        "title":"+1 Reach",
        "description":"This spell reproduces the effects of a full night’s rest, including recovering a point of Willpower if applicable."
      },
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The spell heals aggravated damage. This spell still can not heal wounds the subject wouldn’t heal normally."
      }
    ],
    "author":"SoulGambit"
  },
  {
    "id":417,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Shards of the Hourglass",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Composure",
      "suggestedRoteSkills":"Brawl, Firearms, Weaponry",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"Sometimes called the Invisible Blade of Arcadia, this spell allows Arrows to improvise just about anything in their surroundings into deadly weapons. When cast upon a target, the next [Potency] attacks convert all negative change upon them into a temporal aging field that surrounds them. This grants them an extra [Potency] damage on hit (the caster can choose if the attack inflicts lethal or bashing). Furthermore, the isolation from negative change allows attacks to bypass all obstacles that would stop or slow them down, negating Armor Ratings and Durability entirely. Lastly, because loss of momentum and similar changes are arrested, range penalties are negated for the attacks.\nTypically this is cast on a user, allowing all their attacks to benefit from it, but some prefer to place it upon their weapons, reducing flexibility but allowing them to carry more charges.\nSubtle casters might use thrown sand as a weapon, inflicting damage similar to machine gun fire from an otherwise simple distraction tactic. A few others simply \"cut\" the air with their hands, the dislocated wind creating a slashing effect from which this technique got its nickname. Martial casters may prefer placing it upon themselves, allowing their fists to pierce and tear through obstacles.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"The subject instead causes aggravated damage as the target's temporal field is violently torn apart."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":418,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Behold The Unthinkable Present",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Intimidation, Occult",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"The gift of prophecy is more than the ability to see the most likely future, it can also allow one to see discarded and abandoned timelines. This spell picks the worst ones and bombards the targets with them, overloading them with visions of the harrowing fates narrowly escaped.\nSome mages choose to show glimpses of when the target could have failed or died, filling them with dread as they become all too aware of their mortality and limits, inflicting the Beaten Down tilt.\nA few casters are much more cruel, showing visions of how the consequences of these possible past failures and hypothetical future ones would crush all their target cherishes. Loved ones drifting apart or suffering, life legacies being forgotten and dreams shattered are usual sights. This causes the subject to question their very right to wield their agency upon the world, causing a profound existential crisis that inflicts the Broken condition.\nThose afflicted by a Doom also receive visions that strike with the weight of impending ruination, afflicting the target so intensely that their shattered minds try to block out these insights, afflicting them with the Fugue condition on all things related to it.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":419,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Endurance of the Ages",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Occult, Intimidation, Survival",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"A rote of mysterious origin, found in an area of the Hedge's Hall of Mirrors where time was shattered and capricious, trapping anyone is a temporal maze of glass. A grimoire was discovered by examining the rhythmic recombination of certain fractal patterns, providing this rote as means of escape.\nWhile under its effect, the subject becomes unable to change in any negative way. They cannot be hurt, age, grow tired, have any new negative conditions imposed on them and any ones currently affecting them are suspended. Supernatural attempts to violate this cause a Clash of Wills.\nThe Arrows utilize it to transform their clothes into indestructible armor or fortify walls into impregnable defenses. Mysterium archeomancers find it indispensable when exploring remote locations, allowing them to walk through lava unscathed, climb to frozen peaks without equipment and swim to the bottom of the ocean unbothered by water pressure. Some members of the Silver Ladder claim they were able to use it to intimidate werewolves into thinking they were invincible. There are even Free Council members that used it to survive unharmed after firing themselves via rail gun into space, before proceeding to stay in the vacuum for a few minutes and plunge down into reentry.\nA lesser known secret is that this was recovered alongside with its sister rote, Erosion of Eternity, which  all positive changes on the target (Withstood by Stamina). New positive conditions cannot be imposed and any active ones are suspended, they cannot be healed (they do not recover naturally and mundane medicine does nothing), rest, recover Willpower or regain Mana. Supernatural attempts to do otherwise provoke a Clash of Wills. Because of this, the majority vote of the councilors and Hierarch are required before the Guardians teach it to someone.\n",
    "extraInfo":[
      {
        "title":"Observation 1",
        "description":"Erosion of Eternity can technically inflict a worse form of resistant damage."
      },
      {
        "title":"Observation 2",
        "description":"Using the same principle as this spell, objects could be altered to make them just as armor piercing as siderite (I might write down the spell in the future). For a demonstration on what these spells build up to, see Regulus Corneas from Re"
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":420,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Converging Potentiality",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Academics, Occult, Science",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"The future is always being dynamically forged by the present. From the current moment in time, a nearly infinite number of potential branching timelines spring forth. It is the individual's choices that determine which one becomes their new present, while the others are discarded. Inspired by tales of archmages and their powerful subsouls, the Arrow Osterman developed this rote to attain a lesser version of this ability. It allowed him to choose multiple timelines at once and collapse their results into the current one.\nAfter being cast on a subject, it creates [Potency] potential selves, with the same stats, health, skills and any spells cast upon them. Because their history diverges from the point of casting, they are independent beings. However, due to being the same person, cooperation comes naturally.\nThe subject's soul and magical history remains the same. All experience (mundane and arcane) is awarded to the subject. In addition, while each temporal clone can cast spells, they all utilize the same spell control slots. Teamwork spellcasting can also be done at no penalty, but each temporal clone must cast the spell themselves.\nOnce per turn, the subject can reflexively pick another of his potential existences and set it as the present timeline, which moves their consciousness to it. When the spell ends, the subject remains in whatever vessel they were inhabiting.\nWhen the spell ends or the clones die, all of their memories join together in the inhabited vessel, as their timeline is collapsed into it. Should they be dispelled, those memories are not retrieved.\nSimilarly, Acts of Hubris and spending Willpower dots affect all instances. Finally, the clones do not have true souls, merely the temporal potential of the main soul, which is unusable for any purposes (such as sacrificial yantras).\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"The subject is able to reflexively switch vessels twice per turn."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":421,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Reframing The Present",
    "type":[
      {
        "arcana":10,
        "degree":4
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Athletics, Computer, Survival",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"When facing the myriad dangers on the field, one maxim always rings true to the Arrows: Adaptability is Strength. Developed by the Adamant Sage Subutai of the Council of Dragons as a means to reconfigure the battlefield on the fly, this rote has since been employed in myriad stratagems by Talons. Its name is an extension of his view on the Arcanum: \"Time is how we frame reality\".\nWhen cast upon a mage, it allows them to change an Imago as it enters the Fallen World, rewriting its casting history so that both an area and individual scale were picked at the same time. These spells anchor themselves on the targets, placing them at the center of the area and moving it as they do. This has allowed clever Acanthuses to, for example, create Temporal Stutters that displace lava and volcanic gasses in a bubble around them, allowing them to traverse volcanic craters easily.\nImagos must be deliberately built by the subject to take advantage of this effect and a point of mana must be spent. This effect can affect up to [Potency] spells at a time.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  },
  {
    "id":422,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Provisioner's Haversack",
    "type":[
      {
        "arcana":10,
        "degree":4
      },
      {
        "arcana":2,
        "degree":1
      }
    ],
    "properties":{
      "practice":10,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Investigation, Larceny, Survival",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"One of the most common inconveniences in the life of an archeomancer is the challenge of transporting their gear on the field. Rare research materials, delicate artifacts, dangerous imbued items and more might need to be taken to the most remote or inhospitable corners of the Tapestry. In addition, there is always the danger of exposing Sleepers to them or having them stolen by larcenous supernaturals. To combat this, the legendary archeomancer Livingston devised this spell.\nIt allows a target container to constantly push anything placed within it to the future. This allows it to store a theoretically infinite number of items while remaining empty, ensuring the user can always have the comfort of packing light yet taking everything they need.\nWhen seeking to retrieve something, the spell is able to automatically detect what they are looking for and find the item for the user, allowing them to access their full repertoire in a convenient manner. Furthermore, it is able to distinguish when a user wants to have an item stored or not, allowing them to pack a \"disguise suitcase\" to throw off onlookers. Lastly, since they are stored beyond normal time, it means provisions never go bad.\nThe caster can specify up to [Potency] conditions to permit someone to use the storage.\n",
    "extraInfo":[
      {
        "title":"Add Fate ••••",
        "description":"it allows the item to have been taken out of storage and not. Potency can be allocated on a one to one ratio to determine how many times items can be used before returning to storage \"having never been used\". However, the item's quantity is not increased. A user may pull an ammo clip as many times as needed from storage, but cannot pull two if only one was stored."
      },
      {
        "title":"+1 Reach",
        "description":"The conditions for using the storage can be more specific, allowing the caster to choose if it's a condition to allow/restrict item storage, retrieval or both. Libertines liken this to file permission management in modern computers."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":423,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Duplicate",
    "type":[
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":12,
      "primaryFactor":"Duration",
      "withstand":"Resolve",
      "suggestedRoteSkills":"?",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"For a number of actions equal to potency, create a small temporal warp the span of seconds in which time repeats itself for a subject. Any duplicated action performed by the subject will be doubled as though they had performed the action twice. Any expenditure required by the repeated action must be paid for twice, and any penalties accrued by that action will be inflicted twice.\n",
    "extraInfo":[
      
    ],
    "author":"Arduras"
  },
  {
    "id":424,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Obliterate",
    "type":[
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Resolve",
      "suggestedRoteSkills":"Weaponry, Occult or Academics",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"The spell obliterates a target's thread in the timeline, burning it back. If the spell is successful the target ceases to exist.\n",
    "extraInfo":[
      {
        "title":"+3 Reach",
        "description":"Not only is the target erased from the timeline, they are removed from the timeline retroactively backwards in time to a point based on the spell’s Duration. Remember that Temporal Sympathy comes into play with this Reach option."
      }
    ],
    "author":"Bloodyquill"
  },
  {
    "id":425,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Tabula Rasa",
    "type":[
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Temporal Sympathy",
      "suggestedRoteSkills":"Occult, Intimidation, Subterfuge",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"A person is the sum of his whole collective experiences and memories. This spell does not change the past, but removes a target’s connection to their own past by unmaking their unchanged temporal connection. The individual loses touch with who they are - their memories cut off from their mind, they become a blank slate, experiencing full and total amnesia. The effect is Lasting.\n",
    "extraInfo":[
      {
        "title":"+1 Reach",
        "description":"In addition to removing a target's memories, they may also remove a person’s connections to their skills, making all skills the target had prior to the casting 'untrained'."
      },
      {
        "title":"Add Space •••••",
        "description":"By adding Space and spending a Reach, the caster of Tabula Rasa can make it so that not only does the target not remember the world, but the world does not remember the target - leaving them a shell of the individual they were with no connections."
      }
    ],
    "author":"Jakondite"
  },
  {
    "id":426,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The World",
    "type":[
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Duration",
      "withstand":"Temporal Sympathy",
      "suggestedRoteSkills":"Science, Occult, Drive",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"This spell creates a time bubble centered on the caster (measured by Scale) where all time ceases to exist. Only she can act and move around, while the rest of the world inside the bubble (which doesn't move with her) stands completely frozen in place. She can move objects and people around as per her usual capabilities and these offer no resistance at all. The only limitation is that she can't alter the patterns in a way that would imply a variation of Structure, Health or Willpower in anyone but herself (so she cannot attack or heal other targets). She could even cross from one building to another as if walking in mid air, as she won't fall unless she wills herself to, and then she would just move downwards at her usual Speed per Turn.\n",
    "extraInfo":[
      {
        "title":"+1 Reach and 1 Mana",
        "description":"By adding a Reach and paying a Mana the caster can actually attack or heal others inside the bubble once per dot of Potency. Once all the Potency has been used, even if some Duration remains, the spell ends."
      }
    ],
    "author":"Thorbes"
  },
  {
    "id":427,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"Time Heal",
    "type":[
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Potency",
      "withstand":"Temporal Sympathy",
      "suggestedRoteSkills":"Medicine, Science, Survival",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"The life of a mage is fraught with danger. Even the Wisest ones will eventually run into a situation where they or those they care about sustain severe damage. Those well versed in Time know that \"time heals all wounds\" is more than an old adage.\nThis spell allows the caster to unmake the interval needed for the body to heal wounds. The caster is able to heal the subject up to [Potency] health of any type. The body heals as well as possible, with even bones setting correctly. However, scars still form and missing limbs cannot be restored.\nPotency may be allocated on a one to one basis to end Conditions that elapse over time (such as Drugged).\n",
    "extraInfo":[
      {
        "title":"Add Fate •••• or Life •••",
        "description":"the healing process is enhanced to the point where wounds heal optimally. New scars do not form and even old ones disappear.\nIn addition, the subject is able to heal missing limbs entirely. Potency may instead be allocated on a one to one basis to regrow them instead, with similar Potency requirements as Regeneration (core book page 152)."
      }
    ],
    "author":"KaiserAfini"
  },
  {
    "id":428,
    "userId":0,
    "favoriteCounter":0,
    "createdAt":"2022-12-09T02:12:16.202Z",
    "updatedAt":"2022-12-09T02:12:16.202Z",
    "comments":[
      
    ],
    "name":"The Phone Booth Trick",
    "type":[
      {
        "arcana":10,
        "degree":5
      }
    ],
    "properties":{
      "practice":13,
      "primaryFactor":"Duration",
      "withstand":"Temporal Sympathy",
      "suggestedRoteSkills":"Expression, Stealth, Subterfuge",
      "undefined":"Duration",
      "cost":"1 mana"
    },
    "description":"A spell named after the way comic book heroes always found a convenient place to don their disguises. It allows the subject to change and reload their equipment reflexively once per turn.\nThis has seen widespread application across all fields. Elite Arrows prepare bags of holding with contingencies for every occasion, allowing them to respond to threats optimally with zero downtime. Guardians favor using it to get lost in crowds, since a quick switch to a mundane disguise hides them better from Mage Sight. Mysterium researchers use it to rapidly swap safety gear between phases of their experiments or to react to issues during field research. The Free Council creates otherwise impossible choreographies by having performers quickly switch costumes and magical items.\n",
    "extraInfo":[
      
    ],
    "author":"KaiserAfini"
  }
]

export default spells;
