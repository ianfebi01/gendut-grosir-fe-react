export interface IFieldsProps {
  name: string
  type?: string
  label?: string
  placeholder?: string
  isPassword?: boolean
  fieldStyle: string
  options?: Option[]
  disabled?: boolean
  date?: {
    min?: Date
    max?: Date
  }
  validation?: {
    required?: boolean
    charLength?: {
      min?: number
      max?: number
    }
    numeric?: boolean
    email?: boolean
  }
}

export interface Option {
  text: string
  value: string
  desc?: string
  disabled?: boolean
}
