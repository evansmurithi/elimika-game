var categoryMenuState = function (game) {

};

categoryMenuState.prototype = {

    create: function () {
        this.background = new background(game);
        this.background.create();

        if (!game.global.menuBgSound.isPlaying) {
            game.global.menuBgSound.play();
        }

        var font = {
            font: '40px dk_cool_crayonregular',
            fill: '#fff',
            stroke: '#fff',
            strokeThickness: 2
        };

        var scoreFont = {
            font: '40px Comic Sans MS',
            fill: '#FFFF00',
            stroke: '#E9842A',
            strokeThickness: 2
        };

        // create category teeth
        this.teethCat = game.add.sprite(300, game.world.centerY, 'wood');
        this.teethCat.anchor.set(0.5);
        this.teethCat.scale.set(0.5);
        game.add.text(
            300, game.world.centerY - 30, 'Teeth', font
        ).anchor.set(0.5);
        game.add.text(
            300, game.world.centerY + 30, '3/5', scoreFont
        ).anchor.set(0.5);
        this.teethCat.inputEnabled =true;
        this.teethCat.input.useHandCursor = true;
        this.teethCat.events.onInputDown.add(function (item) {
            game.global.menuBgSound.stop();
            game.state.start('Teeth');
        }, this);

        // create category teeth types
        this.typesCat = game.add.sprite(
            game.world.centerX, game.world.centerY, 'wood');
        this.typesCat.anchor.set(0.5);
        this.typesCat.scale.set(0.5);
        game.add.text(
            game.world.centerX, game.world.centerY - 30, 'Teeth Types', font
        ).anchor.set(0.5);
        game.add.text(
            game.world.centerX, game.world.centerY + 30, '14/15', scoreFont
        ).anchor.set(0.5);
        this.typesCat.inputEnabled = true;
        this.typesCat.input.useHandCursor = true;
        this.typesCat.events.onInputDown.add(function (item) {
            game.global.menuBgSound.stop();
            game.state.start('Types');
        }, this);

        // create category teeth sets
        this.setsCat = game.add.sprite(
            game.width - 300, game.world.centerY, 'wood');
        this.setsCat.anchor.set(0.5);
        this.setsCat.scale.set(0.5);
        game.add.text(
            game.width - 300, game.world.centerY - 30, 'Teeth Sets', font
        ).anchor.set(0.5);
        game.add.text(
            game.width - 300, game.world.centerY + 30, '13/15', scoreFont
        ).anchor.set(0.5);
        this.setsCat.inputEnabled = true;
        this.setsCat.input.useHandCursor = true;
        this.setsCat.events.onInputDown.add(function (item) {
            game.global.menuBgSound.stop();
            game.state.start('Sets');
        }, this);
    }
};
