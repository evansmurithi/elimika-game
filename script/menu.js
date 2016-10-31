var menuState = function (game) {
    this.buttons = null;
    this.menuTitle = null;
    this.menuBgPic = null;
};

menuState.prototype = {

    create: function () {
        this.background = new background(game);
        this.background.create();

        this.logo = game.add.sprite(game.world.centerX, 100, 'elimikaLogo');
        this.logo.anchor.set(0.5);

        game.global.menuBgSound = game.add.audio('menuBgSound', 1, true);
        if (game.global.playSound){
            game.global.menuBgSound.play();
        }

        this.regForm();
    },

    regForm: function () {
        // user's full name
        var nameBg = game.add.nineSlice(game.width / 2, 300, 'input', null, 420, 50);
        nameBg.anchor.set(0.5);
        var userName = game.add.inputField(game.width / 2 - 200, 300 - 17, {
            font: '24px Comic Sans MS',
            fill: '#212121',
            fillAlpha: 0,
            width: 400,
            padding: 4,
            placeHolder: 'Your Full Name',
            textAlign: 'left'
        });

        // user's age
        var ageBg = game.add.nineSlice(game.width / 2, 400, 'input', null, 420, 50);
        ageBg.anchor.set(0.5);
        var userAge = game.add.inputField(game.width / 2 - 200, 400 - 17, {
            font: '24px Comic Sans MS',
            fill: '#212121',
            fillAlpha: 0,
            width: 400,
            padding: 4,
            placeHolder: 'Your Age',
            textAlign: 'left',
            type: Fabrique.InputType.number
        });

        // user's gender
        var genderBg = game.add.nineSlice(game.width / 2, 500, 'input', null, 420, 50);
        genderBg.anchor.set(0.5);
        var userGender = game.add.inputField(game.width / 2 - 200, 500 - 17, {
            font: '24px Comic Sans MS',
            fill: '#212121',
            fillAlpha: 0,
            width: 400,
            padding: 4,
            placeHolder: 'Boy/Girl',
            textAlign: 'left'
        });

        this.startBtn = game.add.button(game.width / 2, 700, 'button', function () {
            userName.destroy();
            userAge.destroy();
            userGender.destroy();

            game.state.start('CategoryMenu');
        }, this);
        this.startBtn.anchor.set(0.5);
        this.startBtn.scale.set(0.5);
        this.startBtn.input.useHandCursor = true;

        var startBtn = game.add.text(game.width / 2 - 75, 700 - 30, 'START', {
            font: '48px Comic Sans MS',
            fill: '#fff',
            stroke: '#fff',
            strokeThickness: 3
        });
    }
};
