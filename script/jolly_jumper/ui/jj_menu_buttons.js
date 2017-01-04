var jjMenuButtons = function (game) {
    this.game = game;
};

jjMenuButtons.prototype = {

    create: function () {
        this.playBtn = game.add.button(
            game.world.centerX, game.world.centerY, 'jjPlay', this.handlePlay,
            this
        );
        this.playBtn.anchor.set(0.5);
        this.playBtn.input.useHandCursor = true;

        this.soundBtn = game.add.button(
            50, game.height - 55, 'jjSoundSprite', this.handleSound, this
        );
        if (game.global.playSound) {
            this.soundBtn.frame = 1;
        } else {
            this.soundBtn.frame = 0;
        }
        this.soundBtn.anchor.set(0.5);
        this.soundBtn.input.useHandCursor = true;

        this.helpBtn = game.add.button(
            game.width - 50, game.height - 60, 'jjHelp', this.handleHelp, this
        );
        this.helpBtn.anchor.set(0.5);
        this.helpBtn.input.useHandCursor = true;
    },

    handlePlay: function () {
        game.global.menuBgSound.stop();
        game.state.start('JJPlay');
    },

    handleSound: function () {
        game.global.muteSound = !game.global.muteSound;

        if (game.global.muteSound == true){
            this.soundBtn.frame = 0;
            game.global.playSound = false;
            game.global.menuBgSound.stop();
        } else {
            game.global.playSound = true;
            this.soundBtn.frame = 1;
            game.global.menuBgSound.play();
        }
    },

    handleHelp: function () {
        game.state.start('JJHelp');
    }
};
