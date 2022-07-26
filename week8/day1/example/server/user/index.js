const {user} = require("../../database/models")
const express = require("express");
const router = express.Router()
const bcrypt = require("bcrypt")

router.get("/all_users", async (req,res) =>{
    const usersToGet = await user.findAll();
    res.send(usersToGet)
});

router.get("/by_id/:id", async (req,res) => {
    const { id } = req.params;
    const usersToGet = await user.findAll({
        where: {
            id: id,
        },
    });
    res.send(usersToGet)
})

router.post("/create_user", async (req, res) => {
    const {username, password} = req.body
    try {
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);
        const encryptedUser = {
            username: username,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const createUser = await user.create(encryptedUser);
        res.send(createUser);
        } catch (error) {
            res.send(error);
    }
})

router.post("/login", async (req, res) => {
    const {username, password} = req.body
    try {
        // find user based on username in our database
        const findUser = await user.findOne({where: {username: username}})
        const userWeFound = findUser.dataValues;
        const validated = await bcrypt.compare(password,userWeFound.password)
        if(!validated) {
            res.status(400).send("Check username and password").redirect("/login")
        } else {
            res.status(200).send("Sucessful login")
        }
        } catch (error) {
            res.send("didn't find ya");
    }
})

router.post("/update", async (req, res) => {
    const {username, password, newPassword} = req.body
    try {
        // find user based on username in our database
        const findUser = await user.findOne({where: {username: username}})
        const userWeFound = findUser.dataValues;
        const validated = await bcrypt.compare(password,userWeFound.password)
        if(!validated) {
            res.status(400).send("Check username and password").redirect("/login")
        } else {
            const salt = await bcrypt.genSalt(5);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            console.log(hashedPassword)
            findUser.password = hashedPassword
            await findUser.save()
            console.log(findUser.password)
            res.status(200).send("Password updated")
        }
        } catch (error) {
            res.send("didn't find ya");
    }
})

module.exports = router