const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const dbConnect = async () => {
    await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });
    console.log("db connection successful");
};

module.exports = dbConnect;