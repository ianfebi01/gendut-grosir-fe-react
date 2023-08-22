import './App.css'
import ReactQueryProvider from './Providers/ReactQueryProvider'
import GetMeProvider from './components/GetMeProvider'
import { ReduxProvider } from './redux/provider'
import { Routes } from './routes'
import { CookiesProvider } from 'react-cookie'

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <CookiesProvider>
        <ReduxProvider>
          <ReactQueryProvider>
            <GetMeProvider>
              <Routes />
            </GetMeProvider>
          </ReactQueryProvider>
        </ReduxProvider>
      </CookiesProvider>
    </div>
  )
}

export default App
