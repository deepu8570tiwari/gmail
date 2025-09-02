import React from 'react'
import { AppBar, InputBase, Toolbar, styled, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import { gmaillogo } from '../constants/constant';

const AppStyledAppbar=styled(AppBar)({
    background:"#F5F5F5",
    boxShadow:"none"
})
const SearchWrapper=styled(Box)({
  background:"#EAF1FB",
  marginLeft:80,
  borderRadius:8,
  minWidth:690,
  maxWidth:720,
  height:40,
  display:'flex',
  alignItems:"center",
  justifyContent:"space-between",
  padding:'0 20px',
  '& > div':{
    width:'100%',
    padding:'0 10px'
  }
})
const Optionwrapper=styled(Box)({
  width:"100%",
  display:'flex',
  justifyContent:'end',
  '& > svg':{
    marginLeft:20
  }
})
export default function Header({toggleDrawer}) {
  return (
    <AppStyledAppbar position='static'>
        <Toolbar>
            <MenuIcon color="action" onClick={toggleDrawer}/>
            <img src={gmaillogo} alt="logo" style={{width:100, marginLeft:15}}/>
            <SearchWrapper>
                <SearchIcon color="action"/>
                <InputBase placeholder='search mail'/>
                <TuneIcon color="action"/>
            </SearchWrapper>
            <Optionwrapper>
              <HelpOutlineOutlinedIcon color="action"/>
              <SettingsOutlinedIcon color="action"/>
              <AppsOutlinedIcon color="action"/>
              <PermIdentityOutlinedIcon color="action"/>
            </Optionwrapper>
        </Toolbar>
        
    </AppStyledAppbar>
  )
}
