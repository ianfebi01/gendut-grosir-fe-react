import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const useApi = axios.create({
  baseURL: import.meta.env.PROD ? import.meta.env.VITE_BASE_URL : '/api', // Replace with your API base URL
})

// Request interceptor
useApi.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    const accessToken = cookie.get('accessToken')

    // If token is present add it to request's Authorization Header
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error)
  }
)
// End of Request interceptor

// Response interceptor
useApi.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response
  },
  (error) => {
    // Handle response errors here

    // @ NOTE Unauthorized
    if (error.response.status === 401) {
      cookie.remove('accessToken')
      window.location.reload()
    }

    return Promise.reject(error)
  }
)
// End of Response interceptor

export default useApi
