
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: true },
      quantity: { type: Number, default: 1 },
      bookingDate: { type: Date, required: true },
      bookingTime: { type: String, required: true },
      notes: { type: String }
    }
  ]
}, { timestamps: true });

export default mongoose.model("Cart", cartSchema);
