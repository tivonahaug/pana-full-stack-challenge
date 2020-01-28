const example = (req, res) => {
  res.send({
    subtext: 'This subtext comes from the api!',
  });
};

const getFlights = (req, res) => {
  const flights = require('./results/DEN_CHI.json').results;
  const flightsWithId = flights.map((segments, index) => {
    const [outboundFlight, returnFlight] = segments;
    const outboundFlightWithId = { id: index, ...outboundFlight };
    const returnFlightWithId = { id: index, ...returnFlight };
    return [outboundFlightWithId, returnFlightWithId];
  });
  res.send(flightsWithId);
};

const getFlightsWithSearchId = (req, res) => {
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
};

module.exports = {
  example,
  getFlights,
  getFlightsWithSearchId,
};
