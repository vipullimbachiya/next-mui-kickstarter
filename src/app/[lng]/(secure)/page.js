'use client'
import { useTranslation } from '@/app/i18n/client'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng)
  const { push } = useRouter()

  const goToDashboard = () => push(`${lng}/dashboard`)

  return (
    <Box>
      <Typography variant="h2">{t('page_name')}</Typography>
      <Typography variant="h4">next-mui-kickstarter</Typography>
      <Typography variant="h5">
        Setup is ready for NextJS With App router, Eslint, Mui, i18next, Redux
      </Typography>
      <Button variant="contained" onClick={goToDashboard}>
        Go to Dashboard
      </Button>
    </Box>
  )
}
