const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

router.post("/register", [
    check("name", "name is required").not().isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check("password", "please enter a password with 6 or more characters").isLength({ min: 6 })], async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        };
        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User alredy exists' }] });
            }
        } catch (err) {
            console.log(err.message);

            res.status(500).send('Send error');
        }
    });

router.post('/login', () => {
    console.log('login');
});

module.exports = router;