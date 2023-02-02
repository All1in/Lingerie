import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function (_, { rejectWithValue }) {
    try {
      const respons = await fetch('/api/products')
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
  products: [],
  status: null,
  error: null
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [fetchProducts.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.products = action.payload
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export default productSlice.reducer
