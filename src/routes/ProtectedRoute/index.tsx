import { FunctionComponent } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isPublic?: boolean
  isAuthorized: boolean
}
const ProtectedRoute: FunctionComponent<Props> = ({ isAuthorized }) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
