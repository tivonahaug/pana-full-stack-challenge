const example = (req, res) => {
  res.send({
    subtext: 'This subtext comes from the api!',
  });
};

const getFlights = (req, res) => {
  const flights = require('./results/DEN_CHI.json').results;
  res.send(flights);
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
