var jjMenuState = function (game) {
    this.game = game;
};

jjMenuState.prototype = {

    create: function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var width = window.innerHeight * 40 / 71;
        this.game.scale.setGameSize(width, window.innerHeight);
        this.scale.setMinMax(260, 480, width, window.innerHeight);
        this.game.scale.updateLayout(true);
        this.game.scale.refresh();

        this.titleBg = game.add.sprite(game.world.centerX, game.world.centerY, 'jjMenuBg');
        this.titleBg.anchor.set(0.5);
        this.titleBg.scale.set(1);

        this.game.global.menuBgSound.play();

        this.buttons = new jjMenuButtons(game);
        this.buttons.create();

        this.menuTitle = game.add.sprite(game.world.centerX, 150, 'elimikaLogo');
        this.menuTitle.anchor.set(0.5);
        this.menuTitle.scale.set(0.8);

        this.tweenButton(this.buttons.playBtn);
    },

    tweenButton: function(button){
        var rnd = this.game.rnd.integerInRange(7, 10);
        game.add.tween(button).to({
           y: button.y + rnd,
           y: button.y - rnd
        }, 1000, Phaser.Easing.Linear.None, true, 0 ,-1, true);
    }
}
