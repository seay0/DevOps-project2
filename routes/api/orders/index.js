'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (req, reply) {
    const orders = this.mongo.client.db('baedal').collection('order')
    const data = await orders.find({}).toArray()
    reply.send(data)
  })

  fastify.get('/:id', async function (req, reply) {
    const orders = this.mongo.client.db('baedal').collection('order')
    const { ObjectId } = require('@fastify/mongodb')
    const data = await orders.findOne({_id: new ObjectId(req.params.id)})
    reply.send(data)
  })

  fastify.post('/', async function (req, reply) {
    const orders = this.mongo.client.db('baedal').collection('order')
    const data = await orders.insertOne(req.body)
    reply.send(data.ops)
  })

}