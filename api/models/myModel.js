'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmployeeSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter employee name'
  },
  id: {
    type: Number,
    required: 'Kindly enter employee id'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    },
    {
      type: Number,
      enum: ['pending', 'ongoing', 'completed']
    }
    ],
    default: ['pending']
  }
});

module.exports = mongoose.model('Employees', EmployeeSchema);