export interface IProfileResponse {
  _id: string
  name: string
  email: string
  role: IRole
  activate: boolean
  profilePicture: string
  accessToken?: string
}

export interface IRole {
  _id: string
  roleName: string
  allows: string[]
  title: string
}
