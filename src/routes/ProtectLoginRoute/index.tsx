import { FunctionComponent } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isPublic?: boolean
  isAuthorized: boolean
}
const ProtectLoginRoute: FunctionComponent<Props> = ({ isAuthorized }) => {
  return !isAuthorized ? <Outlet /> : <Navigate to="/" replace={true} />
}

export default ProtectLoginRoute
