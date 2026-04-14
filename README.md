# GraphQL Video Game Store API

API desarrollada con **Node.js, Express, Apollo Server, Prisma y PostgreSQL**, diseñada para demostrar el uso de **GraphQL** en una tienda de videojuegos.

El proyecto expone un **endpoint publico GraphQL** que permite consultar informacion sobre **consolas** y **videojuegos**, mostrando como el cliente puede pedir solo los campos que necesita sin crear multiples endpoints REST.

---

## Objetivo de la actividad

Demostrar el uso de **GraphQL** para la generacion de endpoints dinamicos sobre una base de datos, sin necesidad de ajustar la respuesta a campos fijos por ruta.

Este proyecto cumple con los requisitos de:

- Crear modelos en una base de datos.
- Registrar multiples instancias con varios campos.
- Exponer un endpoint publico GraphQL sin autenticacion.
- Adjuntar documentacion del esquema y de los campos disponibles.

---

## Tecnologias utilizadas

- Node.js
- Express
- Apollo Server
- GraphQL
- Prisma ORM
- PostgreSQL
- Neon
- Render

---

## Modelos de datos

### 1. Console
Representa una consola de videojuegos disponible en la tienda.

| Campo | Tipo | Descripcion |
|---|---|---|
| id | ID | Identificador unico de la consola |
| name | String | Nombre de la consola |
| brand | String | Marca de la consola |
| releaseYear | Int | Anio de lanzamiento |
| storageGb | Int | Capacidad de almacenamiento en GB |
| portable | Boolean | Indica si la consola es portatil |
| price | Float | Precio de la consola |
| createdAt | String | Fecha de creacion del registro |
| games | [Game] | Lista de juegos asociados a la consola |

### 2. Game
Representa un videojuego asociado a una consola.

| Campo | Tipo | Descripcion |
|---|---|---|
| id | ID | Identificador unico del juego |
| title | String | Titulo del videojuego |
| genre | String | Genero del videojuego |
| studio | String | Estudio desarrollador |
| releaseYear | Int | Anio de lanzamiento |
| multiplayer | Boolean | Indica si el juego tiene modo multijugador |
| price | Float | Precio del videojuego |
| rating | Float | Calificacion del juego |
| createdAt | String | Fecha de creacion del registro |
| console | Console | Consola a la que pertenece |

---

## Relacion entre modelos

- Una **Console** puede tener muchos **Game**.
- Un **Game** pertenece a una sola **Console**.

---

## Consultas GraphQL disponibles

### Obtener todas las consolas

```graphql
query {
  consoles {
    id
    name
    brand
    releaseYear
    storageGb
    portable
    price
  }
}
```

### Obtener una consola por ID

```graphql
query {
  console(id: 1) {
    id
    name
    brand
    games {
      title
      genre
      price
    }
  }
}
```

### Obtener todos los juegos

```graphql
query {
  games {
    id
    title
    genre
    studio
    releaseYear
    multiplayer
    price
    rating
  }
}
```

### Obtener un juego por ID

```graphql
query {
  game(id: 1) {
    id
    title
    genre
    console {
      name
      brand
    }
  }
}
```

### Ejemplo de la flexibilidad de GraphQL

```graphql
query {
  games {
    title
    price
    console {
      name
    }
  }
}
```

En este ejemplo, el cliente solicita unicamente:
- el titulo del juego,
- el precio,
- y el nombre de la consola.

Esto demuestra que **GraphQL permite pedir solo los campos necesarios** sin crear nuevos endpoints.

---

## Datos de ejemplo cargados

### Consolas
- PlayStation 5
- Xbox Series X
- Nintendo Switch

### Juegos
- Marvels Spider-Man 2
- God of War Ragnarok
- Forza Horizon 5
- Halo Infinite
- The Legend of Zelda Tears of the Kingdom
- Mario Kart 8 Deluxe

---

## Estructura del proyecto

```text
graphql-videogame-store/
├── prisma/
│   ├── migrations/
│   │   └── 20260413000000_init/
│   │       └── migration.sql
│   ├── schema.prisma
│   └── seed.js
├── src/
│   ├── db.js
│   ├── resolvers.js
│   ├── schema.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## Instalacion local

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/graphql-videogame-store.git
cd graphql-videogame-store
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo `.env`

Copia el contenido de `.env.example` y agrega tu conexion de Neon:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DBNAME?sslmode=require&pgbouncer=true&connect_timeout=15"
DIRECT_URL="postgresql://USER:PASSWORD@HOST/DBNAME?sslmode=require&connect_timeout=15"
PORT=4000
```

### 4. Ejecutar migraciones

```bash
npx prisma migrate deploy
```

### 5. Insertar datos semilla

```bash
npm run seed
```

### 6. Ejecutar el proyecto

```bash
npm run dev
```

El servidor quedara disponible en:

```text
http://localhost:4000/graphql
```

---

## Despliegue en Render

### Build Command

```bash
npm install && npx prisma migrate deploy && npm run seed
```

### Start Command

```bash
npm start
```

### Variables de entorno requeridas

```env
DATABASE_URL=tu_cadena_pooler_de_neon
DIRECT_URL=tu_cadena_directa_de_neon
```

---

## Endpoint publico

Una vez desplegado en Render, reemplazar este valor con el endpoint real:

```text
https://TU-SERVICIO.onrender.com/graphql
```

---

## Scripts disponibles

```bash
npm run dev
npm start
npm run seed
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
```

---

## Cumplimiento de requisitos

### Requisitos minimos
- Modelos creados en base de datos: si
- Al menos dos instancias en base de datos: si
- Endpoint GraphQL publico sin autenticacion: si
- Esquemas de datos documentados: si

### Entregables
- Endpoint publico para consumir la API: si
- Esquema de los modelos disponibles: si

---

## Autor

Proyecto elaborado para la actividad de **Arquitectura de Sistemas II** sobre implementacion de **GraphQL**.
