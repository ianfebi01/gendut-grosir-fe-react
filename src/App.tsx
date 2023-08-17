import './App.css'

import { Routes } from './routes'

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Routes isAuthorized={true} role="admin" />
    </div>
  )
}

export default App
