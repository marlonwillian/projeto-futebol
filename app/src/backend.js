const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://192.168.0.23:3000"],
    methods: ["GET"]
  })
);

app.get("/live-matches", async (req, res) => {
  try {;
    const response = await axios.get("https://api.football-data.org/v4/matches", {
      headers: {
        "X-Auth-Token": "3c2b89bab19c4ce2bcf1c530d1102ed7"
      }
    });
    res.status(200).json(response.data); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar dados da API externa." });
  };
});

app.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(`https://api.football-data.org/v4/teams/${req.params.id}`, {
      headers: {
        "X-Auth-Token": "3c2b89bab19c4ce2bcf1c530d1102ed7"
      }
    });
    res.status(200).json(response.data); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar dados da API externa." });
  };
});

app.listen(5000, () => console.log("O servidor está rodando na porta 5000."));