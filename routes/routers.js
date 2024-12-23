const express = require("express")
const router = express.Router()

const dotenv = require('dotenv')
dotenv.config()

const openai = require("openai")

//All get Routes
router.get("/", (req, res) => {
    return res.render("index")
})

router.get("/level-one", (req, res) => {
    return res.render("levelOne")
})

//All post Routes
router.post("/login", (req, res) => {
    req.session.username = req.body.username.trim()

    return res.redirect("/level-one")
})

router.post("/level-one/fun-fact", (req, res) => {
    const openAI = new openai.OpenAI({
        apiKey: process.env.OPENAI_KEY
    })
    const chatCompletion = openAI.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            "role": "user",
            "content": "Write a fact about plastic in nature."
        }],
    });
    return res.send(JSON.stringify(chatCompletion))
})

module.exports = router