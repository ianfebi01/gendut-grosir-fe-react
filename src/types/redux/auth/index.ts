import { IRole } from '../../api/profile.type'

export interface InitialState extends IProfile {
  isAuthorized?: boolean
}

export interface IProfile {
  _id: string
  name: string
  email: string
  role: IRole
  activate: boolean
  profilePicture: string
}
