const { GraphQLServer } = require('graphql-yoga')

const sampleItems = [
  { name: 'Apple', color: 'Red' },
  { name: 'Banana', color: 'Yellow' },
  { name: 'Orange', color: 'Orange' },
  { name: 'Melon', color: 'Voilet' },
]

const typeDefs = `
  type Query {
    items: [Item!]!
  }

  type Item {
    name: String!
    color: String!
  }
`

const resolvers = {
  Query: {
    items: () => sampleItems,
  },
}

const options = { port: 4000 }
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(options, () =>
  console.log('Server is running on localhost:' + options.port),
)
