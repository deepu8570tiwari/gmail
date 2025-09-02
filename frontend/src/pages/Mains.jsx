
import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
export default function Mains() {
    const [openDrawer, setopenDrawer]=useState(true);
    const toggleDrawer=()=>{
        setopenDrawer(prevState=>!prevState);
    }
  return (
    <div>
        <Header toggleDrawer={toggleDrawer}/>
        <Sidebar openDrawer={openDrawer}/>
        <div> Display Email</div>
    </div>
  )
}
