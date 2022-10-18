const { Client } = require('pg');
require('dotenv').config();

(async () => {
	const client = await getClient();
	await client.connect();
	const res = await client.query('SELECT $1::text as connected', [
		'Connection to db successful!',
	]);
	console.log(res.rows[0].connected);
	await client.end();
})();
