import { Fragment, FunctionComponent } from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import NotFound from '../pages/404'
import AdminRoute from './AdminRoute'
import { IRoutes, IRoutesProps } from '../types/routes.types'
import ProtectLoginRoute from './ProtectLoginRoute'

const generateFlattenRoutes = (routes: IRoutes) => {
  if (!routes) return []
  if (routes.children) {
    if (routes?.children?.length) {
      return [routes, ...routes.children.map((item) => item)]
    }
  } else {
    return [routes]
  }
}

export const renderRoutes = (mainRoutes: IRoutes[]) => {
  const Routes: FunctionComponent<IRoutesProps> = ({
    isAuthorized,
    role = 'super_admin',
  }) => {
    const layouts = mainRoutes.map((item: IRoutes, index: number) => {
      const subRoutes: IRoutes[] = generateFlattenRoutes(item) as IRoutes[]

      return (
        <Fragment key={index}>
          <Route key="not-found" path="*" element={<NotFound />} />
          <Route key={index} element={<item.layout />}>
            {subRoutes.map(({ component: Component, url, name, access }) => {
              if (name === 'login') {
                return (
                  Component &&
                  url && (
                    <Route
                      key={name}
                      element={
                        <ProtectLoginRoute isAuthorized={isAuthorized} />
                      }
                    >
                      <Route key={name} element={<Component />} path={url} />
                    </Route>
                  )
                )
              }
              return (
                Component &&
                url && (
                  <Route
                    key={name}
                    element={
                      <AdminRoute
                        isAuthorized={isAuthorized}
                        access={access as string[]}
                        role={role}
                      />
                    }
                  >
                    <Route key={name} element={<Component />} path={url} />
                  </Route>
                )
              )
            })}
          </Route>
        </Fragment>
      )
    })

    return <ReactRoutes>{layouts}</ReactRoutes>
  }
  return Routes
}
