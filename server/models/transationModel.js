import mongoose from "mongoose";

const transationSchema = new mongoose.Schema({
    userId:{type:String, required: true},
    plan:{type:String, required: true},
    amount:{type:Number, required: true},
    credits:{type:Number, required: true},
    payment:{type:Boolean, default: false},
})

const transationModel = mongoose.models.transation || mongoose.model("transation",transationSchema)

export default transationModel;