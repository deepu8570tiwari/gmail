import React from 'react'

export default function Email({openDrawer}) {
  return (
    <div style={openDrawer ? {marginLeft:250,width:'100%'}: {width:'100%'}}>
        hello Email
    </div>
  )
}
