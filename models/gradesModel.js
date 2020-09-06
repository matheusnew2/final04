import mongoose from "mongoose";
const grades = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    value : {
        type : Number,
        required : true
    },
    lastModified : {
        type : Date
    }
});
const gradesModel = mongoose.model("grades",grades);
export {gradesModel};