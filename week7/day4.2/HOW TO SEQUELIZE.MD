# How to run Sequelize

# Step 1

Install all the tools you need
for us, it's usually this stuff

` npm i express sequelize sequelize-cli pg`

# Step 2

Initialize your folder for your sequelize database. We run the command,
` npx sequelize init`
This creates a `config.js` file that you will have to edit and figure out what are the user/passwords
for the local postgres installed on your computer (if you are doing localhost) or you will put in the credentials for whatever
online database you are connecting to.

This creates 3 folders, models, seeders, server.

# Step 3

Run `npx sequelize db:create` which will create a database based on the credentials and config you made in the `config.js`

# Step 4

We need to create models, models are going to become our tables and they are the way we can interact with our database tables. They provide a JS Object that we can then import into our server.
` npx sequelize model:generate --name NameOfTable --attributes` where `NameOfTable` is the name of the table you want to create and attributes are the column names.

```
npx sequelize model:generate --name Clients --attributes firstName:string,lastName:string,email:string,pet
:string
```

This will create a table with the columns you defined as a model.

# Step 5

We need to run migrations so that our models create the table we defined. When you run `npx sequelize db:migrate `
This will actually create your tables from your models folder.

# Step 6 (Optional)

This is where you can seed data. You want to seed in data that makes sense for your database when you test it.

```
npx sequelize seed:generate --name clients
```

This creates a seed file named clients. Inside of the seed file, you can add data based on the commented out code that sequelize gives you. Put data you want to send to the database in the `up` portion. Data that you want to remove goes in the `down` portion.

Once you have the seed files created, you can go ahead and run the seed command to populate your database with the data you entered.

```
npx sequelize db:seed:all
```

This will run all the seed files.