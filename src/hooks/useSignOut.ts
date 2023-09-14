import { useCookies } from 'react-cookie'

export default function useSignOut() {
  const [, , removeCookie] = useCookies(['accessToken'])

  const signOut = () => {
    removeCookie('accessToken')
    window.location.reload()
  }

  return signOut
}
