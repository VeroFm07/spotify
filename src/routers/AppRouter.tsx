import { AuthPrivateRouter } from './AuthPrivateRouter'
import { AuthPublicRouter } from './AuthPublicRouter'
export const AppRouter = () => {
  let isAuthenticated: boolean = true;
  return (

    isAuthenticated
      ? <AuthPrivateRouter />
      : <AuthPublicRouter />

  )
}

export default AppRouter