import { BarcodeOutlined } from '@ant-design/icons'
import { Input } from 'antd'

const Barcode = () => {
  return (
    <Input
      prefix={<BarcodeOutlined />}
      size="large"
      placeholder="Masukkan barcode"
      maxLength={14}
      allowClear
    />
  )
}

export default Barcode
