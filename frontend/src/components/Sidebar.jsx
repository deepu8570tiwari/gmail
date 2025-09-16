import { Drawer } from '@mui/material'
import SidebarContent from './SidebarContent'

export default function Sidebar({openDrawer}) {
  return (
    <Drawer 
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{
        keepMounted:true
      }}
      variant='persistent'
      sx={
        {
          '& .MuiDrawer-paper':{
            marginTop:'64px',
            width:250,
            background:'#f5f5f5',
            borderRight:"none",
            height:'calc(100vh-64px)'
          }
        }
      }
      >
        <SidebarContent/>
    </Drawer>
  )
}
