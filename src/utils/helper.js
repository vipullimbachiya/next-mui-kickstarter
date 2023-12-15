import { useSelector } from 'react-redux'
import { setLanguage, setToken } from '../lib/features/user/userSlice'
import { STORE_LANGUAGE_KEY } from './constant'
import { redirect } from 'next/navigation'

export const SetToken = (dispatch, token) => {
  localStorage.setItem('token', token)
  dispatch(setToken(token))
}
export const GetToken = () =>
  useSelector((state) => state.user.token || localStorage.getItem('token'))

export const RemoveToken = (dispatch) => {
  localStorage.removeItem('token')
  dispatch(setToken(''))
}
export const clearLocalStorage = () => localStorage.clear()

export const userLogout = (dispatch, lng) => {
  RemoveToken(dispatch)
  redirect(`/${lng}`)
  // window.location.replace('/')
  // window.location.reload()
}
