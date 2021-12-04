/* eslint-disable no-console */
import supertest from 'supertest'
import app from '../index.js'
import { closeDatabase, clearDatabase } from '../config/db-handler'
import Gateway from '../models/gateway.js'

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

beforeEach(async () => {
  clearDatabase()
  for (const gateway of gatewayObjects) {
    await new Gateway(gateway).save()
  }
})

describe('Create gateway', () => {
  it('should create a new gateway', async () => {
    const res = await api.post('/gateways').send({
      name: 'Test2',
      serial: 'asd876tabsld71',
      ipv4: '1.1.1.2',
      description: 'gateway description',
      devices: [],
    })
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('serial', 'asd876tabsld71')
  })

  it('should fail by no pasing the name', async () => {
    const res = await api.post('/gateways').send({
      serial: 'asd876tabsld72',
      ipv4: '1.1.1.4',
      description: 'gateway description',
      devices: [],
    })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error', true)
    expect(res.body).toHaveProperty('message', 'Path `name` is required')
  })

  it('should fail by no pasing the serial', async () => {
    const res = await api.post('/gateways').send({
      name: 'Test3',
      ipv4: '1.1.1.3',
      description: 'gateway description',
      devices: [],
    })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error', true)
    expect(res.body).toHaveProperty('message', 'Path `serial` is required')
  })

  it('should fail by no pasing the ipv4', async () => {
    const res = await api.post('/gateways').send({
      name: 'Test3',
      serial: 'asd876tabsld72',
      description: 'gateway description',
      devices: [],
    })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error', true)
    expect(res.body).toHaveProperty('message', 'Path `ipv4` is required')
  })

  it('should fail by pasing an invalid ipv4', async () => {
    const res = await api.post('/gateways').send({
      name: 'Test3',
      serial: 'asd876tabsld72',
      ipv4: '1.1.1',
      description: 'gateway description',
      devices: [],
    })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error', true)
    expect(res.body).toHaveProperty(
      'message',
      'Path `ipv4` needs to be a valid ipv4 address'
    )
  })
})

describe('Feth gateways', () => {
  it('should list all gateways', async () => {
    const res = await api.get('/gateways')
    expect(res.status).toBe(200)
  })
})

afterAll(() => {
  closeDatabase()
})
