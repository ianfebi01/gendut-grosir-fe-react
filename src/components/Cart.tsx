import { Button, Card, Layout, theme } from 'antd'
import { CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setCollapsed } from '../redux/feature/cart-slice'
import { styled } from 'styled-components'
import { useAppSelector } from '../redux/store'

const { Content, Header, Footer } = Layout

const CartHeader = styled(Header)<{ $bg?: string }>`
  background-color: ${(props) => props.$bg};
  padding-inline: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CartFooter = styled(Footer)<{ $bg?: string }>`
  background-color: ${(props) => props.$bg};
  padding-inline: 20px;
`

const StyledLayout = styled(Layout)`
  height: 100%;
`

const Cart = () => {
  const dispatch = useDispatch()
  const {
    token: { colorPrimary, colorFillAlter },
  } = theme.useToken()

  const { cart } = useAppSelector((state) => state.cartReducer)
  return (
    <StyledLayout>
      <CartHeader $bg={colorFillAlter}>
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

        <Button
          type="link"
          icon={<CloseOutlined />}
          onClick={() => dispatch(setCollapsed(true))}
        />
      </CartHeader>

      <Content style={{ padding: 20 }}>
        <Card>
          {cart?.map((item, i) => (
            <span key={i}>{item.name}</span>
          ))}
        </Card>
      </Content>

      <CartFooter $bg={colorFillAlter}>Footer</CartFooter>
    </StyledLayout>
  )
}

export default Cart
