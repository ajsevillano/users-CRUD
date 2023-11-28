# FullStack CRUD App

This App provides a backend that serves a REST API with CRUD support for an user system, and a frontend that serves a static express site to show the data.
![user-crud-screenshot](https://user-images.githubusercontent.com/35935634/147829879-feaff20d-2a01-49a6-847a-e9c9a3161c3e.gif)

## Backend

The backend includes a mock database in the `mockData folder`. From the version 3.0, the backend uses an ORM system called [sequelize](https://sequelize.org/), that allow you to work with multiple SQL databases: Postgres, mysql, mariadb, sqlite and Microsoft SQL Server. By default, the app provided the drivers for Postgress & Mysql, but to use this app with another database you will need to install the proper driver.Follow the instructions on [sequelize website](https://sequelize.org/docs/v6/getting-started/).

## Frontend

The frontEnd will be served by the backend, so you will need to run both to see the app working. The frontend is a static site that uses HTML, CSS and Javascript. The app uses express to serve the static files. The frontend will allow you to create, update and delete users from the database.

## Motivation

This fullstack app was created as a 🎄 holiday project for the School of code Bootcamp which I was part of. This project integrates all that we have learned so far, Frontend, Backend, Databases and testing.

## Design

You can see the low-fi & high-fi designs of the app on [Figma](https://www.figma.com/file/EWGf9bTaAAzCJIC0xPDNHh/CRUD-App?node-id=0%3A1)

## Installation

Make a project directory, clone this repository and initialise the project.\
This will install all the necesary packages to run the backend and the frontend in your local machine.

```bash
mkdir crud-app && cd crud-app
git clone https://github.com/ajsevillano/users-CRUD.git
npm install
```

Before run the app you will need to provide the data to connect to your database in the .env file.The app provides an example file with the structure.
This app uses a postgresql database. You can create a local Postgres Database or create one in the multiple services online for free.

Once you have created the DB, run the next scripts to create the table and populate the data:

```javascript
//Create the table users into the DB
npm run dbcreateusertable

//Will insert mock data into the database.This data is store in a file in db/mockData/users.js
npm run dbpopulatetable

```

\*\* The app also provides an script to delete the users table from the database. This script is useful if you want to start from scratch.

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

- 🗃️ ORM : The app uses [sequelize](https://sequelize.org/) as ORM to connect to the database. This allow you to work with multiple SQL databases: Postgres, mysql, mariadb, sqlite and Microsoft SQL Server.

- 👤 **Adding Users** : Using the form at the top of the home page you can create new users into the database.

- 🔄 **Update an user** : Using the button Update on the user information you can modify the name,last name, email or catchphrase.

- ❌ **Delete user** : Using the delete button the user will be removed from the database.

- ⚠️ **Alerts** : When an user is create or delete an alert will pop up on the top of the page to confirm the action.

## Technical Details

Libraries used in this project are:

### Backend

- [Express](https://www.npmjs.com/package/express): A web framework for node
- [PG](https://www.npmjs.com/package/pg) : Non-blocking PostgreSQL client for Node.js.
- [Mysql2](https://www.npmjs.com/package/mysql2) : MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl and much more.
- [Nodemon](https://www.npmjs.com/package/nodemon): (Dev dependency) A utility that will monitor for any changes in your source and automatically restart your server.
- [Sequelize](https://sequelize.org/) : A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- [DotEnv](https://www.npmjs.com/package/dotenv): (Dev dependency) A zero-dependency module that loads environment variables from a .env file.
- [Jest](https://www.npmjs.com/package/jest): (Dev dependency) A library for testing.

### Frontend

The front-end is entirely developed using HTML, CSS, and Vanilla JavaScript.

## API END POINTS

This is a list of the end points used by the Api. You can test the endpoints using [Postman](https://www.postman.com/)

### Get all users endpoint

```javascript
localhost: 3000 / api / users;
```

### Get user by Id endpoint

```javascript
localhost:3000/api/users/:id
```

### Create endpoint

```javascript
localhost: 3000 /
  api /
  users /
  // You will need to provide the data in the body of the request

  {
    firstName: 'Example',
    lastName: 'Example',
    email: 'example@example.com',
    catchphrase: 'Example catchphrase',
  };
```

### Update endpoint

```javascript

localhost:3000/api/users/:id

// You will need to provide the data in the body of the request

{
firstName: 'Example',
lastName: 'Example',
email:'example@example.com',
catchphrase: 'Example catchphrase',
}
```

### Delete endpoint

```javascript
localhost:3001/api/users/:id

```
