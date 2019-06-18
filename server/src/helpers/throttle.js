// Private Helpers
const ERROR_CHANCE = 0.05;
const THROTTLE_LOW = 0; // Seconds
const THROTTLE_HIGH = 4; // Seconds

const getRandomBetween = (low, high) =>
  Math.floor(Math.random() * (high * 1000)) + low;

const throttle = wait => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
};

const simluateGenericError = () => {
  return new Promise((resolve, reject) => {
    return Math.random() > ERROR_CHANCE
      ? resolve()
      : reject(new Error('Server Error'));
  });
};

const throttleRequest = (req, res, next) => {
  return throttle(getRandomBetween(THROTTLE_LOW, THROTTLE_HIGH))
    .then(simluateGenericError)
    .then(next)
    .catch(next);
};

const simulateFlightsNotAvailableError = (req, res, next) => {
  return new Promise((resolve, reject) => {
    return Math.random() > ERROR_CHANCE
      ? resolve()
      : reject(new Error('No flight results were found.'));
  })
    .then(next)
    .catch(next);
};

module.exports = {
  throttleRequest,
  simulateFlightsNotAvailableError,
};
