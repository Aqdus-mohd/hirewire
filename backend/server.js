const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});