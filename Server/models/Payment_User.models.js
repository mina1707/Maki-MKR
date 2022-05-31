const mongoose = require('mongoose');

const Payment_UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required."],
    },

    address : {
        type: String,
        required: [true, "Address is required."],
    },

    city: {
        type: String,
        required: [true, "City is requires."]
    },


    state:{
        type: String,
        required: [true, "State is required."]
    },

    zipCode: {
        type: String,
        required: ["Zip Code is required."]
    },

    cardNumber: {
        type: Number,
        required:[true, "Card number is required to proceed with the payment."],
        max:[16, "Card number should be 16 digits."],
        
    },

    cvv: {
        type: Number,
        required:[true, "cvv digits are required to proceed with the PaymentMethodChangeEvent."],
        max:[3, "digit should be 3 characters"],
        

    }


}, {timestamps:true})


const Payment_User = mongoose.model("Payment_User", Payment_UserSchema);
module.exports = Payment_User