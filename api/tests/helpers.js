import mongoose from 'mongoose'
import { server } from '../index.js'
import Gateway from '../models/gateway.js'

const gatewayObjects = [
  {
    name: 'Test1',
    serial: 'asd876tabsld78',
    ipv4: '1.1.1.1',
    description: 'asdasdasd',
    devices: [],
  },
]

beforeEach(async () => {
  await Gateway.deleteMany({})
  for (const gateway of gatewayObjects) {
    await new Gateway(gateway).save()
  }
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
