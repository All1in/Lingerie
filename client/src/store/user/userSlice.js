import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGetUser = createAsyncThunk(
  'user/fetchGetUser',
  async function (value, { rejectWithValue, dispatch, getState }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/customers/customer', {
        method: 'GET',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchUpdateUser = createAsyncThunk(
  'user/fetchUpdateUser',
  async function (value, { rejectWithValue, getState }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/customers', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: stateToken
        },
        body: JSON.stringify(value)
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchChangePassword = createAsyncThunk(
  'user/fetchChangePassword',
  async function (value, { rejectWithValue, getState }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/customers/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: stateToken
        },
        body: JSON.stringify(value)
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  info: [],
  status: null,
  statusChangePass: null,
  statusUpdate: null,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearStatusUpdate: state => {
      state.statusUpdate = null
    },
    clearStatusPass: state => {
      state.statusChangePass = null
    }
  },
  extraReducers: {
    [fetchGetUser.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchGetUser.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.info = action.payload
    },
    [fetchGetUser.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchUpdateUser.pending]: state => {
      state.statusUpdate = 'loading'
      state.error = null
    },
    [fetchUpdateUser.fulfilled]: (state, action) => {
      state.statusUpdate = 'resolved'
      state.info = action.payload
    },
    [fetchUpdateUser.rejected]: (state, action) => {
      state.statusUpdate = 'rejected'
      state.error = action.payload
    },
    [fetchChangePassword.pending]: state => {
      state.statusChangePass = 'loading'
      state.error = null
    },
    [fetchChangePassword.fulfilled]: (state, action) => {
      state.statusChangePass = 'resolved'
      state.info = action.payload
    },
    [fetchChangePassword.rejected]: (state, action) => {
      state.statusChangePass = 'rejected'
      state.error = action.payload
    }
  }
})

export const { clearStatusUpdate, clearStatusPass } = userSlice.actions
export default userSlice.reducer
