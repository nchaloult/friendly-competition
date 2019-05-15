const express = require('express');

const app = express();
const PORT = process.env.port || 3001;

app.get('/summoner', (req, res) => {
  res.send('Hello world from summoner!');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});
