import { useState } from "react";
import API from "../services/api";
 const useApi=()=>{
    const [response, setResponse]=useState(null);
    const [error, setError]=useState("");
    const [isloader, setIsloader]=useState(false)
    const call=async()=>{
        setResponse(null);
        setError("");
        setIsloader(true);
        try {
            let res=await API();
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