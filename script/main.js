window.onload = function () {

    game = new Phaser.Game(
        window.innerWidth, window.innerHeight, Phaser.AUTO, 'elimikaContainer');

    // load plugins
    Phaser.Device.whenReady(function () {
        game.plugins.add(Fabrique.Plugins.InputField);
        game.plugins.add(Fabrique.Plugins.NineSlice);
    });

    // states
    game.state.add('Boot', bootState);
    game.state.add('Load', loadState);
    game.state.add('Menu', menuState);
    game.state.add('CategoryMenu', categoryMenuState);
    game.state.add('Teeth', teethState);
    game.state.add('Types', typesState);
    game.state.add('Sets', setsState);
    game.state.add('TeethQuestions', teethQuestionsState);
    game.state.add('TypesQuestions', typesQuestionsState);
    game.state.add('SetsQuestions', setsQuestionsState);
    game.state.add('AskQuestion', askQuestionState);
    game.state.add('LearnerPerformance', learnerPerformanceState);

    // JollyJumper states
    game.state.add('JJMenu', jjMenuState);
    game.state.add('JJPlay', jjPlayState);

    // game global variables
    game.global = {
        menuBgSound: null,
        gemSound: null,
        jumpSound: null,
        deadSound: null,
        cocoSound: null,
        muteSound: false,
        playSound: true,
        menuBgPic: null,
        pltYMin: null,
        jjScore: 0,
        collideFlag: false,
        knowledge: {},
        questions: {},
        kqImage: null,
        categoryScore: {
            teeth: {
                score: 0,
                total: 0
            },
            teeth_types: {
                score: 0,
                total: 0
            },
            teeth_sets: {
                score: 0,
                total: 0
            }
        },
        currentCategory: '',
        userName: ''
    };

    // start first state
    game.state.start('Boot', true, false);
};
