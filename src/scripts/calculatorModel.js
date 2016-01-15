var startingMonsterTypes = [];
_.each(constants.MONSTER.TYPE, function (item) {
    if (item.KEY !== constants.MONSTER.TYPE.FIEND.KEY) {
        startingMonsterTypes.push({
            id: item.KEY,
            name: item.NAME
        });
    }
});

var meatOfMonsterTypes = [];
_.each(constants.MONSTER.TYPE, function (item) {
    meatOfMonsterTypes.push({
        id: item.KEY,
        name: item.NAME
    });
});

var monsters = [];
_.each(constants.MONSTERS, function (item) {
    monsters.push({
        id: item.name,
        name: item.name,
        level: item.level,
        type: item.type,
        transformationType: item.transformationType,
        transformationGroup: item.transformationGroup,
        
        // abilities
        hp: item.hp,
        strength: item.strength,
        defense: item.defense,
        agility: item.agility,
        mana: item.mana,
        
        // images
        avatar: {
            height: item.avatar.height,
            width: item.avatar.width,
            x: item.avatar.x,
            y: item.avatar.y
        },
        image: {
            height: item.image.height,
            width: item.image.width,
            x: item.image.x,
            y: item.image.y
        }
    });
});

var calculatorModel = new Backbone.Model({
    startingMonsterTypes: startingMonsterTypes,
    startingMonsterType: null,
    startingMonster: null,
    startingMonsters: [],
    meatOfMonsterTypes: meatOfMonsterTypes,
    meatOfMonsterType: null,
    meatOfMonster: null,
    meatOfMonsters: [],
    newMonster: null,
    monsters: monsters
});