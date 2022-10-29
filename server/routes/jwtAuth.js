const router = require('express').Router()
const pool = require('../db')

//login routes
router.post('/register', async (req, res) => {
    try {
        //destructure the req.body
        const { name, email, password } = req.body;


    } catch (error) {
        console.log(err)
        res.status(500).json('server error')
    }
})

module.exports = router;
//