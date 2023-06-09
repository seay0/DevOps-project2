'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const test = this.mongo.client.db('test')
    const article = test.collection('article')
    await article.insertOne({ 'title': '마일스톤2를 합니다.' })

    const result = await article.find({}).toArray();

    reply.send(result)
  })
}