const Accessory = require('../models/Accessory');

const getAll = () => Accessory.find().lean();

const getOneById = (id) => Accessory.findById(id);

module.exports = {
    getAll,
    getOneById
}
    