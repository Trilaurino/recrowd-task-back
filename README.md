# Recrowd task - Triana Laurino

Hi! Welcome to the readme for the task. I hope you enjoy it!

## How to run the project

### Frontend

1. Clone this repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the project
4. Open `localhost:3000` in your browser

### Backend (this repo)

1. Clone the backend repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the project locally (w/ nodemon), or `npm start` for the node server
4. Ping `localhost:4556` (or check the console)

### Database

1. There is a `db-setup.js` file on this repository. Run it with `node db-setup.js` to create the database and the tables.

### Optional

-The backend has a `.env` file with the environment variables. You can change the port there, or the database connection string. The default port is `4556`.
-I've also created a demo database in ElephantSQL (PostgreSQL), so you can use that one if you don't want to set up your own database. Please note that the database accepts _VERY_ limited requests, so if you get an error, it's probably because the database rejected the frequency of connections. Please wait at least 5 seconds between calls.

## How to use the project

1. In `localhost:3000` you can see the Team Builder on `/team/create`, and Team List on `/team/list`. You can use the navbar to navigate between the pages.
2. You can also delete or add pokemons on `/team/:id/edit`, where `:id` is the team id. To find the `id` of the team, go to the Team List page and click on the team name.

## Comments, todo and improvements

- I wanted to use Amazon RDS for the database, but I had problems with the credit card and couldn't set it up.
- I wanted to add a hook to make the requests but decided it wasn't detrimental for the mvp.
- There are a couple of bugs that I am aware of, but I want to send this as soon as possible:
- - _There is no feedback when you create a team_, so you don't know if it worked or not. I couldn't add a toast in time.
- - Also there currently cannot be a team with less than 2 pokemons, because of how I handled the array on the backend. This is the only bug per se.
- - There aren't types for the PokeAPI responses, so I had to use `any` in a couple of places. I couldn't find them easily and the object is pretty big, so I decided to leave it for now.

## Thank you!

I hope you enjoy the project! I had a lot of fun doing it, and I hope you like it too!
Please give me some feedback on what you think of it, and if you have any questions, please let me know!
Triana
