// ! Copied files from class. Needs updating for project
// Dependencies ===================================================================================

const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Routes =========================================================================================

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// Export =========================================================================================

module.exports = router;
