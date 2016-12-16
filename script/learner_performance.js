var learnerPerformanceState = function (game) {

};

learnerPerformanceState.prototype = {

    preload: function () {
        this.util = new util(game);
        var learner_id = this.util.getCookie('learner_id');
        var figuresFont = {
            font: '40px dk_cool_crayon',
            fill: '#FF0',
            stroke: '#FF0',
            strokeThickness: 2
        };

        var httpReq = new XMLHttpRequest();

        httpReq.onreadystatechange = function () {
            if (httpReq.readyState === XMLHttpRequest.DONE) {
                if (httpReq.status === 200) {
                    var response = JSON.parse(httpReq.response);
                    console.log(response);

                    this.tPercent = game.add.text(
                        700, 400, response.performance[0] + '%', figuresFont);
                    this.ttPercent = game.add.text(
                        1150, 400, response.performance[1] + '%', figuresFont);
                    this.tsPercent = game.add.text(
                        1550, 400, response.performance[2] + '%', figuresFont);

                    var total_questions = response.total_questions;
                    this.tPosition = game.add.text(
                        700, 600,
                        total_questions[0].answered + '/' + total_questions[0].total,
                        figuresFont);
                    this.ttPosition = game.add.text(
                        1150, 600,
                        total_questions[1].answered + '/' + total_questions[1].total,
                        figuresFont);
                    this.tsPosition = game.add.text(
                        1550, 600,
                        total_questions[2].answered + '/' + total_questions[2].total,
                        figuresFont);
                }
            }
        };
        httpReq.open(
            'GET', 'http://127.0.0.1:8000/users/learners/' + learner_id + '/');
        httpReq.send();
    },

    create: function () {
        this.background = new background(game);
        this.background.create();

        this.board = game.add.sprite(game.world.centerX, 480, 'chalkboard');
        this.board.anchor.set(0.5);
        this.board.scale.setTo(0.5, 0.35);

        this.menuBg = game.add.sprite(120, 90, 'woodSign');
        this.menuBg.anchor.set(0.5);
        this.menuBg.scale.setTo(1.7, 0.7);
        this.menuBg.angle = -45;
        this.menuBg.inputEnabled = true;
        this.menuBg.events.onInputOver.add(function () {
            this.textOver(this.menuTxt)
        }, this);
        this.menuBg.events.onInputOut.add(function () {
            this.textOut(this.menuTxt);
        }, this);
        this.menuBg.events.onInputUp.add(function () {
            this.textOut(this.menuTxt);
        }, this);
        this.menuBg.input.useHandCursor = true;
        this.menuBg.events.onInputDown.add(function (item) {
            game.state.start('CategoryMenu');
        }, this);

        this.menuTxt = game.add.text(120, 90, 'MENU', {
            font: '48px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 3
        });
        this.menuTxt.anchor.set(0.5);
        this.menuTxt.angle = -45;

        this.mascot = game.add.sprite(game.width - 90, 90, 'mascot');
        this.mascot.anchor.set(0.5);
        this.mascot.scale.set(0.2);
        this.mascot.angle = 45;

        game.add.text(game.world.centerX, 140, 'Your performance', {
            font: '64px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 5
        }).anchor.set(0.5);

        this.showScore();
    },

    showScore: function () {
        var font = {
            font: '40px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 2
        };

        game.add.text(650, 250, 'Teeth', font);
        game.add.text(1050, 250, 'Teeth Types', font);
        game.add.text(1450, 250, 'Teeth Sets', font);

        game.add.text(150, 400, 'Marks', font);
        game.add.text(150, 600, 'Answered Questions', font);
    },


    textOver: function (item) {
        item.fill = '#FFFF00';
        item.stroke = '#FFFF00';
    },

    textOut: function (item) {
        item.fill = '#FFF';
        item.stroke = '#FFF';
    }
}
