const express = require('express');
const formidable = require('formidable');

const app = express();
const port = 3000;

app.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ fields, files });
  });
});

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});
