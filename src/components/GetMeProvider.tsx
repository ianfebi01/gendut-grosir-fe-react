import { useQuery } from '@tanstack/react-query'
import { FunctionComponent, ReactNode, useLayoutEffect } from 'react'
import { getMe } from '../api/profile'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { logIn } from '../redux/feature/auth-slice'
import { Spin } from 'antd'
import { useCookies } from 'react-cookie'
import { styled } from 'styled-components'

const StyledSpin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GetMeProvider: FunctionComponent<{
  children: ReactNode
}> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>()

  const [cookie] = useCookies(['accessToken'])

  const { isLoading, refetch, isFetching, fetchStatus, isSuccess } = useQuery({
    queryFn: getMe,
    queryKey: ['profile'],
    enabled: false,
    onSuccess: (datas) => {
      const payload = {
        ...datas._doc,
        isAuthorized: true,
      }
      dispatch(logIn(payload))
    },
  })

  useLayoutEffect(() => {
    if (cookie.accessToken) {
      refetch()
    }
  }, [])

  if (isLoading && isFetching)
    return (
      <StyledSpin>
        <Spin />
      </StyledSpin>
    )
  else if (fetchStatus === 'idle' && isSuccess) return children
  // return children
}

export default GetMeProvider
