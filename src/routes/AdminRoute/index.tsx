import { FunctionComponent } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../redux/store'

interface Props {
  isPublic?: boolean
  isAuthorized: boolean
  name: string
}

const AdminRoute: FunctionComponent<Props> = ({ isAuthorized, name }) => {
  const state = useAppSelector((state) => state.authReducer)

  return isAuthorized && state.role.allows.includes(name) ? (
    <Outlet />
  ) : !isAuthorized ? (
    <Navigate to="/login" replace={true} />
  ) : (
    <Navigate to="/404" />
  )
}

export default AdminRoute
