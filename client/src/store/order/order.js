import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDeleteCart } from '../cart/cart'

export const fetchMakeOrder = createAsyncThunk(
  'order/fetchMakeOrder',
  async function (values, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    const customerId = getState().user.info._id

    const { value } = values
    try {
      const respons = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: stateToken
        },
        body: JSON.stringify({
          customerId: customerId,
          email: value.email,
          mobile: value.telephone,
          letterSubject: 'sdfs',
          letterHtml: 'sfedfs',
          status: 'not shipped',
          canceled: false
          // deliveryAddress: {
          //   country: value.country,
          //   city: value.city,
          //   address: value.adress,
          //   postal: value.zipCode
          // }
        })
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      dispatch(fetchDeleteCart())
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const getOrdersUser = createAsyncThunk(
  'order/getOrdersUser',
  async function (_, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/orders', {
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

export const fetchDeleteOrder = createAsyncThunk(
  'order/fetchDeleteOrder',
  async function (id, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch(`/api/orders/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      dispatch(getOrdersUser())
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  order: {},
  status: null,
  error: null
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearStatusOrder: state => {
      state.status = null
    }
  },
  extraReducers: {
    [fetchMakeOrder.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMakeOrder.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.order = action.payload
    },
    [fetchMakeOrder.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [getOrdersUser.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [getOrdersUser.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.order = action.payload
    },
    [getOrdersUser.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchDeleteOrder.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDeleteOrder.fulfilled]: (state, action) => {
      state.status = 'resolved'
      // state.order = action.payload
    },
    [fetchDeleteOrder.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export const { clearStatusOrder } = orderSlice.actions
export default orderSlice.reducer
