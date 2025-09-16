import { request } from "express";
import nodemailer  from 'nodemailer';

import Email from "../model/email.js";
import dotenv from "dotenv";
dotenv.config();

export const saveEmailController=async (request, response)=>{
     try {
    const { to, subject, body } = request.body;

    // 1️⃣ Send Email via Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODE_APP_EMAIL_USER, // Gmail from .env
        pass: process.env.NODE_APP_EMAIL_PASS, // App password from .env
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      text: body,
    });

    // 2️⃣ Save email data to DB
    const email = new Email({
      ...request.body,
      date: new Date(), // add timestamp
    });
    await email.save();

    response.status(200).json("Email sent and saved successfully");
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: error.message });
  }
}
export const getEmailType=async (request, response)=>{
    try {
        const sortByDateDesc = { date: -1 };
        let email;
         if (request.params.type === "bin") {
            email = await Email.find({ bin: true }).sort(sortByDateDesc);
        } else if (request.params.type === "allmail") {
            email = await Email.find({}).sort(sortByDateDesc);
        }
        else if (request.params.type === "drafts") {
            email = await Email.find({type:"draft"}).sort(sortByDateDesc);
        } else if (request.params.type === "starred") {
            email = await Email.find({ starred: true, bin: false }).sort(sortByDateDesc);
        } else {
            email = await Email.find({ type: request.params.type }).sort(sortByDateDesc);
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