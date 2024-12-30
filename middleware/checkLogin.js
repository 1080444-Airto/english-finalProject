
function checkUsername(req, res, next) {
    if (res.locals.username) {
        return next(); // If username exists, proceed to the next middleware or route
    } else {
        return res.redirect('/');
    }
}

module.exports = checkUsername