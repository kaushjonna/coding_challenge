const { GraphQLServer } = require('graphql-yoga')

const dataSet = [
  {
    name: 'basic martini',
    description: 'gin, vermouth, and ice stirred and garnished with an olive',
    price: 100,
  },
  {
    name: 'vespyr martini',
    description: 'premium vodka, kina lillet, and gordons gin, shaken with ice, will have you feeling like 007',
    price: 250,
  },
  {
    name: 'dirty martini',
    description: 'premium gin, dry vermouth, olive brine and ice stirred together and garnished with an olive. ',
    price: 175,
  }
]

const typeDefs = `
  type Query {
    allDetails: [Item]
  }

  type Item {
    name: String!
    description: String!
    price: Int!
  }
`

const resolvers = {
  Query: {
    allDetails: (_, name) => {
      return dataSet
    },
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))