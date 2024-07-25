import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[3,"first name must contain at least 3 characters!"],
        maxLength:[30,"First name cannot exceed 30 character "]
    },
    lastName: {
        type: String,
        required: true,
        minLength:[3,"Last name must contain at least 3 characters!"],
        maxLength:[30,"Last name cannot exceed 30 character "]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail,"Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength:[10,"Last name must contain at least 10 digits!"],
        maxLength:[10,"Last name cannot exceed 10 digits "]
    },
    time: {
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },

});

export const Reservation = mongoose.model("Reservation",reservationSchema);