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
  .ant-skeleton-paragraph > li:nth-child(-n + 3) {
    display: none;
  }
`

const Product: FunctionComponent<IProdutcCard> = (props) => {
  const screen = useBreakpoint()
  const { item, loading } = props

  return (
    <StyledCard
      hoverable
      loading={loading}
      size={screen['xs'] ? 'small' : 'default'}
      cover={
        props?.loading ? (
          <Skeleton.Image
            active={loading}
            style={{
              width: '100%',
              height: screen['xxl'] ? '200px' : '100px',
            }}
          />
        ) : (
          <img
            alt="example"
            src={item.image}
            style={{
              height: screen['xxl'] ? '200px' : '100px',
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
