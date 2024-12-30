
function checkUsername(req, res, next) {
    if (res.locals.username) {
        next(); // If username exists, proceed to the next middleware or route
    } else {
        return res.redirect('back');
    }
}

module.exports = checkUsername