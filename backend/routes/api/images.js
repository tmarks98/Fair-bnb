const { requireAuth, throwIfNull, checkAuthorization } = require("../../utils/auth");
const {
  Spot,
  Review,
  SpotImage,
  ReviewImage,
} = require("../../db/models");
const router = require("express").Router();

router.delete("/spot-images/:imageId", requireAuth, async (req, res) => {
  const image = await SpotImage.findByPk(req.params.imageId);
  throwIfNull(image, "Spot Image");
  const spot = await Spot.findByPk(image.spotId);
  checkAuthorization(spot.ownerId === req.user.id) 
  await image.destroy()
  res.json({message: "Successfully deleted"})
});

router.delete("/review-images/:imageId", requireAuth, async (req, res) => {
    const image = await ReviewImage.findByPk(req.params.imageId);
    throwIfNull(image, "Review Image");
    const review = await Review.findByPk(image.reviewId);
    checkAuthorization(review.userId === req.user.id) 
    await image.destroy()
    res.json({message: "Successfully deleted"})
  });

module.exports = router;
