import { Card, Grid, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { styled } from 'styled-components'
import { IProdutcCard } from '../../types/components/Cards/Product.types'
import { FunctionComponent } from 'react'

const { useBreakpoint } = Grid

const StyledCard = styled(Card)`
  .ant-card-cover {
    margin-top: unset;
    margin-inline-start: unset;
    margin-inline-end: unset;
  }
`

const Product: FunctionComponent<IProdutcCard> = (props) => {
  const screen = useBreakpoint()
  const { item } = props
  return (
    <StyledCard
      hoverable
      loading={props?.loading}
      size={screen['xs'] ? 'small' : 'default'}
      cover={
        props?.loading ? (
          <Skeleton.Image
            active={true}
            style={{
              width: '100%',
              height: screen['xs'] ? '100px' : '200px',
            }}
          />
        ) : (
          <img
            alt="example"
            src={item.image}
            style={{
              height: screen['xs'] ? '100px' : '200px',
              objectFit: 'cover',
            }}
          />
        )
      }
    >
      <Meta title={item.name} description={item.retailPrice} />
    </StyledCard>
  )
}

export default Product
