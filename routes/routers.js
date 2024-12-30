const express = require("express")
const router = express.Router()

const auth = require("../middleware/checkLogin")

const dotenv = require('dotenv')
dotenv.config()

//All get Routes
router.get("/", (req, res) => {
    return res.render("index")
})

router.get("/level-one", auth, (req, res) => {
    return res.render("levelOne")
})

router.get("/level-two", auth, (req, res) => {
    return res.render("levelTwo")
})

router.get("/end-game", auth, (req, res) => {
    return res.render("endScreen")
})

//All post Routes
router.post("/login", (req, res) => {
    req.session.username = req.body.username.trim()

    return res.redirect("/level-one")
})

router.post("/logout", auth, (req, res) => {
    req.session.username = null

    return res.redirect("/")
})

module.exports = router