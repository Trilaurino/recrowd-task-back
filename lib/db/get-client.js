const { Client } = require('pg');
require('dotenv').config();

module.exports.getClient = async () => {
	const client = new Client({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	});
	await client.connect();
	return client;
};
