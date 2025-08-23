import { Box, Button, styled, List, ListItem } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import { SidebarConfig } from '../config/SidebarConfig';

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
    cursor:"pointer"  
  },
  '& > ul > li > svg':{
    marginRight:20
  }
})
export default function SidebarContent() {
  return (
    <Container><ButtonStyled variant="contained"><CreateIcon/> Compose </ButtonStyled>
          <List>{
            SidebarConfig.map(data=>(
              <ListItem>
               <data.icons/>{data.title}
              </ListItem>
            ))
          }
          </List>
    </Container>
  )
}
