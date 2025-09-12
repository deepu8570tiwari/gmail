import { ArrowBack, Delete } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';
import { useOutletContext, useLocation } from 'react-router-dom'
import { emptyImage } from '../constants/constant';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/apiurl';
const IconsWrapper=styled(Box)({
  padding:15
})
const Subject=styled(Typography)({
  fontSize:22,
  margin:"10px 0 20px 75px"
})
const Indicator=styled(Box)({
  fontSize:12,
  background:"#ddd",
  color:"#222",
  padding:"2px 4px",
  marginLeft: 6,
  borderRadius:4,
  alignSelf:"center"
})
const Containner=styled(Box)({
  marginLeft:15,
  width:'100%',
  '& > div':{
    display:'flex',
    '& > p > span':{
      fontSize:12,
      color:"#5ESESE"
    }
  }
})
const Image=styled('img')({
  borderRadius:'50%',
  height:"40px",
  width:"40px",
  margin:"5px 10px 0 10px",
  background:"#cccccc"
})
const Date=styled(Box)({
  margin:"0 50px 0 auto ! important",
  fontSize:12,
  color:"#5ESESE",
  
})
export default function ViewEmail() {
  const {openDrawer} =useOutletContext();
  const {state}=useLocation();
  const {email}=state;
  const moveEmailsToBinServices=useApi(API_URLS.moveEmailsToBin);
  
  const deleteEmail=()=>{
    moveEmailsToBinServices.call([email._id]);
    window.history.back();
  }
  return (
    <Box style={openDrawer ? {marginLeft:250}: {width:'100%'}}>
      <IconsWrapper>
          <ArrowBack onClick={()=>window.history.back()} color="action" fontSize='small'></ArrowBack>
          <Delete fontSize='small' color='action' style={{marginLeft:40}} onClick={()=>deleteEmail()}/>
      </IconsWrapper>
      <Subject>
          {email.subject} <Indicator component="span">Inbox</Indicator>
      </Subject>
      <Box style={{display:"flex"}}>
          <Image src={emptyImage} alt="dp"/>
        <Containner style={{width:'100%'}}>
            <Box>
              <Typography style={{marginTop: "10px"}}>{email.name}
                <Box component="span"> &#60;{email.to}&#62;</Box>
              </Typography>
              <Date>
                {(new window.Date(email?.date)).getDate()} &nbsp;
                {(new window.Date(email?.date)).toLocaleString('default',{month:'long'}) } &nbsp;
                {(new window.Date(email?.date)).getFullYear()} &nbsp;
              </Date>
            </Box>
            <Typography sttyle={{marginTop:20}}>
              {email.body}
            </Typography>
        </Containner>
      </Box>
    </Box>
  )
}
