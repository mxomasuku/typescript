const express = require('express');
const bodyParser = require('body-parser');

const { getStoredProperties, storeProperties } = require('./data/properties');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/posts', async (req, res) => {
  const storedProperties = await getStoredProperties();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ properties: storedProperties });
});

app.get('/posts/:id', async (req, res) => {
  const storedProperties = await getStoredPosts();
  const property = storedProperties.find((property) => property.id === req.params.id);
  res.json({ property });
});

app.post('/posts', async (req, res) => {
  const existingProperties = await getStoredProperties();
  const propertyData = req.body;
  const newProperty = {
    ...propertyData,
    id: Math.random().toString(),
  };
  const updatedProperties = [newProperty, ...existingProperties];
  await storeProperties(updatedProperties);
  res.status(201).json({ message: 'Stored new post.', properties: newProperty });
});

app.listen(8080);
