var jjPlayState = function (game) {
    this.game = game;
    this.lifeptr = 0; // life sprite handler
};

jjPlayState.prototype = {

    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        game.global.menuBgSound.stop();
        game.global.jumpSound = this.game.add.audio('jumpSound', 1, false);
        game.global.gemSound = this.game.add.audio('gemSound', 1, false);
        game.global.deadSound = this.game.add.audio('deadSound', 1, false);
        game.global.cocoSound = this.game.add.audio('cocoSound', 1, false);

        this.background = new jjBackground(game);
        this.background.create();

        this.platforms = new jjPlatform(game);
        this.platforms.create();
        this.platforms.initialPlatforms();

        this.jolly = new jjPlayer(game);
        this.jolly.create();

        this.fruits = new jjFruits(game);
        this.fruits.create();
        this.fruits.initialFruits();

        this.lifeGroup = this.add.group();
        this.lifeGroup.fixedToCamera = true;

        this.life1 = this.add.sprite(game.width - 50, 5, 'jjLife');
        this.life2 = this.add.sprite(game.width - 90, 5, 'jjLife');
        this.life3 = this.add.sprite(game.width - 130, 5, 'jjLife');

        this.lifeGroup.add(this.life1);
        this.lifeGroup.add(this.life2);
        this.lifeGroup.add(this.life3);

        this.gameScore = new jjScore(game);
        this.gameScore.create();
    },

    update: function () {
        this.jolly.update();
        this.physics.arcade.overlap(
            this.jolly.player, this.background.cactus, this.playerDead, null, this
        );
        this.physics.arcade.collide(
            this.jolly.player, this.platforms.pltGroup, this.playerVsPlatform, null,
            this
        );
        this.jolly.handleMovement();

        this.platforms.update();

        // handle fruits
        this.fruits.update();

        game.global.collideFlag = false; // checking variable for score tweening.
        this.physics.arcade.overlap(
            this.jolly.player, this.fruits.fruitsGroup, this.playerVsFruits, null,
            this
        );

        // handle score
        this.physics.arcade.collide(
            this.platforms.pltGroup, this.fruits.gemsGroup, this.gemsVsPlatform,
            null, this
        ); // collide with gems
        this.physics.arcade.overlap(
            this.jolly.player, this.fruits.gemsGroup, this.gemsVsPlayer, null, this
        ); // gems collide with player
        this.physics.arcade.collide(
            this.jolly.player, this.fruits.coconutGroup, this.coconutVsPlayer,
            null, this
        ); // coconut collide with player

        // game over if 3 life used
        if (this.lifeptr == 3) {
            this.gameOver();
        }
    },

    playerVsFruits: function (player, fruit) {
        fruit.kill();
        if (game.global.playSound) {
            this.fruits.fruitSound.play();
        } else {
            this.fruits.fruitSound.stop();
        }

        game.global.collideFlag = true;
        game.global.jjScore += 2;
        this.gameScore.update();
    },

    playerVsPlatform: function () {
        if (game.global.playSound) {
            game.global.jumpSound.play();
        } else {
            game.global.jumpSound.stop();
        }

        this.jolly.player.body.velocity.y -= this.rnd.integerInRange(480, 600);
    },

    gemsVsPlatform: function () {
        var gem = this.fruits.gemsGroup.getFirstExists(true);
        gem.body.friction = 1;
        gem.body.velocity.x = this.rnd.integerInRange(-20, 20);
    },

    gemsVsPlayer: function (player, gems) {
        if (game.global.playSound) {
            game.global.gemSound.play();
        } else {
            game.global.gemSound.stop();
        }

        gems.kill();
        game.global.jjScore += 5;
        game.global.collideFlag = true;
        this.gameScore.update();
    },

    coconutVsPlayer: function (player, coconut) {
        game.global.cocoSound.play();
        var life = this.lifeGroup.getFirstExists(true);
        if (life) {
            this.lifeptr++;
            life.kill();
        }
        coconut.body.velocity.x = 400;
        coconut.body.velocity.y = -300;
    },

    killAll: function () {
        this.world.setBounds(0, 0, this.game.width, this.game.height);
        this.platforms.pltGroup.destroy(true, false);
        this.background.bg.kill();
        this.background.cactus.kill();
        this.lifeGroup.destroy();
        this.fruits.coconutGroup.destroy();
        this.fruits.fruitsGroup.destroy();
        this.fruits.gemsGroup.destroy();
        this.gameScore.scoreLabel.kill();
        this.lifeptr = 0;
    },

    gameOver: function(){
        this.killAll();
        this.state.start('CategoryMenu');
    },

    playerDead: function(){
        this.jolly.player.kill();
        var flag = true;
        if (game.global.playSound) {
            game.global.deadSound.play();
            flag = true;
        } else {
            game.global.deadSound.stop();
            flag = false;
        }

        if (flag == true) {
            game.global.deadSound.onStop.add(function () {
                this.killAll();
                game.state.start('CategoryMenu');
            }, this);
        } else {
            this.killAll();
            game.state.start('CategoryMenu');
        }
    },

    currentScore: function( name, score){
        score = game.global.jjScore;
        var currentPlayer = {
          'PlayerName': name,
          'PlayerScore': score
        };
    }
};
