var categoryMenuState = function (game) {

};

categoryMenuState.prototype = {

    create: function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
        this.scale.setMinMax(
            window.innerWidth, window.innerHeight,
            window.innerWidth, window.innerHeight
        );
        this.game.scale.updateLayout(true);
        this.game.scale.refresh();

        this.modal = new modal(game);
        this.background = new background(game);
        this.background.create();

        if (!game.global.menuBgSound.isPlaying) {
            game.global.menuBgSound.play();
        }

        var font = {
            font: '40px dk_cool_crayon',
            fill: '#fff',
            stroke: '#fff',
            strokeThickness: 2
        };

        var scoreFont = {
            font: '40px dk_cool_crayon',
            fill: '#FFFF00',
            stroke: '#E9842A',
            strokeThickness: 2
        };

        var catScores = game.global.categoryScore;

        // create category teeth
        this.teethCat = game.add.sprite(300, game.world.centerY - 100, 'wood');
        this.teethCat.anchor.set(0.5);
        this.teethCat.scale.set(0.5);
        game.add.text(
            300, game.world.centerY - 130, 'Teeth', font
        ).anchor.set(0.5);
        var teethPercent = 0;
        if (catScores.teeth.total != 0) {
            teethPercent = Math.ceil(catScores.teeth.score / catScores.teeth.total * 100);
        }
        game.add.text(
            300, game.world.centerY - 70,
            teethPercent + '%', scoreFont
        ).anchor.set(0.5);
        this.teethCat.inputEnabled =true;
        this.teethCat.input.useHandCursor = true;
        this.teethCat.events.onInputDown.add(function (item) {
            game.global.menuBgSound.stop();
            game.state.start('Teeth');
        }, this);

        // create category teeth types
        this.typesCat = game.add.sprite(
            game.world.centerX, game.world.centerY - 100, 'wood');
        this.typesCat.anchor.set(0.5);
        this.typesCat.scale.set(0.5);
        game.add.text(
            game.world.centerX, game.world.centerY - 130, 'Teeth Types', font
        ).anchor.set(0.5);
        var teethTypesPercent = 0;
        if (catScores.teeth_types.total != 0) {
            teethTypesPercent = Math.ceil(
                catScores.teeth_types.score / catScores.teeth_types.total * 100);
        }
        game.add.text(
            game.world.centerX, game.world.centerY - 70,
            teethTypesPercent + '%', scoreFont
        ).anchor.set(0.5);
        this.typesCat.inputEnabled = true;
        this.typesCat.input.useHandCursor = true;
        this.typesCat.events.onInputDown.add(function (item) {
            this.checkViability('teeth', 'Types');
        }, this);

        // create category teeth sets
        this.setsCat = game.add.sprite(
            game.width - 300, game.world.centerY - 100, 'wood');
        this.setsCat.anchor.set(0.5);
        this.setsCat.scale.set(0.5);
        game.add.text(
            game.width - 300, game.world.centerY - 130, 'Teeth Sets', font
        ).anchor.set(0.5);
        var teethSetsPercent = 0;
        if (catScores.teeth_sets.total != 0) {
            teethSetsPercent = Math.ceil(
                catScores.teeth_sets.score / catScores.teeth_sets.total * 100);
        }
        game.add.text(
            game.width - 300, game.world.centerY - 70,
            teethSetsPercent + '%', scoreFont
        ).anchor.set(0.5);
        this.setsCat.inputEnabled = true;
        this.setsCat.input.useHandCursor = true;
        this.setsCat.events.onInputDown.add(function (item) {
            this.checkViability('teeth_types', 'Sets');
        }, this);

        // Ask question text
        this.askQuestion = game.add.text(
            game.world.centerX, game.world.centerY + 150,
            'Did you find a section unclear?', font
        );
        this.askQuestion.anchor.set(0.5);
        this.askQuestion.inputEnabled = true;
        this.askQuestion.input.useHandCursor = true;
        this.askQuestion.events.onInputOver.add(function (item) {
            item.fill = '#FFFF00';
            item.stroke = '#FFFF00';
        }, this);
        this.askQuestion.events.onInputOut.add(function (item) {
            item.fill = '#FFF';
            item.stroke = '#FFF';
        }, this);
        this.askQuestion.events.onInputUp.add(function (item) {
            item.fill = '#FFF';
            item.stroke = '#FFF';
        }, this);
        this.askQuestion.events.onInputDown.add(function (item) {
            game.state.start('AskQuestion');
        }, this);

        // Check performance
        this.checkPerformance = game.add.text(
            game.world.centerX, game.world.centerY + 300,
            'Check your performance', font
        );
        this.checkPerformance.anchor.set(0.5);
        this.checkPerformance.inputEnabled = true;
        this.checkPerformance.input.useHandCursor = true;
        this.checkPerformance.events.onInputOver.add(function (item) {
            item.fill = '#FFFF00';
            item.stroke = '#FFFF00';
        }, this);
        this.checkPerformance.events.onInputOut.add(function (item) {
            item.fill = '#FFF';
            item.stroke = '#FFF';
        }, this);
        this.checkPerformance.events.onInputUp.add(function (item) {
            item.fill = '#FFF';
            item.stroke = '#FFF';
        }, this);
        this.checkPerformance.events.onInputDown.add(function (item) {
            game.state.start('LearnerPerformance');
        }, this);
    },

    checkViability: function (prevCat, nxtState) {
        var score = game.global.categoryScore[prevCat];
        var percentage = score.score / score.total * 100;

        if (percentage > 70) {
            game.global.menuBgSound.stop();
            game.state.start(nxtState);
        } else {
            this.modal.showModal('promptPassCategoryModal');
        }
    }
};
