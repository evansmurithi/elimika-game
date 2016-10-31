var background = function (game) {

};

background.prototype = {

    create: function () {
        this.menuBgPic = game.add.sprite(
            game.world.centerX, game.world.centerY, 'menuBgPic');
        this.menuBgPic.anchor.set(0.5);
    }
};
