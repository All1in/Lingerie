import { productSlice } from './productSlice'

const { reducer } = productSlice

describe('products reducer', () => {
  it('should handle the pending action', () => {
    const initialState = {
      products: [],
      status: null,
      error: null
    }
    const nextState = reducer(initialState, {
      type: 'products/fetchProducts/pending'
    })
    expect(nextState).toEqual({
      products: [],
      status: 'loading',
      error: null
    })
  })

  it('should handle the fulfilled action', () => {
    const initialState = {
      products: [],
      status: null,
      error: null
    }
    const nextState = reducer(initialState, {
      type: 'products/fetchProducts/fulfilled',
      payload: [
        { color: 'red', size: 'M' },
        { color: 'blue', size: 'XXL' }
      ]
    })
    expect(nextState).toEqual({
      products: [
        { color: 'red', size: 'M' },
        { color: 'blue', size: 'XXL' }
      ],
      status: 'resolved',
      error: null
    })
  })

  it('should handle the rejected action', () => {
    const initialState = {
      products: [],
      status: null,
      error: null
    }
    const nextState = reducer(initialState, {
      type: 'products/fetchProducts/rejected',
      payload: []
    })
    expect(nextState).toEqual({
      products: [],
      status: 'rejected',
      error: []
    })
  })
})
