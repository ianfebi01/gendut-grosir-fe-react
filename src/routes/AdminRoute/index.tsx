import { FunctionComponent } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isPublic?: boolean
  isAuthorized: boolean
  role: string
  access: string[]
}

const AdminRoute: FunctionComponent<Props> = ({
  isAuthorized,
  role,
  access,
}) => {
  return isAuthorized && access.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}

export default AdminRoute
