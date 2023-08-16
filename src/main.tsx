import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0065D1',
          colorPrimaryBg: '#E5F0FA',
          colorFillAlter: '#fff',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
