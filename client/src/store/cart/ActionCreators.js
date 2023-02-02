import { createAsyncThunk } from '@reduxjs/toolkit'
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