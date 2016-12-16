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
                    content: 'You need to pass the previous category.\nGet a score greater than 70%.',
                    fontFamily: 'dk_cool_crayon',
                    fontSize: 54,
                    color: '0xFFF',
                    offsetY: -100,
                    stroke: '0xFFF',
                    strokeThickness: 3
                }
            ]
        });
    },

    showModal: function (modalName) {
        this.create();
        this.gm.showModal(modalName);
    }
};
