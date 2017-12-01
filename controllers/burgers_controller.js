const express = require('express');
const _ = require('lodash');
const moment = require('moment');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.selectAll(function (data) {
    let devoured = [];
    let pending = [];
    data.forEach((burger) => {
      if (burger.devoured) {
        burger.myDate = moment(burger.date).fromNow();
        devoured.push(burger);
      }
      else
        pending.push(burger)
    });
    let hbsObject = {
      pending: pending.length > 0 ? pending : false,
      devoured: devoured.length > 0 ? devoured : false
    };
    console.log(hbsObject);
    res.render("index", hbsObject)
  });
});

router.put('/:id', (req, res) => {
  let condition = `id = ${req.params.id}`;
  console.log("condition", condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function () {
    res.redirect("/");
  });
});

router.post('/', (req, res) => {
  burger.insertOne([
    "name"
  ], [
    req.body.burger
  ], function () {
    res.redirect("/");
  });
});

module.exports = router;