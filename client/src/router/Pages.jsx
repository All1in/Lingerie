import PageHome from '../pages/PageHome/PageHome'
import PageCart from '../pages/PageCart/PageCart'
import { PageItem } from '../pages/PageItem/PageItem'
import PageFav from '../pages/PageFav'
import PageCatalog from '../pages/PageCatalog'
import PageCheckout from '../pages/PageCheckout'
import PageSignIn from '../pages/PageSignIn/PageSignIn'
import PageLogin from '../pages/PageLogin'
import PageCabinet from '../pages/PageCabinet'

export const publicRoutes = [
  { path: '/', element: PageHome },
  { path: '/cart', element: PageCart },
  { path: '/catalog/filter', element: PageCatalog },
  { path: '/products/:itemNo', element: PageItem },
  { path: '/fav', element: PageFav },
  { path: '/signin', element: PageSignIn },
  { path: '/login', element: PageLogin },
  { path: '/checkout', element: PageCheckout }
]

export const privateRoutes = [
  ...publicRoutes,
  { path: '/profile', element: PageCabinet }
]
