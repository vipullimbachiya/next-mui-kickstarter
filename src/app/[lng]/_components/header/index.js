import React, { useContext } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { userLogout } from '@/utils/helper'
import {
  AppBar,
  Button,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material'
import { ThemeContext } from '@/utils/ThemeContext'
import { languages } from '@/app/i18n/settings'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AppHeader = ({ lng }) => {
  const dispatch = useAppDispatch()
  const { toggleTheme } = useContext(ThemeContext)
  const pathname = usePathname()

  const Logout = () => {
    userLogout(dispatch, lng)
  }

  const replaceFirstName = (path, replacement) => {
    let array = path.split('/')
    array[1] = replacement
    return array.join('/')
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Menu/Logo
        </Typography>
        <Button color="inherit" onClick={() => toggleTheme()}>
          Theme toggle
        </Button>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lng}
          label="Language"
          //  onChange={changeLanguage}
        >
          {languages.map((l, index) => {
            const newPath = replaceFirstName(pathname, l)
            return (
              <MenuItem value={l} key={l}>
                <Link href={newPath}>
                  <Typography>{l}</Typography>
                </Link>
              </MenuItem>
            )
          })}
        </Select>
        <Button color="inherit" onClick={Logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
