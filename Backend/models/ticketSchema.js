import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    customerID: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        role: {
            type: String,
            enum: ["Customer"],
            required: true
        }
    },
    organizerID: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        role: {
            type: String,
            enum: ["Event Oraganizer"],
            required: true
        }
    },
    numberOfSeats: {
        type: Number,
        required: true
    },
    dateOfEvent: {
        type: Date,
        required: true,
    },
    expired: {
        type: Boolean,
        required: true,
        default: false,
    },
    amount: {
        type: Number,
        required: true
    }
});

export const Ticket = mongoose.model("Ticket", ticketSchema);