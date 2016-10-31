// Teeth
var teethQuestionsState = function (game) {

};

teethQuestionsState.prototype = {

    preload: function () {
        this.questionsObj = game.global.questions.teeth;
        this.score = game.global.categoryScore.teeth;
    },

    create: function () {
        this.questions = new questions(game);
        this.questions.create('Teeth', this.questionsObj, this.score);
    }
};

// Teeth types
var typesQuestionsState = function (game) {

};

typesQuestionsState.prototype = {

    preload: function () {
        this.questionsObj = game.global.questions.teeth_types;
        this.score = game.global.categoryScore.teeth_types;
    },

    create: function () {
        this.questions = new questions(game);
        this.questions.create('Teeth Types', this.questionsObj, this.score);
    }
};

// Teeth sets
var setsQuestionsState = function (game) {

};

setsQuestionsState.prototype = {

    preload: function () {
        this.questionsObj = game.global.questions.teeth_sets;
        this.score = game.global.categoryScore.teeth_sets;
    },

    create: function () {
        this.questions = new questions(game);
        this.questions.create('Teeth Sets', this.questionsObj, this.score);
    }
};
