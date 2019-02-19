const express = require('express');
const path = require('path');

const app = express();
// process.env.PORT ||
const PORT =  3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

//-----ROUTES-----//
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function(){
    console.log("The app is listening on port" + PORT)
})