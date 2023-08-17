import flattenDeep from 'lodash/flattenDeep'
import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import NoLoginRoute from './NoLoginRoute'
import Login from '../pages/Login'
import NotFound from '../pages/404'

const generateFlattenRoutes = (routes) => {
  if (!routes) return []
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  )
}

export const renderRoutes = (mainRoutes) => {
  const Routes = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(
      ({ layout: Layout, routes }, index: number) => {
        const subRoutes = generateFlattenRoutes(routes)
        console.log(routes)
        console.log('sub', subRoutes.length)
        return (
          <>
            <Route path="*" element={<NotFound />} />
            <Route key={index} element={<Layout />}>
              {subRoutes.map(
                ({ component: Component, path, name, isPublic }) => {
                  console.log(isPublic, isAuthorized)

                  return (
                    Component &&
                    path && (
                      <Route
                        element={
                          isPublic ? (
                            <NoLoginRoute isAuthorized={isAuthorized} />
                          ) : (
                            <ProtectedRoute isAuthorized={isAuthorized} />
                          )
                        }
                      >
                        <Route key={name} element={<Component />} path={path} />
                      </Route>
                    )
                  )
                }
              )}
            </Route>
          </>
        )
      }
    )
    console.log('layuttt', layouts)
    return <ReactRoutes>{layouts}</ReactRoutes>
  }
  return Routes
}
