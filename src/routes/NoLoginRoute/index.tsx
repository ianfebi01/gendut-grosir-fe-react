import { FunctionComponent } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isPublic?: boolean
  isAuthorized: boolean
}
const NoLoginRoute: FunctionComponent<Props> = ({ isAuthorized }) => {
  console.log('jembot')
  return !isAuthorized ? <Outlet /> : <Navigate to="/home" />
}

export default NoLoginRoute
