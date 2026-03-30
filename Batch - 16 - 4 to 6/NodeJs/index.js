import express from "express";

const app = express();
app.use(express.json());

const posts = [];

app.get("/users", (req, res) => {
    res.send({name: "Talal Ahmed", email: "talal@gmail.com"})
})

app.get("/posts", (req, res) => {
    res.send({data: posts})
})

app.post("/post", (req, res) => {
    console.log(req.body)
    posts.push(req.body)
    res.send({title: "data created!", data: req.body})
})

app.listen(3000, () => {
    console.log("Response from server.")
})