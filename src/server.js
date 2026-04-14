import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const app = express();
const port = process.env.PORT || 4000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

await apolloServer.start();

app.use(cors());

app.get('/', (_req, res) => {
  res.json({
    message: 'GraphQL Video Game Store API is running.',
    graphqlEndpoint: '/graphql'
  });
});

app.use(
  '/graphql',
  bodyParser.json(),
  expressMiddleware(apolloServer)
);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}/graphql`);
});
