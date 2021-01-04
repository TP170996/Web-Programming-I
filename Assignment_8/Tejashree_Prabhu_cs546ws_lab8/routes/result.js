const express = require("express");
const router = express.Router();
const data = require("../public/main");

router.post("/", async (req, res) => {
    let result = req.body;

    let text_to_test = result["text-to-test"];
    if (!text_to_test) {
        res.status(400);
        res.render('errors/error', { error: "No text provided!" });
    } else {
        let isPalindrome = data.isPalindrome(text_to_test);
        res.render("layouts/main", { text_to_test: text_to_test, is_Palindrome: isPalindrome });
    }
});

module.exports = router;