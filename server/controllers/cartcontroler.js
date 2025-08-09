const Cart = require("../models/Cart");
import Order from "../models/Order.js";

export const addToCart = async (req, res) => {

    const { itemId, quantity, bookingDate, bookingTime, notes } = req.body;

    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = await Cart.create({
        userId: req.user.id,
        items: [{ itemId, quantity, bookingDate, bookingTime, notes }]
      });
    } else {
      cart.items.push({ itemId, quantity, bookingDate, bookingTime, notes });
      await cart.save();
    }

    res.status(201).json({ success: true, cart });
  } 


export const getCart = async (req, res) => {
  
    const cart = await Cart.findOne({ userId: req.user.id }).populate("items.itemId");
    res.json({ success: true, cart });
  
};


export const placeOrder = async (req, res) => {
  
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty" });
    }

    const newOrder = await Order.create({
      userId: req.user.id,
      items: cart.items,
      status: "pending"
    });

    // Clear cart after placing order
    await Cart.findOneAndDelete({ userId: req.user.id });

    res.status(201).json({ success: true, order: newOrder });
  
};
