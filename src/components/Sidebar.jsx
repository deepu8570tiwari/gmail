import React from 'react'
import { Drawer,styled } from '@mui/material'
import SidebarContent from './SidebarContent'

export default function Sidebar() {
  return (
    <Drawer 
      anchor="left"
      open={true}
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
