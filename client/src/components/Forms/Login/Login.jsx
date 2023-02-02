import React, { useEffect } from 'react'
import Button from '../../Button'
import Input from '../Input'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from '../../../store/login/login'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  login: ''
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Not an Email')
    .required('Email is a required field')
    .min(8, 'Too short'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short'),
  firstName: yup.string().required('Name is required'),
  lastName: yup.string().required('LastName is required'),
  login: yup.string().required('Login is required')
})

const Login = () => {
  const dispatch = useDispatch()
  const statusSignIn = useSelector(state => state.signIn.status)
  const statusLogin = useSelector(state => state.login.status)
  const navigate = useNavigate()
  const [visibleError, setVisibleError] = useState(false)
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    if (statusLogin === 'rejected') {
      setVisibleError(true)
    }
  }, [statusLogin])

  useEffect(() => {
    if (statusSignIn === 'resolved' || token) {
      navigate('/')
    }
  }, [statusSignIn, token])

  const registerUser = value => {
    dispatch(fetchLogin(value))
  }

  const SignInvalues = [
    { placeholder: 'firstName', name: 'firstName' },
    { placeholder: 'lastName', name: 'lastName' },
    { placeholder: 'login', name: 'login' },
    { placeholder: 'email', name: 'email' },
    { placeholder: 'password', name: 'password' }
  ]

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={registerUser}
      validationSchema={validationSchema}
    >
      {({ values }) => {
        return (
          <Form>
            {SignInvalues.map(value => {
              const { placeholder, name } = value
              return (
                <div key={name}>
                  <Field
                    name={name}
                    placeholder={placeholder}
                    component={Input}
                    id={name}
                    type={name === 'password' ? 'password' : 'text'}
                  />
                  <span>
                    <ErrorMessage name={name} />
                  </span>
                </div>
              )
            })}
            {visibleError && (
              <span style={{ color: 'red' }}>User already exists</span>
            )}
            <Button text='Create User' disabled={!values.name} type='submit' />
          </Form>
        )
      }}
    </Formik>
  )
}

export default Login
