import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
    name:{type:String, required: [true, 'Please enter your name']},
    cryptoaccount:{type: String},
    cryptoamount:{type: Number},
},{collection:"userData"})

var loginMessage = mongoose.model('loginMessage', loginSchema);

export default loginMessage;