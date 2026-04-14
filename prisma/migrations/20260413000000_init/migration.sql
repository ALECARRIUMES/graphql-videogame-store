CREATE TABLE "Console" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "storageGb" INTEGER NOT NULL,
    "portable" BOOLEAN NOT NULL DEFAULT false,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Console_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "multiplayer" BOOLEAN NOT NULL DEFAULT false,
    "price" DOUBLE PRECISION NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consoleId" INTEGER NOT NULL,
    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Console_name_key" ON "Console"("name");
CREATE UNIQUE INDEX "Game_title_key" ON "Game"("title");

ALTER TABLE "Game"
ADD CONSTRAINT "Game_consoleId_fkey"
FOREIGN KEY ("consoleId") REFERENCES "Console"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;
