import express from "express"

const app = express();

app.use(express.json());

let products = [];

app.get("/", (req, res) => {
    res.send({message: "the server is working fine!"})
})

app.get("/products", (req, res) => {
    res.send(products)
})

app.post("/product", (req, res) => {
    const product = req.body;
    products.push({...product, id: products.length + 1});
    res.send({message: "product added successful"})
})

app.delete("/product/:id", (req, res) => {
    const { id } = req.params;
    products = products.filter(obj => obj.id !== Number(id))
    res.send({message: "product deleted", products})
})

app.listen(3000, () => {
    console.log("Response from the server")
})