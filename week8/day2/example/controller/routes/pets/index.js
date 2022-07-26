const express = require("express")
const { pets } = require("../../../sequelize/models")
const router = express.Router()

router.post("/create_pets", async (req,res) =>{
    res.send("create pets")
})

router.get("/get_pets", async (req,res) =>{
    const allPets = await pets.findAll()
    res.render("pets", {
        locals: { allPets }},
    )
})

router.put("/update_pets", async (req,res) =>{
    res.send("update pets")
})

router.delete("/destroy_pets", async (req,res) =>{
    res.send("destroy pets")
})

module.exports = router