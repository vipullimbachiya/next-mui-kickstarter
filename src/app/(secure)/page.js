'use client'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

export default Home

function Home() {
  const { t } = useTranslation()
  console.log('t: ', t)

  return (
    <Box>
      <Typography variant="h2">{t('page_name')}</Typography>
      <Typography variant="h4">next-mui-kickstarter</Typography>
      <Typography variant="h5">
        Setup is ready for NextJS With App router, Eslint, Mui, i18next, Redux
      </Typography>
    </Box>
  )
}
