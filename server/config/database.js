
const mongoose = require('mongoose');
const dbo = db.db('merits');

const query = { city: "Fresno" };

dbo.collection('clients').find(query).toArray ((err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
});
 
module.exports = {
    database:'mongodb://localhost:27017/merits',
    secret: 'yoursecret'
}