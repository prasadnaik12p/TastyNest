const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
      quantity: { type: Number, default: 1 },
      bookingDate: { type: Date, required: true },
      bookingTime: { type: String, required: true },
      notes: { type: String }
    }
  ],
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending"
  }
}, { timestamps: true });


module.exports= mongoose.model("Order", orderSchema);
