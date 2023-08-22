import { User } from '@/types'
import { InitialState } from '@/types/redux/users'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: InitialState = {
  users: [],
}

export const users = createSlice({
  name    : 'posts',
  initialState,
  reducers: {
    setUsersDatas: (state, actions: PayloadAction<User[]>) => {
      return {
        users: actions.payload,
      }
    },
    deleteUserDatas: (state, actions: PayloadAction<number>) => {
      const tmp = JSON.parse(JSON.stringify(state.users))
      const index = tmp?.findIndex((item: User) => item.id === actions.payload)
      if (index != -1) {
        if (index != undefined) tmp?.splice(index, 1)
      }

      return {
        users: tmp,
      }
    },
  },
})

export const { setUsersDatas, deleteUserDatas } = users.actions
export default users.reducer
