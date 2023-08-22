// import axios from 'axios'
import { AxiosResponse } from 'axios'
import useApi from '../hooks/useApi'

export const postLogin = async (email: string, password: string) => {
  const { data: response }: AxiosResponse = await useApi.post(`/login`, {
    email,
    password,
  })
  return response.data
}
