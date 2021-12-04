import supertest from 'supertest'
import mongoose from 'mongoose'
import { app, server } from '../index.js'
import Gateway from '../models/gateway.js'
import Device from '../models/device.js'

const api = supertest(app)

const gatewayObjects = [
  {
    name: 'Test1',
    serial: 'asd876tabsld78',
    ipv4: '1.1.1.1',
    description: 'asdasdasd',
    devices: [],
  },
]

const deviceObjects = [
  {
    uid: 123,
    vendor: 'Samsung',
    status: 'online',
    gateway: '',
  },
]

let gatId = ''

beforeEach(async () => {
  await Gateway.deleteMany({})
  await Device.deleteMany({})
  for (const gateway of gatewayObjects) {
    const gat = await new Gateway(gateway).save()
    gatId = gat._id
    for (const device of deviceObjects) {
      device.gateway = gatId
      await new Device(device).save()
    }
  }
})

describe('Create device', () => {
  it('should create a new device', async () => {
    const res = await api.post('/devices').send({
      uid: 234,
      vendor: 'Iphone',
      status: 'offline',
      gateway: gatId,
    })
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('uid', 234)
  })

  it('should fail by no pasing the uid', async () => {
    const res = await api.post('/devices').send({
      vendor: 'Iphone',
      status: 'offline',
      gateway: gatId,
    })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error', true)
    expect(res.body).toHaveProperty('message', 'Path `uid` is required')
  })

  it('should fail by no pasing the vendor', async () => {
    const res = await api.post('/devices').send({
      uid: 345,
      status: 'offline',
      gateway: gatId,
    })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error', true)
    expect(res.body).toHaveProperty('message', 'Path `vendor` is required')
  })

  it('should fail by no pasing the gateway', async () => {
    const res = await api.post('/devices').send({
      uid: 456,
      vendor: 'Huawei',
      status: 'offline',
    })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error', true)
    expect(res.body).toHaveProperty('message', 'Path `gateway` is required')
  })
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
