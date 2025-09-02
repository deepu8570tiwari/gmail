import React from 'react'
import { MailOutline, Photo } from '@mui/icons-material'
import { StarOutline } from '@mui/icons-material'
import { SendOutlined } from '@mui/icons-material'
import { InsertDriveFileOutlined } from '@mui/icons-material'
import { DeleteOutline } from '@mui/icons-material'

export const SidebarConfig= [
    {
        name:"inbox",
        title:"inbox",
        icons:Photo
    },
    {
        name:"starred",
        title:"starred",
        icons:StarOutline
    },
    {
        name:"sent",
        title:"sent",
        icons:SendOutlined
    },
    {
        name:"drafts",
        title:"drafts",
        icons:InsertDriveFileOutlined
    },
    {
        name:"Bin",
        title:"bin",
        icons:DeleteOutline
    },
    {
        name:"allmail",
        title:"Sent mail",
        icons:MailOutline
    }
]