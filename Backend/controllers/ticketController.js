import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Event } from "../models/eventSchema.js";
import { Ticket } from "../models/ticketSchema.js";

export const CustomerGetAllTickets = catchAsyncError(async(req, res, next) =>{
    const {role} = req.user;
    if(role === "Event Organizer"){
        return next(new ErrorHandler("You are not allowed to access this resource", 400));
    }
    const {_id} = req.user;
    const ticket = await Ticket.find({"CustomerID.user": _id});
    res.status(200).json({
        success: true,
        ticket
    });
});

export const customerCancelTicket = catchAsyncError(async(req, res, next) => {
    const {role} = req.user;
    if(role === "Event Organizer"){
        return next(new ErrorHandler("You are not allowed to access this resource", 400));
    }
    const {id} = req.params;
    const ticket = await Ticket.findById(id);
    if(!ticket){
        return next(new ErrorHandler("Ticket not Purchased", 400));
    }
    await ticket.deleteOne();
    res.status(200).json({
        success: true,
        message: "Ticket Cancelled Successfully, Amount will be refunded Soon"
    });
});

export const customerPurchaseTicket = catchAsyncError(async(req, res, next) => {
    const {customerID, organizerID, numberOfSeats, amount} = req.body;
    const {role} = req.user;
    if(role === "Event Organizer"){
        return next(new ErrorHandler("You are not allowed to access this resource", 400));
    }
    const event = await Event.findById(organizerID);
    if(!event){
        return next(new ErrorHandler("Event Not Found", 400));
    }
    if(event.availableSeats < numberOfSeats){
        return next(new ErrorHandler("Not Enough Seats Available", 400));
    }
    // Simulation of Payment gateway
    // I assume paayment is successfull
    const paymentResult = {success: true};
    if(!paymentResult){
        return next(new ErrorHandler("Payment is Unsuccessfull. Please try again", 400));
    }

    const ticket = new Ticket({
        customerID: {user: customerID, role: "Customer"},
        organizerID: {user: event.organizerID, role: "Event Oraganizer"},
        numberOfSeats,
        dateOfEvent: event.date,
        amount
    });
    await ticket.save();
    event.availableSeats -= numberOfSeats;
    await event.save();

    res.status(200).json({
        success: true,
        message: "Ticket Purchased Successfully"
    });
});