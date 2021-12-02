'use strict'
const mongoose = require('mongoose')
const Device = require('../services/device.service')

module.exports.list = function (req, res) {
  Device.list(function (err, device) {
    if (err) return res.send(err)
    res.json(device)
  })
}

module.exports.create = (req, res) => {
  const newDevice = req.body
  if (!newDevice.uid)
    return res
      .status(400)
      .send({ error: true, message: 'Path `uid` is required' })
  if (!newDevice.vendor)
    return res
      .status(400)
      .send({ error: true, message: 'Path `vendor` is required' })
  if (!newDevice.gateway)
    return res
      .status(400)
      .send({ error: true, message: 'Path `gateway` is required' })

  newDevice.gateway = mongoose.Types.ObjectId(newDevice.gateway)
  Device.create(newDevice, (err, device) => {
    if (err) return res.send(err)
    res.json(device)
  })
}

module.exports.read = function (req, res) {
  Device.getById(req.params.id, function (err, device) {
    if (err) return res.send(err)
    res.json(device)
  })
}

module.exports.update = function (req, res) {
  Device.update(req.params.id, req.body, function (err, device) {
    if (err) return res.send(err)
    res.json(device)
  })
}

module.exports.delete = function (req, res) {
  Device.delete(req.params.id, function (err) {
    if (err) return res.send(err)
    res.json({ message: 'Device deleted correctly' })
  })
}
