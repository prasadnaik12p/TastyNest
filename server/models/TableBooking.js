const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableBookingSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User", // Reference to User model
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type:  Date, 
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled"],
        default: "Pending"
    },
    numberOfGuests: {
        type: Number,
        required: true
    },
    
}, { timestamps: true });

module.exports = mongoose.model("TableBooking", tableBookingSchema);
