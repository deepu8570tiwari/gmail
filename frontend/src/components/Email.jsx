import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { API_URLS } from '../services/apiurl';
import useApi from '../hooks/useApi';
import {Box, Checkbox, List, ListItem} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EmailData from './EmailData';

export default function Email() {
  const {openDrawer}=useOutletContext();
  const {type}=useParams();
  const getEmailsService=useApi(API_URLS.getEmailFromType)
  console.log(getEmailsService.response);
  
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type]);
  return (
    <Box style={openDrawer ? {marginLeft:250,width:'calc(100%-250px)'}: {width:'100%'}}>
        <Box style={{padding:"20px 10px 0px 10px", display:"flex", alignItems:"center"}}>
          <Checkbox size='small'/>
          <DeleteOutlineIcon />
        </Box>
        <List>
          {
            getEmailsService?.response?.map(email=>(
                <EmailData key={email._id}/>
            ))
          }
        </List>
    </Box>
  )
}
