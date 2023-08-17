import './App.css'

import { Routes } from './routes'

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Routes isAuthorized={true} />
    </div>
  )
}

export default App
