import { createAsyncThunk } from '@reduxjs/toolkit'
import { checkInFav } from '../counter/counter'

export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchCard',
  async function (_, { rejectWithValue, dispatch, getState }) {
    const stateToken = getState().auth.token
    try {
      const response = await fetch(`/api/wishlist`, {
        method: 'GET',
        headers: {
          Authorization: stateToken
        }
      })
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      dispatch(checkInFav(data.products.length))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchUpdateWishlist = createAsyncThunk(
  'wishlist/fetchUpdateWishlist',
  async function (value, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/wishlist', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: stateToken
        },
        body: JSON.stringify({
          products: value
        })
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      dispatch(checkInFav(data.products.length))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addToWishlist = createAsyncThunk(
  'wishlist/addCard',
  async function (id, { rejectWithValue, dispatch, getState }) {
    const stateToken = getState().auth.token
    try {
      const response = await fetch(`/api/wishlist/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: stateToken
        }
      })
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      dispatch(checkInFav(data.products.length))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteItemFromWishlist = createAsyncThunk(
  'wishlist/deleteCard',
  async function (id, { rejectWithValue, dispatch, getState }) {
    const stateToken = getState().auth.token
    try {
      const response = await fetch(`/api/wishlist/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: stateToken
        }
      })
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      dispatch(checkInFav(data.products.length))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
