'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (req, reply) {
    const restaurants = this.mongo.client.db('baedal').collection('restaurants')
    const data = await restaurants.find({}).toArray()
    reply.send(data)
  })
}