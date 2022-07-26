# Prisma Documentation

## Installation

Clone the project then create a .env in the root directory, put this inside :
```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mongodb+srv://username:password@cluster.digits.mongodb.net"
```
PLEASE NOTE THAT **PRISMA NEEDS A CLUSTER TO WORK PROPERLY WHEN USING MONGODB** DUE TO TRANSACTIONS PURPOSES.

*Feel free to document yourself about **MongoDB Replica***.

Then run this command :
```shell
npm i
```
Now you have to install **Prisma** and **PrismaClient** locally using npm :
```shell
npm i @prisma/client -g
npm add -D prisma -g
```

## Prisma models

To create a new Prisma model, you have to open **schema.prisma** that is located in **./prisma** folder. Once opened, here's the location where you put every model you'd want to create. To create a model you can follow this example :
```prisma
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
```shell
prisma generate
```

## Synchronizing your models with your database

To do that, simply use this command :
```shell
prisma db push
```

## Creating fixtures ( default data or fake data )

To be able to generate some fixtures, you'll need to create a .js file in the **./fixtures** folder like this :
```
fixtures/
    users.js
```
Now open the file, and write your code, here's the base :
```javascript
// The ErrorHandler class is hand-made, this class will be improved as the features will be evolving.
const ErrorHandler = require("../utilities/errorHandler");
// Prisma function is a hand-made function that creates your fixtures in the database with some nice logs using chalk package.
const Prisma = require("./prisma");

const Users = async () => {
    // Here you create an array that will contain many objects, make sure that the objects contain the same properties as the properties you defined in the model.
    const data = [
        { firstname: "john", lastname: "doe", email: "jdoe1@gmail.com", ... },
        { firstname: "jane", lastname: "doe", email: "jdoe2@gmail.com", ... },
        { firstname: "jack", lastname: "doe", email: "jdoe3@gmail.com", ... },
        { firstname: "jennifer", lastname: "doe", email: "jdoe4@gmail.com", ... },
        { firstname: "jackson", lastname: "doe", email: "jdoe5@gmail.com", ... },
        { firstname: "jannett", lastname: "doe", email: "jdoe6@gmail.com", ... },
    ];
    try{
        // The first parameter is the array you defined above, the second parameter is the collection where the objects above should be saved as MongoDB documents.
        const response = await Prisma(data, "users");
        return response;
    } catch(error) {
        return new ErrorHandler(error);
    };
};

module.exports = Users;
```
NOTE THAT YOUR COLLECTION NAME HERE NEEDS TO HAVE THE EXACT SAME NAME AS THE MODEL YOU'VE CREATED UNDER **./prisma/schema.prisma**.

Once your fixture created in the fixtures folders, you can open the file **fixtures.js** which is supposed to be in the same location as your fixture, which means, in the **fixtures** folder.

Once openened, here's what you'll have to do :
```javascript
// You'll need to import your fixtures here using require since this is not a module.
const Users = require("../fixtures/users");

const Fixtures = () => {
    // Then, you'll add all of your imported fixtures in this array
    const fixtures = [ Users ];
    return fixtures.forEach((fixture) => fixture());
};

Fixtures();
```

AND THAT'S ALL !

Now you can run this command :
```shell
npm run fixtures
```
And everything should be good ! Feel free to leave a comment with a mention if anything went wrong.