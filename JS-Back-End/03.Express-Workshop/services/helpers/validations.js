const validateCubeInputs = ( req, res, next ) => {

    let data = req.body;
    
    return (data.imageUrl || data.description || data.name || data.difficultyLevel) ? next() : res.end();
}

module.exports = validateCubeInputs;