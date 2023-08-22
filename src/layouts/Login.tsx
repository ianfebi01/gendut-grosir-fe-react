import { Card, Grid, Layout } from 'antd'
import { FunctionComponent, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const { Content } = Layout

const { useBreakpoint } = Grid

const Container = styled(Layout)<{ $bgWhite: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${(props) => (props.$bgWhite ? '#fff' : '')};
`

const StyledContent = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCard = styled(Card)`
  width: 350px;
`
const MobileContainer = styled.div`
  padding-inline: 10px;
`

const ResponsiveCard: {
  [key: string]: FunctionComponent
} = {
  xs: MobileContainer,
  md: StyledCard,
}

const Login = () => {
  const screen = useBreakpoint()

  const ResponsiveContainer = (breakpoint: string) => {
    const Component: FunctionComponent<{
      children: ReactNode
    }> = ResponsiveCard[breakpoint]
    return (
      <Component>
        <Outlet />
      </Component>
    )
  }

  return (
    <Container $bgWhite={screen['xs'] as boolean}>
      <StyledContent>
        {screen['sm'] ? ResponsiveContainer('md') : ResponsiveContainer('xs')}
        {/* <StyledCard>Component</StyledCard> */}
      </StyledContent>
    </Container>
  )
}

export default Login
