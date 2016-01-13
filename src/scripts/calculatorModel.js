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

// TODO: Add logic to get correct new monster
calculatorModel.updateNewMonster = function () {
    var startingMonster = calculatorModel.get('startingMonster');
    var meatOfMonster = calculatorModel.get('meatOfMonster');
    
    if (calculatorModel.get('startingMonster') && calculatorModel.get('meatOfMonster')) {
        var monsterLevel = Math.max(startingMonster.level, meatOfMonster.level);
        
        var startingTransformationGroup = calculatorModel.get('startingMonster').transformationGroup;
        var meatOfTransformationType = calculatorModel.get('meatOfMonster').transformationType;

        var newMonsterType = constants.MONSTER.TRANSFORMATION[startingTransformationGroup][meatOfTransformationType];
        
        if (newMonsterType) {
            var newMonsterPossibilities = _.where(calculatorModel.get('monsters'), { 
                type: newMonsterType
            })

            var newMonster = _.findWhere(newMonsterPossibilities, {
                level: monsterLevel
            });

            if (newMonster === undefined) {
                newMonster = _.findWhere(newMonsterPossibilities, {
                    level: (monsterLevel + 1)
                });
            }

            if (newMonster === undefined) {
                newMonster = calculatorModel.getNewMonster(newMonsterPossibilities, monsterLevel - 1);
            }

            calculatorModel.set('newMonster', newMonster);
        }
    }
};

calculatorModel.getNewMonster = function (monsters, level) {
    var newMonster = _.findWhere(monsters, {
        level: level
    });
        
    if (newMonster === undefined) {
        calculatorModel.getNewMonster(monsters, (level - 1));
    }
    else {
        return newMonster;
    }
};