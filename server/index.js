const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const port = 5000;

app.use('/product/:productId', express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(morgan('dev'));

// routes for gallery component
app.get(`/product/:productId/gallery/bundle.js`, (req, res) => {
  axios.get(`http://localhost:7777/bundle.js`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.get(`/api/images/:productId`, (req, res) => {
  const { productId } = req.params;

  axios.get(`http://localhost:7777/api/images/${productId}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(404);
    })
})

app.patch(`/api/favorite/:productId`, (req, res) => {
  const { productId } = req.params;

  axios.get(`http://localhost:7777/api/favorite/:productId`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(404);
    })
})

// routes for reviews component
app.get('/product/:productId/reviews/bundle.js', (req, res) => {
  const { productId } = req.params;

  axios.get(`http://localhost:3000/product/${productId}/bundle.js`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(404);
    })
})

app.get('/api/product/:productId', (req, res) => {
  const { productId } = req.params;

  axios.get(`http://localhost:3000/api/product/${productId}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(404);
    })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})