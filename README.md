# FullStack CRUD App

This App provides a backend that serves a REST API Service with the basic CRUD (create, read, update, delete) operations. The app includes a mock database. If you want you can use a local postgresql database server,or use an online service as [Heroku](https://www.heroku.com/) .The frontEnd will serve the information and allow you to create,update and delete users from an easy and intuitive UI.

![user-crud-screenshot](https://user-images.githubusercontent.com/35935634/147829879-feaff20d-2a01-49a6-847a-e9c9a3161c3e.gif)

## Motivation

This app has been created as a 🎄 holiday project for the School of code Bootcamp which I am part of. This project integrates all that we have learned so far, Frontend, Backend, Databases and testing.

## Design

You can see the low-fi & high-fi designs of the app on [Figma](https://www.figma.com/file/EWGf9bTaAAzCJIC0xPDNHh/CRUD-App?node-id=0%3A1)

## Installation

Make a project directory, clone this repository and initialise the project.\
This will install all the necesary packages to run the backend and the frontend in your local machine.

```bash
mkdir project && cd project
git clone https://github.com/ajsevillano/users-CRUD.git
npm install
```

Before run the app you will need to provide the data to connect to your database in the .env file.The app provides an example file with the structure.
This app uses a postgresql database. You can create one online for free in [Heroku](https://www.heroku.com/) or install [postgresql in your computer](postgresql.org/download/).
Once you have your database created,run the next scripts to create the table and populate the data:

```javascript
//Create the table users into the DB
npm run dbcreateusertable

//Will insert mock data into the database.This data is store in a file in db/mockData/users.js
npm run dbpopulatetable

```

\*\* The app also provides an script to delete the users table, in case you need it.

```javascript
//Be aware that this script will DELETE THE USERS TABLE.
npm run dbdeletetable
```

Finally run the server and the frontEnd with:

```javascript
npm run dev
```

**The frontend will be now available on**

```bash
http://localhost:3000
```

**The Rest API will be running on**

```bash
http://localhost:3000/api/users
```

## Features

- 👤 **Adding Users** : Using the form at the top of the home page you can create new users into the database.

- 🔄 **Update an user** : Using the button Update on the user information you can modify the name,last name, email or catchphrase.

- ❌ **Delete user** : Using the delete button the user will be removed from the database.

- ⚠️ **Alerts** : When an user is create or delete an alert will pop up on the top of the page to confirm the action.

## Technical Details

Libraries used in this project are:

### Backend

- [Express](https://www.npmjs.com/package/express): A web framework for node
- [PG](https://www.npmjs.com/package/pg) : Non-blocking PostgreSQL client for Node.js.
- [DotEnv](https://www.npmjs.com/package/dotenv): (Dev dependency) A zero-dependency module that loads environment variables from a .env file
- [Jest](https://www.npmjs.com/package/jest): (Dev dependency) A library for testing.

### Frontend

The frontEnd is completely written in HTML,CSS And Javascript

## API END POINTS

This is a list of the end points used by the Api

```javascript
// (GET) Return all the users
localhost:3000/api/users

// (GET) Return an user by Id
localhost:3000/api/users/:id

// (POST) Create a new user in the database
localhost:3000/api/users/

// (PUT) Update an user by Id
localhost:3000/api/users/:id

// (DELETE) Delete an user based on the Id
localhost:3001/api/users/:id

```
