var constants = {};

constants.MONSTER = {};

constants.MONSTER.TYPE = {
    ALBATROS: {
        KEY: 'ALBATROS',
        NAME: 'Albatros'
    },
    ANT: {
        KEY: 'ANT',
        NAME: 'Ant'
    },
    BULL: {
        KEY: 'BULL',
        NAME: 'Bull'
    },
    CONDOR: {
        KEY: 'CONDOR',
        NAME: 'Condor'
    },
    CRAB: {
        KEY: 'CRAB',
        NAME: 'Crab'
    },
    DRAGON: {
        KEY: 'DRAGON',
        NAME: 'Dragon'
    },
    EYE: {
        KEY: 'EYE',
        NAME: 'Eye'
    },
    FIEND: {
        KEY: 'FIEND',
        NAME: 'Fiend'
    },
    FISH: {
        KEY: 'FISH',
        NAME: 'Fish'
    },
    FLY: {
        KEY: 'FLY',
        NAME: 'Fly'
    },
    GHOST: {
        KEY: 'GHOST',
        NAME: 'Ghost'
    },
    GOBLIN: {
        KEY: 'GOBLIN',
        NAME: 'Goblin'
    },
    GOLEM: {
        KEY: 'GOLEM',
        NAME: 'Golem'
    },
    GRIFFIN: {
        KEY: 'GRIFFIN',
        NAME: 'Griffin'
    },
    IMP: {
        KEY: 'IMP',
        NAME: 'Imp'
    },
    LIZARD: {
        KEY: 'LIZARD',
        NAME: 'Lizard'
    },
    MEDUSA: {
        KEY: 'MEDUSA',
        NAME: 'Medusa'
    },
    PLANT: {
        KEY: 'PLANT',
        NAME: 'Plant'
    },
    RAT: {
        KEY: 'RAT',
        NAME: 'Rat'
    },
    SEA: {
        KEY: 'SEA',
        NAME: 'Sea Creature'
    },
    SKELETON: {
        KEY: 'SKELETON',
        NAME: 'Skeleton'
    },
    SLIME: {
        KEY: 'SLIME',
        NAME: 'Slime'
    },
    SNAKE: {
        KEY: 'SNAKE',
        NAME: 'Snake'
    },
    WOLF: {
        KEY: 'WOLF',
        NAME: 'Wolf'
    },
    WORM: {
        KEY: 'WORM',
        NAME: 'Worm'
    },
    ZOMBIE: {
        KEY: 'ZOMBIE',
        NAME: 'Zombie'
    }
};

constants.MONSTER.TRANSFORMATION_TABLE = {
    // Albatros, Griffin, Dragon
    ALBATROS_DRAGON_GRIFFIN: {
        ALBATROS: null,
        ANT: constants.MONSTER.TYPE.BULL.KEY,
        BULL: constants.MONSTER.TYPE.SLIME.KEY,
        CONDOR: constants.MONSTER.TYPE.FISH.KEY,
        CRAB: constants.MONSTER.TYPE.EYE.KEY,
        DRAGON: null,
        EYE: constants.MONSTER.TYPE.CRAB.KEY,
        FISH: null,
        FLY: constants.MONSTER.TYPE.ALBATROS.KEY,
        GHOST: constants.MONSTER.TYPE.ZOMBIE.KEY,
        GOBLIN: constants.MONSTER.TYPE.SKELETON.KEY,
        GOLEM: constants.MONSTER.TYPE.SEA.KEY,
        GRIFFIN: null,
        IMP: constants.MONSTER.TYPE.WORM.KEY,
        LIZARD: constants.MONSTER.TYPE.GOBLIN.KEY,
        MEDUSA: constants.MONSTER.TYPE.GOLEM.KEY,
        PLANT: constants.MONSTER.TYPE.GRIFFIN.KEY,
        RAT: constants.MONSTER.TYPE.FLY.KEY,
        SEA: constants.MONSTER.TYPE.CONDOR.KEY,
        SKELETON: constants.MONSTER.TYPE.LIZARD.KEY,
        SLIME: constants.MONSTER.TYPE.ANT.KEY,
        SNAKE: constants.MONSTER.TYPE.GHOST.KEY,
        WOLF: constants.MONSTER.TYPE.SNAKE.KEY,
        WORM: constants.MONSTER.TYPE.WOLF.KEY,
        ZOMBIE: constants.MONSTER.TYPE.RAT.KEY,
        GEN_BU: constants.MONSTER.TYPE.IMP.KEY,
        SEI_RYU: constants.MONSTER.TYPE.DRAGON.KEY,
        BYAK_KO: constants.MONSTER.TYPE.DRAGON.KEY,
        SU_ZAKU: constants.MONSTER.TYPE.MEDUSA.KEY
    },
    ANT_FLY_CRAB: {
        
    },
    BULL_LIZARD: {
        
    },
    CONDOR_IMP: {
        
    },
    EYE_SLIME: {
        
    },
    FISH: {
        
    },
    GHOST_SKELETON_ZOMBIE: {
        
    },
    GOBLIN_RAT_WOLF: {
        
    },
    GOLEM: {
        
    },
    MEDUSA_SNAKE_WORM: {
        
    },
    PLANT_SEA: {
    
    }
};

