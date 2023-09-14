import { FunctionComponent } from 'react'
import { styled } from 'styled-components'
import { ILogoProps } from '../types/components/Logo.types'
import { Image } from 'antd'
import logo from '/Ilustration/logo.svg'

const LogoContainer = styled.div<{ $collapsed?: boolean }>`
  width: calc(100% - 20px);
  height: 60px;
  display: flex;
  /* margin: 10px; */
  align-items: center;
  overflow: hidden;
  padding-inline: ${(props) => (props.$collapsed ? '9px' : '9px')};
  transition: all 0.3s ease-out;
`

export const TextLogo = styled.span<{ $collapsed?: boolean }>`
  margin-inline-start: 10px;
  white-space: nowrap;
  opacity: ${(props) => (props.$collapsed ? 0 : '100')};
  transition: all 0.3s ease-out;
  text-overflow: ellipsis;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  color: #101828;
`

const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  /* display: flex; */
  /* align-items: center; */
`
const Logo: FunctionComponent<ILogoProps> = ({ collapsed = false, style }) => {
  return (
    <LogoContainer $collapsed={collapsed} style={style}>
      <ImageWrapper>
        <Image preview={false} src={logo} width={40} />
      </ImageWrapper>
      <TextLogo $collapsed={collapsed}>Gendut Grosir</TextLogo>
    </LogoContainer>
  )
}

export default Logo
