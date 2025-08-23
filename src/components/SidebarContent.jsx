import { Box, Button, styled } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import React from 'react'

const ButtonStyled=styled(Button)({
    background:"#c2e7ff",
    color:'#001d35',
    borderRadius:16,
    minWidth:140,
    textTransform:"none"
})
export default function SidebarContent() {
  return (
    <Box>
        <Box><ButtonStyled variant="contained">Contained <CreateIcon/></ButtonStyled></Box>
        <Box></Box>
    </Box>
  )
}
