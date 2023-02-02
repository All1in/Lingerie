import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './store/products/productSlice'
import { login } from './store/tokenWork/tokenWork'
import { fetchGetAllFromCart, fetchUpdateCart } from './store/cart/cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppRouter from './router/AppRouter'
import './styles/App.scss'
import {
  fetchUpdateWishlist,
  fetchWishlist
} from './store/wishlist/ActionCreator'
import { useLocation } from 'react-router-dom'
import { fetchGetUser } from './store/user/userSlice'
import { createBrowserHistory } from 'history'
import { setLocation } from './store/location/location'
import { clearStatusOrder } from './store/order/order'
import UpToTop from './components/UpToTop/UpToTop'

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const locationHook = useLocation()
  const { favItems } = useSelector(state => state.wishlist)
  const { location } = useSelector(state => state.location)
  const history = createBrowserHistory()
  const cardInCart = useSelector(state => state.cart.cart)

  useEffect(() => {
    dispatch(setLocation(history.location.pathname))
    dispatch(fetchProducts())
    if (localStorage.getItem('userToken')) {
      const data = JSON.parse(localStorage.getItem('userToken'))
      dispatch(login(data.token))
    }
    dispatch(clearStatusOrder())
  }, [dispatch, locationHook, history.location.pathname])

  useEffect(() => {
    if (token) {
      dispatch(fetchGetUser())
      dispatch(fetchWishlist())
      dispatch(fetchGetAllFromCart())
    }
  }, [token, dispatch])

  useEffect(() => {
    if (token) {
      dispatch(fetchGetAllFromCart())
      sedtItemsFromLocalStorageCart()
      sedtItemsFromLocalStorageWishlist()
    }
  }, [token, dispatch])

  const sedtItemsFromLocalStorageCart = () => {
    if (JSON.parse(localStorage.getItem('cart'))) {
      const cards = JSON.parse(localStorage.getItem('cart'))
      let arrayOfCards = []
      let result = {}

      if (cardInCart.products) {
        if (cardInCart.products !== 0) {
          cardInCart.products.forEach(item => {
            let step
            for (step = 0; step < item.cartQuantity; step++) {
              cards.push(item.product._id)
            }
          })
        }
      }

      cards.forEach(a => {
        if (result[a] != undefined) ++result[a]
        else result[a] = 1
      })
      for (let key in result) {
        arrayOfCards.push({ product: key, cartQuantity: result[key] })
      }

      dispatch(fetchUpdateCart(arrayOfCards))
      localStorage.removeItem('cart')
    }
  }

  const sedtItemsFromLocalStorageWishlist = () => {
    if (JSON.parse(localStorage.getItem('fav'))) {
      const favs = JSON.parse(localStorage.getItem('fav'))
      if (favItems.products.products) {
        const favsProducts = favItems.products.products

        if (favsProducts.length !== 0) {
          favsProducts.forEach(item => favs.push(item._id))
        }
      }

      const uniqueEl = new Set(favs)
      const uniqueToArray = Array.from(uniqueEl)
      dispatch(fetchUpdateWishlist(uniqueToArray))
      localStorage.removeItem('fav')
    }
  }

  return (
    <>
      <Header />
      <AppRouter />
      {location !== '/login' ? <Footer /> : null}
      <UpToTop />
    </>
  )
}

export default App
