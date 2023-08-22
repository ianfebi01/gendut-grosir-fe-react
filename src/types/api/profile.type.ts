export interface IProfileResponse {
  _id: string
  name: string
  email: string
  role: string
  activate: boolean
  profilePicture: string
  accessToken?: string
}
