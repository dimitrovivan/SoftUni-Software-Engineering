const isAllInputsFilled = (req, res, next) => {
    let result = Object.values(req.body).find(input => input == '');
    
    if(result == '') {
        let viewName = req._parsedUrl.path.slice(1);
        let modifiedRender;
        switch(viewName) {
            case 'register': modifiedRender = res.render.bind(res, 'register');
            case 'create': modifiedRender = res.render.bind(res, 'create-course');
        }
        modifiedRender({message: "You must fill all inputs"});
        return;
    }
    next();
}

module.exports = {
    isAllInputsFilled
}