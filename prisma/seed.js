import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const playStation5 = await prisma.console.upsert({
    where: { name: 'PlayStation 5' },
    update: {
      brand: 'Sony',
      releaseYear: 2020,
      storageGb: 825,
      portable: false,
      price: 499.99
    },
    create: {
      name: 'PlayStation 5',
      brand: 'Sony',
      releaseYear: 2020,
      storageGb: 825,
      portable: false,
      price: 499.99
    }
  });

  const xboxSeriesX = await prisma.console.upsert({
    where: { name: 'Xbox Series X' },
    update: {
      brand: 'Microsoft',
      releaseYear: 2020,
      storageGb: 1000,
      portable: false,
      price: 499.99
    },
    create: {
      name: 'Xbox Series X',
      brand: 'Microsoft',
      releaseYear: 2020,
      storageGb: 1000,
      portable: false,
      price: 499.99
    }
  });

  const nintendoSwitch = await prisma.console.upsert({
    where: { name: 'Nintendo Switch' },
    update: {
      brand: 'Nintendo',
      releaseYear: 2017,
      storageGb: 64,
      portable: true,
      price: 299.99
    },
    create: {
      name: 'Nintendo Switch',
      brand: 'Nintendo',
      releaseYear: 2017,
      storageGb: 64,
      portable: true,
      price: 299.99
    }
  });

  const games = [
    {
      title: 'Marvels Spider-Man 2',
      genre: 'Action-Adventure',
      studio: 'Insomniac Games',
      releaseYear: 2023,
      multiplayer: false,
      price: 69.99,
      rating: 9.2,
      consoleId: playStation5.id
    },
    {
      title: 'God of War Ragnarok',
      genre: 'Action',
      studio: 'Santa Monica Studio',
      releaseYear: 2022,
      multiplayer: false,
      price: 59.99,
      rating: 9.6,
      consoleId: playStation5.id
    },
    {
      title: 'Forza Horizon 5',
      genre: 'Racing',
      studio: 'Playground Games',
      releaseYear: 2021,
      multiplayer: true,
      price: 59.99,
      rating: 9.1,
      consoleId: xboxSeriesX.id
    },
    {
      title: 'Halo Infinite',
      genre: 'Shooter',
      studio: '343 Industries',
      releaseYear: 2021,
      multiplayer: true,
      price: 39.99,
      rating: 8.5,
      consoleId: xboxSeriesX.id
    },
    {
      title: 'The Legend of Zelda Tears of the Kingdom',
      genre: 'Action-Adventure',
      studio: 'Nintendo',
      releaseYear: 2023,
      multiplayer: false,
      price: 69.99,
      rating: 9.8,
      consoleId: nintendoSwitch.id
    },
    {
      title: 'Mario Kart 8 Deluxe',
      genre: 'Racing',
      studio: 'Nintendo',
      releaseYear: 2017,
      multiplayer: true,
      price: 59.99,
      rating: 9.4,
      consoleId: nintendoSwitch.id
    }
  ];

  for (const game of games) {
    await prisma.game.upsert({
      where: { title: game.title },
      update: game,
      create: game
    });
  }

  console.log('Seed completed successfully.');
}

main()
  .catch((error) => {
    console.error('Seed error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
