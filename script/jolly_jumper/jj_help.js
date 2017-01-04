var jjHelpState = function (game) {

};

jjHelpState.prototype = {

    create: function () {
        game.global.menuBgSound.stop();

        this.htp = game.add.sprite(game.world.centerX, game.world.centerY, 'jjHTP');
        this.htp.anchor.set(0.5);
        this.htp.scale.setTo(1.6, 2);

        this.backBtn = game.add.button(
            this.world.centerX ,game.height - 60, 'jjBack', function () {
                game.state.start('JJMenu');
            }, this
        );
        this.backBtn.anchor.set(0.5);
        this.backBtn.input.useHandCursor = true;
    }
};
