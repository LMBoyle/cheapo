// ! Copied files from class. Needs updating for project
// Dependencies ===================================================================================

const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./userRoutes")

// Routes =========================================================================================

// Book routes
router.use("/books", bookRoutes);

// User Routes
router.use('/v1/users', userRoutes);

// Export =========================================================================================

module.exports = router;
