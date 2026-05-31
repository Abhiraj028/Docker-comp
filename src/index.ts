import express from 'express';
import { pc } from './clientObj.js';

const app = express();

app.get("/", async (req, res) => {
    const data = await pc.user.findMany();
    res.json({msg: "get endpoint reached", data});
});

app.post("/", async (req, res) => {
    res.json({msg: "post endpoint reached"});
    await pc.user.create({
        data: {
            username: Math.floor(Math.random()*1000).toString(),
            password: Math.floor(Math.random()*1000000000).toString()
        }
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});