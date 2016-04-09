import express from 'express';

// Define a new api subroute for requests that
// start with /api/applications
const router = express.Router();

global.app.use('/api/registry/', router);

var registry = {};
//  Add REST API for service registry.

router.post('register/:path', (req, res) => {
  const path = req.params.path;
  const addresses = req.body.addresses;

  var newAddresses;
  if(path in registry) {
    newAddresses = registry[path];
  } else {
    newAddresses = [];
  }
  newAddresses.concat(addresses);
  res.send({})
});

router.get('get/:path', (req, res) => {
  const path = req.params.path;
  if(path in registry) {
    res.send({ "addresses": registry[path]});
  } else {
    res.send({ "addresses": []});
  }
});
