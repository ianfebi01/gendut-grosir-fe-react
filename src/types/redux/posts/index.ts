import { Comments, Post } from '@/types/apiTypes'

export interface InitialState {
  postsDatas?: Post[]
  postDetails?: {
    post?: Post
    comments?: Comments[]
  }
}
