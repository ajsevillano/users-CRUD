import express from 'express';
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from './models/users.js';
const PORT = 3000;
const app = express();

app.use(express.json());

// GET ALL USERS
app.get('/users', async function (req, res) {
  //Call the function to get the users
  const result = await getUsers();
  //Return the response
  res.json({
    success: true,
    payload: result,
  });
});

// GET USER BY ID
app.get(`/users/:id`, async function (req, res) {
  //Get the id from the params
  const id = req.params.id;
  //Call the function to get the user by Id
  const resultbyId = await getUserByID(id);
  //Return the response
  res.json(resultbyId);
});

// CREATE AN USER
app.post(`/users`, async function (req, res) {
  //Get the body from the params
  const postBody = req.body;
  //Call the function to add the new user
  const newUser = await createUser(postBody);
  //Return the response
  res.json({
    success: true,
    payload: newUser,
  });
});

//UPDATE AN USER BY ID
app.put('/users/:id', async function (req, res) {
  //Get the body from the params
  const body = req.body;
  //Get the id
  const id = req.params.id;
  //Call the function to add the new user
  const updateUser = await updateUserByID(id, body);
  //Return the response
  res.json(updateUser);
});

//DELETE AN USER BY ID
app.delete('/users/:id', async function (req, res) {
  //Get the id
  const id = req.params.id;
  //Call the function to add the new user
  const deleteUser = await deleteUserByID(id);
  //Return the response
  res.json({
    success: true,
    payload: deleteUser,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
