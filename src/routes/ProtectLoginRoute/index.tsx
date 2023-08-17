import { FunctionComponent } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isPublic?: boolean
  isAuthorized: boolean
}
const ProtectLoginRoute: FunctionComponent<Props> = ({ isAuthorized }) => {
  console.log('jembot')
  return !isAuthorized ? <Outlet /> : <Navigate to="/" />
}

export default ProtectLoginRoute
