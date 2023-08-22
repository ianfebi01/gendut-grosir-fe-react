import { AxiosResponse } from 'axios'
import useApi from '../hooks/useApi'

export const getMe = async () => {
  const { data: response }: AxiosResponse = await useApi.get(`/me`)

  return response
}
