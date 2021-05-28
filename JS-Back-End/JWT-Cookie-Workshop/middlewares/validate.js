const checkIfAllInputsAreFilled = (req, res, next) => 
                                                 Object.values(req.body).find(value => value == '') == '' 
                                                 ? res.redirect('/auth/register') 
                                                 : next();

module.exports = {
    checkIfAllInputsAreFilled
}