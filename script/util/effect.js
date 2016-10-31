var effect = function (game) {

};

effect.prototype = {

    bounce: function (sprite) {
        var rnd = game.rnd.integerInRange(7, 10);
        game.add.tween(sprite).to({
            y: sprite.y + rnd,
            y: sprite.y - rnd
        }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);
    }
};
