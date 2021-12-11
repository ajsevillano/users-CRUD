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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
