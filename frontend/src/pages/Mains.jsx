
import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Email from '../components/Email';
export default function Mains() {
    const [openDrawer, setopenDrawer]=useState(true);
    const toggleDrawer=()=>{
        setopenDrawer(prevState=>!prevState);
    }
  return (
    <div>
        <Header toggleDrawer={toggleDrawer}/>
        <Sidebar openDrawer={openDrawer}/>
        <Email openDrawer={openDrawer}/>
    </div>
  )
}
