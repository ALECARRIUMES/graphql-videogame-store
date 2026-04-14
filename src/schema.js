const typeDefs = `
  type Console {
    id: ID!
    name: String!
    brand: String!
    releaseYear: Int!
    storageGb: Int!
    portable: Boolean!
    price: Float!
    createdAt: String!
    games: [Game!]!
  }

  type Game {
    id: ID!
    title: String!
    genre: String!
    studio: String!
    releaseYear: Int!
    multiplayer: Boolean!
    price: Float!
    rating: Float!
    createdAt: String!
    console: Console!
  }

  type Query {
    consoles: [Console!]!
    console(id: ID!): Console
    games: [Game!]!
    game(id: ID!): Game
  }
`;

export default typeDefs;
