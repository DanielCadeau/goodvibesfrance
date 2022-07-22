# Prisma Documentation

## Installation
---

Clone the project then create a .env in the root directory, put this inside :
```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mongodb://username:password@localhost:27017/goodvibesfrance?authSource=admin"
```
Then run this command :
```
npm i
```
Now you have to install **Prisma** and **PrismaClient** locally using npm :
```
npm i @prisma/client -g
npm add -D prisma -g
```

## Prisma models
---

To create a new Prisma model, you have to open **schema.prisma** that is located in **./prisma** folder. Once opened, here's the location where you put every model you'd want to create. To create a model you can follow this example :
```
model users {
    id         String   @id @default(auto()) @map("_id") @db.ObjectId
    firstname  String
    laststname String
    username   String?  @unique
    email      String   @unique
    password   String
    role       Role     @default(USER)
    certified  Boolean  @default(false)
    theme      String   @default("light")
    language   String   @default("french")
    createdAt  DateTime @default(now())
}
```
Once you have created a model, you go to the terminal, and you re-generate prisma using this command :
```
prisma generate
```