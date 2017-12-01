const {selectAll, insertOne, updateOne, countWhere} = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller burgers_controller.js
module.exports = burger;
