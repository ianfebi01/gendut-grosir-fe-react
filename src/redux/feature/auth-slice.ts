import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../../types/redux/auth'
import { IProfileResponse } from '../../types/api/profile.type'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const initialState: InitialState = {
  // _id: '',
  // name: '',
  // email: '',
  // role: '',
  // activate: true,
  // profilePicture: '',
  // allow: [],
  isAuthorized: true,
  _id: '63c57c45cdd9b753df70704b',
  name: 'Ian Febi Sastrataruna',
  email: 'ianfebi01@gmail.com',
  role: 'admin',
  activate: true,
  profilePicture:
    'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
  allow: [
    'login',
    'pos',
    'orders',
    'library',
    'category',
    'product',
    'stockOpname',
    'dashboard',
  ],
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
