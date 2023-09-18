import { BarcodeOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { FunctionComponent, KeyboardEventHandler, useState } from 'react'
import { IBarcode } from '../../types/components/Fields.types'
import { useDebounceFn } from '@reactuses/core'

const Barcode: FunctionComponent<IBarcode> = ({ onChange }) => {
  const [value, setValue] = useState<string>()
  const { run } = useDebounceFn((value) => {
    onChange(value)
  }, 500)

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    console.log(value)
    if (/^([0-9])/.test(e.key)) {
      // setValue(e.currentTarget.value)
      run(e.currentTarget.value)
    }
    if (e.key === 'Enter') {
      onChange(e.currentTarget.value)
    }
  }
  return (
    <Input
      prefix={<BarcodeOutlined />}
      size="large"
      placeholder="Masukkan barcode"
      maxLength={14}
      allowClear
      value={value}
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyUp(e)}
    />
  )
}

export default Barcode
