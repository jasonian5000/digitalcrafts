const {Restaurants} = require("../../database/models")
const express = require("express");
const router = express.Router()

module.exports = router

//FULL CRUD

// CREATE 1 or more restaurant
// Read 1 restaurant by id
// read 1 restaurant by name
// read 1 or more restaurant by address

// udate the name of restaurant
// update the address of the restaurant

// delete 1 restaurant by id
// delete 1 restaurant by by name

router.post("/create_restaurant", async (req, res) => {
  const create = await Restaurants.create(req.body);
  res.send(create);
});

router.get("/by_id/:id", async (req,res) => {
    const { id } = req.params;
    const restaurantToGet = await Restaurants.findAll({
        where: {
            id: id,
        },
    });
    res.send(restaurantToGet)
})

router.get("/search_by_name", async (req,res) => {
    const {name} = req.body;
    const restaurantToGet = await Restaurants.findAll({
        where: {
            name: name
        },
    });
    res.send(restaurantToGet)
})

router.get("/search_by_address", async (req,res) => {
    const {address} = req.body;
    const restaurantToGet = await Restaurants.findAll({
        where: {
            address: address
        },
    });
    res.send(restaurantToGet)
})

router.post("/update_name", async (req, res) => {
    const {name, newName} = req.body
    try {
        const findRestaurant = await Restaurants.findOne({where: {name: name}})
        if(!newName) {
            res.status(400).send("Enter a new name").redirect("/update_name")
        } else {
            findRestaurant.name = newName
            await findRestaurant.save()
            res.status(200).send("name updated")
        }
        } catch (error) {
            res.send("didn't find restaurant");
    }
})

router.post("/update_address", async (req, res) => {
    const {address, newAddress} = req.body
    try {
        const findRestaurant = await Restaurants.findOne({where: {address: address}})
        if(!newAddress) {
            res.status(400).send("Enter a new address").redirect("/update_address")
        } else {
            findRestaurant.address = newAddress
            await findRestaurant.save()
            res.status(200).send("address updated")
        }
        } catch (error) {
            res.send("didn't find restaurant");
    }
})