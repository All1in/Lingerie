import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCard = createAsyncThunk(
  'card/fetchCard',
  async function (itemNo, { rejectWithValue }) {
    try {
      const response = await fetch(`/api/products/${itemNo}`)
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
