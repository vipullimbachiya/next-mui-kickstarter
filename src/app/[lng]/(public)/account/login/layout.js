'use client'
import { GetToken } from '@/utils/helper'
import { Box } from '@mui/material'
import { redirect } from 'next/navigation'

export default Layout

function Layout({ children, params: { lng } }) {
  const token = GetToken()

  if (token) {
    redirect(`/${lng}`)
  }
  return <Box sx={SxStyle.container}>{children}</Box>
}
const SxStyle = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '99vh',
  },
}
