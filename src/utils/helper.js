import { useSelector } from 'react-redux'
import { setToken } from '../lib/features/user/userSlice'
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
}