constants.MONSTER.TRANSFORMATION = {
    ALBATROS: constants.MONSTER.TRANSFORMATION_TABLE.ALBATROS_DRAGON_GRIFFIN,
    ANT: constants.MONSTER.TRANSFORMATION_TABLE.ANT_FLY_CRAB,
    BULL: constants.MONSTER.TRANSFORMATION_TABLE.BULL_LIZARD,
    CONDOR: constants.MONSTER.TRANSFORMATION_TABLE.CONDOR_IMP,
    CRAB: constants.MONSTER.TRANSFORMATION_TABLE.ANT_FLY_CRAB,
    DRAGON: constants.MONSTER.TRANSFORMATION_TABLE.ALBATROS_DRAGON_GRIFFIN,
    EYE: constants.MONSTER.TRANSFORMATION_TABLE.EYE_SLIME,
    FISH: constants.MONSTER.TRANSFORMATION_TABLE.FISH,
    FLY: constants.MONSTER.TRANSFORMATION_TABLE.ANT_FLY_CRAB,
    GHOST: constants.MONSTER.TRANSFORMATION_TABLE.GHOST_SKELETON_ZOMBIE,
    GOBLIN: constants.MONSTER.TRANSFORMATION_TABLE.GOBLIN_RAT_WOLF,
    GOLEM: constants.MONSTER.TRANSFORMATION_TABLE.GOLEM,
    GRIFFIN: constants.MONSTER.TRANSFORMATION_TABLE.ALBATROS_DRAGON_GRIFFIN,
    IMP: constants.MONSTER.TRANSFORMATION_TABLE.CONDOR_IMP,
    LIZARD: constants.MONSTER.TRANSFORMATION_TABLE.BULL_LIZARD,
    MEDUSA: constants.MONSTER.TRANSFORMATION_TABLE.MEDUSA_SNAKE_WORM,
    PLANT: constants.MONSTER.TRANSFORMATION_TABLE.PLANT_SEA,
    RAT: constants.MONSTER.TRANSFORMATION_TABLE.GOBLIN_RAT_WOLF,
    SEA: constants.MONSTER.TRANSFORMATION_TABLE.PLANT_SEA,
    SKELETON: constants.MONSTER.TRANSFORMATION_TABLE.GHOST_SKELETON_ZOMBIE,
    SLIME: constants.MONSTER.TRANSFORMATION_TABLE.EYE_SLIME,
    SNAKE: constants.MONSTER.TRANSFORMATION_TABLE.MEDUSA_SNAKE_WORM,
    WOLF: constants.MONSTER.TRANSFORMATION_TABLE.GOBLIN_RAT_WOLF,
    WORM: constants.MONSTER.TRANSFORMATION_TABLE.MEDUSA_SNAKE_WORM,
    ZOMBIE: constants.MONSTER.TRANSFORMATION_TABLE.GHOST_SKELETON_ZOMBIE
};
    
