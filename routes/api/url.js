const express = require('express');
const router = express.Router();
const models = require('../../server/models');

const createNewShortUrl = () => {
  let url = models.url.create()
    .then((newUrl) => console.log('New short url created.'))
}