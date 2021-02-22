const Twitter = require("twitter");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

//In Production Code, the consumer_key, consumer_secret,access_token_key and access_token_secret would not be shown for security issue.
//Since this is a simple twitter clone, I am displaying here for convinence purpose for the readder
const client = new Twitter({
  consumer_key: "Rc4rjFT7IgOVuH6g74znYVEtd",
  consumer_secret: "fW0uPs0zLL3fwVkPdwYPx09xajA1p6InoLB50H2MiA1JGOWADn",
  access_token_key: "842866092888416256-VLBW5odiBC3U2pCEVwJ8RtRDUclYWjt",
  access_token_secret: "LkIENI6ryVU9dcICxrUNjb20uPQcd1oZhDFkfEtqFWrs7",
});

// CORS support
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send({
    data: "Successful request",
  });
});

app.get("/twitter/user/search", (req, res) => {
  const username = req.query.username;

  client.get("/users/search", { q: username }, (error, users, response) => {
    if (error) {
      res.status(error.code).send({ error });
    } else {
      res.status(200).send({ users, response });
    }
  });
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log("listening on port " + PORT + "...");
  /* eslint-enable no-console */
});
