import express from "express";
import { getAllUsers } from "../controller/user.js";
import { createUser } from "../controller/user.js";
import { searchUser } from "../controller/user.js";
import { uptadeUser } from "../controller/user.js";
import { deleteUser } from "../controller/user.js";

const routerTwo = express.Router();

routerTwo.get("/users", getAllUsers);
routerTwo.route("/users").post(createUser);
routerTwo.route("/users/:id").get(searchUser);
routerTwo.route("/users/:id").put(uptadeUser);
routerTwo.route("/users/:id").delete(deleteUser);

export default routerTwo;
