import { Box, Dialog, InputBase, TextField, Typography, styled } from '@mui/material'
import { Close, DeleteOutline } from '@mui/icons-material'

const MainHeader=styled(Box)({
  display:"flex",
  justifyContent:"space-between",
  padding:"10px 15px",
  background:"#f2f6fc",
  "& >p":{
    fontSize:14,
    fontWeight:500
  }
})
const ReceipientWrapper=styled(Box)({
  display:"flex",
  flexDirection:"column",
  padding:'0px 15px',
   '& > div':{
    fontSize:14,
    borderBottom:'1px solid #f5f5f5',
    marginTop:10
  }
})
const Footer=styled(Box)({
  display:"flex",
  justifyContent:"space-between",
  padding:'10px 15px'
})
const SendButton=styled(Box)({
  background:'#0B57D0',
  color:'#fff',
  fontWeight:500,
  textTransform:"none",
  borderRadius:18,
  width:100,
  textAlign:"center"
})
export default function ComposeMail({openDialog, setOpenDialog}) {
  const config={
    Host : "smtp.elasticemail.com",
    Username : "deeputiwari@yopmail.com",
    Password : "2D2D0C4A92F5E9244652013BA8497870A430",
    Port: 587,
  }
  const closeComposeMail=()=>{
    setOpenDialog(false);
  }
  const sendEmail=()=>{
    if(window.Email){
      window.Email.send({
          ...config,
          To : 'deeputiwari@yopmail.com',
          From : "deeputiwari@yopmail.com",
          Subject : "This is the subject",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
  }
    setOpenDialog(false);
  }
  return (
    <div>
      <Dialog
      open={openDialog}
      slotProps={{
         paper: {
          sx: {
            borderRadius: "16px",
            padding: "8px",
            width: "800px",     // set fixed width
            maxWidth: "none",   // prevents MUI from restricting width
          },
          elevation: 5, // works same as before
        },
      }}
      >
        <MainHeader>
          <Typography>New Message</Typography>
            <Close fontSize="small" onClick={()=>closeComposeMail()}/>
        </MainHeader>
        <ReceipientWrapper>
          <InputBase placeholder='Enter receipient'/>
          <InputBase placeholder='Enter subject'/>
        </ReceipientWrapper>
        <TextField multiline rows={20} sx={{'& .MuiOutlinedInput-notchedOutline': {border:"none"}}}/>
        <Footer>
          <SendButton onClick={()=>sendEmail()}>Send</SendButton>
          <DeleteOutline onClick={()=> setOpenDialog(false)}></DeleteOutline>
        </Footer>
      </Dialog>
    </div>
  )
}
