//import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter' // or `v14-appRouter` if you are using Next.js v14
import StoreProvider from './StoreProvider'
import { ThemeProviderContext } from '@/utils/ThemeContext'

export const metadata = {
  title: 'next-mui-kickstarter',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeProviderContext>{children}</ThemeProviderContext>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
