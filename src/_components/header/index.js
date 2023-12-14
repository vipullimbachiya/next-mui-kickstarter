import React, { useContext } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { GetLanguage, SetLanguage, userLogout } from '@/utils/helper'
import {
  AppBar,
  Button,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material'
import { ThemeContext } from '@/utils/ThemeContext'

const AppHeader = () => {
  const dispatch = useAppDispatch()
  const { toggleTheme } = useContext(ThemeContext)

  const Logout = () => {
    userLogout()
  }

  const changeLanguage = (e) => {
    const { value } = e.target
    SetLanguage(dispatch, value)
    // i18n.changeLanguage(value)
  }
  const lang = GetLanguage()

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
          value={lang}
          label="Language"
          onChange={changeLanguage}
        >
          <MenuItem value={'en'}>En</MenuItem>
          <MenuItem value={'de'}>De</MenuItem>
        </Select>
        <Button color="inherit" onClick={Logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}
export default AppHeader
