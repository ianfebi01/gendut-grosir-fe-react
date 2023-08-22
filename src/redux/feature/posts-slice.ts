import { Post } from '@/types'
import { InitialState } from '@/types/redux/posts'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: InitialState = {
  postsDatas : [],
  postDetails: {
    comments: [],
  },
}

export const posts = createSlice({
  name    : 'posts',
  initialState,
  reducers: {
    setPostsDatas: (state, actions: PayloadAction<Post[]>) => {
      return {
        postsDatas: actions.payload,
      }
    },
    setPostDetails: (state, actions: PayloadAction<Post>) => {
      return {
        ...state,
        postDetails: {
          ...state.postDetails,
          post: actions.payload,
        },
      }
    },
  },
})

export const { setPostsDatas, setPostDetails } = posts.actions
export default posts.reducer
