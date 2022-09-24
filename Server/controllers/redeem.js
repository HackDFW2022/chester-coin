import express from 'express';
import mongoose from 'mongoose';
import loginMessage from '../models/loginMessage.js';
import asyncHandler from 'express-async-handler';
import blockchain from '../models/blockchain.js';

const router = express.Router();

export const postredeem = asyncHandler(async (req, res) => { 
    console.log(req.body.redeemCode)
    if(blockchain.findByIdAndDelete(req.body.redeemCode).exec())
    {
        loginMessage.findOneAndUpdate({"cryptoaccount": req.body.username}, {$inc : {'cryptoamount' : 1}}, {new:true}).exec()
        res.send(true)
    }
    else{res.send(false)}
})