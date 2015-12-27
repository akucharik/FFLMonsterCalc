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
        id: item.KEY,
        name: item.NAME
    });
});

var monsters = [];
_.each(constants.MONSTERS, function (item) {
    monsters.push({
        id: item.name,
        name: item.name,
        type: item.type,
        level: item.level,
        hp: item.hp,
        strength: item.strength,
        defense: item.defense,
        agility: item.agility,
        mana: item.mana,
        image: {
            height: item.image.height,
            width: item.image.width,
            x: item.image.x,
            y: item.image.y
        },
        avatar: {
            height: item.avatar.height,
            width: item.avatar.width,
            x: item.avatar.x,
            y: item.avatar.y
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

calculatorModel.updateStartingMonsters = function () {
    if (calculatorModel.get('startingMonsterType')) {
        calculatorModel.set('startingMonsters', _.where(calculatorModel.get('monsters'), { 
            type: calculatorModel.get('startingMonsterType').id
        }));
    }
};

calculatorModel.updateMeatOfMonsters = function () {
    if (calculatorModel.get('meatOfMonsterType')) {
        calculatorModel.set('meatOfMonsters', _.where(calculatorModel.get('monsters'), { 
            type: calculatorModel.get('meatOfMonsterType').id
        }));
    }
};

calculatorModel.listenTo(calculatorModel, 'change:startingMonsterType', calculatorModel.updateStartingMonsters);
calculatorModel.listenTo(calculatorModel, 'change:meatOfMonsterType', calculatorModel.updateMeatOfMonsters);

window.model = calculatorModel;