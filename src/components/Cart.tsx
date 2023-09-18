import {
  Avatar,
  Button,
  Card,
  InputRef,
  Layout,
  Space,
  Typography,
  theme,
} from 'antd'
import {
  CloseOutlined,
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
  minus,
  plus,
  removeFromCart,
  setCollapsed,
} from '../redux/feature/cart-slice'
import { styled } from 'styled-components'
import { useAppSelector } from '../redux/store'
import Barcode from './Fields/Barcode'
import { ForwardedRef, useEffect, useRef } from 'react'

const { Content, Header, Footer } = Layout

const { Text } = Typography

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
const PlusMinusButton = styled(Button)`
  padding: 0;
  width: fit-content !important;
  height: fit-content !important;
`

const SpaceNoGap = styled(Space)`
  gap: 0 !important;
`

const Cart = () => {
  const dispatch = useDispatch()
  const {
    token: { colorPrimary, colorFillAlter },
  } = theme.useToken()

  const { cart, collapsed } = useAppSelector((state) => state.cartReducer)

  const handleBarcode = (value: string) => {
    console.log(value)
  }

  const barcodeInputRef = useRef<InputRef>()

  useEffect(() => {
    barcodeInputRef.current?.focus()
  }, [collapsed])
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

      <Content
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          overflow: 'auto',
        }}
      >
        <Barcode
          ref={barcodeInputRef as ForwardedRef<InputRef>}
          onChange={(value) => handleBarcode(value)}
        />
        {cart?.map((item, i) => (
          <Card key={i}>
            <div
              style={{
                display: 'flex',
                gap: 10,
                alignItems: 'center',
              }}
            >
              <Avatar
                shape="square"
                src={item.image}
                alt="Product image"
                size="large"
              />
              <SpaceNoGap direction="vertical">
                <Text ellipsis>{item.name}</Text>
                <Space>
                  <PlusMinusButton
                    icon={<PlusCircleOutlined />}
                    type="link"
                    onClick={() => dispatch(plus(item._id))}
                  />
                  <Text>{item.qty}</Text>
                  <PlusMinusButton
                    icon={<MinusCircleOutlined />}
                    type="link"
                    onClick={() => dispatch(minus(item._id))}
                  />
                </Space>
              </SpaceNoGap>
              <div
                style={{
                  flexGrow: 1,
                }}
              ></div>
              <SpaceNoGap direction="vertical" align="center">
                <PlusMinusButton
                  icon={<DeleteOutlined />}
                  type="link"
                  onClick={() => dispatch(removeFromCart(item._id))}
                />
                <Text>{item.qty}</Text>
              </SpaceNoGap>
            </div>
          </Card>
        ))}
      </Content>

      <CartFooter $bg={colorFillAlter}>Footer</CartFooter>
    </StyledLayout>
  )
}

export default Cart
