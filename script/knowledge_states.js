// Teeth
var teethState = function (game) {

};

teethState.prototype = {

    preload: function () {
        this.teeth = game.global.knowledge.teeth;
    },

    create: function () {
        this.knowledge = new knowledge(game);
        this.knowledge.create('Teeth', this.teeth, 'TeethQuestions', []);
    }
};

// Teeth types
var typesState = function (game) {

};

typesState.prototype = {

    preload: function () {
        this.types = game.global.knowledge.teeth_types;
    },

    create: function () {
        var sections = [
            { category: 'incisors', title: 'Incisors' },
            { category: 'incisor_functions', title: 'Incisor Functions' },
            { category: 'canines', title: 'Canines' },
            { category: 'canine_functions', title: 'Canine Functions' },
            { category: 'premolars', title: 'Premolars' },
            { category: 'premolar_functions', title: 'Premolar Functions' },
            { category: 'molars', title: 'Molar Functions' }
        ];
        this.knowledge = new knowledge(game);
        this.knowledge.create('Teeth Types', this.types, 'TypesQuestions', sections);
    }
};

// Teeth sets
var setsState = function (game) {

};

setsState.prototype = {

    preload: function () {
        this.sets = game.global.knowledge.teeth_sets;
    },

    create: function () {
        var sections = [
            { category: 'deciduous', title: 'Deciduous' },
            { category: 'permanent', title: 'Permanent' }
        ];
        this.knowledge = new knowledge(game);
        this.knowledge.create('Teeth Sets', this.sets, 'SetsQuestions', sections);
    }
};
