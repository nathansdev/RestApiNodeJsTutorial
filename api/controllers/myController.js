'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Employees');

exports.list_all_employees = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_employee = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_employee = function(req, res) {
  
  Task.findById(req.params.emp_Id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_employee = function(req, res) {

  Task.findOneAndUpdate({id: req.params.emp_Id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_employee = function(req, res) {

  Task.remove({
    id: req.params.emp_Id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
