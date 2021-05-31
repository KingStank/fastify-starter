const getServerData = require('../helpers/getServerData')

module.exports = (fastify) => ({
  get: {
    handler: async (request, reply) => {
      const { data, session } = await getServerData(request)
      return session
        ? reply.view('account', data)
        : reply.redirect('/')
    }
  },
})