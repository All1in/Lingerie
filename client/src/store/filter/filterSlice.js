import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchFilterProducts = createAsyncThunk(
  'filters/fetchFilterProducts',
  async function (filtersData, { rejectWithValue }) {
    const {
      categoryFilter,
      colorFilter,
      sizeFilter,
      startPage,
      perPage,
      sortFilter,
      minPrice,
      maxPrice
    } = filtersData

    try {
      const respons = await fetch(
        `/api/products/filter?startPage=${startPage}&perPage=${perPage}${categoryFilter}${colorFilter}${sizeFilter}${sortFilter}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      )

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
  startPage: 1,
  perPage: 6,
  totalPage: 0,
  products: [],
  status: null,
  error: null,
  categories: [],
  color: [],
  size: [],
  minPrice: '0',
  maxPrice: '100',
  sort: { sortName: '', sortProperty: [] }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    settotalPage(state, action) {
      state.totalPage = action.payload
    },
    setperPage(state, action) {
      state.perPage = action.payload
    },
    setstartPage(state, action) {
      state.startPage = action.payload
    },
    setCategory(state, action) {
      state.categories = action.payload
    },
    setColor(state, action) {
      state.color = action.payload
    },
    setSize(state, action) {
      state.size = action.payload
    },
    setSortType(state, action) {
      state.sort = action.payload
    },
    setFilters(state, action) {
      state.startPage = action.payload.startPage
      state.perPage = action.payload.perPage
      state.categories = action.payload.categories
        ? action.payload.categories
        : []
      state.color = action.payload.color ? action.payload.color : []
      state.size = action.payload.size ? action.payload.size : []
      state.sort = action.payload.sort ?? []
      state.minPrice = action.payload.minPrice
      state.maxPrice = action.payload.maxPrice
    },
    setInitialState(state) {
      state = initialState
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload
    }
  },
  extraReducers: {
    [fetchFilterProducts.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchFilterProducts.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.products = action.payload
    },
    [fetchFilterProducts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export const {
  setCategory,
  setColor,
  setSize,
  setSortType,
  setstartPage,
  settotalPage,
  setperPage,
  setFilters,
  setInitialState,
  setMinPrice,
  setMaxPrice
} = filterSlice.actions

export default filterSlice.reducer
