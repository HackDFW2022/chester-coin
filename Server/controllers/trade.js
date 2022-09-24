import express from 'express';
import mongoose from 'mongoose';
import loginMessage from '../models/loginMessage.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();
// do the math on the front end
export const posttrade = asyncHandler(async (req, res) => { 
    loginMessage.findOneAndUpdate({"cryptoaccount": req.body.username}, {$inc : {'cryptoamount' : req.body.cost}}, {new:true}).exec()
})