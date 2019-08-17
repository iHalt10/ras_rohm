const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

var isupdated = false

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/update', function (req, res) {
  isupdated = true
  res.json({
    message: "Update!"
  });
});

app.get('/fetch', function (req, res) {
  res.json({
    isupdated: isupdated
  });
  isupdated = false
});

app.listen(port, () => console.log(`Server running on ${port}`));