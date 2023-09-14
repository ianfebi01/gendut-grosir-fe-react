import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../../types/redux/auth'
import { IProfileResponse } from '../../types/api/profile.type'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const initialState: InitialState = {
  _id: '',
  name: '',
  email: '',
  role: {
    _id: '',
    roleName: '',
    allows: [],
    title: '',
  },
  activate: true,
  profilePicture: '',

  isAuthorized: false,
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (state, actions: PayloadAction<IProfileResponse>) => {
      if (actions.payload.accessToken) {
        cookie.set('accessToken', actions.payload.accessToken?.toString())
      }
      return {
        ...state,
        ...actions.payload,
      }
    },
  },
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
