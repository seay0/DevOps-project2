'use strict'

const fp = require('fastify-plugin')
require('dotenv').config()

const { MONGO_URL, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD } = process.env

module.exports = fp(async function (fastify, opts) {
  const url = MONGO_URL
  console.log(url)

  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: url
  })
})