import prisma from './db.js';

const resolvers = {
  Query: {
    consoles: async () => {
      return prisma.console.findMany({
        orderBy: { id: 'asc' }
      });
    },
    console: async (_, { id }) => {
      return prisma.console.findUnique({
        where: { id: Number(id) }
      });
    },
    games: async () => {
      return prisma.game.findMany({
        orderBy: { id: 'asc' }
      });
    },
    game: async (_, { id }) => {
      return prisma.game.findUnique({
        where: { id: Number(id) }
      });
    }
  },
  Console: {
    games: async (parent) => {
      return prisma.game.findMany({
        where: { consoleId: parent.id },
        orderBy: { id: 'asc' }
      });
    },
    createdAt: (parent) => parent.createdAt.toISOString()
  },
  Game: {
    console: async (parent) => {
      return prisma.console.findUnique({
        where: { id: parent.consoleId }
      });
    },
    createdAt: (parent) => parent.createdAt.toISOString()
  }
};

export default resolvers;
