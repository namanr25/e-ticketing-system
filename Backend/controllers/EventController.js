import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Event } from "../models/eventSchema.js";

export const getAllEvents = catchAsyncError(async(req, res, next) => {
    const events = await Event.find({ expired: false });
    res.status(200).json({
        success: true,
        events,
    });
});

export const PostEvent = catchAsyncError(async(req, res, next) => {
    const { role }  = req.user;
    if(role === "Customer"){
        return next(new ErrorHandler("Customers are not allowed to access this resource", 400));
    }
    const { title, description, city, location, ticketAmount, expired, eventDate, availableSeats } = req.body;

    if(!title || !description || !city || !location || !ticketAmount || !eventDate || !availableSeats){
        return next(new ErrorHandler("Please provide full Event Details", 400));
    }
    if(!req.file){
        return next(new ErrorHandler("Please provide an Event Photo", 400));
    }

    const result = await cloudinary.v2.uploader.upload(req.file.path);
    const postedBy = req.user._id;
    const event = await Event.create({
        title,
        description,
        city,
        location,
        ticketAmount,
        expired,
        postedBy,
        eventDate,
        availableSeats,
        eventPhoto: result.secure_url
    })
    res.status(200).json({
        success: true,
        message: "Event Posted Successfully",
        event
    });
});

export const getMyEvents = catchAsyncError(async(req, res, next) => {
    const {role} = req.user;
    if(role === "Customer"){
        return next(new ErrorHandler("Customers are not allowed to access this resource", 400));
    }
    const myEvents = await Event.find({postedBy: req.user._id});
    res.status(200).json({
        success: true,
        myEvents
    });
});

export const updateEvent = catchAsyncError(async(req, res, next) =>{
    const {role} = req.user;
    if(role === "Customer"){
        return next(new ErrorHandler("Customers are not allowed to access this resource", 400));
    }
    const {id} = req.params;
    let event = await Event.findById(id);
    if(!event){
        return next(new ErrorHandler("Event Not Found", 400));
    }
    event = await Event.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        event,
        message: "Event Updated Successfully"
    });
});

export const deleteEvent = catchAsyncError(async(req, res, next) => {
    const {role} = req.user;
    if(role === "Customer"){
        return next(new ErrorHandler("You are not allowed to access this resource", 400));
    }
    const {id} = req.params;
    let event = await Event.findById(id);
    if(!event){
        return next(new ErrorHandler("Event Not Found", 400));
    }
    await event.deleteOne();
    res.status(200).json({
        success: true,
        message: "Event Deleted Successfully",
    });
});