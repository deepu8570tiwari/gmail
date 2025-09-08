import { Box, Button, styled, List, ListItem } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import { SidebarConfig } from '../config/SidebarConfig';
import ComposeMail from '../components/ComposeMail';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import routes from '../routes/routes';

const ButtonStyled=styled(Button)({
    background:"#c2e7ff",
    color:'#001d35',
    padding:15,
    borderRadius:16,
    minWidth:140,
    textTransform:"none"
})
const Container=styled(Box)({
  padding:8,
  '& > ul':{
    padding: "10px 0 0 5px",
    fontSize:14,
    fontWeight:500,
    cursor:"pointer",
    "& > a" :{
      textDecoration:"none",
      color: 'inherit'
    }
  },
  '& > ul > a > li > svg':{
    marginRight:20
  }
})
export default function SidebarContent() {

  const [openDialog,setOpenDialog]=useState(false);
  const {type}=useParams();
  const onComposedClick=()=>{
    setOpenDialog(true);
  }
  return (
    <Container><ButtonStyled onClick={()=>onComposedClick()} variant="contained"><CreateIcon/> Compose </ButtonStyled>
          <List>{
            SidebarConfig.map(data=>(
              <NavLink key={data.name} to={`${routes.email.path}/${data.name}`}>
                <ListItem style={type===data.name.toLowerCase()?{backgroundColor:'#d3e3fd', borderRadius:'0 16px 16px 0'}:{}}>
                <data.icons/>{data.title}
                </ListItem>
              </NavLink>
            ))
          }
          </List>
          <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </Container>
  )
}
