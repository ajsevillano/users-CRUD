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
  const result = await getUsers();
  res.json({
    success: true,
    payload: result,
  });
});

// GET USER BY ID
app.get(`/users/:id`, async function (req, res) {
  const id = req.params.id;
  const resultbyId = await getUserByID(id);
  res.json({
    success: true,
    payload: resultbyId,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
