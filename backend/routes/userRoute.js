import express from 'express';
import { create, deleteUser, getAll, getId, update } from '../controllers/userController.js';

const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
route.get("/users/:id", getId);
route.put("/updateId/:id", update);
route.delete("/deleteId/:id", deleteUser);

export default route;
