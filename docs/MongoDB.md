# MongoDB Documentation

## Windows installation
---

First thing you want to do, is installing [MongoDB Community Server for Windows](https://www.mongodb.com/try/download/community?tck=docs_server), then launch the installer and follow the steps. During the installation you'll be suggested to install **MongoDB Compass** which is a user interface to help you visualize your **MongoDB databases** in a better way. Feel free to install, or not, it's up to you.

Once you've installed the **MongoDB Community Server for Windows** you might need to run **MongoDB** from the **CLI** in some cases. To be able to do that, you will need to install [MongoDB Shell](https://www.mongodb.com/try/download/shell?jmp=docs), again, launch the installer and follow the installation steps.

When **MongoDB Shell's installation** is finished, you'll need to restart your machine in order to "refresh" your path variables.

Now you want to make sure that the **MongoDB service** is started and currently running. To do that, open your task manager go to services, look for **MongoDB**, then see the service status on the right, it should be started. If not, right click on the service, and start it.

## MAC OS installation
---

Same installation process as Windows users. But you have to select **MAC OS** installers when you click on the links above.

## Adding a new user admin in MongoDB
---

If you need to add a new admin user to manage your databases, open your **CLI** and type the next commands.

- First, connect to mongo using :
```
mongosh
```
- Then select the admin database :
```
use admin
```
- And finally create a new admin user with this command :
```
db.createUser({
    user: "youradminname",
    pwd: passwordPrompt(),
    roles: [
        { role: "userAdminAnyDatabase", db: "admin" },
        { role: "readWriteAnyDatabase", db: "admin" }
    ]
})
```
- Now you can leave **MongoDB Shell** by typing :
```
exit
```