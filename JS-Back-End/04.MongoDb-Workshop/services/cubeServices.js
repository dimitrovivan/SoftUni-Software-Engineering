const Cube = require('../models/Cube');

const getAllCubes = () => Cube.find().lean();

const getCubeById = (id) => Cube.findById(id).lean();

function getAllCubesBySortQuery(query) {
    
    let allCubes = getAllCubes();

    if(query.search) allCubes = allCubes.filter( cube => (cube.name).toLowerCase().includes((query.search).toLowerCase()));

    if(query.from) allCubes = allCubes.filter( cube => Number(cube.difficultyLevel) >= Number(query.from));

    if(query.to) allCubes = allCubes.filter( cube => Number(cube.difficultyLevel) <= Number(query.to));

    return allCubes;
}

const createCube = (data) => new Cube(data);

module.exports = {
    createCube,
    getAllCubes,
    getCubeById,
    getAllCubesBySortQuery
}