const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const UsersValidatedController = require("../controllers/UsersValidatedController");
const usersController = new UsersController();
const usersRouter = Router();
const usersValidatedController = new UsersValidatedController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


usersRouter.post("/", usersController.create);
usersRouter.get(
  "/validated",
  ensureAuthenticated,
  usersValidatedController.index
);

module.exports = usersRouter;
