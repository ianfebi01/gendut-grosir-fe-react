import { useQuery } from '@tanstack/react-query'

import { getProducts } from '../../api/pos'
import Product from '../Cards/Product'

import { Col, Pagination, Row } from 'antd'
import { IProductResponse } from '../../types/api/product.types'
import { useMemo, useState } from 'react'

const PointOfSales = () => {
  const [params, setParams] = useState({
    q: '',
    category: '',
    page: 1,
    limit: 8,
  })
  const loaderLoop = useMemo(() => {
    return new Array(params.limit).fill(0)
  }, [params.limit])

  const { data, isLoading } = useQuery<IProductResponse>({
    queryFn: () =>
      getProducts(params.q, params.category, params.page, params.limit),
    queryKey: ['products', params.page],
    onSuccess: (datas) => {
      console.log(datas)
    },
  })

  const onChangePagination = (e) => {
    console.log(e)
    setParams({
      ...params,
      page: e,
    })
  }
  return (
    <div>
      <span>tes</span>
      <Row gutter={[16, 16]}>
        {isLoading
          ? loaderLoop.map((item, i) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={i}>
                <Product item={item} loading={isLoading} />
              </Col>
            ))
          : data?.data?.data?.map((item) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={item._id}>
                <Product item={item} />
              </Col>
            ))}
      </Row>
      <Row>
        <Col
          span={24}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBlock: '20px',
          }}
        >
          <Pagination
            showQuickJumper
            current={data?.data.paginator.page}
            defaultCurrent={1}
            total={data?.data.paginator.itemCount}
            onChange={onChangePagination}
          />
        </Col>
      </Row>
    </div>
  )
}

export default PointOfSales
