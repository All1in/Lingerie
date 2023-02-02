import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { checkInCart } from '../counter/counter'

export const fetchCreateCart = createAsyncThunk(
  'cart/fetchCreateCart',
  async function (_, { rejectWithValue, getState }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/cart', {
        method: 'POST',
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

export const fetchUpdateCart = createAsyncThunk(
  'cart/fetchAddToCart',
  async function (value, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: stateToken
        },
        body: JSON.stringify({ products: value })
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchAddToCart = createAsyncThunk(
  'cart/fetchAddToCart',
  async function (id, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch(`/api/cart/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(fetchGetAllFromCart())
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchDeleteFromCart = createAsyncThunk(
  'cart/fetchDeleteFromCart',
  async function (id, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch(`/api/cart/product/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchGetAllFromCart = createAsyncThunk(
  'cart/fetchGetAllFromCart',
  async function (_, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/cart', {
        method: 'GET',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchDeletaCardFromCart = createAsyncThunk(
  'cart/fetchDeletaCardFromCart',
  async function (id, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch(`/api/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchDeleteCart = createAsyncThunk(
  'cart/fetchDeleteCart',
  async function (_, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/cart', {
        method: 'DELETE',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      dispatch(checkInCart(0))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  cart: {},
  status: null,
  error: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [fetchAddToCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchAddToCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchAddToCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchDeleteFromCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDeleteFromCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchDeleteFromCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchGetAllFromCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchGetAllFromCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchGetAllFromCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchDeletaCardFromCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDeletaCardFromCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchDeletaCardFromCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchDeleteCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDeleteCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchDeleteCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchUpdateCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchUpdateCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchUpdateCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export default cartSlice.reducer
