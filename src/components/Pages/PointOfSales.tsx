import { useQuery } from '@tanstack/react-query'

import { getProducts } from '../../api/pos'
import Product from '../Cards/Product'

import { Col, Pagination, Row } from 'antd'
import { IProductResponse } from '../../types/api/product.types'
import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../redux/store'
import { setProducts } from '../../redux/feature/product-slice'

const PointOfSales = () => {
  // @ NOTE redux
  const dispatch = useDispatch<AppDispatch>()
  const state = useAppSelector((state) => state.productsReducer)

  const [params, setParams] = useState({
    q: '',
    category: '',
    page: 1,
    limit: 8,
  })
  const loaderLoop = useMemo(() => {
    return new Array(params.limit).fill(0)
  }, [params.limit])

  const { isLoading } = useQuery<IProductResponse>({
    queryFn: () =>
      getProducts(params.q, params.category, params.page, params.limit),
    queryKey: ['products', params.page],
    onSuccess: (datas) => {
      dispatch(setProducts(datas.data))
    },
  })

  const onChangePagination = (e: number) => {
    setParams({
      ...params,
      page: e,
    })
  }
  return (
    <div>
      <Row gutter={[16, 16]}>
        {isLoading
          ? loaderLoop.map((item, i) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={i}>
                <Product item={item} loading={isLoading} />
              </Col>
            ))
          : state.products?.map((item) => (
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
            current={state.paginator.page}
            defaultCurrent={1}
            total={state.paginator.itemCount}
            onChange={onChangePagination}
          />
        </Col>
      </Row>
    </div>
  )
}

export default PointOfSales
