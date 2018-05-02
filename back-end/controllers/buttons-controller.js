class ButtonsController {
    constructor(data) {
        this.data = data;
    }

    async getById(id) {
        let button = await this.data.buttons.getById(id);
        console.log(button);
        button = button.dataValues;
        console.log(button);
        if (button) {
            return button;
        }
        return null;
    }
    async getAllButtons() {
        let allButtons = await this.data.buttons.getAll();
        allButtons = allButtons.map((button) => {
            return button.dataValues;
        });
        return allButtons;
    }

    async createButton(buttonObj) {
        const createdButton = await this.data.buttons.create(buttonObj);
        if (createdButton) {
            return createdButton;
        }
        return null;
    }
    async updateButton(buttonObj, id) {
        const updatedButton = await this.data.buttons.update(buttonObj, id);
        if (updatedButton) {
            return updatedButton;
        }
        return null;
    }

    async deleteButton(buttonId) {
        const result = await this.data.buttons.delete(buttonId);
        if (result) {
            return true;
        }
        return false;
    }
}

module.exports = ButtonsController;
