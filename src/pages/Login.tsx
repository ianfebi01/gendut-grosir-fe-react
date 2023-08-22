import { Button, Form, Space, Typography, notification, theme } from 'antd'
import { styled } from 'styled-components'
import Logo from '../components/Logo'
import * as yup from 'yup'
import { FormikProvider, useFormik } from 'formik'
import FormikFields from '../components/Fields/FormikFields'
import { postLogin } from '../api/login'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { logIn } from '../redux/feature/auth-slice'

import { AxiosError } from 'axios'
import { IProfileResponse } from '../types/api/profile.type'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

// @NOTE styled component
const { Text, Title, Link } = Typography

const StyledSpace = styled(Space.Compact)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled(Title)<{ $color: string }>`
  margin-bottom: 0 !important;
  color: ${(props) => props.$color} !important;
`

const StyledButton = styled(Button)`
  border-radius: 6px !important;
`
// @NOTE schema
const schema = yup.object({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password'),
})

const Login = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken()

  // @NOTE REDUX

  const dispatch = useDispatch<AppDispatch>()
  const [api, contextHolder] = notification.useNotification()

  const openNotification = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    api[type]({
      message: message,
      description: description,
      placement: 'topRight',
      duration: 3,
    })
  }
  // @NOTE Post Login
  const login = useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      postLogin(values.email, values.password),
    onSuccess: (datas: IProfileResponse) => {
      const payload = {
        ...datas,
        isAuthorized: true,
        allow: [
          'login',
          'pos',
          'orders',
          'library',
          'category',
          'product',
          'stockOpname',
          'dashboard',
        ],
      }
      dispatch(logIn(payload))
    },
    onError: (error: AxiosError<{ message: string }>) => {
      openNotification(
        'error',
        'Login Failed',
        error?.response?.data?.message as string
      )
    },
  })
  // @NOTE Form
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      login.mutate(values)
    },
  })

  return (
    <StyledSpace direction="vertical" block>
      {contextHolder}
      <Logo
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <StyledTitle level={3} $color={colorPrimary}>
        Log In
      </StyledTitle>
      <Text
        style={{
          fontSize: '12px',
          textAlign: 'center',
        }}
        type="secondary"
      >
        Make surre your account has activated to cotinue
      </Text>
      <FormikProvider value={formik}>
        <Form
          onFinish={formik.handleSubmit}
          style={{
            width: '100%',
            marginTop: '24px',
          }}
        >
          <FormikFields
            fieldStyle="normal"
            name="email"
            placeholder="eg. ianfebi01@gmail.com"
          />
          <FormikFields
            fieldStyle="password"
            name="password"
            placeholder="Password"
          />
          <Form.Item>
            <StyledButton
              htmlType="submit"
              block
              type="primary"
              loading={login.isLoading}
            >
              Contiue
            </StyledButton>
          </Form.Item>
        </Form>
      </FormikProvider>
      <Text>{`Don't have an account?`}</Text>
      <Link>Create</Link>
    </StyledSpace>
  )
}

export default Login
