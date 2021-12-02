/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
const device = require('../models/device')
const gateway = require('../models/gateway')

module.exports.list = async function (result) {
  await device.find(function (err, res) {
    if (err) throw new Error(err.message)
    console.log(res)
    result(null, res)
  })
}

module.exports.read = async function (id, result) {
  await device.findById(id, function (err, res) {
    if (err) throw new Error(err.message)
    result(null, res)
  })
}

module.exports.create = async (newModel, result) => {
  const promise = new device({
    uid: newModel.uid,
    vendor: newModel.vendor,
    status: newModel.status,
    gateway: newModel.gateway,
  })
  await promise.save(async (err, promise, affectedRows) => {
    if (err) throw new Error(err.message)

    const gate = await gateway.findById(promise.gateway)
    gate.devices.push(promise._id)
    gate.save()

    result(null, promise)
  })
}

module.exports.update = async function (id, alteredModel, result) {
  await device.findByIdAndUpdate(id, alteredModel, (err, res) => {
    if (err) return result(err, null)
    result(null, res)
  })
}

module.exports.delete = async function (id, result) {
  await device.findByIdAndDelete(id, function (err, res) {
    if (err) throw new Error(err)
    result(null, res)
  })
}

module.exports.devicesByGateway = async function (gateId, result) {
  await device.find({ gateway: gateId }, function (err, res) {
    if (err) throw new Error(err.message)
    result(null, res)
  })
}
