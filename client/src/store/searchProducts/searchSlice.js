import { createSlice } from '@reduxjs/toolkit'
import { searchFor } from './ActionCreator'

const initialState = {
  searchValues: [],
  isSearching: false,
  searchError: ''
}

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(searchFor.fulfilled, (state, action) => {
        state.isSearching = false
        state.searchError = ''
        state.searchValues = action.payload
      })
      .addCase(searchFor.pending, state => {
        state.isSearching = true
      })
      .addCase(searchFor.rejected, (state, action) => {
        state.isSearching = false
        state.searchError = action.payload
      })
  }
})

export default SearchSlice.reducer
