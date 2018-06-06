'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/myController');

  // todoList Routes
  app.route('/employees')
    .get(todoList.list_all_employees)
    .post(todoList.create_a_employee);

  app.route('/employees/:emp_Id')
    .get(todoList.read_a_employee)
    .put(todoList.update_a_employee)
    .delete(todoList.delete_a_employee);
};