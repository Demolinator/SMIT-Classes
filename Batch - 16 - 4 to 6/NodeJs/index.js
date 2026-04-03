import express from "express"
import { productSchema } from "./schema/index.js";

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
    console.log("response from the middleware => reciptionist");
    next()
})

let products = [];

app.get("/", (req, res) => {
    res.send({message: "the server is working fine!"})
})

app.put('/product/:id', (req, res) => {
    const { id } = req.params
    let index = products.findIndex(obj => obj.id === id)
    products.splice(index, 1, {...req.body, id})
    res.send({message: "Product updated successfully", products})
})

app.get("/products", (req, res) => {
    res.send(products)
})

app.post("/product", async (req, res) => {
    const product = await productSchema.validateAsync(req.body)
    products.push({...product, id: Date.now().toString(36)});
    res.send({message: "product added successful"})
})

app.delete("/product/:id", (req, res) => {
    const { id } = req.params;
    products = products.filter(obj => obj.id !== id)
    res.send({message: "product deleted", products})
})

app.listen(3000, () => {
    console.log("Response from the server")
})