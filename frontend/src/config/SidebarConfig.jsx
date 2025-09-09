import React from 'react'
import { MailOutline, Photo } from '@mui/icons-material'
import { StarOutline } from '@mui/icons-material'
import { SendOutlined } from '@mui/icons-material'
import { InsertDriveFileOutlined } from '@mui/icons-material'
import { DeleteOutline } from '@mui/icons-material'

export const SidebarConfig= [
    {
        name:"inbox",
        title:"Inbox",
        icons:Photo
    },
    {
        name:"starred",
        title:"Starred",
        icons:StarOutline
    },
    {
        name:"sent",
        title:"Sent",
        icons:SendOutlined
    },
    {
        name:"drafts",
        title:"Drafts",
        icons:InsertDriveFileOutlined
    },
    {
        name:"bin",
        title:"Bin",
        icons:DeleteOutline
    },
    {
        name:"allmail",
        title:"Sent mail",
        icons:MailOutline
    }
]