var menuState = function (game) {
    this.buttons = null;
    this.menuTitle = null;
    this.menuBgPic = null;
};

menuState.prototype = {

    preload: function () {
        this.util = new util(game);
        if (this.util.getCookie('learner_id') && this.util.getCookie('learner_username')) {
            game.state.start('CategoryMenu');
        }
    },

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
        var userFullName = game.add.inputField(game.width / 2 - 200, 300 - 17, {
            font: '24px Comic Sans MS',
            fill: '#212121',
            fillAlpha: 0,
            width: 400,
            padding: 4,
            placeHolder: 'Your Full Name',
            textAlign: 'left'
        });

        // user's username
        var usernameBg = game.add.nineSlice(game.width / 2, 400, 'input', null, 420, 50);
        usernameBg.anchor.set(0.5);
        var userUsername = game.add.inputField(game.width / 2 - 200, 400 - 17, {
            font: '24px Comic Sans MS',
            fill: '#212121',
            fillAlpha: 0,
            width: 400,
            padding: 4,
            placeHolder: 'Your Username',
            textAlign: 'left'
        });

        // user's age
        var ageBg = game.add.nineSlice(game.width / 2, 500, 'input', null, 420, 50);
        ageBg.anchor.set(0.5);
        var userAge = game.add.inputField(game.width / 2 - 200, 500 - 17, {
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
        var genderBg = game.add.nineSlice(game.width / 2, 600, 'input', null, 420, 50);
        genderBg.anchor.set(0.5);
        var userGender = game.add.inputField(game.width / 2 - 200, 600 - 17, {
            font: '24px Comic Sans MS',
            fill: '#212121',
            fillAlpha: 0,
            width: 400,
            padding: 4,
            placeHolder: 'Are you a \'boy\' or \'girl\'?',
            textAlign: 'left'
        });

        this.startBtn = game.add.button(game.width / 2, 800, 'button', function () {
            if (userFullName.value != "" && userAge.value != "" &&
                userGender.value != "" && userUsername.value != "") {
                this.saveForm(
                    userFullName.value, userUsername.value, userAge.value,
                    userGender.value
                );

                userFullName.destroy();
                userUsername.destroy();
                userAge.destroy();
                userGender.destroy();
            }
        }, this);
        this.startBtn.anchor.set(0.5);
        this.startBtn.scale.setTo(1, 0.5);
        this.startBtn.input.useHandCursor = true;

        var startBtn = game.add.text(game.width / 2, 800, 'REGISTER', {
            font: '48px Comic Sans MS',
            fill: '#fff',
            stroke: '#fff',
            strokeThickness: 3
        });
        startBtn.anchor.set(0.5);
    },

    saveForm: function (fullname, username, age, gender) {
        gender = gender.toLowerCase();
        var httpReq = new XMLHttpRequest();
        var params = 'name=' + fullname + '&username=' + username + '&age=' +
            age + '&gender=' + gender;

        httpReq.onreadystatechange = function () {
            if (httpReq.readyState === XMLHttpRequest.DONE) {
                if (httpReq.status === 201) {
                    var response = JSON.parse(httpReq.response);
                    document.cookie = 'learner_id=' + response.id +
                        '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
                    document.cookie = 'learner_username=' + response.username +
                        '; expires=Thu, 01 Jan 1970 00:00:00 GMT1';
                    game.state.start('CategoryMenu');
                }
            }
        };
        httpReq.open('POST', 'http://127.0.0.1:8000/users/learners/');
        httpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpReq.send(params);
    }
};
