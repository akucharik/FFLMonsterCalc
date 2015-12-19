var monsterTypes = [];
_.each(constants.MONSTER.TYPE, function (item) {
    monsterTypes.push({
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
        sprite: {
            height: item.sprite.height,
            width: item.sprite.width,
            x: item.sprite.x,
            y: item.sprite.y
        }
    });
});

var calculatorModel = new Backbone.Model({
    startingMonsterType: null,
    startingMonster: null,
    startingMonsters: [],
    meatOfMonsterType: null,
    meatOfMonster: null,
    meatOfMonsters: [],
    endingMonster: null,
    monsterTypes: monsterTypes,
    monsters: monsters
});

calculatorModel.updateStartingMonsters = function () {
    calculatorModel.set('startingMonsters', _.where(calculatorModel.get('monsters'), { 
        type: calculatorModel.get('startingMonsterType')
    }));
};

calculatorModel.updateMeatOfMonsters = function () {
    calculatorModel.set('meatOfMonsters', _.where(calculatorModel.get('monsters'), { 
        type: calculatorModel.get('meatOfMonsterType')
    }));
};

calculatorModel.listenTo(calculatorModel, 'change:startingMonsterType', calculatorModel.updateStartingMonsters);
calculatorModel.listenTo(calculatorModel, 'change:meatOfMonsterType', calculatorModel.updateMeatOfMonsters);

