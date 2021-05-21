const Cube = require('../models/Cube');
const uniqId = require('uniqid');


function createCube(data) {

    let cube = new Cube(
                         uniqId(), 
                         data.name, 
                         data.description, 
                         data.imageUrl, 
                         data.difficultyLevel
                       );

    return cube;
}

module.exports = {
    createCube
}