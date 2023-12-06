const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 10000;

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/gyro.html`);
});
