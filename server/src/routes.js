const express = require('express');
const cors = require('cors');
const router = express.Router();
const controller = require('./controller');
const {
  throttleRequest,
  simulateFlightsNotAvailableError,
} = require('./helpers/throttle');

router.use(cors());

router.get('/example_endpoint', throttleRequest, controller.example);

/**
 * Request Flight Results
 * {get} /flights
 */
router.get(
  '/flights',
  throttleRequest,
  simulateFlightsNotAvailableError,
  controller.getFlights
);

/**
 * Request Return Flights from a Search Id
 * {get} /flights/:search_id
 * @param {string} Selected Flight Option Search Id
 */
router.get(
  '/flights/:search_id',
  throttleRequest,
  simulateFlightsNotAvailableError,
  controller.getFlightsWithSearchId
);

router.use((error, req, res, next) =>
  res.status(500).send({
    message: error.message,
    error: error.toString(),
  })
);

module.exports = router;
