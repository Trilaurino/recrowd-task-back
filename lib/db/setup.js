const { getClient } = require('./get-client');

(async () => {
	const client = await getClient();
	let createTableQuery = `
        CREATE TABLE IF NOT EXISTS pokemon_teams (
            team_id VARCHAR(5) UNIQUE NOT NULL,
            team_name VARCHAR(20) NOT NULL,
            pokemons VARCHAR(8000),
            creation_date DATE NOT NULL,
            PRIMARY KEY (team_id)
        );
    `;
	const res = await client.query(createTableQuery);
	console.log(`Created table.`);
	await client.end();
})();
