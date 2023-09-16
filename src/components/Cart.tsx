import { Button, Layout, theme } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setCollapsed } from '../redux/feature/cart-slice'
import { styled } from 'styled-components'

const { Content, Header, Footer } = Layout

const Cart = () => {
  const dispatch = useDispatch()
  const {
    token: { colorPrimary },
  } = theme.useToken()
  return (
    <Layout
      style={{
        height: '100%',
      }}
    >
      <Header
        style={{
          background: 'white',
          paddingInline: 20,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <ShoppingCartOutlined
            style={{
              color: colorPrimary,
              fontSize: 18,
            }}
          />
          Cart
        </div>
      </Header>

      <Content style={{}}>Tes</Content>

      <Footer>Tes</Footer>
    </Layout>
  )
}

export default Cart
