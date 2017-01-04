var jjPlayer = function (game) {
    this.game = game;
};

jjPlayer.prototype = {

    create: function () {
        this.player = game.add.sprite(
            game.world.centerX, game.world.centerY, 'jjMonkey', 1
        );
        this.player.anchor.set(0.5);
        this.player.scale.set(1.2);
        game.physics.arcade.enable(this.player);
        this.player.body.setSize(25, 55, 0, 0);
        this.player.body.collideWorldBounds = true;
        this.player.body.gravity.set(0, game.rnd.integerInRange(500, 800));

        this.jumpBtn = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.cursor = game.input.keyboard.createCursorKeys();

        this.yOrig = this.player.y;
        this.yChange = 0;
        this.cameraYMin = 99999;
    },

    update: function () {
        game.world.setBounds(
            0, -this.yChange, game.world.width, game.height + this.yChange
        );
        this.cameraYMin = Math.min(this.cameraYMin, this.player.y - game.height + 300);
        game.camera.y = this.cameraYMin;
    },

    handleMovement: function () {
        this.standing = this.player.body.touching.down || this.player.body.blocked.down;

        if (this.jumpBtn.isDown && this.standing == true) {
            this.player.frame = 0;
            this.player.body.velocity.y = -500;
        } else if (this.cursor.left.isDown) {
            this.player.frame = 4;
            this.player.body.velocity.x = -250;
        } else if (this.cursor.right.isDown) {
            this.player.frame = 3;
            this.player.body.velocity.x = 250;
        } else {
            this.player.frame = 1;
            this.player.body.velocity.x = 0;
        }

        // track the maximum amount that hero has traveled
        var t1 = Math.abs(this.player.y);
        this.yChange = Math.max(Math.abs(t1 + this.yOrig) + 2000);
    },

    render: function () {
        game.debug.bodyInfo(this.player, 32, 32);
    }
}
