import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

var debug = require('debug')('server');

const app = express();

// Set express up to automatically parse incoming JSON requests
// into the request object
app.use(bodyParser.json());

// Store the app globally for convenience
global.app = app;

// Include and run all files in the ./services folder
requireDir('services');

// This file is not included in the repository; please see
// aetherconfig.json.skeleton in aethernetio/aethernet-main for an example
global.aether = { config: require('../aetherconfig.json') };

// Start the web server
var server = app.listen(aether.config["service-registry"]["port"], () => {
  const host = server.address().address;
  const port = server.address().port;

  debug(`Server listening at http://${host}:${port}`);
});
