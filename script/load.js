var loadState = function (game) {
    var kHttpRequest, qHttpRequest;
};

loadState.prototype = {

    init: function () {
        this.knowledgeUrl = 'http://127.0.0.1:8000/knowledge/category_knowledge/';
        this.questionsUrl = 'http://127.0.0.1:8000/questions/category_questions/';

        this.fetchKnowledge();
        this.fetchQuestions();
    },

    preload: function () {
        this.loadText = this.add.text(
            this.world.centerX, this.world.centerY, 'Loading ', {
                font: '60px Comic Sans MS',
                fill: '#FFFF00',
                stroke: '#E9842A',
                strokeThickness: 3
            });
        this.loadText.anchor.setTo(0.5, 0.5);

        // fonts
        this.load.bitmapFont(
            'dk_cool_crayon', 'assets/font/dk_cool_crayon.png',
            'assets/font/dk_cool_crayon.fnt'
        );

        // images
        this.load.image('menuBgPic', 'assets/gui/menuBg.png');
        this.load.image('treeBark', 'assets/gui/treeBark.png');
        this.load.image('wood', 'assets/gui/wood.png');
        this.load.image('woodSign', 'assets/gui/woodSign.png');
        this.load.image('elimikaLogo', 'assets/gui/elimika.png');
        this.load.image('chalkboard', 'assets/gui/chalkboard.png');
        this.load.image('mascot', 'assets/gui/tooth.png');
        this.load.nineSlice('input', 'assets/gui/inputField.png', 15);

        // jolly jumper
        this.load.image('jjBg','assets/gui/jj/bg.png');
        this.load.image('jjCactus','assets/gui/jj/cactus.png');
        this.load.image('jjPlatform','assets/gui/jj/platform.png');
        this.load.image('jjMenuBg', 'assets/gui/jj/menuBg.png');
        this.load.image('jjHelp', 'assets/gui/jj/help.png');
        this.load.image('jjPlay', 'assets/gui/jj/play.png');
        this.load.image('jjCoconut', 'assets/gui/jj/coconut.png');
        this.load.spritesheet('jjSoundSprite', 'assets/gui/jj/sound.png', 70, 60);
        this.load.spritesheet('jjMonkey','assets/gui/jj/monkey.png', 63, 78);
        this.load.image('jjFruit0','assets/gui/jj/banana.png');
        this.load.image('jjFruit1','assets/gui/jj/grape.png');
        this.load.image('jjFruit2','assets/gui/jj/pineapple.png');
        this.load.image('jjFruit3','assets/gui/jj/watermelon.png');
        this.load.image('jjFruit4','assets/gui/jj/cherry.png');
        this.load.image('jjLife','assets/gui/jj/life.png');
        this.load.spritesheet('jjGems', 'assets/gui/jj/gems.png', 45, 42);

        // buttons
        this.load.image('button', 'assets/gui/button.png');
        this.load.image('nextBtn', 'assets/gui/nextBtn.png');
        this.load.image('backBtn', 'assets/gui/backBtn.png');

        // sounds
        this.load.audio('menuBgSound', ['sound/menuBg.mp3'], true);
        this.load.audio('kidsCheering', ['sound/kidsCheering.mp3'], true);
        this.load.audio('sadTrombone', ['sound/sadTrombone.mp3'], true);
        this.load.audio('jumpSound', ['sound/jump.mp3'], true);
        this.load.audio('gemSound', ['sound/gem.mp3'], true);
        this.load.audio('deadSound', ['sound/dead.mp3'], true);
        this.load.audio('cocoSound', ['sound/dap.mp3'], true);
        this.load.audio('fruitGulp', ['sound/fruitGulp.mp3'], true);
    },

    create: function () {
        this.sound.setDecodedCallback(
            ['menuBgSound', 'kidsCheering', 'sadTrombone'], function () {
            game.state.start('Menu');
        }, this);
    },

    loadUpdate: function () {
        this.loadText.text = 'Loading ' + this.load.progress + '%';
    },

    fetchKnowledge: function () {
        kHttpRequest = new XMLHttpRequest();

        kHttpRequest.onreadystatechange = this.getKnowledge;
        kHttpRequest.open('GET', this.knowledgeUrl);
        kHttpRequest.send();
    },

    fetchQuestions: function () {
        qHttpRequest = new XMLHttpRequest();

        qHttpRequest.onreadystatechange = this.getQuestions;
        qHttpRequest.open('GET', this.questionsUrl);
        qHttpRequest.send();
    },

    getKnowledge: function () {
        if (kHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (kHttpRequest.status === 200) {
                var response = JSON.parse(kHttpRequest.response);
                for (var i = 0; i < response.length; i++) {
                    var category = response[i].category;
                    game.global.knowledge[category] = response[i].knowledge;
                }
            }
        }
    },

    getQuestions: function () {
        if (qHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (qHttpRequest.status === 200) {
                var response = JSON.parse(qHttpRequest.response);
                for (var i = 0; i < response.length; i++) {
                    var category = response[i].category;
                    game.global.questions[category] = response[i].questions;
                }
            }
        }
    }
};
