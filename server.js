const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//-----ROUTES-----//
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function(){
    console.log("The app is listening on port" + PORT)
})