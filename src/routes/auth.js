const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.post("/register", [check("name", "name is required").not().isEmpty(),
check("email", "please include a valid email").isEmail(),
check("password", "please enter a password with 6 or more characters").isLength({min: 6})], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    };
});

router.post('/login', () => {
    console.log('login');
});

module.exports = router;