'use client'
import AppHeader from '@/_components/header'
import { GetToken } from '@/utils/helper'
import { Box } from '@mui/material'
import { redirect } from 'next/navigation'

export default Layout

function Layout({ children }) {
  const token = GetToken()

  if (!token) {
    redirect(`/account/login`)
  }
  return (
    <div>
      <AppHeader />
      <Box sx={SxStyle.container}>{children}</Box>
    </div>
  )
}

const SxStyle = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
  },
}
