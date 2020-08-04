const router = require('express').Router();
const user = require('../model/User');
const { registerValidation } = require('../validation')



//For Register
router.post('/register', async (req, res) => {

//Validate the data before we are a user
    // const { error } = Joi.validate(req.body, schema);
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.Status(400).send(err);
    }
});


module.exports = router;