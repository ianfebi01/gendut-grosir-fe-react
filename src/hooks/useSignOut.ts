import Cookies from 'universal-cookie'

const cookie = new Cookies()

export default function useSignOut() {
  const signOut = () => {
    cookie.remove('accessToken')
    window.location.reload()
  }

  return signOut
}
