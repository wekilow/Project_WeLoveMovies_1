
const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const theatersRouter = require("../theaters/theaters.router");

router.route("/").get(controller.list).all(methodNotAllowed); // /movies
router.route("/:movieId").get(controller.read).all(methodNotAllowed);

router
  .route("/:movieId/reviews")
  .get(controller.listReviewsByMovieId)
  .all(methodNotAllowed);
// GET `/movies/:movieId/reviews` returns the reviews, with critic property, for the specified movie_id

router.use("/:movieId/theaters", theatersRouter);
// theaters returns the theaters for the specified movie_id
// /movies/:movieId/reviews` returns the reviews, with critic property, for the specified movie_id

module.exports = router;