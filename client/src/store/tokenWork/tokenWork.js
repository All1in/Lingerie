import { createSlice } from '@reduxjs/toolkit'
import { clearStatus } from '../signIn/signIn'

const initialState = {
  token: ''
}

const storageName = 'userToken'

const tokenWorkSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      localStorage.setItem(
        storageName,
        JSON.stringify({
          token: action.payload
        })
      )
    },
    logout: state => {
      state.token = ''
      localStorage.removeItem(storageName)
    }
  }
})

export const { login, logout } = tokenWorkSlice.actions

export default tokenWorkSlice.reducer
