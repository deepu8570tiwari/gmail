import { Box, Checkbox, Typography, styled } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';
import routes from '../routes/routes';
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
export default function EmailData({email,selectedEmails}) {
    const Navigate= useNavigate();
  return (
    <Wrapper>
      <Checkbox fontSize="small" checked={selectedEmails.includes(email?._id)}/>
      <StarBorderIcon fontSize="small" style={{marginRight:10}}/>
        <Box onClick={()=>Navigate(routes.view.path, {state:{email:email}})}>
            <Typography style={{width:200, overflow:"hidden"}}>
                {email?.name}
            </Typography>
            <Indicator>Inbox</Indicator>
            <Typography>{email?.subject}{email?.body && "-"} {email?.body}</Typography>
            <Typography>
                {(new window.Date(email?.date)).getDate()}
                {(new window.Date(email?.date)).toLocaleString('default',{month:'long'})}
            </Typography>
        </Box>
    </Wrapper>
  )
}
