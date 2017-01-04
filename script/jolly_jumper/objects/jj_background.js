var jjBackground = function (game) {

};

jjBackground.prototype = {

    create: function () {
        this.bg = game.add.sprite(game.world.centerX, game.world.centerY, 'jjBg');
        this.bg.anchor.set(0.5);
        this.bg.scale.set(1.829, 2.065);
        this.bg.fixedToCamera = true;

        this.cactus = game.add.sprite(175, game.height - 25, 'jjCactus');
        this.cactus.fixedToCamera = true;
        this.cactus.anchor.set(0.5);
        this.cactus.scale.set(2, 1);
        game.physics.arcade.enable(this.cactus);
        this.cactus.body.setSize(330, 30, 5, 20);
        this.cactus.body.immovable = true;
    },

    render: function () {
        game.debug.body(this.cactus);
    }
}
