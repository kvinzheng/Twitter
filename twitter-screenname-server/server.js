const Twitter = require('twitter');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

const client = new Twitter({
	consumer_key: 'fx95oKhMHYgytSBmiAqQ',
	consumer_secret: '0zfaijLMWMYTwVosdqFTL3k58JhRjZNxd2q0i9cltls',
	access_token_key: '2305278770-GGw8dQQg3o5Vqfx9xHpUgJ0CDUe3BoNmUNeWZBg',
	access_token_secret: 'iEzxeJjEPnyODVcoDYt5MVvrg90Jx2TOetGdNeol6PeYp',
});

// CORS support
app.use(cors());
app.get('/', (req, res) => {
	res.status(200).send({
		data: 'Successful request',
	});
});

app.get('/twitter/user/search', (req, res) => {
	const username = req.query.username;

	client.get('/users/search', { q: username }, (error, users, response) => {
		if (error) {
			res.status(error.code).send({ error });
		} else {
			res.status(200).send({ users, response });
		}
	});
});

app.listen(PORT, () => {
	/* eslint-disable no-console */
	console.log('listening on port ' + PORT + '...');
	/* eslint-enable no-console */
});
