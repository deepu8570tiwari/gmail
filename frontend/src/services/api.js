import axios from 'axios'
import useApi from '../hooks/useApi';

const API_URL="http://localhost:8000"
const API_GMAIL=async()=>{
    return await axios({
        method:'post',
        url:`${API_URL}/endpoints`,
        data:{

        }
    })
}
export default API_GMAIL;