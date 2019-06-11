const express = require('express');
const cors = require('cors');
const {
  throttleRequest,
  simulateFlightsNotAvailableError,
} = require('./helpers/throttle');

const PORT = 4000;
const app = express();
app.use(cors());

app.get('/', (req, res, next) => {
  res.send(`Pana Full Stack Challenge Api!`);
});

app.get('/example_endpoint', throttleRequest, (req, res, next) => {
  res.send({
    subtext: 'This subtext comes from the api!',
  });
});

/**
 * Request Flight Results
 * {get} /flights
 */
app.get(
  '/flights',
  throttleRequest,
  simulateFlightsNotAvailableError,
  (req, res, next) => {
    const flights = require('./results/DEN_CHI.json').results;
    res.send(flights);
  }
);

/**
 * Request Return Flights from a Search Id
 * {get} /flights/:search_id
 * @param {string} Selected Flight Option Search Id
 */
app.get(
  '/flights/:search_id',
  throttleRequest,
  simulateFlightsNotAvailableError,
  (req, res, next) => {
    const flights = require('./results/DEN_CHI.json').results;
    const returnFlights = flights.filter(flight => {
      const legIndex = 1;
      return (
        flight &&
        flight[legIndex] &&
        flight[legIndex].searchId === req.params.search_id
      );
    });
    res.send(returnFlights);
  }
);

app.use((error, req, res, next) =>
  res.status(500).send({
    message: error.message,
    error: error.toString(),
  })
);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
