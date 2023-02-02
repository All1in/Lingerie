import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from '../../Button'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  clearStatusPass,
  fetchChangePassword
} from '../../../store/user/userSlice'
import styles from './ChangePassword.module.scss'
import * as yup from 'yup'
import ErrorText from '../../TextRequests/TextRequests'

const validationSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short'),
  password: yup.string().required('No password provided.')
})

const ChangePassword = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user.info)
  const { statusChangePass } = useSelector(state => state.user)
  const [visibleErrorMatch, setVisibleErrorMatch] = useState(false)
  const [visibleError, setVisibleError] = useState(false)
  const [visibleResolve, setVisibleResolve] = useState(false)
  const { location } = useSelector(state => state.location)

  const initialValues = { newPassword: '', password: '' }

  useEffect(() => {
    dispatch(clearStatusPass())
  }, [location])

  useEffect(() => {
    if (userInfo.password === 'Password does not match') {
      setVisibleErrorMatch(true)
      setVisibleError(false)
      setVisibleResolve(false)
    } else if (statusChangePass === 'resolved') {
      setVisibleError(false)
      setVisibleResolve(true)
    } else if (statusChangePass === 'rejected') {
      setVisibleResolve(false)
      setVisibleError(true)
    } else {
      setVisibleErrorMatch(false)
      setVisibleError(false)
      setVisibleResolve(false)
    }
  }, [statusChangePass, userInfo])

  const updateValues = value => {
    dispatch(fetchChangePassword(value))
  }

  const personalValues = [
    {
      placeholder: 'Old password',
      name: 'password'
    },
    { placeholder: 'New password', name: 'newPassword' }
  ]

  return (
    userInfo && (
      <Formik
        initialValues={initialValues}
        onSubmit={updateValues}
        validationSchema={validationSchema}
      >
        {({ values }) => {
          return (
            <Form className={styles.form}>
              {personalValues.map(value => {
                const { placeholder, name } = value
                return (
                  <div key={name} className={styles.block_input}>
                    <Field
                      name={name}
                      placeholder={placeholder}
                      id={name}
                      component={Input}
                      type='password'
                    />
                    <span>
                      <ErrorMessage name={name} />
                    </span>
                  </div>
                )
              })}
              <div className={styles.block}>
                {visibleErrorMatch && (
                  <ErrorText text='Password does not match, try again' />
                )}
                {visibleError && <ErrorText text='Smth wrong happened' />}
                {visibleResolve && (
                  <ErrorText resolveText text='Password successfully changed' />
                )}
                <Button
                  text='Change Password'
                  disabled={!values.name}
                  type='submit'
                />
              </div>
            </Form>
          )
        }}
      </Formik>
    )
  )
}

export default ChangePassword
