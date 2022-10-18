const express = require('express');
const router = express.Router();

const { getClient } = require('../lib/db/get-client');

// get all teams
router.get('/teams', async (req, res) => {
	const client = await getClient();
	const query = 'SELECT * FROM pokemon_teams ORDER BY creation_date';
	const result = await client.query(query);
	await client.end();
	res.send(result.rows);
});

// get the team by id from the database
router.get('/teams/:id', function (req, res, next) {
	if (req.params.id === undefined) {
		res.status(400).send('Please provide a team id');
		return;
	}
	(async () => {
		const id = req.params.id;
		const client = await getClient();
		client.query(
			'SELECT * FROM pokemon_teams WHERE team_id = $1',
			[id],
			(err, result) => {
				if (err) {
					res.status(500).send('Internal Server Error');
					return;
				}
				if (result.rows.length === 0) {
					res.status(404).send('Team not Found');
					return;
				}
				res.json(result.rows[0]);
			}
		);
	})();
});

// create a new team
router.post('/teams', function (req, res, next) {
	if (req.body.team_id === undefined) {
		res.status(400).send('Please provide a team id');
		return;
	}
	(async () => {
		const client = await getClient();
		client.query(
			'INSERT INTO pokemon_teams (team_id, team_name, pokemons, creation_date) VALUES ($1, $2, $3, $4)',
			[
				req.body.team_id,
				req.body.team_name,
				req.body.pokemons,
				req.body.creation_date,
			],
			(err, result) => {
				if (err) {
					res.status(500).send('Internal Server Error');
					return;
				}
				res.status(201).send('Team created!');
			}
		);
	})();
});

// update team in the database
router.put('/teams/:id', function (req, res, next) {
	if (req.params.id === undefined || req.body.team_name === undefined) {
		res.status(400).send('Team has to have a name and an id');
		return;
	}
	(async () => {
		const id = req.params.id;
		const client = await getClient();
		client.query(
			'UPDATE pokemon_teams SET team_name = $1, pokemons = $2, creation_date = $3 WHERE team_id = $4',
			[req.body.team_name, req.body.pokemons, req.body.creation_date, id],
			(err, result) => {
				if (err) {
					res.status(500).send('Internal Server Error');
					return;
				}
				if (result.rowCount === 0) {
					res.status(404).send('Not Found');
					return;
				}
				res.status(200).send('Team updated!');
			}
		);
	})();
});

// delete team from the database
router.delete('/teams/:id', function (req, res, next) {
	if (req.params.id === undefined) {
		res.status(400).send('Please provide a team id');
		return;
	}
	(async () => {
		const id = req.params.id;
		const client = await getClient();
		client.query(
			'DELETE FROM pokemon_teams WHERE team_id = $1',
			[id],
			(err, result) => {
				if (err) {
					res.status(500).send('Internal Server Error');
					return;
				}
				if (result.rowCount === 0) {
					res.status(404).send('Not Found');
					return;
				}
				res.status(200).send('Team deleted!');
			}
		);
	})();
});

module.exports = router;
