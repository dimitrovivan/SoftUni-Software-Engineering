const fs = require('fs');
const path = require('path');

const Cube = require('../models/Cube');
const uniqId = require('uniqid');

const getAllCubes = () => require('../config/productDB.json');

const getCubeById = (id) => getAllCubes().find( x => x.id == id );

function getAllCubesBySortQuery(query) {
    
    let allCubes = getAllCubes();

    if(query.search) allCubes = allCubes.filter( cube => (cube.name).toLowerCase().includes((query.search).toLowerCase()));

    if(query.from) allCubes = allCubes.filter( cube => Number(cube.difficultyLevel) >= Number(query.from));

    if(query.to) allCubes = allCubes.filter( cube => Number(cube.difficultyLevel) <= Number(query.to));

    return allCubes;
}

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

function addCubeInDatabase(cube) {

    let fullPath = path.join(__dirname, '../config/productDb.json');

    let allCubes = getAllCubes();

    allCubes.push(cube);

    return new Promise( (res, rej ) => 
                                   fs.writeFile(
                                               fullPath, 
                                               JSON.stringify(allCubes), 
                                               err => err ? rej('Something went wrong, please try again') : res()))
}

module.exports = {
    createCube,
    addCubeInDatabase,
    getAllCubes,
    getCubeById,
    getAllCubesBySortQuery
}