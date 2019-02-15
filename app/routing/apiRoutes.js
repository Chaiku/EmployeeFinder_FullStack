let employees = require('../data/employees.js');

module.exports = function (app) {

    //get the employee List//
    app.get('/api/employees', function(req, res) {
        res.json(employees);
    });

    //post the matched employee to the employeeList//
    app.post('/api/employees', function(req, res) {
        employees.push(req.body);

        res.end();
    });
}