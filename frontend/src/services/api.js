import axios from 'axios'
import useApi from '../hooks/useApi';

const API_URL="http://localhost:8000"
const API_GMAIL=async(urlObject, payload)=>{
    return await axios({
        method:urlObject.method,
        url:`${API_URL}/${urlObject.endpoint}`,
        data:payload
    })
}
export default API_GMAIL;