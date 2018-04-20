class Data {
    constructor(model) {
        this.model = model;
    }

    getAll() {
        return this.model.findAll();
    }

    getById(id) {
        return this.model.find({
            where: {
                id: id,
            },
        });
    }

    getAllUserIds(id) {
        return this.model.findAll({
            where: {
                UserId: id,
            },
        });
    }

    getByValue(columnName, value) {
        // const where = {
        //     columnName: value,
        // }
        return this.model.find({
            where: {
                [columnName]: value,
            },
        });
    }
    getAllByValue(columnName, value) {
        // const where = {
        //     columnName: value,
        // }
        return this.model.findAll({
            where: {
                [columnName]: value,
            },
        });
    }

    findCreateFind(columnName, value) {
        return this.model.findCreateFind({
            where: {
                columnName: value,
            },
        });
    }

    create(Object) {
        return this.model.create(Object);
    }

    delete(id) {
        return this.model.destroy({
            where: {
                id: id,
            },
        });
    }

    update(object, id) {
        return this.model.update(object, {
            where: {
                id: id,
            },
        });
    }
}

module.exports = Data;
