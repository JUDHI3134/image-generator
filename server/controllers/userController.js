import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import razorpay from "razorpay"
import transationModel from "../models/transationModel.js";


//register
const registerUser = async (req,res)=>{
    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            return res.json({success: false, message: "All fileds are required"})
        }

        const exist = await userModel.findOne({email})

        if(exist){
            return res.json({success: false, message:"Email Already exist"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password:hashedPassword
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id: user._id},process.env.JWT_SECRET)

        res.json({success: true, token, user: {name: user.name}})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

//Login User

const loginUser = async (req,res) =>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success: false, message:"User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({success: false, message:"Wrong Password"})
        }else{
            const token = jwt.sign({id: user._id},process.env.JWT_SECRET)

        res.json({success: true, token, user: {name: user.name}})
        }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

//user credits

const userCredits = async (req,res)=>{
    try {
        const {userId} = req.body;
        const user = await userModel.findById(userId);

        res.json({success: true, credits: user.creditBalance, user:{name: user.name}})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

//razorpay payment gateway
const razorpayInstance = new razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const paymentRazorpay = async (req,res) =>{
    try {
       const {userId, planId} = req.body
       
       const userData = await userModel.findById(userId)

       if(!userId || !planId){
        return res.json({success: false, message: "Missing Details"})
       }

       let credits, plan, amount, date

       switch (planId) {
        case Basic:
            plan =  'Basic'
            credits =  100
            amount = 10
            break;
        case Advanced:
            plan =  'Advanced'
            credits =  500
            amount = 50
            break;
        case Business:
            plan =  'Business'
            credits =  5000
            amount = 250
            break;
       
        default:
            return res.json({success: false, message : "Plan Not Found"})
       }

       date = new Date();

       const transationData = {
        userId, plan,credits,amount, date
       }

       const newTransation = await transationModel.create(transationData)

       const options = {
        amount: amount*100,
        currenct: process.env.CURRENCY,
        receipt: newTransation._id
       }

       await razorpayInstance.orders.create(options, (error, order)=>{
        if(error){
            console.log(error);
            return res.json({success: false, message: error})
        }
        return res.json({success: true, order})
       }) 

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export {registerUser, loginUser, userCredits,paymentRazorpay}