const app = require('express')();
const cors = require('cors')
const PORT = 4000;

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

const simluateError = () => {
	return new Promise((resolve, reject) => {
		return Math.random() > ERROR_CHANCE
			? resolve()
			: reject(new Error('Server Error'));
	});
};

app.use(cors());

// Mock API
app.use((req, res, next) => {
	throttle(getRandomBetween(THROTTLE_LOW, THROTTLE_HIGH))
		.then(simluateError)
		.then(next)
		.catch(next);
});

app.get('/', (req, res, next) => {
	res.send(`Full Stack Challenge Api!`);
});

/**
 *  Request Flight Results
 * {get} /flights
 */
app.get('/flights', (req, res, next) => {
	const flights = require('./results/DEN_CHI.json').results;
	res.send(flights);
});

/**
 * Request Return Flights from a Search Id
 * {get} /flights/:search_id
 * @param {string} Selected Flight Option Search Id
 */
app.get('/flights/:search_id', (req, res, next) => {
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
});

app.use((error, req, res, next) => res.status(500).send(error.toString()));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
