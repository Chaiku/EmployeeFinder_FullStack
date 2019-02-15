const path = require('path');

module.exports = function(app) {
    //--routes to direct users to desired HTML page--//
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};