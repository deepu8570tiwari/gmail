
import { Suspense, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';
import { Box } from '@mui/material';
export default function Mains() {
    const [openDrawer, setopenDrawer]=useState(true);
    const toggleDrawer=()=>{
        setopenDrawer(prevState=>!prevState);
    }
  return (
    <>
        <Header toggleDrawer={toggleDrawer}/>
        <Box>
          <Sidebar openDrawer={openDrawer}/>
          <Suspense fallback={<SuspenseLoader/>}>
            <Outlet context={{openDrawer}}/>
          </Suspense>
        </Box>
    </>
  )
}
