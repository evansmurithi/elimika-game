var bootState = function (game) {

};

bootState.prototype = {

    init: function () {
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.setGameSize(this.game.width, this.game.height);
        this.scale.updateLayout(true);
        this.scale.refresh();
    },

    create: function () {
        this.state.start('Load');
    }
};
