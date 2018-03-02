const express = require ('express');
const router = express.Router();

//get API listing

router.get('/', (req, res) => {
    res.send('API works!!!')
});

module.exports = router;