import React, { FunctionComponent } from 'react'
import { IFieldsProps } from '../../types/components/Fields.types'
import { Form, Input, InputProps } from 'antd'
import { useField } from 'formik'
import { styled } from 'styled-components'
// ant-form-item-explain-error

const StyledFormItem = styled(Form.Item)`
  .ant-form-item-explain-error {
    font-size: 12px !important;
  }
`

// @NOTE COmponent

const InputComponentData: {
  [key: string]: FunctionComponent
} = {
  normal: Input,
  password: Input.Password,
}

const FormikFields: FunctionComponent<IFieldsProps> = (props) => {
  const [field, meta] = useField(props.name)

  const InputComponent: FunctionComponent<InputProps> =
    InputComponentData[props.fieldStyle]

  return (
    <>
      <StyledFormItem
        name={props.name}
        label={props.label}
        validateStatus={meta.touched && meta.error ? 'error' : 'success'}
        help={meta.touched && meta.error}
      >
        <InputComponent {...field} placeholder={props.placeholder as string} />
      </StyledFormItem>
    </>
  )
}

export default FormikFields

FormikFields.defaultProps = {
  fieldStyle: 'normal',
}
