var modal = function (game) {

};

modal.prototype = {

    create: function () {
        this.gm = new gameModal(game);

        // Modals
        this.gm.createModal({
            type: 'promptMenuModal',
            includeBackground: true,
            modalCloseOnInput: true,
            itemsArr: [
                {
                    type: 'text',
                    content: 'Going to Menu will make you lose your current progress.\nDo you still want to go to Menu?',
                    fontFamily: 'dk_cool_crayon',
                    fontSize: 54,
                    color: '0xFFF',
                    offsetY: -100,
                    stroke: '0xFFF',
                    strokeThickness: 3
                },
                {
                    type: 'text',
                    content: 'YES',
                    fontFamily: 'dk_cool_crayon',
                    fontSize: 54,
                    color: '0xFFF',
                    offsetY: 100,
                    offsetX: -100,
                    stroke: '0xFFF',
                    strokeThickness: 3,
                    callback: function () {
                        game.state.start('CategoryMenu');
                    }
                },
                {
                    type: 'text',
                    content: 'NO',
                    fontFamily: 'dk_cool_crayon',
                    fontSize: 54,
                    color: '0xFFF',
                    offsetY: 100,
                    offsetX: 100,
                    stroke: '0xFFF',
                    strokeThickness: 3
                }
            ]
        });

        this.gm.createModal({
            type: 'promptPassCategoryModal',
            includeBackground: true,
            modalCloseOnInput: true,
            itemsArr: [
                {
                    type: 'text',
                    content: 'You need to pass the previous category.\nGet a score greater than 50%.',
                    fontFamily: 'dk_cool_crayon',
                    fontSize: 54,
                    color: '0xFFF',
                    offsetY: -100,
                    stroke: '0xFFF',
                    strokeThickness: 3
                }
            ]
        });

        this.gm.createModal({
            type: 'goGameModal',
            includeBackground: true,
            itemsArr: [
                {
                    type: 'text',
                    content: 'Congratulations!\nYou get to play a game in ...',
                    fontFamily: 'dk_cool_crayon',
                    fontSize: 54,
                    color: '0xFFF',
                    offsetY: -100,
                    stroke: '0xFFF',
                    strokeThickness: 3
                },
                {
                    type: 'text',
                    content: '5',
                    fontFamily: 'dk_cool_crayon',
                    fontSize: 48,
                    color: '0xFFF',
                    offsetY: 0,
                    stroke: '0xFFF',
                    strokeThickness: 3
                }
            ]
        });
    },

    showModal: function (modalName) {
        this.create();
        this.gm.showModal(modalName);
    },

    hideModal: function (modalName) {
        this.gm.hideModal(modalName);
    },

    getModalItem: function (modalName, idx) {
        return this.gm.getModalItem(modalName, idx);
    }
};
