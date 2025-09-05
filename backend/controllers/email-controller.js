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