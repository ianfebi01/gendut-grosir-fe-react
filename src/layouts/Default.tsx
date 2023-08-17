import { useState } from 'react'
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
import logo from '/Ilustration/logo.svg'
import { styled } from 'styled-components'
import menu from '../menu'
import { UserOutlined } from '@ant-design/icons'
import { Outlet, useNavigate } from 'react-router-dom'
import { generateMenu } from '../utils/menus'

const { Content, Sider } = Layout
const { Text } = Typography

const menus = generateMenu(menu, 'admin')

// @ NOTE Styled Component

const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  /* display: flex; */
  /* align-items: center; */
`

const LogoContainer = styled.div<{ $collapsed?: boolean }>`
  width: calc(100% - 20px);
  height: 60px;
  display: flex;
  margin: 10px;
  align-items: center;
  overflow: hidden;
  padding-inline: ${(props) => (props.$collapsed ? '9px' : '9px')};
  transition: all 0.3s ease-out;
`

const TextLogo = styled.span<{ $collapsed?: boolean }>`
  margin-inline-start: 10px;
  white-space: nowrap;
  opacity: ${(props) => (props.$collapsed ? 0 : '100')};
  transition: all 0.3s ease-out;
  text-overflow: ellipsis;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  color: #101828;
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

const StyledSider = styled(Sider)<{ $color?: string }>`
  .ant-layout-sider-trigger {
    background: ${(props) => props.$color} !important;
  }
`

const content = (
  <Button type="primary" danger>
    Sign Out
  </Button>
)

const Default = () => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken()

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const navigate = useNavigate()
  return (
    <Layout style={{ height: '100%' }}>
      <Layout>
        <StyledSider
          width={200}
          style={{ background: colorBgContainer }}
          //   trigger={null}
          collapsible
          collapsed={collapsed}
          $color={colorPrimary}
          onCollapse={(value) => setCollapsed(value)}
        >
          <LogoContainer $collapsed={collapsed}>
            <ImageWrapper>
              <Image preview={false} src={logo} width={40} />
            </ImageWrapper>
            <TextLogo $collapsed={collapsed}>Gendut Grosir</TextLogo>
          </LogoContainer>
          <Popover
            placement="rightTop"
            content={content}
            title="Do you want to sign out?"
          >
            <Divider />
            <ProfileContainer $collapsed={collapsed}>
              <ImageWrapper className="avatar">
                <Avatar icon={<UserOutlined />} size="small" />
              </ImageWrapper>
              <ProfileTextContainer $collapsed={collapsed}>
                <ProfileNAmeText ellipsis>Ian Febi Sastratruna</ProfileNAmeText>
                <ProfileRoleText type="secondary" ellipsis>
                  Super Admin
                </ProfileRoleText>
              </ProfileTextContainer>
            </ProfileContainer>
            <Divider />
          </Popover>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menus}
            onSelect={({ key }) => navigate(key)}
          />
        </StyledSider>
        <Layout>
          <Content
            style={{
              padding: 24,
              margin: '24px 24px 0 24px',
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: '8px',
            }}
          >
            Content
            <Outlet />
            <Button type="primary">Hi im primary</Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Default
