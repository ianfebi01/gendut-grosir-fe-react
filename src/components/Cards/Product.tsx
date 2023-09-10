import { Card, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { styled } from 'styled-components'
import { IProdutcCard } from '../../types/components/Cards/Product.types'
import { FunctionComponent } from 'react'

const StyledCard = styled(Card)`
  .ant-card-cover {
    margin-top: unset;
    margin-inline-start: unset;
    margin-inline-end: unset;
  }
`

const Product: FunctionComponent<IProdutcCard> = (props) => {
  const { item } = props
  return (
    <StyledCard
      hoverable
      loading={props?.loading}
      style={{ width: 'auto', height: 300 }}
      cover={
        props?.loading ? (
          <Skeleton.Image
            active={true}
            style={{
              width: '100%',
              height: '200px',
            }}
          />
        ) : (
          <img
            alt="example"
            src={item.image}
            style={{ height: '200px', objectFit: 'cover' }}
          />
        )
      }
    >
      <Meta title={item.name} description={item.retailPrice} />
    </StyledCard>
  )
}

export default Product
