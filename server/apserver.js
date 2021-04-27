const express = require('express')
const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const missionAPI = require('./missionsAPI')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    missionAPI: new missionAPI(),
  }),
  context: ({ req }) => ({
    params: req.params
  })
})

server.applyMiddleware({ app })

app
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
  })
  .get('/script.js', (req, res) => {
    res.sendFile('script.js', { root: 'public' })
  })
  .get('/style.css', (req, res) => {
    res.sendFile('style.css', { root: 'public' })
  })

  app.listen({ port: process.env.PORT || 8000 }, () => {
    console.log(`🚀 Server ready at port ${process.env.PORT || 4000}`)
  })