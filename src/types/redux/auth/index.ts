export interface InitialState extends IProfile {
  allow: string[]
  isAuthorized?: boolean
}

export interface IProfile {
  _id: string
  name: string
  email: string
  role: string
  activate: boolean
  profilePicture: string
}
