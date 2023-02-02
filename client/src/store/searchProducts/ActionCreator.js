import { createAsyncThunk } from '@reduxjs/toolkit'

export const searchFor = createAsyncThunk(
  'search/searchInInput',
  async function (query, { rejectWithValue }) {
    try {
      const response = await fetch(`/api/products/search`, {
        method: 'POST',
        body: JSON.stringify({
          query: query
        }),
        headers: {
          Connection: 'keep-alive',
          'Accept-Encoding': 'gzip, deflate, br',
          Accept: '*/*',
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const result = await response.json()
      return result
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
