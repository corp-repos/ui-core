import React from 'react'
import { Button } from '@mui/material'
import { EmailTwoTone } from '@mui/icons-material'

export const EmailButton = (props: React.ComponentProps<typeof Button>) => {
    return <Button {...props} startIcon={<EmailTwoTone />} />
}