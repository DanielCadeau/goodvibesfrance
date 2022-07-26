/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const { PrismaClient } = require("@prisma/client");
const ErrorHandler = require("../utilities/errorHandler");
const chalk = require("chalk");
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Prisma */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const Prisma = async (fixtureData, collection) => {
    const serverString = "[" + chalk.greenBright("SERVER") + "]";
    console.log(serverString + " - Logging into database...");
    const prisma = new PrismaClient();
    await prisma.$connect;
    console.log(serverString + " - Starting a new Prisma connection...");
    console.log(serverString + " - Retrieving " + collection + " collection...");
    const handleCreation = async (prismaCallback, data) => {
        console.log(serverString + " - Creating " + data.length + " fixture" + ((data.length > 1) ? "s" : "") + "...");
        const fixtures = prismaCallback({ data: (data.length > 1) ? data : data[0] });
        const response = await fixtures;
        console.log(response);
        promiseData = response;
        await prisma.$disconnect();
        console.log(serverString + " - Fixture" + ((data.length > 1) ? "s" : "") + " successfully created...");
        console.log(serverString + " - Closing Prisma connection...");
        return response;
    };
    try{
        let promiseData = null;
        if(fixtureData.length > 1) {
            const fixtures = await handleCreation(prisma[collection].createMany, fixtureData);
            promiseData = fixtures;
        } else if(fixtureData.length === 1) {
            const fixture = await handleCreation(prisma[collection].create, fixtureData);
            promiseData = fixture;
        };
        return promiseData;
    } catch(error) {
        return new ErrorHandler(error);
    };
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
module.exports = Prisma;