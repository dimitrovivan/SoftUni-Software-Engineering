const isAllInputsFilled = (req, res, next) => {
    let result = Object.values(req.body).find(input => input == '');
    
    if(result == '') {
        let viewName = req._parsedUrl.path.slice(1);
        res.render(viewName, {message: "You must fill all inputs"});
    }
    next();
}

module.exports = {
    isAllInputsFilled
}