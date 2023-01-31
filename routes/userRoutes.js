const {
  home,
  createTodo,
  getTodo,
  editTodo,
  deleteTodo,
  search
} = require("../controllers/userController");

const express = require("express");

const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.put("/editTodo/:id", editTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/search/:val", search)

module.exports = router;
