import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../tokenWork/tokenWork'

export const fetchSignIn = createAsyncThunk(
  'signIn/fetchSignIn',
  async function (value, { rejectWithValue, dispatch }) {
    try {
      const respons = await fetch('/api/customers/login', {
        method: 'POST',
        body: JSON.stringify({
          loginOrEmail: value.loginOrEmail,
          password: value.password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      dispatch(login(data.token))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  signIn: '',
  status: null,
  error: null
}

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    clearStatus: state => {
      state.status = null
      state.signIn = ''
    }
  },
  extraReducers: {
    [fetchSignIn.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchSignIn.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.signIn = action.payload.token
    },
    [fetchSignIn.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export const { clearStatus } = signInSlice.actions

export default signInSlice.reducer
