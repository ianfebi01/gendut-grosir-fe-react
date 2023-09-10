import { useState } from 'react'
import {
  Avatar,
  Button,
  Divider,
  Layout,
  Menu,
  Popover,
  Typography,
  theme,
} from 'antd'
import { styled } from 'styled-components'
import menu from '../menu'
import { Outlet, useNavigate } from 'react-router-dom'
import { generateMenu } from '../utils/menus'
import { useAppSelector } from '../redux/store'
import Logo from '../components/Logo'
import convertRoleString from '../utils/convertRoleString'

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

  const state = useAppSelector((state) => state.authReducer)

  const menus = generateMenu(menu, state.role)

  return (
    <Layout style={{ height: '100%' }}>
      <Layout hasSider={true}>
        <StyledSider
          width={200}
          style={{ background: colorBgContainer }}
          //   trigger={null}
          collapsible
          collapsed={collapsed}
          $color={colorPrimary}
          onCollapse={(value) => setCollapsed(value)}
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
                  {convertRoleString(state.role)}
                </ProfileRoleText>
              </ProfileTextContainer>
            </ProfileContainer>
            <Divider />
          </Popover>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/']}
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
              overflow: 'auto',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Default
