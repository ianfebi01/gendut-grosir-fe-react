import { BarcodeOutlined } from '@ant-design/icons'
import { Input, InputRef } from 'antd'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { IBarcode } from '../../types/components/Fields.types'
import { useDebounceFn } from '@reactuses/core'
import useInputNumeric from '../../hooks/useInputNumeric'

const Barcode = forwardRef<InputRef, IBarcode>(function Barcode(
  { onChange },
  ref
) {
  const { run } = useDebounceFn((value) => {
    onChange(value)
  }, 500)

  const handleChange = (value: string) => {
    run(value)
  }

  // @ NOTE REF
  const innerRef = useRef<InputRef>(null)
  useImperativeHandle(ref, () => innerRef.current!, [])

  const numericInput = useInputNumeric

  // @ NOTE only accept numeric inputs
  useEffect(() => {
    if (innerRef.current && ref) {
      const el = innerRef.current.input

      numericInput(el as HTMLInputElement)
    }
  }, [])

  return (
    <Input
      ref={innerRef}
      prefix={<BarcodeOutlined />}
      size="large"
      placeholder="Masukkan barcode"
      maxLength={13}
      allowClear
      onChange={(e) => handleChange(e.target.value)}
    />
  )
})

export default Barcode
