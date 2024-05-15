const express = require("express");
const morgan = require("morgan");

const app = express();

//antes era const
let products = [
  //array que reemplaza a una base de datos
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];

app.use(morgan("dev")); //middleware
app.use(express.json()); //middleware

app.get("/products", (req, res) => {
  res.json(products); //respondemos con un json
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 }; // ...copiamos todo mas el id (operadador de propagacion)
  products.push(newProduct);
  res.send(newProduct);
});

app.put("/products/:id", (req, res) => {
  const newData = req.body;
  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound)
    return res.status(404).json({ message: "product not found" });

  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );

  res.json({
    message: "Product updated successfully",
  });
});

app.delete("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound)
    return res.status(404).json({ message: "product not found" });

  //devuelve un arreglo sin los valores que cumpla esa funcion
  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id); //funcion flecha que tiene la palabra funcion las {} y el return. Itera products
  const productFound = products.find((p) => p.id === parseInt(req.params.id));

  if (!productFound)
    return res.status(404).json({ message: "product not found" });

  console.log(productFound);
  res.send(productFound);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
