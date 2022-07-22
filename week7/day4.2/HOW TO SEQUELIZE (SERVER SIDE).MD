# How to run a server with Sequelize

# Step 1

Install the necessay tools for your server. That would be:

```
npm i express pg sequelize sequelize-cli
```

# Step 2

Joe is a benevolent master, here is the code for the start:

```
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

```

# Step 3

You need to require your models. Remember, the models that got created by sequelize have a direct connection to the tables you created in your database.

At the top write your code something like this, remember your pathing might be different.

```
const { Pets, Clients } = require("../sequelize/models");
```

Now we can build our first route to READ the data.

# Step 4

Build the routes you need to make CRUD work. I will make the READ route for you.

```
app.get("/pets", async(req,res) => {
    const pets = await Pets.findAll();
    res.json(pets);
})
```

This uses the `Pets` Model that was created, and runs a function on them called `findAll`. That is a built in function in Sequelize that allows you to find all the records that are in that table.

Here are a few other ones to read about:

```
findOne()
findByPK()
destroy()
update()
create()
```

This is not a comprehensive list, so look at the sequelize docs to find more methods that we didn't inclue here.