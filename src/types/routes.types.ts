import { FunctionComponent } from 'react'

export interface IRoutes {
  title: string
  name: string
  url: string
  access?: string[]
  children?: IRoutes[]
  component?: FunctionComponent
  layout: FunctionComponent
  type?: 'auth' | 'normal'
}

export interface IRoutesProps {}
