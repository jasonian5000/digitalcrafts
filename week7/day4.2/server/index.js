const express = require('express')
const {Pets, Clients} = require("../sequelize/models")
const app = express()
const PORT = process.env.PORT || 3004

app.get("/pets", async (req,res) => {
    const pets = await Pets.findAll();
    res.json(pets);
})



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})