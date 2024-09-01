import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide Event Title"],
        minLength: [3, "Event Title contain atleast 3 characters"],
        maxLength: [50, "Event Title cannot exceed 50 characters"],
    },
    description: {
        type: String,
        required: [true, "Please provide Event Description"],
        minLength: [3, "Event Description contain atleast 3 characters"],
        maxLength: [200, "Event Description cannot exceed 50 characters"],
    },
    city: {
        type: String,
        required: [true, "Event City is required"],
    },
    location: {
        type: String,
        required: [true, "Event Location is required"],
    },
    ticketAmount: {
        type: Number,
        required: [true, "Please provide Amount of Ticket"],
    },
    expired: {
        type: Boolean,
        default: false,
    },
    eventPostedOn: {
        type: Date,
        default: Date.now,
    }, 
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    availableSeats: {
        type: Number,
        required: true,
    },
    eventPhoto: {
        type: String,
        required: [true, "Please provide a photo for the event"],
    }
});

export const Event = mongoose.model("Event", EventSchema);