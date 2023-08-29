import { FunctionComponent } from 'react'

export interface IMenus {
  title: string
  name: string
  url: string
  icon?: FunctionComponent | string
  access?: string[]
  children?: IMenus[]
  component?: FunctionComponent
}
