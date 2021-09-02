const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.postUser);
router.get("/login", usersController.login);

module.exports = router;
