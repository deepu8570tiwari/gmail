import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { API_URLS } from '../services/apiurl';
import useApi from '../hooks/useApi';
import {Box, Checkbox, List, ListItem} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EmailData from './EmailData';
import NoEmail from './common/NoEmail';
import { EMPTY_TABS } from '../constants/constant';

export default function Email() {
  const [selectedEmails, setSelectedEmails]=useState([]);
  const [refreshscreen, setRefreshScreen]=useState(false);
  const {openDrawer}=useOutletContext();
  const {type}=useParams();
  const getEmailsService=useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService=useApi(API_URLS.moveEmailsToBin);
  const deleteEmailService=useApi(API_URLS.deleteEmail);
  
useEffect(() => {
  getEmailsService.call({}, type);
}, [type, refreshscreen]);


  const selectedAllEmails=(e)=>{
    if(e.target.checked){
      const emails=getEmailsService?.response?.map(email=>email._id);
      setSelectedEmails(emails)
    }else{
      setSelectedEmails([])
    }
  }
  const deleteSelectedEmails=(e)=>{
    if(type==="bin"){
      deleteEmailService.call(selectedEmails)
    }else{
      moveEmailsToBinService.call(selectedEmails);
      setRefreshScreen(prevState=>!prevState);
    }
  }
  return (
    <Box style={openDrawer ? {marginLeft:250,width:'calc(100%-250px)'}: {width:'100%'}}>
        <Box style={{padding:"20px 10px 0px 10px", display:"flex", alignItems:"center"}}>
          <Checkbox size='small' onChange={(e)=>selectedAllEmails(e)}/>
          <DeleteOutlineIcon onClick={(e)=> deleteSelectedEmails(e)}/>
        </Box>
        <List>
          {
            getEmailsService?.response?.map(email=>(
                <EmailData 
                  key={email._id} 
                  selectedEmails={selectedEmails} 
                  email={email}
                  setRefreshScreen={setRefreshScreen}
                  setSelectedEmails={setSelectedEmails}
                />
            ))
          }
        </List>
        {
          getEmailsService?.response?.length===0 && <NoEmail message={EMPTY_TABS[type]}/>
        }
    </Box>
  )
}
