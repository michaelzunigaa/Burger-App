var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
   
    insertOne: function (vals, cb) {
        orm.insertOne("burgers", vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        condition = "devoured = true";

        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

};


module.exports = burger;