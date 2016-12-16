var questions = function (game) {

};

questions.prototype = {

    // abstraction for teeth, teeth types and teeth sets questions
    create: function (titleTxt, questionsObj, score) {

        this.questions = questionsObj;
        this.score = score;

        this.background = new background(game);
        this.modal = new modal(game);
        this.util = new util(game);

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
            this.textOver(this.menuTxt);
        }, this);
        this.menuBg.events.onInputOut.add(function () {
            this.textOut(this.menuTxt);
        }, this);
        this.menuBg.events.onInputUp.add(function () {
            this.textOut(this.menuTxt);
        }, this);
        this.menuBg.input.useHandCursor = true;
        this.menuBg.events.onInputDown.add(function (item) {
            this.modal.showModal('promptMenuModal');
            // game.state.start('CategoryMenu');
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

        this.questionsTitle = game.add.text(game.width / 2, 140, titleTxt, {
            font: '64px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 5
        });
        this.questionsTitle.anchor.set(0.5);

        this.catScore = game.add.text(
            game.width - 350, 140,
            'Score: ' + this.score.score + '/' + this.score.total, {
            font: '56px dk_cool_crayon',
            fill: '#FFFF00',
            stroke: '#FFFF00',
            strokeThickness: 2
        });
        this.catScore.anchor.set(0.5);

        this.questionText = game.add.text(400, 190, '', {
            font: '48px dk_cool_crayon',
            fill: '#FFF',
            stroke: '#FFF',
            strokeThickness: 2,
            wordWrap: true,
            wordWrapWidth: game.width - 500
        });

        this.setChoiceButtons();
        this.getQuestion(0);
    },

    getQuestion: function (index) {
        if (index >= 0 && index < this.questions.length) {
            if (game.global.kqImage) {
                game.global.kqImage.destroy();
            }
            this.index = index;
            var img = this.questions[index].question_image;
            if (img) {
                game.load.crossOrigin = 'anonymous';
                game.load.image('qImage', img);
                game.load.start();
            }
            this.questionText.text = this.questions[index].question;
            this.setChoices(this.questions[index].question_choices);
        }

        if (index === this.questions.length) {
            // TODO: Play Jolly Jumper
            game.state.start('CategoryMenu');
        }
    },

    textOver: function (item) {
        item.fill = '#FFFF00';
        item.stroke = '#FFFF00';
    },

    textOut: function (item) {
        item.fill = '#FFF';
        item.stroke = '#FFF';
    },

    setChoiceButtons: function () {
        // Font
        this.choiceFont = {
            font: '32px dk_cool_crayon',
            fill: '#fff',
            stroke: '#fff',
            strokeThickness: 2,
            wordWrap: true,
            wordWrapWidth: game.width / 2 - 200
        }

        // Choice 1
        this.choice1 = game.add.text(
            100, game.height / 2 + 50, '', this.choiceFont
        );
        this.choice1.inputEnabled = true;
        this.choice1.events.onInputOver.add(this.textOver, this);
        this.choice1.events.onInputOut.add(this.textOut, this);
        this.choice1.events.onInputUp.add(this.textOut, this);
        this.choice1.input.useHandCursor = true;
        this.choice1.events.onInputDown.add(function (item) {
            this.checkAnswer(0);
        }, this);

        // Choice 2
        this.choice2 = game.add.text(
            game.width / 2 + 100, game.height / 2 + 50, '',
            this.choiceFont
        );
        this.choice2.inputEnabled = true;
        this.choice2.events.onInputOver.add(this.textOver, this);
        this.choice2.events.onInputOut.add(this.textOut, this);
        this.choice2.events.onInputUp.add(this.textOut, this);
        this.choice2.input.useHandCursor = true;
        this.choice2.events.onInputDown.add(function (item) {
            this.checkAnswer(1);
        }, this);

        // Choice 3
        this.choice3 = game.add.text(
            100, game.height / 2 + 250, '', this.choiceFont
        );
        this.choice3.inputEnabled = true;
        this.choice3.events.onInputOver.add(this.textOver, this);
        this.choice3.events.onInputOut.add(this.textOut, this);
        this.choice3.events.onInputUp.add(this.textOut, this);
        this.choice3.input.useHandCursor = true;
        this.choice3.events.onInputDown.add(function (item) {
            this.checkAnswer(2);
        }, this);

        // Choice 4c
        this.choice4 = game.add.text(
            game.width / 2 + 100, game.height / 2 + 250, '',
            this.choiceFont
        );
        this.choice4.inputEnabled = true;
        this.choice4.events.onInputOver.add(this.textOver, this);
        this.choice4.events.onInputOut.add(this.textOut, this);
        this.choice4.events.onInputUp.add(this.textOut, this);
        this.choice4.input.useHandCursor = true;
        this.choice4.events.onInputDown.add(function (item) {
            this.checkAnswer(3);
        }, this);
    },

    setChoices: function (choices) {
        this.choice1.text = 'A) ' + choices[0].choice_text;
        this.choice2.text = 'B) ' + choices[1].choice_text;
        this.choice3.text = 'C) ' + choices[2].choice_text;
        this.choice4.text = 'D) ' + choices[3].choice_text;
    },

    checkAnswer: function (index) {
        var question = this.questions[this.index];
        var choice = question.question_choices[index];
        var learner_id = this.util.getCookie('learner_id');
        var is_right = choice.is_right;

        // var httpReq = new XMLHttpRequest();
        // var params = 'question=' + question.id + '&choice=' + choice.id +
        //     '&learner=' + learner_id;
        //
        // httpReq.onreadystatechange = function () {
        //     if (httpReq.readyState === XMLHttpRequest.DONE) {
        //         if (httpReq.status === 201) {
        //             var response = JSON.parse(httpReq.response);
        //             console.log(response);
        //         }
        //     }
        // };
        // httpReq.open('POST', 'http://127.0.0.1:8000/questions/answers/');
        // httpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // httpReq.send(params);

        if (is_right) {
            var cheers = game.add.audio('kidsCheering');
            cheers.play();
            this.score.score += 1;
        } else {
            var sad = game.add.audio('sadTrombone');
            sad.play();
        }
        this.score.total += 1;

        this.catScore.text = 'Score: ' +
            this.score.score + '/' + this.score.total;

        this.getQuestion(this.index + 1);
    }
};
