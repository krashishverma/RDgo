const express = require('express');
const app = express();
const port = 8080; // You can change this to your desired port

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});