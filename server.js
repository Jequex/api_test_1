const express = require('express');

//instantiate app
const app = express();


//routes and middlewares
app.use('/api/users', require('./routes/users'));

app.listen(3000, () => {
    console.log("server started on port 3000");
});