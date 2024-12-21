const express = require("express")
const router = express.Router()

//All get Routes
router.get("/", (req, res) => {
    res.render("index")
})

router.get("/login", (req, res) => {
    res.render("login", { page: "login" })
})

router.get("/register", (req, res) => {
    res.render("login", { page: "register" })
})

//All post Routes
router.post("/login", (req, res) => {
    req.session.username = req.body.username.trim()

    res.redirect("/login")
})

module.exports = router