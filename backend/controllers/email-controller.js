import { request } from "express";
import Email from "../model/email.js";
export const saveEmailController=(request, response)=>{
    try {
        const email=new Email(request.body);
        email.save();
        response.status(200).json("Email Saved Successfully");
    } catch (error) {
     response.status(500).json(error.message);   
    }
}
export const getEmailType=async (request, response)=>{
    try {
        let email;
        if(request.params.type==="bin"){
            email=await Email.find({bin:true});
        }
        else if(request.params.type==="allmail"){
            email=await Email.find({});
        }
        else if(request.params.type==="starred"){
            email=await Email.find({starred:true,bin:false});
        }
        else{
            email=await Email.find({
                type:request.params.type
            })
        }
        return response.status(200).json(email);
    } catch (error) {
     response.status(500).json(error.message);   
    }
}
export const moveEmailToBin=async(request,response)=>{
    try {
        await Email.updateMany({_id:{$in:request.body}}, {$set: {bin:true,starred:false,type:''}})
        return response.status(200).json('email generate successfully');
    } catch (error) {
        response.status(500).json(error.message);   
    }
}
export const toggleStarredEvent=async(request, response)=>{
    try {
        await Email.updateOne({_id:request.body.id}, {$set: {starred:request.body.value}});
        return response.status(200).json("email is starred to mark");
    } catch (error) {
        response.status(500).json(error.message);   
    }
}
export const deleteEmail=async(request, response)=>{
    try {
        await Email.deleteMany({_id : { $in : request.body}});
        return response.status(200).json('email deleted Successfully');
    } catch (error) {
        response.status(500).json(error.message);   
    }
}