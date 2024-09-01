import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Name must be greater than 3 Characters"],
        maxLength: [30, "Name must be less than 30 Characters"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type : String,
        required: [true, "Please provide password"],
        minLength: [8, "Password must contain at least 8 Characters"],
        maxLength: [32, "Password must be at most 32 Characters"],
        select: false
    },
    role: {
        type : String,
        required: [true, "Please provide role"],
        enum: ["Event Oraganizer", "Customer"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

export const User = mongoose.model("User", userSchema);