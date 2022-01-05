##USER STORIES
as a user...I want to
Boostrap the backend application with the new frontend
Create an index html, it will contain:

- An add a new user form
  It will contain a input for every field that neeed to be save and a save button
  that will call an POST request on the backend.

- A list of every user
  In every row (user) must be all the information and a edit button and a delete button.
  When the edit button is click, a modal will pop up with a form to be edited.
  When save it, it wil update the information content on the form.

The styles can be taken from the todo list on the workshop

COPIADO DE JHONSON, PARA INSPIRACIÓN
Create Express server
Use node http module to createServer and listen on server instead of app
Setup Heroku postgres db
Create connection to postgres db with dot env
Write db scripts to create empty table with
id (unique), first_name, last_name, email (unique), password, token (string)
Authentication:
install jsonwebtoken, bcryptjs
Create API routes for /register
req.query for first_name, last_name, email, password
validate input- check all fields exist
Check if user already exists using email (which has been set up as a unique column in sql table)
If false
Encrypt password with bcrypt.hash()
Add user details to database
Create a signed JWT token with jwt.sign()
Respond with user + token for now
Create API route for /login
req.query for email, password
validate input- check all fields exist
Check if user exists, return if false
Check input password with database password using bcrypt.compare()
If login successful, create new JWT token, return it and add it to database
Create authorisation middleware that checks for JWT token when accessing sensitive routes such as /profile
Create middleware/auth.js folder, create a middleware function(req, res, next)
Check for req.query token as we will send the token using req.query
If no token, redirect/return to previous page?
Otherwise, jwt.verify token with private key
If token is wrong, redirect/return to previous page?
Otherwise, token exists and is valid so call next() so the user can move on to access the /profile route
Export this middleware function
Create the /profile route endpoint
You can pass in the middleware function as a parameter here after the path, before the callback function that will do a final response
If successful, send some h1

Store token in localStorage https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
