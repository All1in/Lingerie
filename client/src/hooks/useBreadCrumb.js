import { useLocation, useNavigate } from 'react-router-dom'

export const useBreadCrumb = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const pathNames = pathname.split('/').filter(routing => routing)
  const reNavigate = () => {
    navigate('/')
  }

  return {
    navigate,
    pathname,
    pathNames,
    reNavigate
  }
}
