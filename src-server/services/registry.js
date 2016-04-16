import express from 'express';

var debug = require('debug')('aether:registry');

// Define a new api subroute for requests that
// start with /api/applications
const router = express.Router();

global.app.use('/api/registry', router);

var registry = {};
//  Add REST API for service registry.

router.post('/:path', (req, res) => {
  const path = req.params.path;
  debug(req.body);
  const address = req.body.address;
  debug(address);

  debug(`Handling register/path for service ${path} at ${address}`);

  var newAddresses;
  if(path in registry) {
    debug('Using existing registry, adding address');
    newAddresses = registry[path];
  } else {
    debug('New registry');
    newAddresses = [];
  }
  newAddresses = newAddresses.concat(address);
  registry[path] = newAddresses;

  debug(`New Addresses for service ${path}: ${newAddresses}`);

  res.send({ result: "success"});

  // If there was an error, send { result: "error", message: "error message"}
});

router.get('/:path', (req, res) => {
  const path = req.params.path;
  if(path in registry) {
    res.send({ "addresses": registry[path]});
  } else {
    res.send({ "addresses": []});
  }
});
