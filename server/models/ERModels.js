const mongoose = require('mongoose');
const URI = require('./uri.js');
const MONGO_URI = URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const ERSchema = new Schema({
    location: String,
    address: String,
    waitTime: String,
})

const ER = mongoose.model('ER', ERSchema);

module.exports = ER;
