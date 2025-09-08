import { useState } from "react";
import API from "../services/api";
 const useApi=(urlObject)=>{
    const [response, setResponse]=useState(null);
    const [error, setError]=useState("");
    const [isloader, setIsloader]=useState(false)
    const call=async(payload, type="")=>{
        setResponse(null);
        setError("");
        setIsloader(true);
        try {
            let res=await API(urlObject, payload, type);
            setResponse(res.data);
        } catch (error) {
            setError(error.message);
        }
        finally{
            setIsloader(false);
        }
    }
    return { call, response, error, isloader}
 }
 export default useApi;