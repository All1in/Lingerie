import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counter'
import locationSlice from './location/location'
import productSlice from './products/productSlice'
import slidesSlice from './slides/slides'
import userSlice from './user/userSlice'
import cardSlice from './card/CardSlice'
import filterSlice from './filter/filterSlice'
import loginSlice from './login/login'
import cartSlice from './cart/cart'
import signInSlice from './signIn/signIn'
import tokenWorkSlice from './tokenWork/tokenWork'
import wishlistSlice from './wishlist/WishlistSlice'
import searchSlice from './searchProducts/searchSlice'
// import trySearchSlice from './trySearch/trySearchSlice'
import orderSlice from './order/order'

const rootReducer = combineReducers({
  user: userSlice,
  products: productSlice,
  slides: slidesSlice,
  location: locationSlice,
  counter: counterSlice,
  card: cardSlice,
  wishlist: wishlistSlice,
  filter: filterSlice,
  auth: tokenWorkSlice,
  signIn: signInSlice,
  login: loginSlice,
  cart: cartSlice,
  search: searchSlice,
  order: orderSlice
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
