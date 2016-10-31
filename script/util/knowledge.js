var knowledge = function (game) {

};

knowledge.prototype = {

    // abstraction for teeth, teeth types and teeth sets knowledge
    create: function (titleTxt, knowledgeObj, questionsState, sections) {
        this.currentSection = -1;
        this.sections = sections;

        game.load.onLoadStart.add(this.loadStart, this);
        game.load.onFileComplete.add(this.fileComplete, this);
        game.load.onLoadComplete.add(this.loadComplete, this);

        this.kObj = knowledgeObj;
        this.background = new background(game);
        this.background.create();

        this.board = game.add.sprite(game.world.centerX, 480, 'chalkboard');
        this.board.anchor.set(0.5);
        this.board.scale.setTo(0.5, 0.35);

        this.menuBg = game.add.sprite(120, 90, 'woodSign');
        this.menuBg.anchor.set(0.5);
        this.menuBg.scale.setTo(1.7, 0.7);
        this.menuBg.angle = -45;
        this.menuBg.inputEnabled = true;
        this.menuBg.events.onInputOver.add(function () {
            this.menuTxt.fill = '#FFFF00';
            this.menuTxt.stroke = '#FFFF00';
        }, this);
        this.menuBg.events.onInputOut.add(function () {
            this.menuTxt.fill = '#FFF';
            this.menuTxt.stroke = '#FFF';
        }, this);
        this.menuBg.events.onInputUp.add(function () {
            this.menuTxt.fill = '#FFF';
            this.menuTxt.stroke = '#FFF';
        }, this);
        this.menuBg.input.useHandCursor = true;
        this.menuBg.events.onInputDown.add(function (item) {
            game.state.start('CategoryMenu');
        }, this);

        this.menuTxt = game.add.text(120, 90, 'MENU', {
            font: '48px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 3
        });
        this.menuTxt.anchor.set(0.5);
        this.menuTxt.angle = -45;

        this.mascot = game.add.sprite(game.width - 90, 90, 'mascot');
        this.mascot.anchor.set(0.5);
        this.mascot.scale.set(0.2);
        this.mascot.angle = 45;

        this.titleTxt = game.add.text(game.world.centerX, 140, titleTxt, {
            font: '64px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 5
        });
        this.titleTxt.anchor.set(0.5);

        this.knowledgeText = game.add.text(400, 190, '', {
            font: '48px dk_cool_crayon',
            fill: '#fff',
            stroke: '#fff',
            strokeThickness: 2,
            wordWrap: true,
            wordWrapWidth: this.board.width - 500
        });
        this.getKnowledge(0);

        this.nextBtn = game.add.button(game.width - 150, game.height - 200, 'nextBtn', function () {
            this.getKnowledge(this.index + 1);
        }, this);
        this.nextBtn.anchor.set(0.5);
        this.nextBtn.scale.set(0.5);
        this.nextBtn.input.useHandCursor = true;

        this.backBtn = game.add.button(150, game.height - 200, 'backBtn', function () {
            this.getKnowledge(this.index - 1);
        }, this);
        this.backBtn.anchor.set(0.5);
        this.backBtn.scale.set(0.5);
        this.backBtn.input.useHandCursor = true;

        this.questionsBtn = game.add.button(game.width / 2, game.height - 200, 'button', function () {
            game.state.start(questionsState);
        }, this);
        this.questionsBtn.anchor.set(0.5);
        this.questionsBtn.scale.setTo(1, 0.5);

        this.questionsText = game.add.text(game.width / 2, game.height - 200, 'QUESTIONS', {
            font: '48px Comic Sans MS',
            fill: '#fff',
            stroke: '#fff',
            strokeThickness: 3
        });
        this.questionsText.anchor.set(0.5);
    },

    getKnowledge: function (index) {
        var kLength = this.kObj.length;
        if (index === kLength && this.sections.length > 0) {
            this.nextSection(this.currentSection + 1);
        }
        if (index >= 0 && index < kLength) {
            if (this.kImage) {
                this.kImage.destroy();
            }
            this.index = index;
            var img = this.kObj[index].image;
            if (img) {
                game.load.crossOrigin = 'anonymous';
                game.load.image('kImage', img);
                game.load.start();
            }
            this.knowledgeText.text = this.kObj[index].text;
        }
    },

    nextSection: function (sectionIdx) {
        if (sectionIdx < this.sections.length) {
            this.currentSection = sectionIdx;
            var category = this.sections[sectionIdx].category;
            this.kObj = game.global.knowledge[category];
            this.titleTxt.text = this.sections[sectionIdx].title;
            this.getKnowledge(0);
        }
    },

    loadStart: function () {
        console.log('Loading...');
    },

    fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
        this.kImage = game.add.image(230, 320, cacheKey);
        this.kImage.anchor.set(0.5);
    },

    loadComplete: function () {
        console.log('Load Complete');
    }
};
