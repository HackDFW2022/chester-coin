import express from 'express';
import mongoose from 'mongoose';
import loginMessage from '../models/loginMessage.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

export const postlogin = asyncHandler(async (req, res) => { 
  let message = await loginMessage.findOne({'cryptoaccount':req.body.username})
  console.log(message)
  res.send(message)
})