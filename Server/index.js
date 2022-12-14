import express, { request } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import loginRoutes from './routes/login.js'
import SignInRoutes from './routes/SignIn.js'
import redeemRoutes from './routes/redeem.js'
import tradeRoutes from './routes/trade.js'

const app = express();

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use(cors()) 
// routes must be under the parser otherwise it gets data that is un-parsed

app.all("/", function(req, res, next) {
    req.header("Origin", "http://localhost:3000/");
    return next();
});
// routes under here for CORS
app.use('/login', loginRoutes)
app.use('/validateSignIn', SignInRoutes)
app.use('/redeem', redeemRoutes)
app.use('/trade', tradeRoutes)

const CONNECTION_URL = "mongodb+srv://chester:briliantidea123@cluster0.dpwfs5r.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL).then(app.listen(PORT, ()=>{console.log('Server running on Port ' + PORT)})).catch((error)=>console.log(error.message))
