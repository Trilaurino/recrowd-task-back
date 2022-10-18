const { config } = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const teamsRouter = require('./routes/teams');

const app = express();
const PORT = parseInt(process.env.PORT) || 4556;

config();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', teamsRouter);

app.listen(PORT, (error) => {
	if (!error) console.log('Server is running on port ' + PORT);
	else console.log("Error occurred, server can't start", error);
});
