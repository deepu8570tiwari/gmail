import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { API_URLS } from '../services/apiurl';
import useApi from '../hooks/useApi';
export default function Email() {
  const {openDrawer}=useOutletContext();
  const {type}=useParams();
  const getEmailsService=useApi(API_URLS.getEmailFromType)
  useEffect(()=>{
    getEmailsService.call({}, type);
  },[type])
  return (
    <div style={openDrawer ? {marginLeft:250,width:'100%'}: {width:'100%'}}>
        hello Email
    </div>
  )
}
