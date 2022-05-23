const express = require("express"); //first step - require the express at top of file
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

// endpoint and method to handle sending friends array back to client
// NEEDS TO BE BELOW MIDDLEWARE
app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});

// another endpoint that tells how the weather is today
// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
//   });

app.get("/weather/:temperature", (req, res) => {
  //   console.log(req.params);
  const { temperature } = req.params;
  const phrase = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
});

app.listen(4000, () => console.log("Server running on port 4000"));
