const express = require("express")
const session = require("express-session")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/audio'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}))

app.use((req, res, next) => {
    res.locals.username = req.session.username;
    next();
});

const Router = require("./routes/routers")
app.use(Router)

app.listen(3000)