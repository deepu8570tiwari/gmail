import { Box, Checkbox, Typography, styled } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';
import routes from '../routes/routes';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/apiurl';
import { Star } from '@mui/icons-material';
const Wrapper=styled(Box)({
    padding:'0 00 10px',
    background:"#f2f6fc",
    cursor:"pointer",
    display:"flex",
    alignItems:"center",
    '& > div':{
        display:"flex",
        width:"100%",
    '& > p':{
        fontSize: 14
    }
    }
})
const Indicator=styled(Typography)({
    fontSize:'12px ! important',
    background:"#ddd",
    color:'#222',
    padding:'0 4px',
    borderRadius:4,
    marginRight:6
});
const Date= styled(Typography)({
    marginLeft:'auto',
    marginRight:20,
    fontSize:"12px",
    color:"#f56368",


})
export default function EmailData({email,selectedEmails,setRefreshScreen,setSelectedEmails}) {
    const Navigate= useNavigate();
    const toggleStarredServices=useApi(API_URLS.toggleStarredEmail);
    const toggleStarredMails=()=>{
        toggleStarredServices.call({id:email._id, value:!email.starred})
        setRefreshScreen(previousState=>!previousState);
    }
    const onValueChanged=()=>{
        if(selectedEmails.includes(email._id)){
            setSelectedEmails(previousState=>previousState.filter(id=>id !== email._id));
        }else{
            setSelectedEmails(previousState=>[...previousState,email._id])
        }
    }
  return (
    <Wrapper>
      <Checkbox fontSize="small" checked={selectedEmails.includes(email?._id)} onChange={()=>onValueChanged()}/>
      {
        email.starred ? <Star fontSize="small" style={{marginRight:10, color: "yellow"}} onClick={()=>toggleStarredMails()}/>
        :  <StarBorderIcon fontSize="small" style={{marginRight:10}} onClick={()=>toggleStarredMails()}/>
      }
       
        <Box onClick={()=>Navigate(routes.view.path, {state:{email:email}})}>
            <Typography style={{width:200, overflow:"hidden"}}>
                {email?.name}
            </Typography>
            <Indicator>Inbox</Indicator>
            <Typography>{email?.subject}{email?.body && "-"} {email?.body}</Typography>
            <Date>
                {(new window.Date(email?.date)).getDate()}
                {(new window.Date(email?.date)).toLocaleString('default',{month:'long'})}
            </Date>
        </Box>
    </Wrapper>
  )
}
