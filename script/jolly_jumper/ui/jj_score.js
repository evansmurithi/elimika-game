var jjScore = function (game) {
    this.currentScore = 0;
};

jjScore.prototype = {

    create: function () {
        this.currentScore = 0;
        this.createScore();
    },

    createScore: function () {
        var scoreFont = "50px Arial";
        this.scoreLabel = game.add.text(
            game.world.centerX, game.height - 100, '0' , {
                font: scoreFont,
                fill: '#39d179',
                stroke: '#ffffff',
                strokeThickness: 6
            }
        );
        this.scoreLabel.anchor.set(0.5);
        this.scoreLabel.fixedToCamera = true;
        this.scoreLabel.align = 'center';

        this.scoreLabelTween = game.add.tween(this.scoreLabel.scale).to(
            { x: 1.5, y: 1.5}, 200, Phaser.Easing.Linear.In).to(
                { x: 1, y: 1}, 200, Phaser.Easing.Linear.In);
    },

    update: function () {
        if (game.global.collideFlag == true) {
            this.scoreLabel.text = game.global.jjScore;
            this.scoreLabelTween.start();
        }
    }
}
