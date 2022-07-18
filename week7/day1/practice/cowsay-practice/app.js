import express from "express";
import * as cowsay from "cowsay";
const app = express();
const PORT = 3000;
app.use(express.json());

console.log(`Listening on port ${PORT}`);

console.log(cowsay.say({ text: "I'm a module" }));