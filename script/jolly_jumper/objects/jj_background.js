var jjBackground = function (game) {

};

jjBackground.prototype = {

    create: function () {
        this.bg = game.add.sprite(game.world.centerX, game.world.centerY, 'jjBg');
        this.bg.anchor.set(0.5);
        this.bg.fixedToCamera = true;

        this.cactus = game.add.sprite(175, 525, 'jjCactus');
        this.cactus.fixedToCamera = true;
        this.cactus.anchor.set(0.5);
        game.physics.arcade.enable(this.cactus);
        this.cactus.body.setSize(330, 30, 5, 20);
        this.cactus.body.immovable = true;
    },

    render: function () {
        game.debug.body(this.cactus);
    }
}
