import express from "express";
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";
const PORT = 3000;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
