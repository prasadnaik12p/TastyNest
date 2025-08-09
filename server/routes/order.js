import express from "express";


const ordercontroller = require("../controllers/ordercontroller.js");
const { isLoggedIn, isAdmin } = require("../middlewares/User.js");
const router = express.Router();

router.get("/my-orders", isLoggedIn, ordercontroller.getMyOrders);
router.get("/", isLoggedIn, isAdmin, ordercontroller.getAllOrders);
router.put("/:id/status", isLoggedIn, isAdmin, ordercontroller.updateOrderStatus);

export default router;
