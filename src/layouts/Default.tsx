import { useRef, useState } from 'react'
import {
  Avatar,
  Button,
  Divider,
  Image,
  Layout,
  Menu,
  Popover,
  Typography,
  theme,
} from 'antd'
import { styled } from 'styled-components'
import menu from '../menu'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { generateMenu } from '../utils/menus'
import { useAppSelector } from '../redux/store'
import Logo, { TextLogo } from '../components/Logo'
import { Header } from 'antd/es/layout/layout'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { useClickOutside } from '@reactuses/core'
import logo from '/Ilustration/logo.svg'
import useSignOut from '../hooks/useSignOut'

const { Content, Sider } = Layout
const { Text } = Typography

// @ NOTE Styled Component

const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  /* display: flex; */
  /* align-items: center; */
`

const ProfileContainer = styled.div<{ $collapsed?: boolean }>`
  display: flex;
  margin-inline: 20px;
  align-items: center;
  display: flex;
  /* align-items: center; */
  overflow: hidden;
  padding-inline: ${(props) => (props.$collapsed ? '9px' : '0')};
  transition: all 0.3s ease-out;
  cursor: pointer;
  .avatar {
    transform: translateY(5px);
  }
`
const ProfileTextContainer = styled.div<{ $collapsed?: boolean }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-inline-start: 10px;
  white-space: nowrap;
  opacity: ${(props) => (props.$collapsed ? 0 : '100')};
  transition: all 0.3s ease-out;
  text-overflow: ellipsis;
`
const ProfileRoleText = styled(Text)`
  font-size: 10px;
  width: 126px;
`

const ProfileNAmeText = styled(Text)`
  width: 126px;
`

const StyledSider = styled(Sider)<{ $color?: string; $mobile?: boolean }>`
  position: ${(props) => (props.$mobile ? 'absolute !important' : 'static')};
  z-index: 10;
  height: 100vh;
  width: 360px;
  box-shadow: ${(props) =>
    props.$mobile && '5px 8px 24px 5px rgba(182, 182, 182, 0.591)'};

  .ant-layout-sider-trigger {
    background: ${(props) => props.$color} !important;
  }
`

const StyledHeader = styled(Header)<{ $bg?: string }>`
  padding: 0;
  background-color: ${(props) => props.$bg};
  display: flex;
  justify-content: center;
  position: relative;
`

const CartButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
`

const WrapperContent = styled.div`
  padding: 24px;
  border-radius: 8px;
  text-align: center;
`

const Default = () => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken()

  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [collapsedWidth, setCollapsedWidth] = useState<number>(0)

  // @ NOTE REDUX
  const state = useAppSelector((state) => state.authReducer)

  // @ NOTE MENU
  const menus = generateMenu(menu, state.role.allows)

  // @ NOTE ROUTE
  const route = useLocation()
  const navigate = useNavigate()

  // @ NOTE CLICK OUTSIDE SIDER TO COLLAPSE
  const siderRef = useRef(null)

  useClickOutside(siderRef, () => {
    if (collapsedWidth !== 72) setCollapsed(true)
  })

  // @ NOTE SIGN OUT
  const signOut = useSignOut()

  const content = (
    <Button type="primary" danger onClick={() => signOut()}>
      Sign Out
    </Button>
  )
  return (
    <Layout style={{ height: '100%' }}>
      <Layout hasSider={true}>
        <StyledSider
          ref={siderRef}
          width={200}
          style={{ background: colorBgContainer }}
          collapsible
          collapsedWidth={collapsedWidth}
          breakpoint="xs"
          onBreakpoint={(broken) => {
            if (broken) setCollapsedWidth(0)
            else setCollapsedWidth(72)
          }}
          trigger={null}
          collapsed={collapsed}
          $color={colorPrimary}
          $mobile={collapsedWidth !== 72}
          onCollapse={() => setCollapsed(true)}
        >
          <Logo
            collapsed={collapsed}
            style={{
              margin: '10px',
            }}
          />
          <Popover
            placement="rightTop"
            content={content}
            title="Do you want to sign out?"
          >
            <Divider />
            <ProfileContainer $collapsed={collapsed}>
              <ImageWrapper className="avatar">
                <Avatar src={state.profilePicture} size="small" />
              </ImageWrapper>
              <ProfileTextContainer $collapsed={collapsed}>
                <ProfileNAmeText ellipsis>{state.name}</ProfileNAmeText>
                <ProfileRoleText type="secondary" ellipsis>
                  {state.role.title}
                </ProfileRoleText>
              </ProfileTextContainer>
            </ProfileContainer>
            <Divider />
          </Popover>
          <Menu
            mode="inline"
            defaultSelectedKeys={[route.pathname]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menus}
            onSelect={({ key }) => navigate(key)}
          />
        </StyledSider>
        <Layout
          style={{
            overflow: 'auto',
          }}
        >
          <StyledHeader $bg={colorBgContainer}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                position: 'absolute',
                left: 0,
              }}
            />
            <div>
              <Image src={logo} alt="Logo" preview={false} width={40} />
              <TextLogo $collapsed={false}>Gendut Grosir</TextLogo>
            </div>
            <CartButton
              icon={<ShoppingCartOutlined />}
              type="link"
              size="large"
            />
          </StyledHeader>
          <Content
            style={{
              padding: 24,
              minHeight: 280,
              borderRadius: '8px',
              overflow: 'auto',
              flex: 'unset',
            }}
          >
            <WrapperContent
              style={{
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </WrapperContent>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Default
