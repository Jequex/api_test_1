const express = require('express');
const dbConnect = require('./config/dbConnection');

//instantiate app
const app = express();

//connect db
dbConnect();



//routes and middlewares
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));

app.listen(3000, () => {
    console.log("server started on port 3000");
});