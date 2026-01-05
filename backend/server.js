const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const ducks = [
  {
    id: 1,
    name: "Canard Classique",
    model: "Classique",
    size: "Petit",
    price: 5.99,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Canard Pirate",
    model: "Pirate",
    size: "Moyen",
    price: 8.99,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Canard Licorne",
    model: "Fantaisie",
    size: "Grand",
    price: 12.99,
    image: "https://via.placeholder.com/150"
  }
];

// Route API
app.get("/api/ducks", (req, res) => {
  res.json(ducks);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API démarrée sur http://localhost:${PORT}`);
});
