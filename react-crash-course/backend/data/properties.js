const fs = require('node:fs/promises');

async function getStoredProperties() {
  const rawFileContent = await fs.readFile('properties.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedProperties = data.properties ?? [];
  return storedProperties;
}

function storeProperties(properties) {
  return fs.writeFile('properties.json', JSON.stringify({ properties: properties || [] }));
}

exports.getStoredProperties = getStoredProperties;
exports.storeProperties = storeProperties;