import { AxiosResponse } from 'axios'
import useApi from '../hooks/useApi'

export const getProducts = async (
  q: string,
  category: string,
  page: number,
  limit: number
) => {
  const { data: response }: AxiosResponse = await useApi.get(`/product`, {
    params: {
      q,
      category,
      page,
      limit,
    },
  })

  return response
}