constants.MONSTERS = [
    {
      agility: 9,
      defense: 3,
      hp: 20,
      level: 1,
      mana: 4,
      name: 'Albatros',
      strength: 6,
      image: {
          height: 192,
          width: 144,
          x: -360,
          y: -423
      },
      avatar: {
          height: 32,
          width: 32,
          x: -202,
          y: -638
      },
      type: constants.MONSTER.TYPE.ALBATROS.KEY
    }, {
      agility: 38,
      defense: 14,
      hp: 150,
      level: 6,
      mana: 21,
      name: 'Eagle',
      strength: 23,
      image: { height: 192, width: 144, x: -360, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.ALBATROS.KEY
    }, {
      agility: 74,
      defense: 32,
      hp: 330,
      level: 10,
      mana: 45,
      name: 'Thunder',
      strength: 47,
      image: { height: 192, width: 144, x: -360, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.ALBATROS.KEY
    }, {
      agility: 99,
      defense: 47,
      hp: 501,
      level: 12,
      mana: 64,
      name: 'Cocatris',
      strength: 66,
      image: { height: 192, width: 144, x: -360, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.ALBATROS.KEY
    }, {
      agility: 99,
      defense: 56,
      hp: 606,
      level: 13,
      mana: 74,
      name: 'Rock',
      strength: 76,
      image: { height: 192, width: 144, x: -360, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.ALBATROS.KEY
    }, {
      agility: 99,
      defense: 62,
      hp: 666,
      level: 14,
      mana: 80,
      name: 'Phoenix',
      strength: 82,
      image: { height: 192, width: 144, x: -360, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.ALBATROS.KEY
    }, {
      agility: 7,
      defense: 9,
      hp: 20,
      level: 1,
      mana: 6,
      name: 'Clipper',
      strength: 4,
      image: { height: 192, width: 96, x: -18, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.ANT.KEY
    }, {
      agility: 38,
      defense: 40,
      hp: 202,
      level: 7,
      mana: 29,
      name: 'Beetle',
      strength: 19,
      image: { height: 192, width: 96, x: -18, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.ANT.KEY
    }, {
      agility: 43,
      defense: 45,
      hp: 231,
      level: 8,
      mana: 33,
      name: 'Ant Lion',
      strength: 22,
      image: { height: 192, width: 96, x: -18, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.ANT.KEY
    }, {
      agility: 53,
      defense: 55,
      hp: 295,
      level: 9,
      mana: 41,
      name: 'Atom Ant',
      strength: 28,
      image: { height: 192, width: 96, x: -18, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.ANT.KEY
    }, {
      agility: 87,
      defense: 89,
      hp: 551,
      level: 13,
      mana: 70,
      name: 'Scorpion',
      strength: 52,
      image: { height: 192, width: 96, x: -18, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.ANT.KEY
    }, {
      agility: 99,
      defense: 99,
      hp: 666,
      level: 14,
      mana: 81,
      name: 'Scarab',
      strength: 62,
      image: { height: 192, width: 96, x: -18, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.ANT.KEY
    }, {
      agility: 5,
      defense: 7,
      hp: 60,
      level: 1,
      mana: 4,
      name: 'Redbull',
      strength: 8,
      image: { height: 192, width: 141, x: -1623, y: -192}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.BULL.KEY
    }, {
      agility: 14,
      defense: 16,
      hp: 150,
      level: 4,
      mana: 9,
      name: 'Rhino',
      strength: 21,
      image: { height: 192, width: 141, x: -1623, y: -192}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.BULL.KEY
    }, {
      agility: 36,
      defense: 38,
      hp: 295,
      level: 8,
      mana: 25,
      name: 'Triceras',
      strength: 49,
      image: { height: 192, width: 141, x: -1623, y: -192}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.BULL.KEY
    }, {
      agility: 45,
      defense: 47,
      hp: 409,
      level: 10,
      mana: 32,
      name: 'Behemoth',
      strength: 60,
      image: { height: 192, width: 141, x: -1623, y: -192}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.BULL.KEY
    }, {
      agility: 69,
      defense: 71,
      hp: 666,
      level: 13,
      mana: 52,
      name: 'Baku',
      strength: 88,
      image: { height: 192, width: 141, x: -1623, y: -192}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.BULL.KEY
    }, {
      agility: 80,
      defense: 82,
      hp: 795,
      level: 14,
      mana: 62,
      name: 'Ganesha',
      strength: 99,
      image: { height: 192, width: 141, x: -1623, y: -192}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.BULL.KEY
    }, {
      agility: 14,
      defense: 6,
      hp: 82,
      level: 3,
      mana: 9,
      name: 'Condor',
      strength: 11,
      image: { height: 192, width: 96, x: -1053, y: 0}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.CONDOR.KEY
    }, {
      agility: 25,
      defense: 11,
      hp: 150,
      level: 5,
      mana: 17,
      name: 'Raven',
      strength: 19,
      image: { height: 192, width: 96, x: -1053, y: 0}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.CONDOR.KEY
    }, {
      agility: 39,
      defense: 19,
      hp: 231,
      level: 7,
      mana: 28,
      name: 'Harpy',
      strength: 30,
      image: { height: 192, width: 96, x: -1053, y: 0}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.CONDOR.KEY
    }, {
      agility: 60,
      defense: 32,
      hp: 368,
      level: 10,
      mana: 45,
      name: 'Ten-gu',
      strength: 47,
      image: { height: 192, width: 96, x: -1053, y: 0}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.CONDOR.KEY
    }, {
      agility: 88,
      defense: 52,
      hp: 606,
      level: 13,
      mana: 69,
      name: 'Garuda',
      strength: 71,
      image: { height: 192, width: 96, x: -1053, y: 0}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.CONDOR.KEY
    }, {
      agility: 99,
      defense: 62,
      hp: 729,
      level: 14,
      mana: 80,
      name: 'Nike',
      strength: 82,
      image: { height: 192, width: 96, x: -1053, y: 0}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.CONDOR.KEY
    }, {
      agility: 8,
      defense: 22,
      hp: 103,
      level: 4,
      mana: 6,
      name: 'Shrimp',
      strength: 13,
      image: { height: 192, width: 96, x: -156, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.CRAB.KEY
    }, {
      agility: 12,
      defense: 32,
      hp: 150,
      level: 5,
      mana: 10,
      name: 'Atomcrab',
      strength: 18,
      image: { height: 192, width: 96, x: -156, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.CRAB.KEY
    }, {
      agility: 26,
      defense: 61,
      hp: 295,
      level: 8,
      mana: 24,
      name: 'Crab',
      strength: 37,
      image: { height: 192, width: 96, x: -156, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.CRAB.KEY
    }, {
      agility: 29,
      defense: 67,
      hp: 330,
      level: 9,
      mana: 27,
      name: 'Ice Crab',
      strength: 41,
      image: { height: 192, width: 96, x: -156, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.CRAB.KEY
    }, {
      agility: 53,
      defense: 99,
      hp: 606,
      level: 13,
      mana: 51,
      name: 'Kingcrab',
      strength: 70,
      image: { height: 192, width: 96, x: -156, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.CRAB.KEY
    }, {
      agility: 63,
      defense: 99,
      hp: 729,
      level: 14,
      mana: 61,
      name: 'Dagon',
      strength: 81,
      image: { height: 192, width: 96, x: -156, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.CRAB.KEY
    }, {
      agility: 19,
      defense: 28,
      hp: 202,
      level: 7,
      mana: 39,
      name: 'Dragon 1',
      strength: 30,
      image: { height: 192, width: 140, x: -180, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.DRAGON.KEY
    }, {
      agility: 25,
      defense: 36,
      hp: 262,
      level: 8,
      mana: 49,
      name: 'Dragon 2',
      strength: 38,
      image: { height: 192, width: 140, x: -180, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.DRAGON.KEY
    }, {
      agility: 35,
      defense: 49,
      hp: 368,
      level: 10,
      mana: 65,
      name: 'Dragon 3',
      strength: 51,
      image: { height: 192, width: 140, x: -180, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.DRAGON.KEY
    }, {
      agility: 47,
      defense: 64,
      hp: 501,
      level: 12,
      mana: 83,
      name: 'Dragon 4',
      strength: 66,
      image: { height: 192, width: 140, x: -180, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.DRAGON.KEY
    }, {
      agility: 56,
      defense: 74,
      hp: 606,
      level: 13,
      mana: 94,
      name: 'Dragon 5',
      strength: 76,
      image: { height: 192, width: 140, x: -180, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.DRAGON.KEY
    }, {
      agility: 62,
      defense: 80,
      hp: 666,
      level: 14,
      mana: 99,
      name: 'Tiamat',
      strength: 99,
      image: { height: 192, width: 140, x: -180, y: -423}, avatar: { height: 32, width: 32, x: -202, y: -638 }, type: constants.MONSTER.TYPE.DRAGON.KEY
    }, {
      agility: 6,
      defense: 12,
      hp: 82,
      level: 4,
      mana: 22,
      name: 'Big Eye',
      strength: 8,
      image: { height: 192, width: 72, x: -288, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.EYE.KEY
    }, {
      agility: 18,
      defense: 29,
      hp: 202,
      level: 7,
      mana: 49,
      name: 'Gazer',
      strength: 20,
      image: { height: 192, width: 72, x: -288, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.EYE.KEY
    }, {
      agility: 27,
      defense: 41,
      hp: 295,
      level: 9,
      mana: 67,
      name: 'Seeker',
      strength: 29,
      image: { height: 192, width: 72, x: -288, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.EYE.KEY
    }, {
      agility: 42,
      defense: 60,
      hp: 454,
      level: 12,
      mana: 94,
      name: 'Watcher',
      strength: 44,
      image: { height: 192, width: 72, x: -288, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.EYE.KEY
    }, {
      agility: 55,
      defense: 75,
      hp: 606,
      level: 13,
      mana: 99,
      name: 'Evil Eye',
      strength: 57,
      image: { height: 192, width: 72, x: -288, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.EYE.KEY
    }, {
      agility: 61,
      defense: 81,
      hp: 666,
      level: 14,
      mana: 99,
      name: 'Beholder',
      strength: 63,
      image: { height: 192, width: 72, x: -288, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.EYE.KEY
    }, {
      agility: 12,
      defense: 11,
      hp: 250,
      level: null,
      mana: 12,
      name: 'Gen-bu',
      strength: 12,
      image: { height: 192, width: 144, x: -903, y: -423}, avatar: { height: 64, width: 64, x: -162, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 27,
      defense: 25,
      hp: 600,
      level: 7,
      mana: 27,
      name: 'Sei-ryu',
      strength: 27,
      image: { height: 192, width: 144, x: -1098, y: -423}, avatar: { height: 64, width: 64, x: -252, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 50,
      defense: 45,
      hp: 1000,
      level: null,
      mana: 50,
      name: 'Byak-ko',
      strength: 50,
      image: { height: 192, width: 144, x: -1293, y: -423}, avatar: { height: 64, width: 64, x: -432, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 85,
      defense: 77,
      hp:  1500,
      level: 13,
      mana: 85,
      name: 'Su-zaku',
      strength: 85,
      image: { height: 192, width: 141, x: -1488, y: -423}, avatar: { height: 64, width: 96, x: -522, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 90,
      defense: 100,
      hp: 1500,
      level: 14,
      mana: 90,
      name: 'Gen-bu2',
      strength: 90,
      image: { height: 192, width: 144, x: -903, y: -423}, avatar: { height: 64, width: 64, x: -162, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 90,
      defense: 90,
      hp: 1750,
      level: 14,
      mana: 100,
      name: 'Sei-ryu2',
      strength: 100,
      image: { height: 192, width: 144, x: -1098, y: -423}, avatar: { height: 64, width: 64, x: -252, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 100,
      defense: 90,
      hp: 2000,
      level: 14,
      mana: 100,
      name: 'Byak-ko2',
      strength: 100,
      image: { height: 192, width: 144, x: -1293, y: -423}, avatar: { height: 64, width: 64, x: -432, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 100,
      defense: 100,
      hp:  2500,
      level: 14,
      mana: 100,
      name: 'Su-zaku2',
      strength: 100,
      image: { height: 192, width: 141, x: -1488, y: -423}, avatar: { height: 64, width: 96, x: -522, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 90,
      defense: 90,
      hp:  2000,
      level: 14,
      mana: 90,
      name: 'Ashura',
      strength: 90,
      image: { height: 192, width: 192, x: -3, y: -618}, avatar: { height: 64, width: 64, x: -642, y: -476 }, type: constants.MONSTER.TYPE.FIEND.KEY
    }, {
      agility: 11,
      defense: 6,
      hp: 60,
      level: 2,
      mana: 5,
      name: 'Barracud',
      strength: 9,
      image: { height: 192, width: 96, x: -153, y: 0}, avatar: { height: 32, width: 32, x: -382, y: -708 }, type: constants.MONSTER.TYPE.FISH.KEY
    }, {
      agility: 14,
      defense: 9,
      hp: 82,
      level: 3,
      mana: 6,
      name: 'Piranha',
      strength: 11,
      image: { height: 192, width: 96, x: -153, y: 0}, avatar: { height: 32, width: 32, x: -382, y: -708 }, type: constants.MONSTER.TYPE.FISH.KEY
    }, {
      agility: 30,
      defense: 21,
      hp: 175,
      level: 6,
      mana: 14,
      name: 'Shark',
      strength: 23,
      image: { height: 192, width: 96, x: -153, y: 0}, avatar: { height: 32, width: 32, x: -382, y: -708 }, type: constants.MONSTER.TYPE.FISH.KEY
    }, {
      agility: 54,
      defense: 40,
      hp: 330,
      level: 9,
      mana: 28,
      name: 'Gunfish',
      strength: 42,
      image: { height: 192, width: 96, x: -153, y: 0}, avatar: { height: 32, width: 32, x: -382, y: -708 }, type: constants.MONSTER.TYPE.FISH.KEY
    }, {
      agility: 88,
      defense: 69,
      hp: 606,
      level: 13,
      mana: 52,
      name: 'Elec Eel',
      strength: 71,
      image: { height: 192, width: 96, x: -153, y: 0}, avatar: { height: 32, width: 32, x: -382, y: -708 }, type: constants.MONSTER.TYPE.FISH.KEY
    }, {
      agility: 99,
      defense: 80,
      hp: 729,
      level: 14,
      mana: 62,
      name: 'Leviathn',
      strength: 82,
      image: { height: 192, width: 96, x: -153, y: 0}, avatar: { height: 32, width: 32, x: -382, y: -708 }, type: constants.MONSTER.TYPE.FISH.KEY
    }, {
      agility: 9,
      defense: 8,
      hp: 20,
      level: 1,
      mana: 5,
      name: 'Fly',
      strength: 6,
      image: { height: 192, width: 96, x: -291, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.FLY.KEY
    }, {
      agility: 18,
      defense: 17,
      hp: 82,
      level: 3,
      mana: 11,
      name: 'Dragonfly',
      strength: 12,
      image: { height: 192, width: 96, x: -291, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.FLY.KEY
    }, {
      agility: 26,
      defense: 25,
      hp: 126,
      level: 5,
      mana: 17,
      name: 'Hornet',
      strength: 18,
      image: { height: 192, width: 96, x: -291, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.FLY.KEY
    }, {
      agility: 31,
      defense: 30,
      hp: 150,
      level: 6,
      mana: 21,
      name: 'Mosquito',
      strength: 22,
      image: { height: 192, width: 96, x: -291, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.FLY.KEY
    }, {
      agility: 89,
      defense: 88,
      hp: 551,
      level: 13,
      mana: 69,
      name: 'Cicada',
      strength: 70,
      image: { height: 192, width: 96, x: -291, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.FLY.KEY
    }, {
      agility: 99,
      defense: 99,
      hp: 666,
      level: 14,
      mana: 80,
      name: 'Mantis',
      strength: 82,
      image: { height: 192, width: 96, x: -291, y: -192}, avatar: { height: 32, width: 32, x: -2, y: -708 }, type: constants.MONSTER.TYPE.FLY.KEY
    }, {
      agility: 8,
      defense: 3,
      hp: 20,
      level: 2,
      mana: 9,
      name: 'O-bake',
      strength: 4,
      image: { height: 192, width: 96, x: -783, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.GHOST.KEY
    }, {
      agility: 14,
      defense: 5,
      hp: 82,
      level: 3,
      mana: 15,
      name: 'Phantom',
      strength: 6,
      image: { height: 192, width: 96, x: -783, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.GHOST.KEY
    }, {
      agility: 54,
      defense: 27,
      hp: 295,
      level: 9,
      mana: 55,
      name: 'Buruburu',
      strength: 28,
      image: { height: 192, width: 96, x: -783, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.GHOST.KEY
    }, {
      agility: 83,
      defense: 46,
      hp: 501,
      level: 12,
      mana: 84,
      name: 'Wraith',
      strength: 47,
      image: { height: 192, width: 96, x: -783, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.GHOST.KEY
    }, {
      agility: 94,
      defense: 55,
      hp: 606,
      level: 13,
      mana: 95,
      name: 'Spector',
      strength: 56,
      image: { height: 192, width: 96, x: -783, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.GHOST.KEY
    }, {
      agility: 99,
      defense: 61,
      hp: 666,
      level: 14,
      mana: 99,
      name: 'Ghost',
      strength: 63,
      image: { height: 192, width: 96, x: -783, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.GHOST.KEY
    }, {
      agility: 4,
      defense: 6,
      hp: 20,
      level: 1,
      mana: 3,
      name: 'Goblin',
      strength: 9,
      image: { height: 192, width: 144, x: -540, y: -423}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.GOBLIN.KEY
    }, {
      agility: 7,
      defense: 9,
      hp: 60,
      level: 2,
      mana: 5,
      name: 'Oni',
      strength: 14,
      image: { height: 192, width: 144, x: -540, y: -423}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.GOBLIN.KEY
    }, {
      agility: 32,
      defense: 34,
      hp: 262,
      level: 8,
      mana: 22,
      name: 'Ogre',
      strength: 55,
      image: { height: 192, width: 144, x: -540, y: -423}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.GOBLIN.KEY
    }, {
      agility: 54,
      defense: 56,
      hp: 454,
      level: 11,
      mana: 39,
      name: 'Giant',
      strength: 87,
      image: { height: 192, width: 144, x: -540, y: -423}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.GOBLIN.KEY
    }, {
      agility: 74,
      defense: 76,
      hp: 666,
      level: 13,
      mana: 56,
      name: 'Titan',
      strength: 99,
      image: { height: 192, width: 144, x: -540, y: -423}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.GOBLIN.KEY
    }, {
      agility: 80,
      defense: 82,
      hp: 729,
      level: 14,
      mana: 62,
      name: 'Susano-o',
      strength: 99,
      image: { height: 192, width: 144, x: -540, y: -423}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.GOBLIN.KEY
    }, {
      agility: 11,
      defense: 18,
      hp: 150,
      level: 5,
      mana: 24,
      name: 'Woodman',
      strength: 26,
      image: { height: 192, width: 141, x: -1248, y: -192}, avatar: { height: 32, width: 32, x: -192, y: -708 }, type: constants.MONSTER.TYPE.GOLEM.KEY
    }, {
      agility: 25,
      defense: 37,
      hp: 295,
      level: 8,
      mana: 48,
      name: 'Clayman',
      strength: 50,
      image: { height: 192, width: 141, x: -1248, y: -192}, avatar: { height: 32, width: 32, x: -192, y: -708 }, type: constants.MONSTER.TYPE.GOLEM.KEY
    }, {
      agility: 28,
      defense: 41,
      hp: 330,
      level: 9,
      mana: 53,
      name: 'Stoneman',
      strength: 55,
      image: { height: 192, width: 141, x: -1248, y: -192}, avatar: { height: 32, width: 32, x: -192, y: -708 }, type: constants.MONSTER.TYPE.GOLEM.KEY
    }, {
      agility: 47,
      defense: 65,
      hp: 551,
      level: 12,
      mana: 82,
      name: 'Ironman',
      strength: 84,
      image: { height: 192, width: 141, x: -1248, y: -192}, avatar: { height: 32, width: 32, x: -192, y: -708 }, type: constants.MONSTER.TYPE.GOLEM.KEY
    }, {
      agility: 56,
      defense: 75,
      hp: 666,
      level: 13,
      mana: 93,
      name: 'Fireman',
      strength: 95,
      image: { height: 192, width: 141, x: -1248, y: -192}, avatar: { height: 32, width: 32, x: -192, y: -708 }, type: constants.MONSTER.TYPE.GOLEM.KEY
    }, {
      agility: 62,
      defense: 81,
      hp: 729,
      level: 14,
      mana: 99,
      name: 'Mazin',
      strength: 99,
      image: { height: 192, width: 141, x: -1248, y: -192}, avatar: { height: 32, width: 32, x: -192, y: -708 }, type: constants.MONSTER.TYPE.GOLEM.KEY
    }, {
      agility: 21,
      defense: 14,
      hp: 103,
      level: 4,
      mana: 22,
      name: 'Griffin',
      strength: 15,
      image: { height: 192, width: 144, x: 0, y: -423}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.GRIFFIN.KEY
    }, {
      agility: 30,
      defense: 21,
      hp: 150,
      level: 6,
      mana: 31,
      name: 'Mantcore',
      strength: 22,
      image: { height: 192, width: 144, x: 0, y: -423}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.GRIFFIN.KEY
    }, {
      agility: 49,
      defense: 36,
      hp: 262,
      level: 9,
      mana: 50,
      name: 'Chimera',
      strength: 37,
      image: { height: 192, width: 144, x: 0, y: -423}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.GRIFFIN.KEY
    }, {
      agility: 71,
      defense: 54,
      hp: 409,
      level: 11,
      mana: 72,
      name: 'Nue',
      strength: 55,
      image: { height: 192, width: 144, x: 0, y: -423}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.GRIFFIN.KEY
    }, {
      agility: 94,
      defense: 74,
      hp: 606,
      level: 13,
      mana: 95,
      name: 'Sphinx',
      strength: 75,
      image: { height: 192, width: 144, x: 0, y: -423}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.GRIFFIN.KEY
    }, {
      agility: 99,
      defense: 80,
      hp: 666,
      level: 14,
      mana: 99,
      name: 'Ki-rin',
      strength: 82,
      image: { height: 192, width: 144, x: 0, y: -423}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.GRIFFIN.KEY
    }, {
      agility: 9,
      defense: 8,
      hp: 82,
      level: 3,
      mana: 12,
      name: 'Gargoyle',
      strength: 11,
      image: { height: 192, width: 144, x: -1428, y: -192}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.IMP.KEY
    }, {
      agility: 24,
      defense: 23,
      hp: 202,
      level: 7,
      mana: 27,
      name: 'Imp',
      strength: 26,
      image: { height: 192, width: 144, x: -1428, y: -192}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.IMP.KEY
    }, {
      agility: 54,
      defense: 53,
      hp: 454,
      level: 11,
      mana: 57,
      name: 'Demon',
      strength: 56,
      image: { height: 192, width: 144, x: -1428, y: -192}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.IMP.KEY
    }, {
      agility: 59,
      defense: 58,
      hp: 501,
      level: 12,
      mana: 62,
      name: 'Demolord',
      strength: 61,
      image: { height: 192, width: 144, x: -1428, y: -192}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.IMP.KEY
    }, {
      agility: 74,
      defense: 73,
      hp: 666,
      level: 13,
      mana: 77,
      name: 'Demoking',
      strength: 76,
      image: { height: 192, width: 144, x: -1428, y: -192}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.IMP.KEY
    }, {
      agility: 80,
      defense: 79,
      hp: 729,
      level: 14,
      mana: 83,
      name: 'Athtalot',
      strength: 82,
      image: { height: 192, width: 144, x: -1428, y: -192}, avatar: { height: 32, width: 32, x: -402, y: -638 }, type: constants.MONSTER.TYPE.IMP.KEY
    }, {
      agility: 4,
      defense: 7,
      hp: 40,
      level: 1,
      mana: 2,
      name: 'Lizard',
      strength: 5,
      image: { height: 192, width: 96, x: -1338, y: 0}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.LIZARD.KEY
    }, {
      agility: 6,
      defense: 11,
      hp: 82,
      level: 2,
      mana: 4,
      name: 'P-frog',
      strength: 8,
      image: { height: 192, width: 96, x: -1338, y: 0}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.LIZARD.KEY
    }, {
      agility: 7,
      defense: 14,
      hp: 103,
      level: 3,
      mana: 5,
      name: 'Gecko',
      strength: 12,
      image: { height: 192, width: 96, x: -1338, y: 0}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.LIZARD.KEY
    }, {
      agility: 40,
      defense: 71,
      hp: 501,
      level: 11,
      mana: 38,
      name: 'Dinosaur',
      strength: 55,
      image: { height: 192, width: 96, x: -1338, y: 0}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.LIZARD.KEY
    }, {
      agility: 53,
      defense: 88,
      hp: 666,
      level: 13,
      mana: 51,
      name: 'Salamand',
      strength: 70,
      image: { height: 192, width: 96, x: -1338, y: 0}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.LIZARD.KEY
    }, {
      agility: 63,
      defense: 99,
      hp: 795,
      level: 14,
      mana: 61,
      name: 'Basilisk',
      strength: 81,
      image: { height: 192, width: 96, x: -1338, y: 0}, avatar: { height: 32, width: 32, x: -992, y: -638 }, type: constants.MONSTER.TYPE.LIZARD.KEY
    }, {
      agility: 19,
      defense: 17,
      hp: 126,
      level: 5,
      mana: 25,
      name: 'Medusa',
      strength: 11,
      image: { height: 192, width: 96, x: -918, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.MEDUSA.KEY
    }, {
      agility: 23,
      defense: 21,
      hp: 150,
      level: 6,
      mana: 30,
      name: 'Siren',
      strength: 14,
      image: { height: 192, width: 96, x: -918, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.MEDUSA.KEY
    }, {
      agility: 56,
      defense: 54,
      hp: 409,
      level: 11,
      mana: 71,
      name: 'Lamia',
      strength: 39,
      image: { height: 192, width: 96, x: -918, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.MEDUSA.KEY
    }, {
      agility: 61,
      defense: 59,
      hp: 454,
      level: 12,
      mana: 77,
      name: 'Naga',
      strength: 43,
      image: { height: 192, width: 96, x: -918, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.MEDUSA.KEY
    }, {
      agility: 76,
      defense: 74,
      hp: 606,
      level: 13,
      mana: 94,
      name: 'Scylla',
      strength: 56,
      image: { height: 192, width: 96, x: -918, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.MEDUSA.KEY
    }, {
      agility: 82,
      defense: 80,
      hp: 666,
      level: 14,
      mana: 99,
      name: 'Lilith',
      strength: 62,
      image: { height: 192, width: 96, x: -918, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.MEDUSA.KEY
    }, {
      agility: 8,
      defense: 16,
      hp: 150,
      level: 4,
      mana: 9,
      name: 'Cactus',
      strength: 15,
      image: { height: 192, width: 96, x: -1485, y: 0}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.PLANT.KEY
    }, {
      agility: 10,
      defense: 19,
      hp: 175,
      level: 5,
      mana: 11,
      name: 'P-flower',
      strength: 18,
      image: { height: 192, width: 96, x: -1485, y: 0}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.PLANT.KEY
    }, {
      agility: 15,
      defense: 26,
      hp: 231,
      level: 7,
      mana: 16,
      name: 'Garlic',
      strength: 25,
      image: { height: 192, width: 96, x: -1485, y: 0}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.PLANT.KEY
    }, {
      agility: 27,
      defense: 42,
      hp: 368,
      level: 9,
      mana: 28,
      name: 'Thorn',
      strength: 41,
      image: { height: 192, width: 96, x: -1485, y: 0}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.PLANT.KEY
    }, {
      agility: 51,
      defense: 71,
      hp: 666,
      level: 13,
      mana: 52,
      name: 'F-flower',
      strength: 70,
      image: { height: 192, width: 96, x: -1485, y: 0}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.PLANT.KEY
    }, {
      agility: 61,
      defense: 82,
      hp: 795,
      level: 14,
      mana: 62,
      name: 'Darkrose',
      strength: 81,
      image: { height: 192, width: 96, x: -1485, y: 0}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.PLANT.KEY
    }, {
      agility: 5,
      defense: 4,
      hp: 40,
      level: 1,
      mana: 7,
      name: 'Wererat',
      strength: 8,
      image: { height: 192, width: 96, x: -18, y: -192}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.RAT.KEY
    }, {
      agility: 11,
      defense: 7,
      hp: 103,
      level: 4,
      mana: 13,
      name: 'Werewolf',
      strength: 17,
      image: { height: 192, width: 96, x: -18, y: -192}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.RAT.KEY
    }, {
      agility: 21,
      defense: 14,
      hp: 175,
      level: 6,
      mana: 23,
      name: 'Catwoman',
      strength: 30,
      image: { height: 192, width: 96, x: -18, y: -192}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.RAT.KEY
    }, {
      agility: 54,
      defense: 39,
      hp: 454,
      level: 11,
      mana: 56,
      name: 'Minotaur',
      strength: 71,
      image: { height: 192, width: 96, x: -18, y: -192}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.RAT.KEY
    }, {
      agility: 69,
      defense: 52,
      hp: 606,
      level: 13,
      mana: 71,
      name: 'Rakshasa',
      strength: 88,
      image: { height: 192, width: 96, x: -18, y: -192}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.RAT.KEY
    }, {
      agility: 80,
      defense: 62,
      hp: 729,
      level: 14,
      mana: 82,
      name: 'Anubis',
      strength: 99,
      image: { height: 192, width: 96, x: -18, y: -192}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.RAT.KEY
    }, {
      agility: 12,
      defense: 11,
      hp: 126,
      level: 4,
      mana: 7,
      name: 'Octopus',
      strength: 13,
      image: { height: 192, width: 93, x: -438, y: -192}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.SEA.KEY
    }, {
      agility: 25,
      defense: 24,
      hp: 231,
      level: 6,
      mana: 16,
      name: 'Clam',
      strength: 26,
      image: { height: 192, width: 93, x: -438, y: -192}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.SEA.KEY
    }, {
      agility: 33,
      defense: 32,
      hp: 295,
      level: 8,
      mana: 22,
      name: 'Amoeba',
      strength: 34,
      image: { height: 192, width: 93, x: -438, y: -192}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.SEA.KEY
    }, {
      agility: 50,
      defense: 49,
      hp: 409,
      level: 10,
      mana: 35,
      name: 'Ammonite',
      strength: 51,
      image: { height: 192, width: 93, x: -438, y: -192}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.SEA.KEY
    }, {
      agility: 70,
      defense: 69,
      hp: 606,
      level: 13,
      mana: 52,
      name: 'Squid',
      strength: 71,
      image: { height: 192, width: 93, x: -438, y: -192}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.SEA.KEY
    }, {
      agility: 81,
      defense: 80,
      hp: 729,
      level: 14,
      mana: 62,
      name: 'Kraken',
      strength: 82,
      image: { height: 192, width: 93, x: -438, y: -192}, avatar: { height: 32, width: 32, x: -592, y: -638 }, type: constants.MONSTER.TYPE.SEA.KEY
    }, {
      agility: 4,
      defense: 2,
      hp: 20,
      level: 1,
      mana: 7,
      name: 'Skeleton',
      strength: 5,
      image: { height: 192, width: 96, x: -1620, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.SKELETON.KEY
    }, {
      agility: 8,
      defense: 6,
      hp: 103,
      level: 4,
      mana: 17,
      name: 'Red Bone',
      strength: 12,
      image: { height: 192, width: 96, x: -1620, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.SKELETON.KEY
    }, {
      agility: 33,
      defense: 31,
      hp: 368,
      level: 10,
      mana: 60,
      name: 'Dokuro',
      strength: 46,
      image: { height: 192, width: 96, x: -1620, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.SKELETON.KEY
    }, {
      agility: 44,
      defense: 42,
      hp: 501,
      level: 12,
      mana: 77,
      name: 'Warrior',
      strength: 60,
      image: { height: 192, width: 96, x: -1620, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.SKELETON.KEY
    }, {
      agility: 57,
      defense: 55,
      hp: 666,
      level: 13,
      mana: 94,
      name: 'Boneking',
      strength: 75,
      image: { height: 192, width: 96, x: -1620, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.SKELETON.KEY
    }, {
      agility: 63,
      defense: 61,
      hp: 729,
      level: 14,
      mana: 99,
      name: 'Lich',
      strength: 81,
      image: { height: 192, width: 96, x: -1620, y: 0}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.SKELETON.KEY
    }, {
      agility: 3,
      defense: 4,
      hp: 60,
      level: 2,
      mana: 8,
      name: 'Slime',
      strength: 5,
      image: { height: 192, width: 96, x: -393, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.SLIME.KEY
    }, {
      agility: 21,
      defense: 22,
      hp: 295,
      level: 8,
      mana: 44,
      name: 'Jelly',
      strength: 23,
      image: { height: 192, width: 96, x: -393, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.SLIME.KEY
    }, {
      agility: 34,
      defense: 35,
      hp: 454,
      level: 10,
      mana: 65,
      name: 'Tororo',
      strength: 36,
      image: { height: 192, width: 96, x: -393, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.SLIME.KEY
    }, {
      agility: 42,
      defense: 43,
      hp: 551,
      level: 12,
      mana: 77,
      name: 'Gummy',
      strength: 44,
      image: { height: 192, width: 96, x: -393, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.SLIME.KEY
    }, {
      agility: 55,
      defense: 56,
      hp: 729,
      level: 13,
      mana: 94,
      name: 'Pudding',
      strength: 57,
      image: { height: 192, width: 96, x: -393, y: 0}, avatar: { height: 32, width: 32, x: -792, y: -638 }, type: constants.MONSTER.TYPE.SLIME.KEY
    }, {
      agility: 61,
      defense: 62,
      hp: 795,
      level: 14,
      mana: 99,
      name: 'Hi-slime',
      strength: 63,
      image: { height: 192, width: 96, x: -393, y: 0}, avatar: { height: 32, width: 30, x: -792, y: -638 }, type: constants.MONSTER.TYPE.SLIME.KEY
    }, {
      agility: 7,
      defense: 11,
      hp: 60,
      level: 2,
      mana: 5,
      name: 'Snake',
      strength: 9,
      image: { height: 192, width: 96, x: -528, y: 0}, avatar: { height: 32, width: 30, x: -2, y: -638 }, type: constants.MONSTER.TYPE.SNAKE.KEY
    }, {
      agility: 14,
      defense: 21,
      hp: 126,
      level: 5,
      mana: 9,
      name: 'Serpent',
      strength: 16,
      image: { height: 192, width: 96, x: -528, y: 0}, avatar: { height: 32, width: 30, x: -2, y: -638 }, type: constants.MONSTER.TYPE.SNAKE.KEY
    }, {
      agility: 28,
      defense: 39,
      hp: 231,
      level: 7,
      mana: 19,
      name: 'Anaconda',
      strength: 30,
      image: { height: 192, width: 96, x: -528, y: 0}, avatar: { height: 32, width: 30, x: -2, y: -638 }, type: constants.MONSTER.TYPE.SNAKE.KEY
    }, {
      agility: 49,
      defense: 65,
      hp: 409,
      level: 10,
      mana: 35,
      name: 'Hydra',
      strength: 51,
      image: { height: 192, width: 96, x: -528, y: 0}, avatar: { height: 32, width: 30, x: -2, y: -638 }, type: constants.MONSTER.TYPE.SNAKE.KEY
    }, {
      agility: 69,
      defense: 88,
      hp: 606,
      level: 13,
      mana: 52,
      name: 'Ko-run',
      strength: 71,
      image: { height: 192, width: 96, x: -528, y: 0}, avatar: { height: 32, width: 30, x: -2, y: -638 }, type: constants.MONSTER.TYPE.SNAKE.KEY
    }, {
      agility: 80,
      defense: 99,
      hp: 729,
      level: 14,
      mana: 62,
      name: 'Jorgandr',
      strength: 82,
      image: { height: 192, width: 96, x: -528, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.SNAKE.KEY
    }, {
      agility: 10,
      defense: 8,
      hp: 60,
      level: 2,
      mana: 5,
      name: 'Wolf',
      strength: 12,
      image: { height: 192, width: 96, x: -1203, y: 0}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.WOLF.KEY
    }, {
      agility: 16,
      defense: 12,
      hp: 103,
      level: 4,
      mana: 7,
      name: 'Jaguar',
      strength: 18,
      image: { height: 192, width: 96, x: -1203, y: 0}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.WOLF.KEY
    }, {
      agility: 33,
      defense: 25,
      hp: 202,
      level: 7,
      mana: 16,
      name: 'Sabercat',
      strength: 35,
      image: { height: 192, width: 96, x: -1203, y: 0}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.WOLF.KEY
    }, {
      agility: 59,
      defense: 46,
      hp: 368,
      level: 10,
      mana: 32,
      name: 'Snowcat',
      strength: 61,
      image: { height: 192, width: 96, x: -1203, y: 0}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.WOLF.KEY
    }, {
      agility: 87,
      defense: 70,
      hp: 606,
      level: 13,
      mana: 52,
      name: 'Blackcat',
      strength: 89,
      image: { height: 192, width: 96, x: -1203, y: 0}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.WOLF.KEY
    }, {
      agility: 99,
      defense: 81,
      hp: 729,
      level: 14,
      mana: 62,
      name: 'Fenswolf',
      strength: 99,
      image: { height: 192, width: 96, x: -1203, y: 0}, avatar: { height: 32, width: 32, x: -1002, y: -578 }, type: constants.MONSTER.TYPE.WOLF.KEY
    }, {
      agility: 4,
      defense: 5,
      hp: 82,
      level: 2,
      mana: 8,
      name: 'Worm',
      strength: 9,
      image: { height: 192, width: 84, x: -663, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.WORM.KEY
    }, {
      agility: 15,
      defense: 16,
      hp: 231,
      level: 7,
      mana: 25,
      name: 'P-worm',
      strength: 26,
      image: { height: 192, width: 84, x: -663, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.WORM.KEY
    }, {
      agility: 24,
      defense: 25,
      hp: 330,
      level: 8,
      mana: 37,
      name: 'Crawler',
      strength: 38,
      image: { height: 192, width: 84, x: -663, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.WORM.KEY
    }, {
      agility: 34,
      defense: 35,
      hp: 454,
      level: 10,
      mana: 50,
      name: 'Lavaworm',
      strength: 51,
      image: { height: 192, width: 84, x: -663, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.WORM.KEY
    }, {
      agility: 51,
      defense: 52,
      hp: 666,
      level: 13,
      mana: 70,
      name: 'Sandworm',
      strength: 71,
      image: { height: 192, width: 84, x: -663, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.WORM.KEY
    }, {
      agility: 61,
      defense: 62,
      hp: 795,
      level: 14,
      mana: 61,
      name: 'Gigaworm',
      strength: 82,
      image: { height: 192, width: 84, x: -663, y: 0}, avatar: { height: 32, width: 32, x: -2, y: -638 }, type: constants.MONSTER.TYPE.WORM.KEY
    }, {
      agility: 3,
      defense: 4,
      hp: 60,
      level: 1,
      mana: 6,
      name: 'Zombie',
      strength: 9,
      image: { height: 192, width: 84, x: -585, y: -192}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.ZOMBIE.KEY
    }, {
      agility: 5,
      defense: 6,
      hp: 103,
      level: 3,
      mana: 6,
      name: 'Ghoul',
      strength: 15,
      image: { height: 192, width: 84, x: -585, y: -192}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.ZOMBIE.KEY
    }, {
      agility: 24,
      defense: 25,
      hp: 330,
      level: 9,
      mana: 37,
      name: 'Mou-jya',
      strength: 50,
      image: { height: 192, width: 84, x: -585, y: -192}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.ZOMBIE.KEY
    }, {
      agility: 46,
      defense: 47,
      hp: 606,
      level: 12,
      mana: 65,
      name: 'Wight',
      strength: 84,
      image: { height: 192, width: 84, x: -585, y: -192}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.ZOMBIE.KEY
    }, {
      agility: 55,
      defense: 56,
      hp: 729,
      level: 13,
      mana: 75,
      name: 'Ghast',
      strength: 95,
      image: { height: 192, width: 84, x: -585, y: -192}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.ZOMBIE.KEY
    }, {
      agility: 61,
      defense: 62,
      hp: 795,
      level: 14,
      mana: 82,
      name: 'Revnant',
      strength: 99,
      image: { height: 192, width: 84, x: -585, y: -192}, avatar: { height: 32, width: 32, x: -802, y: -578 }, type: constants.MONSTER.TYPE.ZOMBIE.KEY
    }
];