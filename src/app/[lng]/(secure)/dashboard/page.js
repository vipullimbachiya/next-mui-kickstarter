import { useTranslation } from '@/app/i18n'
import { Box } from '@mui/material'

export default async function Dashboard({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <Box>
      <h2>{t('page_name_dashboard')}</h2>
    </Box>
  )
}
