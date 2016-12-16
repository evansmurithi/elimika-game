var askQuestionState = function (game) {

};

askQuestionState.prototype = {

    create: function () {
        this.knowledge = new knowledge(game);
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
            this.textOver(this.menuTxt)
        }, this);
        this.menuBg.events.onInputOut.add(function () {
            this.textOut(this.menuTxt);
        }, this);
        this.menuBg.events.onInputUp.add(function () {
            this.textOut(this.menuTxt);
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

        game.add.text(game.world.centerX, 140, 'Choose a category to revise.', {
            font: '64px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 5
        }).anchor.set(0.5);

        this.categoryTexts();
    },

    categoryTexts: function () {
        var font = {
            font: '40px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 2
        };

        this.tTxt = game.add.text(250, 200, 'Teeth', font);
        this.tTxt.inputEnabled = true;
        this.tTxt.input.useHandCursor = true;
        this.tTxt.events.onInputOver.add(this.textOver, this);
        this.tTxt.events.onInputOut.add(this.textOut, this);
        this.tTxt.events.onInputUp.add(this.textOut, this);
        this.tTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Teeth', game.global.knowledge.teeth, null, []
            )
        }, this);

        this.iTxt = game.add.text(650, 200, 'Incisors', font);
        this.iTxt.inputEnabled = true;
        this.iTxt.input.useHandCursor = true;
        this.iTxt.events.onInputOver.add(this.textOver, this);
        this.iTxt.events.onInputOut.add(this.textOut, this);
        this.iTxt.events.onInputUp.add(this.textOut, this);
        this.iTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Incisors', game.global.knowledge.incisors, null, []
            )
        }, this);

        this.ifTxt = game.add.text(1050, 200, 'Incisor\nFunctions', font);
        this.ifTxt.inputEnabled = true;
        this.ifTxt.input.useHandCursor = true;
        this.ifTxt.events.onInputOver.add(this.textOver, this);
        this.ifTxt.events.onInputOut.add(this.textOut, this);
        this.ifTxt.events.onInputUp.add(this.textOut, this);
        this.ifTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Incisor Functions', game.global.knowledge.incisor_functions, null, []
            )
        }, this);

        this.cTxt = game.add.text(1450, 200, 'Canines', font);
        this.cTxt.inputEnabled = true;
        this.cTxt.input.useHandCursor = true;
        this.cTxt.events.onInputOver.add(this.textOver, this);
        this.cTxt.events.onInputOut.add(this.textOut, this);
        this.cTxt.events.onInputUp.add(this.textOut, this);
        this.cTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Canines', game.global.knowledge.canines, null, []
            )
        }, this);

        this.cfTxt = game.add.text(250, 400, 'Canine\nFunctions', font);
        this.cfTxt.inputEnabled = true;
        this.cfTxt.input.useHandCursor = true;
        this.cfTxt.events.onInputOver.add(this.textOver, this);
        this.cfTxt.events.onInputOut.add(this.textOut, this);
        this.cfTxt.events.onInputUp.add(this.textOut, this);
        this.cfTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Canine Functions', game.global.knowledge.canine_functions, null, []
            )
        }, this);

        this.pmTxt = game.add.text(650, 400, 'Premolars', font);
        this.pmTxt.inputEnabled = true;
        this.pmTxt.input.useHandCursor = true;
        this.pmTxt.events.onInputOver.add(this.textOver, this);
        this.pmTxt.events.onInputOut.add(this.textOut, this);
        this.pmTxt.events.onInputUp.add(this.textOut, this);
        this.pmTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Premolars', game.global.knowledge.premolars, null, []
            )
        }, this);

        this.pmfTxt = game.add.text(1050, 400, 'Premolar\nFunctions', font);
        this.pmfTxt.inputEnabled = true;
        this.pmfTxt.input.useHandCursor = true;
        this.pmfTxt.events.onInputOver.add(this.textOver, this);
        this.pmfTxt.events.onInputOut.add(this.textOut, this);
        this.pmfTxt.events.onInputUp.add(this.textOut, this);
        this.pmfTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Premolar Functions', game.global.knowledge.premolar_functions, null, []
            )
        }, this);

        this.mTxt = game.add.text(1450, 400, 'Molars', font);
        this.mTxt.inputEnabled = true;
        this.mTxt.input.useHandCursor = true;
        this.mTxt.events.onInputOver.add(this.textOver, this);
        this.mTxt.events.onInputOut.add(this.textOut, this);
        this.mTxt.events.onInputUp.add(this.textOut, this);
        this.mTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Molars', game.global.knowledge.molars, null, []
            )
        }, this);

        this.mfTxt = game.add.text(250, 600, 'Molar\nFunctions', font);
        this.mfTxt.inputEnabled = true;
        this.mfTxt.input.useHandCursor = true;
        this.mfTxt.events.onInputOver.add(this.textOver, this);
        this.mfTxt.events.onInputOut.add(this.textOut, this);
        this.mfTxt.events.onInputUp.add(this.textOut, this);
        this.mfTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Molar Functions', game.global.knowledge.molar_functions, null, []
            )
        }, this);

        this.dTxt = game.add.text(650, 600, 'Deciduous', font);
        this.dTxt.inputEnabled = true;
        this.dTxt.input.useHandCursor = true;
        this.dTxt.events.onInputOver.add(this.textOver, this);
        this.dTxt.events.onInputOut.add(this.textOut, this);
        this.dTxt.events.onInputUp.add(this.textOut, this);
        this.dTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Deciduous', game.global.knowledge.deciduous, null, []
            )
        }, this);

        this.pTxt = game.add.text(1050, 600, 'Permanent', font);
        this.pTxt.inputEnabled = true;
        this.pTxt.input.useHandCursor = true;
        this.pTxt.events.onInputOver.add(this.textOver, this);
        this.pTxt.events.onInputOut.add(this.textOut, this);
        this.pTxt.events.onInputUp.add(this.textOut, this);
        this.pTxt.events.onInputDown.add(function (item) {
            this.knowledge.create(
                'Permanent', game.global.knowledge.permanent, null, []
            )
        }, this);

    },

    textOver: function (item) {
        item.fill = '#FFFF00';
        item.stroke = '#FFFF00';
    },

    textOut: function (item) {
        item.fill = '#FFF';
        item.stroke = '#FFF';
    }
}
