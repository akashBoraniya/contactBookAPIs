const USER = require('../model/user');
const bcrypt = require('bcrypt');


exports.AddUser = async function (req, res, next) {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      throw new Error("enter valid field");
    }
    req.body.password = await bcrypt.hash(req.body.password, 8)
    const data = await USER.create(req.body);

    res.status(201).json({
      status: "Success",
      message: "Data Added",
      data: data
    })
  } catch (error) {
    res.status(201).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.ShowUser = async function (req, res, next) {
  try {
    const data = await USER.find();

    res.status(201).json({
      status: "Success",
      data: data
    })
  } catch (error) {
    res.status(201).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.UpdateUser = async function (req, res, next) {
  try {
    let data = await USER.findByIdAndUpdate(req.query.id, req.body);
    if (!data) {
      throw new Error("Data not Found");
    }
    res.status(201).json({
      status: "Success",
      message: "Data Updated",
      data: data
    })
  } catch (error) {
    res.status(201).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.DeleteUser = async function (req, res, next) {
  try {
    let data = await USER.findByIdAndDelete(req.query.id, req.body);
    if (!data) {
      throw new Error("Data not Found");
    }

    res.status(201).json({
      status: "Success",
      message: "Data Deleted",
      data: data
    })
  } catch (error) {
    res.status(201).json({
      status: "Fail",
      message: error.message
    })
  }
}