const express = require("express")
const router = express.Router()

const auth = require("../middleware/checkLogin")

const dotenv = require('dotenv')
dotenv.config()

const { OpenAI } = require("openai")
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
});

//All get Routes
router.get("/", (req, res) => {
    return res.render("index")
})

router.get("/level-one", auth, (req, res) => {
    return res.render("levelOne")
})

//All post Routes
router.post("/login", (req, res) => {
    req.session.username = req.body.username.trim()

    return res.redirect("/level-one")
})

module.exports = router