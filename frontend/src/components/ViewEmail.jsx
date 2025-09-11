import { ArrowBack, Delete } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';
import { useOutletContext, useLocation } from 'react-router-dom'
import { emptyImage } from '../constants/constant';
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
  display:"flex"
})
const Wrapper=styled(Box)({
  display:"flex",
  width:"100%",
  "& > p > span":{
    fontSize:12,
    color:"#5ESESE"
  }
})
const Date=styled(Typography)({
  margin:"0 50px 0 auto ! important",
  fontSize:12,
  color:"#5ESESE" 
})
export default function ViewEmail() {
  const {openDrawer} =useOutletContext();
  const {state}=useLocation();
  const {email}=state;
  return (
    <Box style={openDrawer ? {marginLeft:250,width:'100%'}: {width:'100%'}}>
      <IconsWrapper>
          <ArrowBack onClick={()=>window.history.back()} color="action" fontSize='small'></ArrowBack>
          <Delete fontSize='small' color='action' style={{marginLeft:40}}/>
      </IconsWrapper>
      <Subject>
          {email.subject} <Indicator component="span">Inbox</Indicator>
      </Subject>
      <Containner>
      <img src={emptyImage} alt="dp"/>
        <Box style={{width:'calc(100%-260px)'}}>
            <Wrapper>
              <Typography>{email.name}
                <Box component="span"> &#60;{email.to}&#62;</Box>
              </Typography>
              <Date>
                {(new window.Date(email?.date)).getDate()} &nbsp;
                {(new window.Date(email?.date)).toLocaleString('default',{month:'long'}) } &nbsp;
                {(new window.Date(email?.date)).getFullYear()} &nbsp;
              </Date>
            </Wrapper>
            <Typography>
              {email.body}
            </Typography>
        </Box>
      </Containner>
    </Box>
  )
}
